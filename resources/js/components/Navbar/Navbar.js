import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';


class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <Logo />
                <nav>
                    <ul className="navigation-Items">
                        <NavigationItems />
                    </ul>
                </nav>
            </header>

        );
    }
}

export default Navbar;