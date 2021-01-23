import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import LoginContent from './LoginContent';
import MeetingContent from './MeetingContent';
import ProfilContent from './ProfilContent';
import CancelationContent from './CancelationContent';

class FAQ extends Component {

   state = {
      loginContent: true,
      meetingContent: false,
      profilContent: false,
      cancelationContent: false,
      isActive: false
   }

   componentDidMount() {
      document.querySelector(".FAQ__btn--first").focus();
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
                  meetingContent: true
               })
               break;
            case 2:
               this.setState({
                  profilContent: true
               })
               break;
            case 3:
               this.setState({
                  cancelationContent: true
               })
               break;
         }
      }

      const hideContent = () => {
         this.setState({
            loginContent: false,
            meetingContent: false,
            profilContent: false,
            cancelationContent: false
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
                           <button key={i} onClick={() => catHandleClick(i)} className={i == 0 ? "btn btn-tertiary FAQ__btn FAQ__btn--first" : "btn btn-tertiary FAQ__btn"}>{e}</button>
                        )
                     })}
                  </div>
                  <div>
                     <h4 className="FAQ__desc">{t("text")}</h4>
                     <LoginContent displayContent={this.state.loginContent} />
                     <MeetingContent displayContent={this.state.meetingContent} />
                     <ProfilContent displayContent={this.state.profilContent} />
                     <CancelationContent displayContent={this.state.cancelationContent} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withTranslation('faq')(FAQ);