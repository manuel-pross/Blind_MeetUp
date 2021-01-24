import React, { Component } from 'react';
import ImageText from './ImageText'

import { withTranslation } from 'react-i18next';

import firstImage from '../../../assets/img/teaser-1.jpg'
import secondImage from '../../../assets/img/teaser-2.jpg'

class AboutProject extends Component {
   render() {
      const { t } = this.props;
      return (
         <div className="container mb-300">
            <h2 className="aboutProject__title">{t("title")}</h2>
            <ImageText alignment img={firstImage} headerText={t("headerText")} text={t("firstText")} />
            <ImageText alignment={false} img={secondImage} headerText={t("headerText")} text={t("secText")} />
         </div>

      );
   };
};

export default withTranslation('aboutProject')(AboutProject);