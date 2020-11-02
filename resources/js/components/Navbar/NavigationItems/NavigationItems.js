import React, { useState } from 'react';

import { useLocation } from 'react-router-dom'

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    const [currentPath] = useState(useLocation().pathname);

    let navbarItems = null;

    if (currentPath == "/") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem hashLink link="Projekt" offset={-100} duration={500}>Das Projekt</NavigationItem>
                <NavigationItem hashLink link="Ablauf" offset={-100} duration={500}>Ablauf</NavigationItem>
                <NavigationItem hashLink link="Team" offset={-100} duration={500}>Unser Team</NavigationItem>
                <NavigationItem hashLink link="FAQ" offset={-100} duration={500}>FAQ</NavigationItem>
                <NavigationItem link="/dashboard/anmelden">Anmelden</NavigationItem>
            </React.Fragment>
        );
    } else if (currentPath == "/dashboard/anmelden" || "/dashboard/anstehend" || "/dashboard/vergangen") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem onlyText>Treffen</NavigationItem>
                <NavigationItem link="/">Abmelden</NavigationItem>
            </React.Fragment>
        );
    } else {
        navbarItems = (
            <React.Fragment>
                <NavigationItem link="/">Startseite</NavigationItem>
                <NavigationItem link="/dashboard/anmelden">Anmelden</NavigationItem>
            </React.Fragment>
        );
    }

    return navbarItems;
}


export default navigationItems;