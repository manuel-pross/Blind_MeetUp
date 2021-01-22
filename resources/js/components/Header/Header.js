import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import headerImage from '../../../assets/img/placeholder/landing-page-background.jpg'
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

class Header extends Component {
   render() {
      const { t } = this.props;
      return (
         <div className="header">
            <div className="header__wrapper">
               <h1 className="header__title">{t("title")}</h1>
               <p className="header__p">{t("desc")}</p>
               <div className="header__btn__wrapper">
                  <Link className="btn btn-primary" to={"/login"}>
                     {t("btnJoin")}
                  </Link>
                  <LinkScroll
                     className="btn btn-second header__secondBtn"
                     style={{ cursor: 'pointer' }}
                     to={"Projekt"}
                     smooth={true}
                     duration={500}
                     offset={-100}
                     spy={true}
                  >
                     {t("btnMore")}
                  </LinkScroll>
               </div>
            </div>
         </div>
      );
   };
};

export default withTranslation('header')(Header);