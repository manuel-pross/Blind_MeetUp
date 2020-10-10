import React, { Component } from 'react';
import Slider from "react-slick";
import TimelineDesc from "./TimelineDesc"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const descs = [
    { headingText: 'Heading 1', descText: 'Heading 1 Lorem Ipsum'},
    { headingText: 'Heading 2', descText: 'Heading 2 Lorem Ipsum' },
    { headingText: 'Heading 3', descText: 'Heading 3 Lorem Ipsum'},
    { headingText: 'Heading 4', descText: 'Heading 4 Lorem Ipsum' },
    { headingText: 'Heading 5', descText: 'Heading 5 Lorem Ipsum' },
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

    state = {
        descs : [
            { headingText: 'Heading 1', descText: 'Heading 1 Lorem Ipsum', class: "timeline__point--active" },
            { headingText: 'Heading 2', descText: 'Heading 2 Lorem Ipsum', class: "timeline__point" },
            { headingText: 'Heading 3', descText: 'Heading 3 Lorem Ipsum', class: "timeline__point" },
            { headingText: 'Heading 4', descText: 'Heading 4 Lorem Ipsum', class: "timeline__point" },
            { headingText: 'Heading 5', descText: 'Heading 5 Lorem Ipsum', class: "timeline__point" },
        ],
        activeSlide: 0
    }

    render() {
        const settings = {
            infinite: false,
            arrows: true,
            beforeChange: (current, next) => {
                const descs = [...this.state.descs]
                descs.forEach((desc) => {
                   desc.class = "timeline__point"
                });
                descs[next].class = "timeline__point--active"
                this.setState({descs : descs})
            },
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }

        return (
            <div className="timeline">
                <h2 className="timeline__heading">Ablauf &amp; Funktionsweise</h2>
                <div className="timeline__stroke">
                {this.state.descs.map((descs) => {
                    return (
                        <div className={descs.class}/>
                    )
                })}
                </div>
                <Slider {...settings}>
                {descs.map((desc) => {
                    return (
                        <TimelineDesc heading={desc.headingText} desc={desc.descText}/>
                    )
                })}
                </Slider>
            </div>
        )
    }
}


export default Timeline;