import React from 'react';
import DashboardHeaderImage from '../../../assets/img/placeholder/1920x395-placeholder.png'

import { withTranslation } from 'react-i18next';
import { Switch } from 'react-router';

const DashboardHeader = (props) => {
   const { t } = props;

   const currentTime = () => {
      const hour = new Date().getHours();
      if (hour <= 9) {
         return "greetingsMo"
      } else if (hour > 9 && hour <= 16) {
         return "greetingsMi"
      } else
         return "greetingsEv"
   }

   const currentDay = () => {
      const day = new Date().getDay();
      if (day == 0 || day == 6 || day == 5) {
         return "textWE"
      } else
         return "text"
   }

   return (
      <div className="dashboardHeader position-relative">
         <img className="dashboardHeader__image" src={DashboardHeaderImage} alt="dashboardHeaderImage" />
         <div className="dashboardHeader__wrapper">
            <h3 className="dashboardHeader__title">{t(currentTime())}{props.user == undefined ? null : props.user.first_name} </h3>
            <p className="dashboardHeader__p">{t(currentDay())}</p>
         </div>
      </div>
   )
};

export default withTranslation('dashboardHeader')(DashboardHeader);