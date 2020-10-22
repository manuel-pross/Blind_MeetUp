import React from 'react';
import DashboardHeaderImage from '../../../assets/img/placeholder/1920x395-placeholder.png'

const DashboardHeader = (props) => (
   <div className="dashboardHeader mt-200 position-relative">
      <img className="dashboardHeader__image" src={DashboardHeaderImage} alt="dashboardHeaderImage" />
      <div className="dashboardHeader__wrapper">
         <h3 className="dashboardHeader__title">Guten Tag, Gabriel</h3>
         <p className="dashboardHeader__p">Endlich Wochenende. Endlich Zeit sich mit Studierenden aus deiner Hochschule zu treffen!</p>
      </div>
   </div>
);

export default DashboardHeader;