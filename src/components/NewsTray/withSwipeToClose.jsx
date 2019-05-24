import React from 'react';

function withSwipeToClose(WrappedComponent) {
    class withSwipeToClose extends React.Component {
            constructor(props) {
            super(props);
            
            this.ref = null;
            this.setRef = element => { this.ref = element };
            this.scrollableRef = null;
            this.setScrollableRef = element => { this.scrollableRef = element };

            this.startDiffY = 0;
            this.diffY = 0;
            this.isSwipe = false;
            this.isTargetContent = false;
        }

        componentDidMount() {
            this.ref.addEventListener('touchstart', this.handleTouchStart);
            this.ref.addEventListener('touchmove', this.handleTouchMove);
            this.ref.addEventListener('touchend', this.handleTouchEndOrCancel);
            this.ref.addEventListener('touchcancel', this.handleTouchEndOrCancel);
        }

        componentWillUnmount() {
            this.ref.removeEventListener('touchstart', this.handleTouchStart);
            this.ref.removeEventListener('touchmove', this.handleTouchMove);
            this.ref.removeEventListener('touchend', this.handleTouchEndOrCancel);
            this.ref.removeEventListener('touchcancel', this.handleTouchEndOrCancel);
        }

        handleTouchStart = (e) => {
            this.isTargetScrollable = this.scrollableRef.contains(e.target) ? true : false;

            this.startDiffY = e.touches[0].pageY;
            this.ref.style.transition = 'none';

            if (!this.isTargetScrollable || (this.isTargetScrollable && this.scrollableRef.scrollTop === 0)) {
                this.isSwipe = true;
            }
        }

        handleTouchMove = (e) => {
            const pageY = e.touches[0].pageY;
            this.diffY = pageY - this.startDiffY;

            this.isSwipe = this.isSwipe && this.diffY > 0 ? true : false;

            if (this.isSwipe) {
                this.scrollableRef.addEventListener('touchmove', this.preventDefault);
                this.ref.style.transform = `translateY(${this.diffY}px)`;
            } else {
                this.startDiffY = pageY ;
                return;
            }
        }

        handleTouchEndOrCancel = (e) => {
            const requiredDiffY = this.ref.clientHeight / 3;

            if (this.diffY > requiredDiffY) {
                this.props.onClose();
            }

            this.isSwipe = false;
            this.diffY = 0;
            this.ref.style.transform = '';
            this.ref.style.transition = '';
            this.scrollableRef.removeEventListener('touchmove', this.preventDefault);
        }

        preventDefault = (e) => {
            if (e.cancelable) {
                e.preventDefault();
            }
        }

        render() {
            return <WrappedComponent
                {...this.props}
                setRef={this.setRef}
                setScrollableRef={this.setScrollableRef}
            />;
        }
    }

    withSwipeToClose.displayName = `withSwipeToClose(${getDisplayName(WrappedComponent)})`;
    
    return withSwipeToClose;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withSwipeToClose;
