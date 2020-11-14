import React, { Component } from 'react';

import Meeting from './Meeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

class MeetUps extends Component {
   render() {
      const { t } = this.props;

      const meetings = [1, 2, 3, 4, 5]

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
         speed: 500,
         slidesToShow: 4,
         slidesToScroll: 1,
         dots: true,
         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,
         responsive: [
            {
               breakpoint: 1920,
               settings: {
                  slidesToShow: 4,
               }
            },
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            }
         ]
      };

      return (
         <div className="container mb-400">
            <div className="meetUps">
               <h2 className="meetUps__heading">{t("title")}</h2>
               <Slider {...settings}>
                  {meetings.map((i) => {
                     return (
                        <Meeting key={i} />
                     )
                  })}
               </Slider>
            </div>
         </div>
      )
   };
};

export default withTranslation('meetUps')(MeetUps);