import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import LoginContent from './LoginContent';
import GeneralContent from './GeneralContent';
import MeetingContent from './MeetingContent';
import OtherContent from './OtherContent';

class FAQ extends Component {

   state = {
      loginContent: false,
      generalContent: false,
      meetingContent: false,
      otherContent: false
   }

   render() {
      const { t } = this.props;
      const categories = [t('categories.cat1'), t('categories.cat2'), t('categories.cat3'), t('categories.cat4')];

      const catHandleClick = (i) => {
         hideContent();
         switch (i) {
            case 0:
               this.setState({
                  loginContent: true
               })
               break;
            case 1:
               this.setState({
                  generalContent: true
               })
               break;
            case 2:
               this.setState({
                  meetingContent: true
               })
               break;
            case 3:
               this.setState({
                  otherContent: true
               })
               break;
         }
      }

      const hideContent = () => {
         this.setState({
            loginContent: false,
            generalContent: false,
            meetingContent: false,
            otherContent: false
         })
      }

      return (

         <div className="FAQ" >
            <div className="container">
               <h2 className="FAQ__title">{t("title")}</h2>
               <div className="FAQ__wrapper">
                  <div className="FAQ__catWrapper">
                     {categories.map((e, i) => {
                        return (
                           <button key={i} onClick={() => catHandleClick(i)} className="btn btn-tertiary FAQ__btn">{e}</button>
                        )
                     })}
                  </div>
                  <div>
                     <h4 className="FAQ__desc">{t("text")}</h4>
                     <LoginContent displayContent={this.state.loginContent} />
                     <GeneralContent displayContent={this.state.generalContent} />
                     <MeetingContent displayContent={this.state.meetingContent} />
                     <OtherContent displayContent={this.state.otherContent} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withTranslation('faq')(FAQ);