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
                <NavigationItem hashLink link="Projekt" offset={-100} duration={500}>{t("project")}</NavigationItem>
                <NavigationItem hashLink link="Ablauf" offset={-100} duration={500}>{t("procedure")}</NavigationItem>
                <NavigationItem hashLink link="Team" offset={-100} duration={500}>{t("team")}</NavigationItem>
                <NavigationItem hashLink link="FAQ" offset={-100} duration={500}>{t("faq")}</NavigationItem>
                <NavigationItem link="login">{t("logIn")}</NavigationItem>
            </React.Fragment>
        );
        // Für Dashboard wenn angemeldet
    } else if (currentPath == "/dashboard") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem onlyText>{t("meeting")}</NavigationItem>
                <NavigationItem link="/" signOut setUser={props.setUser}>{t("logOut")}</NavigationItem>
            </React.Fragment>
        );
        // Für Impressum, Datenschutz,... wenn angemeldet
    } else if (props.user != undefined) {
        navbarItems = (
            <React.Fragment>
                <NavigationItem link="/dashboard/anmelden" textWithLink>Dashboard</NavigationItem>
                <NavigationItem link="/" signOut setUser={props.setUser}>{t("logOut")}</NavigationItem>
            </React.Fragment>
        );
        // Für Impressum, Datenschutz,... wenn abgemeldet
    } else {
        navbarItems = (
            <React.Fragment>
                <NavigationItem link="/" textWithLink>{t("homePage")}</NavigationItem>
                <NavigationItem link="/dashboard">{t("logOut")}</NavigationItem>
            </React.Fragment>
        );
    }
    return navbarItems;
}


export default withTranslation('navbar')(navigationItems);