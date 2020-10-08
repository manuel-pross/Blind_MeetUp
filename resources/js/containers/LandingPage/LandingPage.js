import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

class LandingPage extends Component {
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <div>
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
                        <h2 >
                            FAQ
                    </h2>
                        <Link to="/styleguide">Styleguide</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;