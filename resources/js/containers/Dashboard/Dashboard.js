import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import SubNavbar from '../../components/SubNavbar/SubNavbar';
import axios from 'axios'


class Dashboard extends Component {
    state = {
        meetings: []
    }

    loadTask = () => {
        axios.get('/api/meetings').then((response) => {
            this.setState({
                meetings: response.data
            });
        });
    }

    componentDidMount() {
        this.loadTask();
    }
    render() {
        if (this.props.user) {
            return (
                <React.Fragment>
                    <Navbar setUser={this.props.setUser} user={this.props.user} />
                    <DashboardHeader user={this.props.user} />
                    <SubNavbar match={this.props.routerObj.match} meetings={this.state.meetings} loadTask={this.loadTask} />
                    <FAQ />
                    <Footer setUser={this.props.setUser} user={this.props.user} />
                </React.Fragment>
            );
        }
        return (
            <Redirect to="/login" />
        );

    }
}

export default Dashboard;