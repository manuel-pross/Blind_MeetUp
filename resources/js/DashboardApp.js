import React from 'react';

// import { withRouter } from 'react-router-dom'

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
