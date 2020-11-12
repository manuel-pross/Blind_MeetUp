import React from 'react';

// For IE 11 polyfill
let ES6Promise = require("es6-promise");
ES6Promise.polyfill();

import axios from 'axios';


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
            <div>
                Dashbaord
            </div>
            <button onClick={handleLogout}>Abmelden</button>
        </React.Fragment>
    );
}

export default DashboardApp;
