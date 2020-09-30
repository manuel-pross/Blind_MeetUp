import React from 'react';
import { Route, Switch } from "react-router-dom";
import Styleguide from './containers/Styleguide/Styleguide';
import LandingPage from './containers/LandingPage/LandingPage';

function Root() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/styleguide" component={Styleguide} />
        </Switch>
    );
}

export default Root;
