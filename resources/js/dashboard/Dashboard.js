import React from 'react';

// For IE 11 polyfill
let ES6Promise = require("es6-promise");
ES6Promise.polyfill();

import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';


function DashboardApp({ history }) {

    const handleLogout = () => {
        console.log('axios call');
        axios.post('/logout')
            .then(function (response) {
                console.log("ausgeloggt");
                window.location.replace("http://localhost:8000/");
            })
    }


    return (
        <React.Fragment>
            <Navbar />
            <div style={{ paddingTop: '100px' }}>
                Dashbaord
            </div>
            <button onClick={handleLogout}>Abmelden</button>
            <FAQ />
            <Footer />
        </React.Fragment>
    );
}

export default DashboardApp;
