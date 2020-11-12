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
                <NavigationItem hashLink link="Projekt" offset={-100} duration={500}>{t("project")}</NavigationItem>
                <NavigationItem hashLink link="Ablauf" offset={-100} duration={500}>{t("procedure")}</NavigationItem>
                <NavigationItem hashLink link="Team" offset={-100} duration={500}>{t("team")}</NavigationItem>
                <NavigationItem hashLink link="FAQ" offset={-100} duration={500}>{t("faq")}</NavigationItem>
                <NavigationItem link="/dashboard">{t("logIn")}</NavigationItem>
            </React.Fragment>
        );
    } else if (currentPath == "/dashboard") {
        navbarItems = (
            <React.Fragment>
                <NavigationItem onlyText>{t("meeting")}</NavigationItem>
                <NavigationItem link="/">{t("logOut")}</NavigationItem>
            </React.Fragment>
        );
    } else {
        navbarItems = (
            <React.Fragment>
                <NavigationItem link="/">{t("homePage")}</NavigationItem>
                <NavigationItem link="/dashboard">{t("logIn")}</NavigationItem>
            </React.Fragment>
        );
    }

    return navbarItems;
}


export default withTranslation('navbar')(navigationItems);