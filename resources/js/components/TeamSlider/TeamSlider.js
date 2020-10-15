import React, { Component } from 'react';
import Slider from "react-slick";

import TeamImage from './TeamImage';

import pia from '../../../assets/img/TeamImages/pia.png';
import patrickK from '../../../assets/img/TeamImages/patrickK.png';
import patrickN from '../../../assets/img/TeamImages/patrickN.png';
import manuel from '../../../assets/img/TeamImages/manuel.png';
import simon from '../../../assets/img/TeamImages/simon.png';
import gion from '../../../assets/img/TeamImages/gion.png';


const desc = [
   "Marketing",
   "Projekt-Initiator & Entwickler",
   "Design & Konzeption",
   "Design & Konzeption",
   "Entwickler",
   "Projekt-Initiator & Entwickler"
]

const Stylename = [
   "teamSlider__cover__image-pia",
   "teamSlider__cover__image-manuel",
   "teamSlider__cover__image-patrickN",
   "teamSlider__cover__image-gion",
   "teamSlider__cover__image-simon",
   "teamSlider__cover__image-patrickK"
]


class Teamslider extends Component {

   state = {
      descs: [
         { img: manuel, descText: "Projekt-Initiator & Entwickler" },
         { img: patrickK, descText: "Projekt-Initiator & Entwickler" },
         { img: simon, descText: "Entwickler" },
         { img: pia, descText: "Marketing" },
         { img: patrickN, descText: "Design & Konzeption" },
         { img: gion, descText: "Design & Konzeption" },
      ]
   }

   render() {
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
         className: "teamImages",
         infinite: true,
         lazyLoad: false,
         adaptiveHeight: true,
         variableWidth: true,
         arrows: true,
         nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />
      };

      return (
         <div className="container mb-1000">

            <Slider {...settings}>
               {this.state.descs.map((desc, i) => {
                  return (
                     <TeamImage img={desc.img} descText={desc.descText} />
                  )
               })}
            </Slider>


         </div>
      )
   }
}


export default Teamslider;