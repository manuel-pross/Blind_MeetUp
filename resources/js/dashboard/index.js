import React from 'react';
import ReactDOM from 'react-dom';

import DashboardApp from './Dashboard';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <DashboardApp />
    </BrowserRouter>, 
    document.getElementById('dashboard'));
