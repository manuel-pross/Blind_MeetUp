import React from 'react';

let wrapperStyle = {};

function ImageText(props) {

   const wrapperStyle = props.alignment ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' };
   // const imageStyle = props.alignment ? { marginRight: '2rem' } : { marginLeft: '2rem' };

   return (
      <div className="imageText" style={wrapperStyle}>
         <img src={props.img} alt=""  className="imageText__img" />
         <p className="imageText__text" className="imageText__text">{props.text}</p>
      </div>
   )
}

export default ImageText;