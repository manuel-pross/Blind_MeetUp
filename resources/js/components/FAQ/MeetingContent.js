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
         </div>
      );
   };
};


export default withTranslation('faq')(MeetingContent);