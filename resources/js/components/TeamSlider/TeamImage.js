import React from 'react';

const TeamImage = (props) => (
   <div key={props.key} className="teamSlider__cover">
      <img className={"teamSlider__cover__image teamSlider__cover__image" + props.class} src={props.img} style={{ width: '100%', height: 'auto' }} ></img>
      <div className="teamSlider__desc">
         <h3 className="teamSlider__desc-title">{props.name}</h3>
         <p className="teamSlider__desc-desc" >{props.descText}</p>
      </div>
   </div>
);

export default TeamImage;