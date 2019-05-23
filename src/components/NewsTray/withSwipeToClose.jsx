import React from 'react';

function withSwipeToClose(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        
        this.trayRef = null;
        this.setTrayRef = element => { this.trayRef = element };
        this.contentRef = null;
        this.setContentRef = element => { this.contentRef = element };

        this.startDiffY = 0;
        this.diffY = 0;
        this.isGesture = false;
        this.isTargetContent = false;
    }

    componentDidMount() {
        this.trayRef.addEventListener('touchstart', this.handleTouchStart);
        this.trayRef.addEventListener('touchmove', this.handleTouchMove);
        this.trayRef.addEventListener('touchend', this.handleTouchEndOrCancel);
        this.trayRef.addEventListener('touchcancel', this.handleTouchEndOrCancel);
    }

    componentWillUnmount() {
        this.trayRef.removeEventListener('touchstart', this.handleTouchStart);
        this.trayRef.removeEventListener('touchmove', this.handleTouchMove);
        this.trayRef.removeEventListener('touchend', this.handleTouchEndOrCancel);
        this.trayRef.removeEventListener('touchcancel', this.handleTouchEndOrCancel);
    }

    handleTouchStart = (e) => {
        this.isTargetContent = this.contentRef.contains(e.target) ? true : false;

        if (!this.isTargetContent || (this.props.open && this.contentRef.scrollTop <= 0)) {
            this.isGesture = true;
        }

        this.startDiffY = e.touches[0].pageY;
        this.trayRef.style.transition = 'none';
    }

    handleTouchMove = (e) => {
        if (this.isGesture) {
            this.contentRef.ontouchmove = () => { e.preventDefault() };
        } else {
            this.contentRef.ontouchmove = null;
            return;
        }

        if (this.isTargetContent && this.contentRef.scrollTop > 0) {
            this.isGesture = false;
        }

        this.diffY = e.touches[0].pageY - this.startDiffY;

        if (this.diffY > 0) {
            this.trayRef.style.transform = `translateY(${this.diffY}px)`;
        }
    }

    handleTouchEndOrCancel = (e) => {
        const requiredDiffY = this.trayRef.clientHeight / 3;

        if (this.diffY > requiredDiffY) {
            this.props.onClose();
        }

        this.diffY = 0;
        this.trayRef.style.transform = '';
        this.trayRef.style.transition = '';
        this.isGesture = false;
    }
  
    render() {
        return <WrappedComponent
            {...this.props}
            ref={this.ref}
            setTrayRef={this.setTrayRef}
            setContentRef={this.setContentRef}
        />;
      }
    };
  }

export default withSwipeToClose;
