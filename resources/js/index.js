import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import DevSizeBtn from './components/hoc/DevSizeBtn';

import RouteToTop from './components/hoc/RouterToTop';

// For translations
import './i18n';

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

ReactDOM.render(<h1>Dashboard Seite</h1>,document.getElementById('dashboard'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
