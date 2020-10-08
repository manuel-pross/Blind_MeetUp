import React, { Component } from 'react';

import { animateScroll as scroll} from 'react-scroll'
 


import NavigationItems from './NavigationItems/NavigationItems';

class Navbar extends Component {

    scrollToTop() {
        scroll.scrollToTop();
    }

    render() {
        return (
            <header className="navbar">
                <img
                    className="navbar__logo"
                    alt="BlindMeetUp_Logo"
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