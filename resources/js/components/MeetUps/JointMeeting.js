import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import cancelSVG from '../../../assets/img/icons/action-cancel.svg';
// TODO :backendanbindung mit dem entsprechend richtigen Bild hinzufügen
import placeholderImage from '../../../assets/img/placeholder/368x363-placeholder.png';


class JointMeeting extends Component {

   state = {
      btnPressed: false,
      displayBeforeClick: { display: "block" },
      displayAfterClick: { display: "none" },
      joinBtnClass: "btn btn-cancel",
      wrapperClass: "jointMeeting",
      wrapperStyle: { flexWrap: "initial" },
      joinBtnStyle: {}
   }

   stornoClickHandler = () => {
      if (!this.state.btnPressed) {
         this.setState({
            btnPressed: true,
            wrapperStyle: { flexWrap: "wrap" },
            displayAfterClick: { display: "block" },
            displayBeforeClick: { display: "none" },
            joinBtnStyle: { width: "50%" }
         })
      }
      if (this.state.btnPressed) {
         this.setState({ 
            joinBtnClass: "btn btn-cancel--animation", 
            meetingClass: "meeting--closed" })
         setTimeout(() => {
            // document.querySelector(".meeting--closed").parentElement.parentElement.remove();
         }, 2500);
      }
   }

   exitClickHandler = () => {
      if (this.state.btnPressed) {
         this.setState({
            btnPressed: false,
            joinBtnClass: "btn btn-cancel", 
            wrapperStyle: { flexWrap: "initial" },
            displayAfterClick: { display: "none" },
            displayBeforeClick: { display: "block" },
            joinBtnStyle: { width: "80%" }
         })
      }
   }

   render() {
      const { t } = this.props;
      return (
         <div style={this.state.wrapperStyle} className={this.state.wrapperClass}>
            <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
            <div style={this.state.displayAfterClick} className="jointMeeting__clickedBtnWrapper">
               <div className="jointMeeting__clickedBtnWrapper__block">
                  <button onClick={this.acceptBtn} className="btn btn-jointMeeting">{t("btnTime")}</button>
                  <button onClick={this.acceptBtn} className="btn btn-jointMeeting">{t("btnInteres")}</button>
               </div>
               <div className="jointMeeting__clickedBtnWrapper__block">
                  <button onClick={this.acceptBtn} className="btn btn-jointMeeting">{t("btnAccidantlly")}</button>
                  <button onClick={this.acceptBtn} className="btn btn-jointMeeting">{t("btnOther")}</button>
               </div>
            </div>
            <img style={this.state.displayBeforeClick} className="jointMeeting__img" src={placeholderImage} alt="" />
            <div className="jointMeeting__contentWrapper">
               <div className="jointMeeting__innerWrapper" style={this.state.displayBeforeClick} >
                  {/* <p className="jointMeeting__dayCount">Noch 5 Tage</p> */}
                  <div className="jointMeeting__dataWrapper">
                     <p className="jointMeeting__data">{this.props.day}</p>
                     <p className="jointMeeting__data jointMeeting__data--date">{this.props.date + ", "} {this.props.time}</p>
                     <span className="jointMeeting__dataWrapper--pipe"></span>
                  </div>
                  <div className="jointMeeting__dataWrapperLocation">
                     <p className="jointMeeting__data jointMeeting__data--place">{this.props.place}</p>
                     <span className="jointMeeting__dataWrapperLocation--pipe"></span>
                  </div>
               </div >
               <div style={{ textAlign: "center" }}>
                  <button style={this.state.joinBtnStyle} onClick={this.stornoClickHandler} className={this.state.joinBtnClass}>
                     <span className="jointMeeting__btnWrapper">
                        <div className="jointMeeting__btnDesc">
                           {t("btnCancel")}
                        </div>
                        <img src={cancelSVG} alt="cancelSVG" ></img>
                     </span>
                  </button>
               </div >
            </div>
         </div>
      );
   };
};

export default withTranslation('meetUps')(JointMeeting);