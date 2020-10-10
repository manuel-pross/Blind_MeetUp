import React, { Component } from 'react';
//import Slider from "react-slick";

import TimelinePoint from './TimelinePoint'
//import TimelineDesc from './TimelineDesc'

class Timeline extends Component {
    render() {
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
            </div>
        )
    }
}


export default Timeline;