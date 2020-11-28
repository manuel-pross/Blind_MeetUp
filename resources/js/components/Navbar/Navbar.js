import React, { Component } from 'react';

import { animateScroll as scroll } from 'react-scroll'

import Wortmarke_OneLine from '../../../assets/img/Wortmarke_OneLine.png';
import Bildmarke from '../../../assets/img/Bildmarke.png';


import NavigationItems from './NavigationItems/NavigationItems';
import AnimatedSVGItem from './NavigationItems/AnimatedSVGItem/AnimatedSVGItem'

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
        console.log(newPosition)
        if (newPosition > 70) {
            this.setState({ showToolbar: false });
        } else {
            this.setState({ showToolbar: true });
        }
    }

    scrollToTop() {
        scroll.scrollToTop();
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
                {/* <img
                    src={Wortmarke_OneLine}
                    className="navbar__logo1"
                    alt="BlindMeetUp_Logo1"
                    onClick={this.scrollToTop} /> */}
                <AnimatedSVGItem />
                <img
                    src={Bildmarke}
                    className="navbar__logo2"
                    alt="BlindMeetUp_Logo2"
                    onClick={this.scrollToTop} />
                <nav>
                    <ul className="navbar__Items">
                        <NavigationItems setUser={this.props.setUser} user={this.props.user} />
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;