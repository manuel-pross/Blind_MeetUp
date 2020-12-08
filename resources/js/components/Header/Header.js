import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import headerImage from '../../../assets/img/placeholder/landing-page-background.jpg'


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
                  <button className="header__firstBtn btn btn-primary">{t("btnMore")}</button>
                  <button className="btn btn-secondary">{t("btnJoin")}</button>
               </div>
            </div>
         </div>
      );
   };
};

export default withTranslation('header')(Header);