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
        relatedMeetings:[],
        pendingMeetings:[]
    }

    loadRelatedMeetings= () => {
        axios.get('/api/related_meetings/2').then((response) => { //Bitte die id des users dynamisch eingeben
            this.setState({
                relatedMeetings: response.data
            });
        });
    }

    loadPendingMeetings= () => {
        axios.get('/api/pending_meetings/2').then((response) => { //Bitte die id des users dynamisch eingeben
            this.setState({
                pendingMeetings: response.data
            });
        });
    }

    loadTask = () => { //Bitte noch in loadMeetings umbenennen. Das wurde vom Task beispiel kopiert
        axios.get('/api/meetings').then((response) => {
            this.setState({
                meetings: response.data
            });
        });
    }

    componentDidMount() {
        this.loadTask()
        this.loadRelatedMeetings()
        this.loadPendingMeetings()
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