import React, { Component } from 'react';
import Slider from "react-slick";

import TeamImage from './TeamImage';

import pia from '../../../assets/img/TeamImages/pia.png';
import patrickK from '../../../assets/img/TeamImages/patrickK.png';
import patrickN from '../../../assets/img/TeamImages/patrickN.png';
import manuel from '../../../assets/img/TeamImages/manuel.png';
import simon from '../../../assets/img/TeamImages/simon.png';
import gion from '../../../assets/img/TeamImages/gion.png';

class Teamslider extends Component {

   state = {
      descs: [
         { img: manuel, name: "Manuel Proß", descText: "Projekt-Initiator & Entwickler" },
         { img: patrickK, name: "Patrick Kaserer", descText: "Projekt-Initiator & Entwickler" },
         { img: simon, name: "Simon Dold", descText: "Entwickler" },
         { img: pia, name: "Pia Zeller", descText: "Marketing" },
         { img: patrickN, name: "Patrick Neudert", descText: "Design & Konzeption" },
         { img: gion, name: "Gion Egel", descText: "Design & Konzeption" },
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
         variableWidth: true,
         arrows: true, 
         slidesToShow: 1,
         nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />
      };

      return (
         <div className="container mb-400">
            <div className="teamSlider">
               <h2 className="teamSlider__heading">Unser Team</h2>
               <Slider {...settings}>
                  {this.state.descs.map((desc, i) => {
                     return (
                        <TeamImage key={i} name={desc.name} img={desc.img} descText={desc.descText} />
                     )
                  })}
               </Slider>
            </div>
         </div>
      )
   }
}


export default Teamslider;