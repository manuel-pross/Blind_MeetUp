import React, { Component } from 'react';

import Wortmarke_OneLine from '../../../assets/img/Wortmarke_OneLine.png';
import Bildmarke from '../../../assets/img/Bildmarke.png';
import { withRouter } from 'react-router-dom';

import NavigationItems from './NavigationItems/NavigationItems';
import AnimatedSVGItem from './NavigationItems/AnimatedSVGItem/AnimatedSVGItem';

class Navbar extends Component {
    state = {
        showToolbar: true,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let newPosition = window.scrollY;
        if (newPosition > 70) {
            this.setState({ showToolbar: false });
        } else {
            this.setState({ showToolbar: true });
        }
    }

    toLandingPage = () => {
        window.scroll(0, 0);
        if (this.props.user) {
            this.props.history.push("/dashboard/anmelden");
        } else {
            this.props.history.push("/");
        }
    }

    render() {
        let classesForScrollHide = "navbar";
        if (this.state.showToolbar) {
            classesForScrollHide = classesForScrollHide + " " + "show";
        } else {
            classesForScrollHide = classesForScrollHide + " " + "hide";
        }

        return (
            <header className={classesForScrollHide}>
                <AnimatedSVGItem user={this.props.user} toLandingPage={this.toLandingPage} />
                <img
                    src={Bildmarke}
                    className="navbar__logo2"
                    alt="BlindMeetUp_Logo2"
                    onClick={this.toLandingPage}
                />
                <nav>
                    <ul className="navbar__Items">
                        <NavigationItems setUser={this.props.setUser} user={this.props.user} />
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Navbar);