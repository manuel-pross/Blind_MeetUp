import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MeetUps from '../../components/MeetUps/MeetUps';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import axios from "axios";


class Dashboard extends Component {
    render() {
        return (

            <React.Fragment>
                <Navbar setUser={this.props.setUser} />
                <DashboardHeader />
                <MeetUps />
                <FAQ />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Dashboard;