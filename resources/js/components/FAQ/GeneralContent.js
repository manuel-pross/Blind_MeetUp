import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';


class GeneralContent extends Component {

   render() {
      const { t } = this.props;
      const contentStyle = this.props.displayContent ? 'block' : 'none';

      return (
         <div className="FAQ__content" style={{ display: contentStyle }}>
            <h4 className="FAQ__content__title">{t('General.title1')}</h4>
            <p className="FAQ__content__text">{t('General.content1')}</p>
            <h4 className="FAQ__content__title">{t('General.title2')}</h4>
            <p className="FAQ__content__text">{t('General.content2')}</p>
            <h4 className="FAQ__content__title">{t('General.title3')}</h4>
            <p className="FAQ__content__text">{t('General.content3')}</p>
            <Collapsible triggerClassName="FAQ__trigger" triggerOpenedClassName="FAQ__trigger--collapsed" trigger={t('buttonDesc.collapsed')}>
               <h4 className="FAQ__content__title">{t('General.title4')}</h4>
               <p className="FAQ__content__text">{t('General.content4')}</p>
               <h4 className="FAQ__content__title">{t('General.title5')}</h4>
               <p className="FAQ__content__text">{t('General.content5')}</p>
               <h4 className="FAQ__content__title">{t('General.title6')}</h4>
               <p className="FAQ__content__text">{t('General.content6')}</p>
            </Collapsible>
         </div>
      );
   };
};


export default withTranslation('faq')(GeneralContent);