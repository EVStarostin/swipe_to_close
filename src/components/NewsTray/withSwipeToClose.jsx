import React from 'react';

function withSwipeToClose(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        
        this.ref = null;
        this.setRef = element => { this.ref = element };
        this.scrollableRef = null;
        this.setScrollableRef = element => { this.scrollableRef = element };

        this.startDiffY = 0;
        this.diffY = 0;
        this.isGesture = false;
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
    }

    handleTouchMove = (e) => {
        this.diffY = e.touches[0].pageY - this.startDiffY;

        if (
            this.diffY > 0 &&
            (!this.isTargetScrollable || 
            (this.isTargetScrollable && this.scrollableRef.scrollTop === 0))
        ) {
            this.isGesture = true;
        } else {
            this.isGesture = false;
        };

        if (this.isGesture) {
            this.scrollableRef.addEventListener('touchmove', this.preventDefault);
        } else {
            this.startDiffY = e.touches[0].pageY ;
            return;
        }

        if (this.diffY > 0) {
            this.ref.style.transform = `translateY(${this.diffY}px)`;
        }
    }

    handleTouchEndOrCancel = (e) => {
        const requiredDiffY = this.ref.clientHeight / 3;

        if (this.diffY > requiredDiffY) {
            this.props.onClose();
        }

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
    };
  }

export default withSwipeToClose;
