import React, { Component } from 'react';

import smileyGood from '../../../assets/img/icons/smiley-good.svg';
import smileyNeutral from '../../../assets/img/icons/smiley-neutral.svg';
import smileyBad from '../../../assets/img/icons/smiley-bad.svg';
import starSVG from '../../../assets/img/icons/action-rate.svg';

import { withTranslation } from 'react-i18next';

import axios from 'axios';

const opacity05 = { opacity: ".7" };
const opacity1 = { opacity: "1" };
class PastMeeting extends Component {


   state = {
      btnPressed: false,
      displayBeforeClick: { display: "block" },
      displayAfterClick: { display: "none" },
      pastMeetingClass: "pastMeeting",
      gooodSmileyOp: opacity05,
      neutralSmileyOp: opacity05,
      badSmileyOp: opacity05,
      topWrapperPadding: { padding: "1.5rem" }
   }

   pastMeetingClickHandler = () => {
      if (!this.state.btnPressed) {
         this.setState({
            displayAfterClick: { display: "flex" },
            displayBeforeClick: { display: "none" },
            topWrapperPadding: { padding: "0" }
         })
      }

      if (this.state.btnPressed) {

         axios.put('/api/rate_meeting/' + this.props.id)
            .then(() => {
               this.props.loadAllMeetings()
            }).catch((error) => {
            })
         // this.setState({ pastMeetingClass: "pastMeeting--closed" })
      }
   }


   smileyClickHandler = (smiley) => {
      this.setSmileyOnDefault();
      this.setState({
         btnPressed: true,
      })
      switch (smiley) {
         case "good":
            this.setState({ gooodSmileyOp: opacity1 })
            break;
         case "neutral":
            this.setState({ neutralSmileyOp: opacity1 })
            break;
         default:
            this.setState({ badSmileyOp: opacity1 })
      }
   }

   exitClickHandler = () => {
      this.setSmileyOnDefault();
      this.setState({
         btnPressed: false,
         displayAfterClick: { display: "none" },
         displayBeforeClick: { display: "block" },
         topWrapperPadding: { padding: "1.5rem" }
      })
   }

   setSmileyOnDefault = () => {
      this.setState({
         gooodSmileyOp: { opacity: ".7" },
         neutralSmileyOp: { opacity: ".7" },
         badSmileyOp: { opacity: ".7" },
      })
   }

   render() {
      const { t } = this.props;
      return (
         <div className={this.state.pastMeetingClass}>
            <div style={this.state.topWrapperPadding} className="pastMeeting__topWrapper">
               <div className="pastMeeting__wrapperBeforeClick" style={this.state.displayBeforeClick}>
                  <p className="pastMeeting__notRated">{t("notRated")}</p>
                  <div className="pastMeeting__dataWrapper">
                     <p className="pastMeeting__data">{this.props.day}</p>
                     <p className="pastMeeting__data pastMeeting__data--date">{this.props.date + ", "} {this.props.time}</p>
                  </div>
                  <div className="pastMeeting__dataWrapperLocation">
                     <p className="pastMeeting__data pastMeeting__data--place">{this.props.place}</p>
                  </div>
               </div>
               <div className="pastMeeting__wrapperAfterClick" style={this.state.displayAfterClick}>
                  <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
                  <div className="pastMeeting__textWrapper">
                     <p className="pastMeeting__text">{t("satisfiedDesc1")}</p>
                     <p className="pastMeeting__text">{t("satisfiedDesc2")}</p>
                  </div>
                  <div className="pastMeeting__smileyWrapper" >
                     <img onClick={() => { this.smileyClickHandler("good") }} style={this.state.gooodSmileyOp} className="pastMeeting__smiley" src={smileyGood} ></img>
                     <img onClick={() => { this.smileyClickHandler("neutral") }} style={this.state.neutralSmileyOp} className="pastMeeting__smiley" src={smileyNeutral} ></img>
                     <img onClick={() => { this.smileyClickHandler("bad") }} style={this.state.badSmileyOp} className="pastMeeting__smiley" src={smileyBad} ></img>
                  </div>
               </div>
            </div>
            <div onClick={this.pastMeetingClickHandler} className="pastMeeting__btnWrapper" style={{ textAlign: "center" }}>
               <button className="btn btn-pastMeeting">
                  <span className="pastMeeting__btnSpan">
                     <span className="pastMeeting__btnDesc">
                        {t("btnRate")}
                     </span>
                     <img className="pastMeeting__starSvg" src={starSVG} alt="starSVG" ></img>
                  </span>
               </button>
            </div >
         </div>
      );
   };
};

export default withTranslation('meetUps')(PastMeeting);