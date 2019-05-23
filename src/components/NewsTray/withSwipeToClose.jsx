import React from 'react';

function withSwipeToClose(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        
        this.trayRef = null;
        this.setTrayRef = element => { this.trayRef = element };
        this.containerRef = null;
        this.setContainerRef = element => { this.containerRef = element };
        this.contentRef = null;
        this.setContentRef = element => { this.contentRef = element };

        this.startDiffY = 0;
        this.diffY = 0;
        this.isGesture = false;
        this.isTargetContent = false;
    }

    componentDidMount() {
        this.containerRef.addEventListener('touchstart', this.handleTouchStart);
        this.containerRef.addEventListener('touchmove', this.handleTouchMove);
        this.containerRef.addEventListener('touchend', this.handleTouchEndOrCancel);
        this.containerRef.addEventListener('touchcancel', this.handleTouchEndOrCancel);
    }

    componentWillUnmount() {
        this.containerRef.removeEventListener('touchstart', this.handleTouchStart);
        this.containerRef.removeEventListener('touchmove', this.handleTouchMove);
        this.containerRef.removeEventListener('touchend', this.handleTouchEndOrCancel);
        this.containerRef.removeEventListener('touchcancel', this.handleTouchEndOrCancel);
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

        this.trayRef.style.transform = '';
        this.trayRef.style.transition = '';
        this.isGesture = false;

        if (this.diffY > requiredDiffY) {
            this.props.onClose();
        }
    }
  
    render() {
        return <WrappedComponent
            {...this.props}
            ref={this.ref}
            setTrayRef={this.setTrayRef}
            setContainerRef={this.setContainerRef}
            setContentRef={this.setContentRef}
        />;
      }
    };
  }

export default withSwipeToClose;
