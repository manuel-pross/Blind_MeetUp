import React, { Component } from 'react';
import { Redirect, useLocation, withRouter } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import SubNavbar from '../../components/SubNavbar/SubNavbar';
import axios from 'axios'

import DashboardAdmin from './DashboardAdmin/DashboardAdmin';
import DashboardUser from './DashboardUser/DashboardUser';


class Dashboard extends Component {


    render() {
        // console.log(this.props.location.pathname);

        if (this.props.user) {
            if (this.props.user.role == "admin") {
                return <DashboardAdmin setUser={this.props.setUser} user={this.props.user} />;
            } else {
                return <DashboardUser setUser={this.props.setUser} user={this.props.user} routerObj={this.props.routerObj} />;
            }
        }
        return <Redirect to={{
            pathname: "/login",
            state: this.props.location.pathname
        }} />

    }
}

export default withRouter(Dashboard);