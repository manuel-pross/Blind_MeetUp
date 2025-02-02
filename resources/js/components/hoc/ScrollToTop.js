import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const dontScrollIntoViewOnPaths = ["/dashboard/vergangen", "/dashboard/anstehend", "/dashboard/anmelden"];


class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {
        let { pathname } = location;
        if (dontScrollIntoViewOnPaths.indexOf(pathname) == -1) {
            if (this.props.location !== prevProps.location) {
                window.scrollTo(0, 0)
            }
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);