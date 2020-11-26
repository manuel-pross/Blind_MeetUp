import React, { useState } from 'react';

import { useLocation } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    const { t } = props;
    const [currentPath] = useState(useLocation().pathname);

    let navbarItems = null;

    if (currentPath == "/") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem hashLink link="Projekt" offset={-100} duration={500}>Das Projekt</NavigationItem>
                <NavigationItem hashLink link="Ablauf" offset={-100} duration={500}>Ablauf</NavigationItem>
                <NavigationItem hashLink link="Team" offset={-100} duration={500}>Unser Team</NavigationItem>
                <NavigationItem hashLink link="FAQ" offset={-100} duration={500}>FAQ</NavigationItem>
                <NavigationItem link="login">Anmelden</NavigationItem>
            </React.Fragment>
        );
    } else if (currentPath == "/dashboard") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem onlyText>Treffen</NavigationItem>
                <NavigationItem link="/" signOut setUser={props.setUser}>Abmelden</NavigationItem>
            </React.Fragment>
        );
    } else {
        navbarItems = (
            <React.Fragment>
                <NavigationItem link="/" textWithLink>Startseite</NavigationItem>
                <NavigationItem link="/dashboard">Anmelden</NavigationItem>
            </React.Fragment>
        );
    }

    return navbarItems;
}


export default withTranslation('navbar')(navigationItems);