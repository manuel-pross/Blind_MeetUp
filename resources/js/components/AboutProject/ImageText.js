import React from 'react';

function ImageText(props) {

   const wrapperStyle = props.alignment ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' };
   const textStyle = !props.alignment ? { marginRight: '3rem' } : { marginLeft: '3rem' };

   return (
      <div className="imageText" style={wrapperStyle}>
         <img src={props.img} alt=""  className="imageText__img" />
         <p className="imageText__text" className="imageText__text" style={textStyle}>{props.text}</p>
      </div>
   )
}

export default ImageText;