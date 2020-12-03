import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import SubNavbar from '../../components/SubNavbar/SubNavbar';
import axios from 'axios'


class Dashboard extends Component {
    state = {
        meetings: [],
        joinedMeetings:[],
        pastMeetings:[]
    }

    loadJoinedMeetings= () => {
        axios.get('/api/joined_meetings/1').then((response) => { //Bitte die id des users dynamisch eingeben
            this.setState({
                joinedMeetings: response.data
            });
        });
    }

    loadPastMeetings= () => {
        axios.get('/api/past_meetings/1').then((response) => { //Bitte die id des users dynamisch eingeben
            this.setState({
                pastMeetings: response.data
            });
        });
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
        this.loadJoinedMeetings();
        this.loadPastMeetings();
    }
    
    render() {
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
}

export default Dashboard;