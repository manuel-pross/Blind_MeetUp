import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import cancelSVG from '../../../assets/img/icons/action-cancel.svg';
// TODO :backendanbindung mit dem entsprechend richtigen Bild hinzufügen
import placeholderImage from '../../../assets/img/placeholder/368x363-placeholder.png';
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

   stornoClickHandler = () => {
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
            .then((response) => {
               notify("Treffen erfolgreich storniert");
               // this.setState({
               //    joinBtnClass: "btn btn-cancel--animation",
               //    jointClass: "jointMeeting--closed"
               // })
               // setTimeout(() => {
               //    document.querySelector(".jointMeeting--closed").parentElement.parentElement.remove();
               // }, 2500);
               this.props.loadAllMeetings();
            })
            .catch((error) => {
               if (error.response) {
                  notify(error.response.data.message);
               }
            });
      }
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
                     <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnTime")}</button>
                     <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnInteres")}</button>
                  </div>
                  <div className="jointMeeting__clickedBtnWrapper__block">
                     <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnAccidantlly")}</button>
                     <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnOther")}</button>
                  </div>
               </div>
               <div className="jointMeeting__btnWrapper">
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
            <div className="jointMeeting__beforeClickedWrapper" style={this.state.displayBeforeClick}>
               <div className="jointMeeting__imgWrapper">
                  <img className="jointMeeting__img" src={placeholderImage} />
               </div>
               <div className="jointMeeting__contentWrapper">
                  <div className="jointMeeting__contentTopWrapper">
                     <div className="jointMeeting__topWrapper">
                        <p className="jointMeeting__data">{this.props.day}</p>
                        <p className="jointMeeting__data jointMeeting__data--date">{this.props.date + ", "} {this.props.time}</p>
                     </div>
                     <div className="jointMeeting__dataWrapperLocation">
                        <p className="jointMeeting__data jointMeeting__data--place">{this.props.place}</p>
                     </div>
                  </div>
                  <div className="jointMeeting__btnWrapper">
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
         </div>
      );
   };
};

export default withTranslation('meetUps')(JointMeeting);

{/* <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
   <div style={this.state.displayAfterClick} className="jointMeeting__clickedBtnWrapper">
      <div className="jointMeeting__clickedBtnWrapper__block">
         <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnTime")}</button>
         <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnInteres")}</button>
      </div>
      <div className="jointMeeting__clickedBtnWrapper__block">
         <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnAccidantlly")}</button>
         <button onClick={() => { this.setState({ reasonChoosed: true }) }} className="btn btn-jointMeeting">{t("btnOther")}</button>
      </div>
   </div>
   <img style={this.state.displayBeforeClick} className="jointMeeting__img" src={placeholderImage} alt="" />
   <div className="jointMeeting__contentWrapper">
      <div className="jointMeeting__innerWrapper" style={this.state.displayBeforeClick} >
         
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
               <img className="btn-cancel__svg" src={cancelSVG} alt="cancelSVG" ></img>
            </span>
         </button>
      </div >
   </div> */}