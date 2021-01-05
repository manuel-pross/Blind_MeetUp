import React, { Component } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Styleguide from './containers/Styleguide/Styleguide';
import LandingPage from './containers/LandingPage/LandingPage';

import Contact from './containers/Pages/Contact';
import Feedback from './containers/Pages/Feedback';
import Dataprotection from './containers/Pages/Dataprotection';
import Guidelines from './containers/Pages/Guidelines';
import Impressum from './containers/Pages/Impressum';

import Dashboard from './containers/DashboardContainer/DashboardContainer';

import Login from './containers/Pages/Login';
import PrivateRoute from './components/hoc/PrivateRoute';

import axios from "axios";

class Routes extends Component {
    state = {
        user: null
    }

    componentDidMount = () => {
        axios.get('/api/user')
            .then(res => {
                this.setUser(res.data);
            }).catch(err => {
                // console.log("User ist nicht angemeldet");
                // console.log(err);
            });
    }

    setUser = user => {
        this.setState({
            user: user
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/styleguide" component={Styleguide} />

                {/* Footer Routes*/}
                <Route exact path="/kontakt" component={() => <Contact setUser={this.setUser} user={this.state.user} />} />
                <Route exact path="/feedback" component={() => <Feedback setUser={this.setUser} user={this.state.user} />} />
                <Route exact path="/datenschutz" component={() => <Dataprotection setUser={this.setUser} user={this.state.user} />} />
                <Route exact path="/richtlinien" component={() => <Guidelines setUser={this.setUser} user={this.state.user} />} />
                <Route exact path="/impressum" component={() => <Impressum setUser={this.setUser} user={this.state.user} />} />

                <Route exact path="/login" component={(props) => <Login {...props} setUser={this.setUser} user={this.state.user} />} />

                {/* Private Routes, nicht exact, da Subroutes auch Private sein müssen */}
                <PrivateRoute path={"/dashboard" || "/dashboard/"} component={(routerObj, props) => <Dashboard {...props} setUser={this.setUser} user={this.state.user} routerObj={routerObj} />} />
                {/* <Route path="/" component={() => <Redirect to={{pathname: "/"}} />} /> */}
            </Switch >
        );
    }
}

export default Routes;
