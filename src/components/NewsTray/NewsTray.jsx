import React from 'react';
import withSwipeToClose from './withSwipeToClose';
import './NewsTray.css';

class NewsTrayBase extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { open: false };

        this.trayRef = React.createRef();
        this.contentRef = React.createRef();
        this.containerRef = React.createRef();
        this.startDiff = 0;
    }

    componentDidMount() {
        if (this.props.open) {
            this.open();
        }
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

    render() {
        const { children, renderHeader, onClose } = this.props;
        const { open } = this.state;

        const mods = { open, with_header: false };

        if (renderHeader) {
            mods.with_header = true;
        }

        return (
            <div
                className={`news-tray ${open ? 'news-tray_mode_open' : 'news-tray_mode_closed'} news-tray_with_header`}
                ref={this.props.setTrayRef}
            >
                <div className="news-tray__overlay" />
                <div className="news-tray__container">
                    {renderHeader && renderHeader('news-tray__header')}
                    <button
                        className="news-tray__close"
                        onClick={onClose}
                    />
                    <div className="news-tray__content" ref={this.props.setContentRef}>
                        {children}
                    </div>
                </div>
            </div>
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
        this.pinBody();
    }

    afterClose() {
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
        onClose: () => null,
        // ref: React.createRef()
    };
}

// export default NewsTray;
export default withSwipeToClose(NewsTrayBase);