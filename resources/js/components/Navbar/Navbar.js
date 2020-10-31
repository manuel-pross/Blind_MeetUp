import React, { Component } from 'react';

import { animateScroll as scroll } from 'react-scroll'

import Wortmarke_OneLine from '../../../assets/img/Wortmarke_OneLine.png';
import Bildmarke from '../../../assets/img/Bildmarke.png';


import NavigationItems from './NavigationItems/NavigationItems';
import AnimatedSVGItem from './NavigationItems/AnimatedSVGItem/AnimatedSVGItem'

class Navbar extends Component {

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <header className="navbar">
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
                        <NavigationItems />
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;