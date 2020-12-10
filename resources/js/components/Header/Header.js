import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import headerImage from '../../../assets/img/placeholder/landing-page-background.jpg'
import { Link } from 'react-router-dom';
import NavigationItem from '../Navbar/NavigationItems/NavigationItem/NavigationItem';

class Header extends Component {
   render() {
      const { t } = this.props;
      return (
         <div className="header position-relative">
            <img className="header__image" src={headerImage} alt="headerImage" />
            <div className="header__wrapper">
               <h1 className="header__title">{t("title")}</h1>
               <p className="header__p">{t("desc")}</p>
               <div className="header__btn__wrapper">
                  <NavigationItem link="login">{t("btnJoin")}</NavigationItem>
                  <button className="header__secondBtn btn btn-secondary">{t("btnMore")}</button>
               </div>
            </div>
         </div>
      );
   };
};

export default withTranslation('header')(Header);