import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

class CancelationContent extends Component {

   render() {
      const { t } = this.props;
      const contentStyle = this.props.displayContent ? 'block' : 'none';

      return (
         <div className="FAQ__content" style={{ display: contentStyle }}>
            <h4 className="FAQ__content__title">{t('Cancelation.title1')}</h4>
            <p className="FAQ__content__text">{t('Cancelation.content1')}</p>
            <h4 className="FAQ__content__title">{t('Cancelation.title2')}</h4>
            <p className="FAQ__content__text">{t('Cancelation.content2')}</p>
         </div>
      );
   };
};

export default withTranslation('faq')(CancelationContent);