import React, { Component } from 'react';

// For IE 11 polyfill
let ES6Promise = require("es6-promise");
ES6Promise.polyfill();

import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';
import SubNavbar from '../components/SubNavbar/SubNavbar';


class DashboardApp extends Component {
    state = {
        meetings: []
    }

    handleLogout = () => {
        console.log('axios call');
        axios.post('/logout')
            .then(function (response) {
                console.log("ausgeloggt");
                window.location.replace("http://localhost:8000/");
            })
    }

    loadTask = () => {
        axios.get('/api/meetings').then((response) => {
            this.setState({
                meetings: response.data
            });
        });
    }

    componentDidMount() {
        this.loadTask();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div style={{ paddingTop: '100px' }}>
                    Dashbaord
                </div>
                <SubNavbar meetings={this.state.meetings} loadTask={this.loadTask} />
                <button onClick={this.handleLogout}>Abmelden</button>
                <FAQ />
                <Footer />
            </React.Fragment>
        );
    }
}

export default DashboardApp;
