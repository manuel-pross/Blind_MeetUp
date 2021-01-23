import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';


class LoginContent extends Component {

   render() {
      const { t } = this.props;
      const contentStyle = this.props.displayContent ? 'block' : 'none';

      return (
         <div className="FAQ__content" style={{ display: contentStyle }}>
            <h4 className="FAQ__content__title">{t('Login.title1')}</h4>
            <p className="FAQ__content__text">{t('Login.content1')}</p>
            <h4 className="FAQ__content__title">{t('Login.title2')}</h4>
            <p className="FAQ__content__text">{t('Login.content2')}</p>
            <h4 className="FAQ__content__title">{t('Login.title3')}</h4>
            <p className="FAQ__content__text">{t('Login.content3')}</p>
            <Collapsible triggerClassName="FAQ__trigger" triggerOpenedClassName="FAQ__trigger--collapsed" trigger={t('buttonDesc.collapsed')}>
               <h4 className="FAQ__content__title">{t('Login.title4')}</h4>
               <p className="FAQ__content__text">{t('Login.content4')}</p>
            </Collapsible>
         </div>
      );
   };
};


export default withTranslation('faq')(LoginContent);