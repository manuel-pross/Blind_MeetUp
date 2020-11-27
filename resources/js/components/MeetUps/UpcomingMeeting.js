import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

class UpcomingMeeting extends Component {
   state = {
      btnPressed: false,
      displayBeforeClick: { display: "block" },
      displayAfterClick: { display: "none" },
      joinBtnSpanClass: "btn btn-meeting",
      meetingClass: "meeting",
   }

   joinClickHandler = () => {
      if (!this.state.btnPressed) {
         this.setState({ btnPressed: true, displayAfterClick: { display: "block" }, displayBeforeClick: { display: "none" } })
      }
      if (this.state.btnPressed) {
         this.setState({ joinBtnSpanClass: "btn btn-meeting--animation", meetingClass: "meeting--closed" })
         setTimeout(() => {
            document.querySelector(".meeting--closed").parentElement.parentElement.remove();
         }, 2500);

      }
   }

   acceptBtn = () => {
      this.setState({ accepted: true })
   }

   exitClickHandler = () => {
      if (this.state.btnPressed) {
         this.setState({ btnPressed: false, displayAfterClick: { display: "none" }, displayBeforeClick: { display: "block" } })
      }
   }

   render() {
      const { t } = this.props;

      return (
         <div key={this.props.key} className={this.state.meetingClass}>
            <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
            <div style={this.state.displayAfterClick} className="meeting__btnWrapper">
               <h3 className="meeting__data">{t("accept")}</h3>
               <h3 className="meeting__data">{t("acceptAgain")}</h3>
               {/* <button onClick={this.acceptBtn} className="btn btn-meetingType mb-100">{t("btnDuo")}</button>
               <button onClick={this.acceptBtn} className="btn btn-meetingType">{t("btnGroup")}</button> */}
            </div>
            <div style={this.state.displayBeforeClick} className="meeting__dataWrapper">
               <p className="meeting__data">Mittwoch</p>
               <p className="meeting__data meeting__data--date">01.September, 18:00</p>
               <span className="meeting__dataWrapperLocation--pipe"></span>
            </div>
            <div style={this.state.displayBeforeClick} className="meeting__dataWrapperLocation">
               <p className="meeting__data meeting__data--place">Biercafe Engel</p>
               <span className="meeting__dataWrapperLocation--pipe"></span>
            </div>
            <div className="meeting__joinBtnWrapper">
               <button onClick={this.joinClickHandler} className={this.state.joinBtnSpanClass}><span className="meeting__btnDesc">{t("btnJoin")}</span><span className="btn-meeting__arrow" /></button>
            </div>
         </div >
      );
   };
};

export default withTranslation('meetUps')(UpcomingMeeting);