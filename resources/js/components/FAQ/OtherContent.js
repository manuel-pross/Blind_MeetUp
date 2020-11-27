import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';


class LoginContent extends Component {

   render() {
      const { t } = this.props;
      const contentStyle = this.props.displayContent ? 'block' : 'none';

      return (
         <div className="FAQ__content" style={{ display: contentStyle }}>
            <h4 className="FAQ__content__title">{t('Other.title1')}</h4>
            <p className="FAQ__content__text">{t('Other.content1')}</p>
            <h4 className="FAQ__content__title">{t('Other.title2')}</h4>
            <p className="FAQ__content__text">{t('Other.content2')}</p>
            <h4 className="FAQ__content__title">{t('Other.title3')}</h4>
            <p className="FAQ__content__text">{t('Other.content3')}</p>
         </div>
      );
   };
};


export default withTranslation('faq')(LoginContent);