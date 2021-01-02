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
import { Link } from 'react-router-dom';

import AlertWaring from '../../../assets/img/icons/alert-warning.svg';

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

   getDaysToMeeting(date) {
      return ((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) * (-1)).toFixed(0);
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
               <h2 className="meetUps__heading">{t("titleJoint")}</h2>
               <p style={{ marginTop: "0" }}>{t("subtitleJoint")}</p>
               {!this.props.meetings.length == 0 ?
                  this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     return (
                        <JointMeeting key={i} imgLink={e.img_link} place={e.place} leftDays={this.getDaysToMeeting(e.date)} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} id={e.id} user={this.props.user} loadAllMeetings={this.props.loadAllMeetings} />
                     )
                  })
                  :
                  <div className="guidelines__container" style={{ backgroundColor: '#EFFCEF', borderRadius: '3em', paddingLeft: '20px', paddingRight: '20px' }}>
                     <img src={AlertWaring} className="guidelines__icon" alt="BlindMeetUp_alert-warning" style={{ width: "200px", float: 'left', maxWidth: "35px" }}></img>
                     <p style={{ color: "#50b375" }}>{t('alertJoint')}{" "}<Link to="/dashboard/anstehend" style={{ color: "#50b375", whiteSpace: "nowrap" }}>{t('alertJointLink')}</Link></p>
                  </div>
               }
            </div>
         </div>
      )
   };
};

export default withTranslation('meetUps')(PendingContainer);