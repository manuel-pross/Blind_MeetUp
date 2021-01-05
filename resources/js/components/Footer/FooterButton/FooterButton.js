import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Footer extends Component {

    handleLogout = () => {
        localStorage.removeItem("token");
        this.props.setUser(null);
    }

    render() {

        let button = null;

        if (this.props.href) {
            button = (
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-second mr-100 mb-xs-100 footer__button">{this.props.children}</button>
                </a >
            );
        } else if (this.props.signout) {
            button = (
                <Link to={this.props.link} onClick={this.handleLogout}><button className="btn btn-second mr-100 mb-xs-100 footer__button">{this.props.children}</button></Link>
            );
        }
        else {
            button = (
                <Link to={this.props.link}><button className="btn btn-second mr-100 mb-xs-100 footer__button">{this.props.children}</button></Link>
            );
        }

        return button;
    }
}

export default Footer;