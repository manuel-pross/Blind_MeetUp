import React, { Component } from 'react';
import ee from 'event-emitter';

const emitter = new ee();

export const notify = (msg) => {
    emitter.emit('notification', msg);
}

class Notification extends Component {
    timeout = null;
    state = {
        show: false,
        msg: ''
    }
    componentDidMount() {
        emitter.on('notification', (msg) => {
            this.onShow(msg);
        });
    }

    onShow = (msg) => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState({ show: false }, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(msg);
                }, 500);
            });
        } else {
            this.showNotification(msg);
        }
    }

    showNotification = (msg) => {
        this.setState({
            show: true,
            msg: msg,
        }, () => {
            this.timeout = setTimeout(() => {
                this.setState({
                    show: false
                })
            }, 5000)
        });
    }

    render() {

        let classes = "notification "
        if (this.state.show) {
            classes = classes + "notification__show";
        } else {
            classes = classes + "notification__close";
        }
        return <div className={classes}>{this.state.msg}</div>;
    }
}


export default Notification;