import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';


ReactDOM.render(
    <BrowserRouter basename="/home">
        <Routes />
    </BrowserRouter>, 
    document.getElementById('dashboard'));
