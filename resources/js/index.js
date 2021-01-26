import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
// import './index.scss';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import DevSizeBtn from './components/hoc/DevSizeBtn';
import ScrollToTop from './components/hoc/ScrollToTop';
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';


// For translations
import './i18n';

// For Auth
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

ReactDOM.render(
  <BrowserRouter 
  // basename="/Blind_MeetUp/public"
  >
    <ScrollToTop>
      {/* <DevSizeBtn /> */}
      <React.StrictMode>
        <Routes />
        <ScrollTopButton/>
      </React.StrictMode>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
