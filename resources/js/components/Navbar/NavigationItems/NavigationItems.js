import React, { useState } from 'react';

import { useLocation } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    const { t } = props;
    const [currentPath] = useState(useLocation().pathname);

    let navbarItems = null;
    // Für LandingPage 
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
        // Für Dashboard wenn angemeldet
    } else if (currentPath == "/dashboard") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem onlyText>Treffen</NavigationItem>
                <NavigationItem link="/" signOut setUser={props.setUser}>Abmelden</NavigationItem>
            </React.Fragment>
        );
        // Für Impressum, Datenschutz,... wenn angemeldet
    } else if (props.user != undefined) {
        navbarItems = (
            <React.Fragment>
                <NavigationItem link="/dashboard" textWithLink>Dashboard</NavigationItem>
                <NavigationItem link="/" signOut setUser={props.setUser}>Abmelden</NavigationItem>
            </React.Fragment>
        );
        // Für Impressum, Datenschutz,... wenn abgemeldet
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