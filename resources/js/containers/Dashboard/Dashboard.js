import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import SubNavbar from '../../components/SubNavbar/SubNavbar';
import axios from 'axios'


class Dashboard extends Component {
    _isMounted = false;

    state = {
        meetings: [],
        relatedMeetings: [],
        pendingMeetings: [],
        pastMeetings: [],
        registeredMeetings: []
    }

    loadRelatedMeetings = () => {
        axios.get('/api/related_meetings/2').then((response) => { //Bitte die id des users dynamisch eingeben
            if (this._isMounted) {
                this.setState({
                    relatedMeetings: response.data
                });
            }
        });
    }

    loadPendingMeetings = () => {
        axios.get('/api/pending_meetings/2').then((response) => { //Bitte die id des users dynamisch eingeben
            if (this._isMounted) {
                this.setState({
                    pendingMeetings: response.data
                });
            }
        });
    }

    loadPastMeetings = () => {
        axios.get('/api/past_meetings/2').then((response) => { //Bitte die id des users dynamisch eingeben
            if (this._isMounted) {
                this.setState({
                    pastMeetings: response.data
                });
            }
        });
    }

    loadRegisteredMeetings = () => {
        axios.get('/api/registered_meetings/2').then((response) => { //Bitte die id des users dynamisch eingeben
            if (this._isMounted) {
                this.setState({
                    registeredMeetings: response.data
                });
            }
        });
    }

    loadTask = () => { //Bitte noch in loadMeetings umbenennen. Das wurde vom Task beispiel kopiert
        axios.get('/api/meetings').then((response) => {
            if (this._isMounted) {
                this.setState({
                    meetings: response.data
                });
            }
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.loadTask()
        this.loadRelatedMeetings()
        this.loadPendingMeetings()
        this.loadPastMeetings()
        this.loadRegisteredMeetings()
    }

    componentWillUnmount() {
        this._isMounted = false;
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