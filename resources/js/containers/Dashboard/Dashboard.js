import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import SubNavbar from '../../components/SubNavbar/SubNavbar';



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
        return (
            <React.Fragment>
                <Navbar />
                <DashboardHeader />
                <SubNavbar match={this.props.match} meetings={this.state.meetings} loadTask={this.loadTask} />
                <FAQ />
                <Footer />
            </React.Fragment>
        );
    }

}

export default Dashboard;