import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import PendingMeeting from './PendingMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import { css } from '@emotion/react';
import { ClipLoader } from "react-spinners";

import axios from 'axios';
import i18n from '../../i18n';
class PendingContainer extends Component {
   _isUpdated = false;

   state = {
      memberFilter: false,
      maxMeetingSetting: 3,
      maxMeetingSettingMD: 2,
   }

   formateDate = (date) => {
      const year = date.slice(0, 4)
      const month = date.slice(5, 7)
      const day = date.slice(8, 10)
      return (day + "." + month + "." + year)
   }

   getThisDay = (date) => {
      const thisDate = new Date(date).getDay()
      switch (thisDate) {
         case 0:
            return "sunday"
         case 1:
            return "monday"
         case 2:
            return "thursday"
         case 3:
            return "wednesday"
         case 4:
            return "tuesday"
         case 5:
            return "friday"
         case 6:
            return "saturday"
      }
   }

   filterClickHandler = (type, settings) => {
      // console.log(settings);
      // console.log(type);
      if (type == "group") {
         this.setSettingState(type)
         this.setState({ memberFilter: true })
      } else {
         this.setSettingState(type)
         this.setState({ memberFilter: false })
      }
   }

   setSettingState = (type) => {
      let meetingDuoCount = 0;
      let meetingGroupCount = 0;
      let meetingDuoMD = 0;
      let meetingGroupMD = 0;
      this.props.meetings.map(e => {
         if (e.max_members == 2) {
            meetingDuoCount++;
            meetingDuoMD++;
         } else if (e.max_members > 2) {
            meetingGroupCount++
            meetingGroupMD++;
         }
      })
      if (meetingDuoCount > 3) {
         meetingDuoCount = 3
      }
      if (meetingDuoMD > 2) {
         meetingDuoMD = 2;
      }
      if (meetingGroupCount > 3) {
         meetingGroupCount = 3
      }
      if (meetingGroupMD > 2) {
         meetingGroupMD = 2;
      }


      if (type == "duo") {
         console.log("Duo: " + meetingDuoCount);
         console.log("DuoMd: " + meetingDuoMD);
         this.setState({ maxMeetingSetting: meetingDuoCount })
         this.setState({ maxMeetingSettingMD: meetingDuoMD })
      } else {
         console.log("Grou: " + meetingGroupCount);
         console.log("GroupMd: " + meetingGroupMD);
         this.setState({ maxMeetingSetting: meetingGroupCount })
         this.setState({ maxMeetingSettingMD: meetingGroupMD })
      }
   }

   componentDidMount() {
      if (this.props.meetings != null) {
         this.setSettingState("duo");
      }
   }

   componentDidUpdate() {
      if (this.props.meetings != null && !this._isUpdated) {
         this.setSettingState("duo");
         this._isUpdated = true;
      }
   }

   render() {
      const { t } = this.props;

      // TODO: slideToShow Bedingung für zu viele/wenig Meetings
      const settings = {
         speed: 500,
         slidesToShow: this.state.maxMeetingSetting,
         dots: true,
         responsive: [
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: this.state.maxMeetingSettingMD,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            }
         ]
      };

      if (this.props.meetings == null) {
         const override = css`
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px
        margin-bottom: 10px
        `;
         return (
            <div style={{ display: "flex" }}>
               <ClipLoader
                  css={override}
                  size={110}
                  color={"#50b375"}
                  loading />
            </div>
         );
      }

      // TODO: Image Link hinzufügen
      return (
         <div className="container mb-400">
            <div className="pendingContainer">
               <div className="pendingContainer__headlineWrapper">
                  <h2 className="pendingContainer__heading">{t("titlePending")}</h2>
                  <div className="pendingContainer__filterWrapper">
                     <button onClick={() => { this.filterClickHandler("group", settings.slidesToShow) }} style={this.state.memberFilter ? { backgroundColor: "#50b375", color: "#fff" } : { backgroundColor: "#ededed", color: "#707070" }} className="pendingContainer__filterTeam">Group</button>
                     <button onClick={() => { this.filterClickHandler("duo", settings.slidesToShow) }} style={this.state.memberFilter ? { backgroundColor: "#ededed", color: "#707070" } : { backgroundColor: "#50b375", color: "#fff" }} className="pendingContainer__filterGroup">Duo</button>
                  </div>
               </div>
               <p className="pendingContainer__heading" style={{ marginTop: "0" }}>{t("subtitlePending")}</p>
               <Slider {...settings}>
                  {this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     if (this.state.memberFilter && e.max_members > 2) {
                        return (
                           <PendingMeeting key={i} id={e.id} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} user={this.props.user} loadAllMeetings={this.props.loadAllMeetings} />
                        )
                     } else if (!this.state.memberFilter && e.max_members == 2) {
                        return (
                           <PendingMeeting key={i} id={e.id} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} user={this.props.user} loadAllMeetings={this.props.loadAllMeetings} />
                        )
                     }
                  })}
               </Slider>
            </div>
         </div>
      )
   };
};


export default withTranslation('meetUps')(PendingContainer);

         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,

  // function SampleNextArrow(props) {
      //    const { onClick } = props;
      //    return (
      //       <div
      //          className={"slick-arrow slick-next teamSlider__arrow-right"}
      //          onClick={onClick}>
      //          <div className="teamSlider__arrow-right-stroke"></div>
      //       </div>
      //    );
      // }
      // function SamplePrevArrow(props) {
      //    const { onClick } = props;
      //    return (
      //       <div
      //          className={"slick-arrow slick-prev teamSlider__arrow-left"}
      //          onClick={onClick}>
      //          <div className="teamSlider__arrow-left-stroke"></div>
      //       </div>
      //    );
      // }