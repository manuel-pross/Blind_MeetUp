import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import cancelSVG from '../../../assets/img/icons/action-cancel.svg';
import { notify } from '../Notifications/Notification';


class JointMeeting extends Component {
   state = {
      btnPressed: false,
      displayBeforeClick: { display: "flex" },
      displayAfterClick: { display: "none" },
      joinBtnClass: "btn btn-cancel",
      jointClass: "jointMeeting",
      wrapperStyle: { flexWrap: "initial" },
      joinBtnStyle: {},
      reasonChoosed: false
   }

   stornoClickHandler = (succMsg, notRegisteredMsg) => {
      if (!this.state.btnPressed) {
         this.setState({
            btnPressed: true,
            wrapperStyle: { flexWrap: "wrap" },
            displayAfterClick: { display: "block" },
            displayBeforeClick: { display: "none" },
         })
      }

      //TODO: Hier Hinzufügen, was passieren soll, sobald geklickt wurde
      if (this.state.btnPressed && this.state.reasonChoosed) {
         axios.put('/api/unregister_user/' + this.props.user.id + '_' + this.props.id)
            .then(() => {
               this.setState({
                  joinBtnClass: "btn btn-cancel--animation",
                  jointClass: "jointMeeting--closed"
               })
               setTimeout(() => {
                  this.props.loadAllMeetings();
               }, 2000);
               notify(succMsg);
            })
            .catch((error) => {
               if (error.response) {
                  notify(notRegisteredMsg);
               }
            });
      }
   }

   reasonBtnHandler = (reason) => {
      this.setState({ reasonChoosed: true })
   }

   exitClickHandler = () => {
      if (this.state.btnPressed) {
         this.setState({
            btnPressed: false,
            joinBtnClass: "btn btn-cancel",
            wrapperStyle: { flexWrap: "initial" },
            displayAfterClick: { display: "none" },
            displayBeforeClick: { display: "flex" },
            reasonChoosed: false
         })
      }
   }
   //TODO: richtiges Image hinzufügen 
   render() {
      const { t } = this.props;

      return (
         <div style={this.state.wrapperStyle} className={this.state.jointClass}>
            <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
            <div style={this.state.displayAfterClick} className="jointMeeting__afterClickedWrapper">
               <p className="jointMeeting__afterTitle">{t("cancelReasonTitle")}</p>
               <div className="jointMeeting__afterContentWrapper">
                  <div className="jointMeeting__clickedBtnWrapper__block">
                     <button onClick={() => { this.reasonBtnHandler("time") }} className="btn btn-jointMeeting">{t("btnTime")}</button>
                     <button onClick={() => { this.reasonBtnHandler("interest") }} className="btn btn-jointMeeting">{t("btnInterest")}</button>
                  </div>
                  <div className="jointMeeting__clickedBtnWrapper__block">
                     <button onClick={() => { this.reasonBtnHandler("accidantlly") }} className="btn btn-jointMeeting">{t("btnAccidantlly")}</button>
                     <button onClick={() => { this.reasonBtnHandler("other") }} className="btn btn-jointMeeting">{t("btnOther")}</button>
                  </div>
               </div>
               <div className="jointMeeting__btnWrapper">
                  <button onClick={() => this.stornoClickHandler(t("SuccessfullyRegistered"), t("notRegistered"))} className={this.state.joinBtnClass}>
                     <span className="jointMeeting__btnSpan">
                        <span className="jointMeeting__btnDesc">
                           {t("btnCancel")}
                        </span>
                        <img className="jointMeeting__cancelSvg" src={cancelSVG} alt="cancelSVG" ></img>
                     </span>
                  </button>
               </div>
            </div>
            <div className="jointMeeting__beforeClickedWrapper" style={this.state.displayBeforeClick}>
               <div className="jointMeeting__imgWrapper">
                  <img className="jointMeeting__img" src={this.props.imgLink} />
               </div>
               <div className="jointMeeting__contentWrapper">
                  <div className="jointMeeting__contentTopWrapper">
                     <p className="jointMeeting__daysLeft">{this.props.leftDays + t("daysToMeeting")}</p>
                     <div className="jointMeeting__topWrapper">
                        <p className="jointMeeting__data">{this.props.day}</p>
                        <p className="jointMeeting__data jointMeeting__data--date">{this.props.date + ", "} {this.props.time}</p>
                     </div>
                     <div className="jointMeeting__dataWrapperLocation">
                        <p className="jointMeeting__data jointMeeting__data--place">{this.props.place}</p>
                     </div>
                  </div>
                  <button onClick={this.stornoClickHandler} className={this.state.joinBtnClass}>
                     <span className="jointMeeting__btnSpan">
                        <span className="jointMeeting__btnDesc">
                           {t("btnCancel")}
                        </span>
                        <img className="jointMeeting__cancelSvg" src={cancelSVG} alt="cancelSVG" ></img>
                     </span>
                  </button>
               </div>
            </div>
         </div>
      );
   };
};

export default withTranslation('meetUps')(JointMeeting);