import React from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import withSwipeToClose from './withSwipeToClose';
import NewsTrayOverlay from './NewsTrayOverlay';
import './NewsTray.css';

class NewsTray extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.ref = React.createRef();
        this.scrollableRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.open) {
            this.open();
        }

        this.props.setRef(this.ref.current);
        this.props.setScrollableRef(this.scrollableRef.current);
    }

    componentDidUpdate(prevProps) {
        if (this.props.open === prevProps.open) {
            return;
        }

        if (this.props.open) {
            this.open();
        } else {
            this.close();
        }
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
      }

    render() {
        const { children, renderHeader, onClose } = this.props;
        const { open } = this.state;

        const cls = 'news-tray';
        const clsOpen = ' news-tray_open';
        const clsWithHeader = ' news-tray_with_header';

        let className = cls + (open ? clsOpen : '') + (renderHeader ? clsWithHeader : '');

        return (
            <>
                <div className={className} ref={this.ref}>
                    {renderHeader && renderHeader('news-tray__header')}
                    <button className="news-tray__close" onClick={onClose} />
                    <div className="news-tray__content" ref={this.scrollableRef}>
                        {children}
                    </div>
                </div>

                <NewsTrayOverlay visible={open} />
            </>
        );
    }

    open() {
        this.beforeOpen();
        this.setState({ open: true });
    }

    close = () => {
        this.setState({ open: false });
        this.afterClose();
    }

    beforeOpen() {
        disableBodyScroll(this.scrollableRef.current);
        this.pinBody();
    }

    afterClose() {
        enableBodyScroll(this.scrollableRef.current);
        this.unPinBody();
    }

    pinBody() {
        this.pageScrollTop = window.pageYOffset;
        document.body.style.top = `${-this.pageScrollTop}px`;
        document.body.classList.add('page_tray_open');
    }

    unPinBody = () => {
        document.body.style.top = '';
        document.body.classList.remove('page_tray_open');
        window.scrollTo(0, this.pageScrollTop);
    }

    static defaultProps = {
        deviceInfo: {
            OSFamily: ''
        },
        onClose: () => null
    };
}

export default withSwipeToClose(NewsTray);