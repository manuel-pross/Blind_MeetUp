import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import JointMeeting from './JointMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import { css } from '@emotion/react';
import { ClipLoader } from "react-spinners";

import axios from 'axios';
import i18n from '../../i18n';

class PendingContainer extends Component {

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

   render() {
      const { t } = this.props;

      function SampleNextArrow(props) {
         const { onClick } = props;
         return (
            <div
               className={"slick-arrow slick-next teamSlider__arrow-right"}
               onClick={onClick}>
               <div className="teamSlider__arrow-right-stroke"></div>
            </div>
         );
      }

      function SamplePrevArrow(props) {
         const { onClick } = props;
         return (
            <div
               className={"slick-arrow slick-prev teamSlider__arrow-left"}
               onClick={onClick}>
               <div className="teamSlider__arrow-left-stroke"></div>
            </div>
         );
      }

      const settings = {
         speed: 500,
         slidesToShow: 1,
         // nextArrow: <SampleNextArrow />,  
         // prevArrow: <SamplePrevArrow />,
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
               <h2 className="meetUps__heading">{t("title")}</h2>
               {this.props.meetings.map((e, i) => {
                  const time = e.date.slice(11, 16);
                  return (
                     <JointMeeting key={i} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} id={e.id} user={this.props.user} loadAllMeetings={this.props.loadAllMeetings} />
                  )
               })}
            </div>
         </div>
      )
   };
};

export default withTranslation('meetUps')(PendingContainer);