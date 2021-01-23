import React, { Component } from 'react';
import Slider from "react-slick";
import TeamImage from './TeamImage';

import { withTranslation } from 'react-i18next';

import pia from '../../../assets/img/TeamImages/Pia.png';
import patrickK from '../../../assets/img/TeamImages/PatrickK.png';
import patrickN from '../../../assets/img/TeamImages/PatrickN.png';
import manuel from '../../../assets/img/TeamImages/Manuel.png';
import simon from '../../../assets/img/TeamImages/Simon.png';
import gion from '../../../assets/img/TeamImages/Gion.png';

class Teamslider extends Component {

   render() {

      const { t } = this.props;
      const team = [
         { img: manuel, name: "Manuel Proß", descText: t("manuel"), class: "-manuel" },
         { img: patrickK, name: "Patrick Kaserer", descText: t("patrickK"), class: "-patrickK" },
         { img: simon, name: "Simon Dold", descText: t("simon"), class: "-simon" },
         { img: pia, name: "Pia Zeller", descText: t("pia"), class: "-pia" },
         { img: gion, name: "Gion Egel", descText: t("gion"), class: "-gion" },
         { img: patrickN, name: "Patrick Neudert", descText: t("patrickN"), class: "-patrickN" },
      ]

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
         <div className="container">
            <div className="teamSlider">
               <h2 className="teamSlider__heading">Unser Team</h2>
               <Slider {...settings}>
                  {team.map((desc, i) => {
                     return (
                        <TeamImage key={i} name={desc.name} class={desc.class} img={desc.img} descText={desc.descText} />
                     )
                  })}
               </Slider>
            </div>
         </div>
      )
   }
}


export default withTranslation('teamSlider')(Teamslider);