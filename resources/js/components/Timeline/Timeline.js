import React, { Component } from 'react';
import Slider from "react-slick";
import TimelineDesc from "./TimelineDesc"

import { withTranslation } from 'react-i18next';

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
        descs: [
            { pointColor: '#50b375' },
            { pointColor: '' },
            { pointColor: '' },
            { pointColor: '' },
            { pointColor: '' },
        ],
        activeSlide: 0
    }

    render() {
        const { t } = this.props;

        const content = {
            descs: [
                { headingText: t('header1'), descText: t('desc1')},
                { headingText: t('header2'), descText: t('desc2')},
                { headingText: t('header3'), descText: t('desc3')},
                { headingText: t('header4'), descText: t('desc4')},
                { headingText: t('header5'), descText: t('desc5')},
            ],
        }

        const settings = {
            infinite: false,
            arrows: true,
            beforeChange: (current, next) => {
                const descs = [...this.state.descs]
                descs.forEach((desc) => {
                    desc.pointColor = ''
                });
                descs[next].pointColor = '#50b375'
                this.setState({ descs: descs })
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
            <div className="container mb-1000">
                <div className="timeline">
                    <h2 className="timeline__heading">Ablauf &amp; Funktionsweise</h2>
                    <div className="timeline__content">
                        <div className="timeline__stroke">
                            {this.state.descs.map((desc, i) => {
                                return (
                                    <div key={i} className="timeline__point" style={{ backgroundColor: desc.pointColor }} />
                                )
                            })}
                        </div>
                        <Slider {...settings}>
                            {content.descs.map((desc, i) => {
                                return (
                                    <TimelineDesc key={i} heading={desc.headingText} desc={desc.descText} />
                                )
                            })}
                        </Slider>

                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslation('timeline')(Timeline);