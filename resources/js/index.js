import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import Root from './Routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import DevSizeBtn from './components/hoc/DevSizeBtn';

import RouteToTop from './components/hoc/RouterToTop';

import axios from "axios";

// For translations
import './i18n';

// For Auth
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

ReactDOM.render(
  <BrowserRouter>
    <RouteToTop />
    <DevSizeBtn />
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
