import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TimelinePoint from './TimelinePoint'
//import TimelineDesc from './TimelineDesc'

const descs = [
    {
        headingText: 'Heading 1', descText: 'Heading 1 Lorem Ipsum'
    },
    {
        headingText: 'Heading 2', descText: 'Heading 2 Lorem Ipsum'
    },
    {
        headingText: 'Heading 3', descText: 'Heading 3 Lorem Ipsum'
    },
    {
        headingText: 'Heading 4', descText: 'Heading 4 Lorem Ipsum'
    },
    {
        headingText: 'Heading 5', descText: 'Heading 5 Lorem Ipsum'
    },
]

function SampleNextArrow(props) {
    const { onClick } = props;
    console.log(props.className)
    return (
        <div
        className={"slick-arrow slick-next timeline__arrow-right"}
        onClick={onClick}>
            <div className="timeline__arrow-right-stroke"></div>
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
        return (
        <div
        className={"slick-arrow slick-prev timeline__arrow-left"}
        onClick={onClick}>
            <div className="timeline__arrow-left-stroke"></div>
        </div>
    );
  }

class Timeline extends Component {
    render() {

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides",
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }

        return (
            <div className="timeline">
                <h2 className="timeline__heading">Ablauf &amp; Funktionsweise</h2>
                <div className="timeline__stroke">
                    <TimelinePoint/>
                    <TimelinePoint/>
                    <TimelinePoint/>
                    <TimelinePoint/>
                    <TimelinePoint/>
                </div>
                <Slider {...settings}>
                {descs.map((desc) => {
                    return (
                        <div>
                            <h3>{desc.headingText}</h3>
                            <p>{desc.descText}</p>
                        </div>
                    )
                })}
                </Slider>
            </div>
        )
    }
}


export default Timeline;