import React, { Component } from "react";
import Slider from "react-slick";
import TeamImage from "./TeamImage";


import pia from '../../../assets/img/TeamImages/pia.png';
import patrickK from '../../../assets/img/TeamImages/patrickK.png';
import patrickN from '../../../assets/img/TeamImages/patrickN.png';
import manuel from '../../../assets/img/TeamImages/manuel.png';
import simon from '../../../assets/img/TeamImages/simon.png';
import gion from '../../../assets/img/TeamImages/gion.png';

const Stylename = [
   "teamSlider__cover__image-pia",
   "teamSlider__cover__image-manuel",
   "teamSlider__cover__image-patrickN",
   "teamSlider__cover__image-gion",
   "teamSlider__cover__image-simon",
   "teamSlider__cover__image-patrickK"
]

const nameString = [
   "Pia Zeller",
   "Manuel Pross",
   "Patrick Neudert",
   "Gion Egel",
   "Simon Dold",
   "Patrick Kaserer"
]

const desc = [
   "Marketing",
   "Projekt-Initiator & Entwickler",
   "Design & Konzeption",
   "Design & Konzeption",
   "Entwickler",
   "Projekt-Initiator & Entwickler"
]



class TeamSlider extends Component {
   render() {

      function SampleNextArrow(props) {
         const { onClick } = props;
         return (
            <h1
               className="slick-arrow slick-next teamSlider__arrowRight"
               onClick={onClick}
            />
         );
      }

      function SamplePrevArrow(props) {
         const { onClick } = props;
         return (
            <h1
               className="slick-arrow slick-prev teamSlider__arrowLeft"
               onClick={onClick}
            />
         );
      }

      const settings = {
         className: "teamImages",
         infinite: true,
         lazyLoad: false,
         adaptiveHeight: true,
         variableWidth: true,
         nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />
      };
      
      return (
         <div className="teamSlider mb-1000">
            <h1 className="mb-250" >Unser Team</h1>
            <Slider {...settings}>
               <TeamImage teamName={manuel} styleName={Stylename[1]} nameString={nameString[1]} desc={desc[1]} />
               <TeamImage teamName={patrickK} styleName={Stylename[5]} nameString={nameString[5]} desc={desc[5]} />
               <TeamImage teamName={pia} styleName={Stylename[0]} nameString={nameString[0]} desc={desc[0]} />
               <TeamImage teamName={patrickN} styleName={Stylename[2]} nameString={nameString[2]} desc={desc[2]} />
               <TeamImage teamName={gion} styleName={Stylename[3]} nameString={nameString[3]} desc={desc[3]} />
               <TeamImage teamName={simon} styleName={Stylename[4]} nameString={nameString[4]} desc={desc[4]} />
            </Slider>
         </div>
      );
   }
}

export default TeamSlider;