import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <React.Fragment>
            <NavigationItem hashLink link="Projekt" offset={-56} duration={500}>Das Projekt</NavigationItem>
            <NavigationItem hashLink link="Ablauf" offset={-56} duration={500}>Ablauf</NavigationItem>
            <NavigationItem hashLink link="Team" offset={-56} duration={500}>Unser Team</NavigationItem>
            <NavigationItem hashLink link="FAQ" offset={-56} duration={500}>FAQ</NavigationItem>
        <NavigationItem link="https://www.hs-furtwangen.de/">Anmelden</NavigationItem>

    </React.Fragment>
);


export default navigationItems;