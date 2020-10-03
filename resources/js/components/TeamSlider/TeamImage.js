import React from 'react';

const TeamImage = (props) => (
   <div className="teamSlider__cover">
      <div className={props.styleName + " teamSlider__cover__image"} style={{ backgroundImage: `url(${props.teamName})` }} />
      <div className="teamSlider__desc">
         <h1 className="teamSlider__desc-title">{props.nameString}</h1>
         <h2 className="teamSlider__desc-desc" >{props.desc}</h2>
      </div>
   </div>
);

export default TeamImage;