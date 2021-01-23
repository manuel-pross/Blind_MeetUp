import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';
import Collapsible from 'react-collapsible';


class MeetingContent extends Component {
   
   render() {
      const { t } = this.props;
      const contentStyle = this.props.displayContent ? 'block' : 'none';

      return (
         <div className="FAQ__content" style={{ display: contentStyle }}>
            <h4 className="FAQ__content__title">{t('Meeting.title1')}</h4>
            <p className="FAQ__content__text">{t('Meeting.content1')}</p>
            <h4 className="FAQ__content__title">{t('Meeting.title2')}</h4>
            <p className="FAQ__content__text">{t('Meeting.content2')}</p>
            <h4 className="FAQ__content__title">{t('Meeting.title3')}</h4>
            <p className="FAQ__content__text">{t('Meeting.content3')}</p>
            <Collapsible triggerClassName="FAQ__trigger" triggerOpenedClassName="FAQ__trigger--collapsed" trigger={t('buttonDesc.collapsed')}>
               <h4 className="FAQ__content__title">{t('Meeting.title4')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content4')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title5')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content5')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title6')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content6')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title7')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content7')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title8')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content8')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title9')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content9')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title10')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content10')}</p>
               <h4 className="FAQ__content__title">{t('Meeting.title11')}</h4>
               <p className="FAQ__content__text">{t('Meeting.content11')}</p>
            </Collapsible>
         </div>
      );
   };
};


export default withTranslation('faq')(MeetingContent);