import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import PendingMeeting from './PendingMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

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

      // TODO: slideToShow Bedingung für zu viele/wenig Meetings
      const settings = {
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 1,
         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,
         responsive: [
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: 2,
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
            <div className="meetUps">
               <h2 className="meetUps__heading">{t("title")}</h2>
               <Slider {...settings}>
                  {this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     return (
                        <PendingMeeting key={i} id={e.id} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} user={this.props.user} loadAllMeetings={this.props.loadAllMeetings}/>
                     )
                  })}
               </Slider>
            </div>
         </div>
      )
   };
};


export default withTranslation('meetUps')(PendingContainer);