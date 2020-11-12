import React, { Component } from 'react';
import TeamSlider from '../../components/TeamSlider/TeamSlider';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import CTA from '../../components/CTA/CTA';
import FAQ from '../../components/FAQ/FAQ';
import Timeline from '../../components/Timeline/Timeline'
import AboutProject from '../../components/AboutProject/AboutProject';
import TextIconHFU from '../../components/TextIconHFU/TextIconHFU'
import SocialMedia from '../../components/SocialMedia/SocialMedia'

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <Header />
                <div id="Projekt">
                    <AboutProject />
                    {/* <TextIconHFU /> */}
                </div>
                <div id="Ablauf">
                    <Timeline />
                </div>
                <div id="Team">
                    {/* <TeamSlider /> */}
                </div>
                <div id="FAQ">
                    {/* <FAQ />
                    <CTA />
                    <SocialMedia /> */}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default LandingPage;