import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import PastMeeting from './pastMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import { css } from '@emotion/react';
import { ClipLoader } from "react-spinners";

import axios from 'axios';
import i18n from '../../i18n';

class PendingContainer extends Component {
   _isUpdated = false;
   
   state = {
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

   setSettingState = () => {
      let meetingCount = 0;
      let meetingCountMD = 0;
      this.props.meetings.map(() => {
         meetingCount++
         meetingCountMD++
      })
      if (meetingCountMD > 2) {
         meetingCountMD = 2
      }
      if (meetingCount > 3) {
         meetingCount = 3
      }
      this.setState({ maxMeetingSetting: meetingCount })
      this.setState({ maxMeetingSettingMD: meetingCountMD })
   }

   componentDidMount() {
      if (this.props.meetings != null) {
         this.setSettingState();
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

      const settings = {
         speed: 500,
         slidesToShow: this.state.maxMeetingSetting,
         dots: true,
         // slidesToScroll: this.props.meetingCount
         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,
         responsive: [
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            },
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: this.state.maxMeetingSettingMD,
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
            <div className="meetUps">
               <h2 className="meetUps__heading">{t("titlePast")}</h2>
               <p style={{ marginTop: "0" }}>{t("subtitlePast")}</p>
               <Slider {...settings}>
                  {this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     return (
                        <PastMeeting key={i} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} />
                     )
                  })}
               </Slider>
            </div>
         </div>
      )
   };
};


export default withTranslation('meetUps')(PendingContainer);