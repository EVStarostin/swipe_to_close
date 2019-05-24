import React from 'react';
import ReactDOM from 'react-dom';
import './NewsTrayOverlay.css';

class NewsTrayOverlay extends React.PureComponent {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
        this.el.className = 'news-tray__overlay-root';
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        const { visible } = this.props;

        return ReactDOM.createPortal(
            <div className={`news-tray__overlay ${visible ? 'news-tray__overlay_visible' : ''}`} />,
            this.el
        );
    }
}

export default NewsTrayOverlay;
