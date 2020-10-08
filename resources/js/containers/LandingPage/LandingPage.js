import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import CTA from '../../components/CTA/CTA'

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <div style={{ backgroundColor: '#F5F5F5' }}>
                    <div
                        style={{ height: '500px', paddingTop: '70px' }}
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
                    <div
                        style={{ height: '500px' }}
                        id="Team">
                        <h2>
                            Unser Team
                    </h2>
                    </div>
                    <div
                        style={{ height: '5000px' }}
                        id="FAQ">
                        <h2>
                            FAQ
                    </h2>
                        <Link to="/styleguide">Styleguide</Link>
                        <CTA/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;