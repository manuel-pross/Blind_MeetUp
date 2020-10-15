import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <React.Fragment>
        <NavigationItem hashLink link="Projekt" offset={-85} duration={500}>Das Projekt</NavigationItem>
        <NavigationItem hashLink link="Ablauf" offset={-85} duration={500}>Ablauf</NavigationItem>
        <NavigationItem hashLink link="Team" offset={-85} duration={500}>Unser Team</NavigationItem>
        <NavigationItem hashLink link="FAQ" offset={-85} duration={500}>FAQ</NavigationItem>
        <NavigationItem link="/dashboard">Anmelden</NavigationItem>
    </React.Fragment>
);


export default navigationItems;