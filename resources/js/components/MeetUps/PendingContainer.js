import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import PendingMeeting from './PendingMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import axios from 'axios';
import i18n from '../../i18n';
let testcount = 0
class PendingContainer extends Component {
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

   filterClickHandler = (type) => {
      if (type == "group") {
         this.setState({ memberFilter: true })
         this.setSettingState(type)
      } else
         this.setState({ memberFilter: false })
      this.setSettingState(type)
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
         meetingDuoMD = 2;
      }
      if (meetingGroupCount > 3) {
         meetingGroupCount = 3
         meetingGroupMD = 2;
      }
      if (type == "duo") {
         this.setState({ maxMeetingSetting: meetingDuoCount })
         this.setState({ maxMeetingSettingMD: meetingDuoMD })
      } else {
         this.setState({ maxMeetingSetting: meetingGroupCount })
         this.setState({ maxMeetingSettingMD: meetingGroupMD })
      }
   }

   componentDidMount() {
      this.setSettingState("duo");
   }

   render() {
      const { t } = this.props;

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

      // TODO: slideToShow Bedingung für zu viele/wenig Meetings
      const settings = {
         speed: 500,
         slidesToShow: this.state.maxMeetingSetting,
         dots: true,
         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,
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

      // TODO: Image Link hinzufügen
      return (
         <div className="container mb-400">
            <div className="pendingContainer">
               <div className="pendingContainer__headlineWrapper">
                  <h2 className="pendingContainer__heading">{t("title")}</h2>
                  <div className="pendingContainer__filterWrapper">
                     <button onClick={() => { this.filterClickHandler("group") }} style={this.state.memberFilter ? { backgroundColor: "#50b375" } : { backgroundColor: "#707070" }} className="pendingContainer__filterTeam">Group</button>
                     <button onClick={() => { this.filterClickHandler("duo") }} style={this.state.memberFilter ? { backgroundColor: "#707070" } : { backgroundColor: "#50b375" }} className="pendingContainer__filterGroup">Duo</button>
                  </div>
               </div>
               <Slider {...settings}>
                  {this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     if (this.state.memberFilter && e.max_members > 2) {
                        return (
                           <PendingMeeting key={i} id={e.id} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} user={this.props.user} loadAllMeetings={this.props.loadAllMeetings} />
                        )
                     } else if (!this.state.memberFilter && e.max_members == 2) {
                        testcount++;
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