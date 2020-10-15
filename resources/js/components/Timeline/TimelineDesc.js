import React from 'react';


const cta = (props) => (
    <div className="timeline__desc">
        <h3 className="timeline__subheading">{props.heading}</h3>
        <p className="timeline__desc-text">{props.desc}</p>
    </div>
);


export default cta;