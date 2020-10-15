import React from 'react';

const TeamImage = (props) => (
   <div className="teamSlider__cover">
      <div className={props.styleName + " teamSlider__cover__image"} style={{ backgroundImage: `url(${props.teamName})` }} />
      <div className="teamSlider__desc">
         <h3 className="teamSlider__desc-title">{props.nameString}</h3>
         <p className="teamSlider__desc-desc" >{props.desc}</p>
      </div>
   </div>
);

export default TeamImage;