import React, { Component } from 'react';
import Slider from "react-slick";
import TimelineDesc from "./TimelineDesc"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
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
            { headingText: 'Heading 1', descText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takiamata sanctus est Lorem ipsum dolor sit amet.', pointColor: '#50b375' },
            { headingText: 'Heading 2', descText: 'Heading 2 Lorem Ipsum', pointColor: '' },
            { headingText: 'Heading 3', descText: 'Heading 3 Lorem Ipsum', pointColor: '' },
            { headingText: 'Heading 4', descText: 'Heading 4 Lorem Ipsum', pointColor: '' },
            { headingText: 'Heading 5', descText: 'Heading 5 Lorem Ipsum', pointColor: '' },
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
                   desc.pointColor = ''
                });
                descs[next].pointColor = '#50b375'
                this.setState({descs : descs})
            },
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                  breakpoint: 992,
                },
                {
                  breakpoint: 10000000, // a unrealistically big number to cover up greatest screen resolution
                  settings: 'unslick'
                }
            ]
        }

        return (
            <div className="container pb-1000">
                <div className="timeline">
                    <h2 className="timeline__heading">Ablauf &amp; Funktionsweise</h2>
                    <div className="timeline__content">
                        <div className="timeline__stroke">
                        {this.state.descs.map((desc, i) => {
                            return (
                                <div key={i} className="timeline__point" style={{backgroundColor: desc.pointColor}}/>
                            )
                        })}
                        </div>
                        <Slider {...settings}>
                            {this.state.descs.map((desc, i) => {
                                return (
                                    <TimelineDesc key={i} heading={desc.headingText} desc={desc.descText}/>
                                )
                            })}
                        </Slider>
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Timeline;