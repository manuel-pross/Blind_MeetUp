import React, { Component } from 'react';
import TeamSlider from '../../components/TeamSlider/TeamSlider'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import CTA from '../../components/CTA/CTA'
import TextIconHFU from '../../components/TextIconHFU/TextIconHFU'

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <Header />
                <div className="container">
                    <div
                        style={{ height: '500px'}}
                        id="Projekt">
                        <h2 >
                            Das Projekt
                        </h2>
                    </div>
                    <div
                        style={{ height: '500px' }}
                        id="Ablauf">
                        <h2 >
                            Ablauf
                        </h2>
                    </div>
                    <div id="Team">
                        {/* <TeamSlider /> */}
                        <TextIconHFU/>

                    </div>
                    <div
                        style={{ height: '5000px' }}
                        id="FAQ">
                        <h2>
                            FAQ
                        </h2>
                        <Link to="/styleguide">Styleguide</Link>
                        <CTA />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;