import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../../components/FAQ/FAQ';

import SubNavbar from '../../../components/SubNavbar/SubNavbar';
import axios from 'axios'


class DashboardUser extends Component {
    _isMounted = false;

    state = {
        // meetings: [],
        relatedMeetings: [],
        pendingMeetings: [],
        pastMeetings: [],
        registeredMeetings: []
    }

    loadRelatedMeetings = () => {
        axios.get('/api/related_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    relatedMeetings: response.data
                });
            }
        });

    }


    // Bevorstehendes Meeting
    loadPendingMeetings = () => {
        axios.get('/api/pending_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    pendingMeetings: response.data
                });
            }
        });
    }

    // Vergangene Meetings 
    loadPastMeetings = () => {
        axios.get('/api/past_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    pastMeetings: response.data
                });
            }
        });
    }

    // Registierte Meetings
    loadRegisteredMeetings = () => {
        axios.get('/api/registered_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    registeredMeetings: response.data
                });
            }
        });
    }

    componentDidMount() {
        // console.log(this.props.user);
        this._isMounted = true;
        if (this.props.user) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            this.loadRelatedMeetings();
            this.loadPendingMeetings();
            this.loadPastMeetings();
            this.loadRegisteredMeetings();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <Navbar setUser={this.props.setUser} user={this.props.user} />
                <DashboardHeader user={this.props.user} />
                <SubNavbar
                    match={this.props.routerObj.match}
                    meetings={this.state.meetings}
                    relatedMeetings={this.state.relatedMeetings}
                    pendingMeetings={this.state.pendingMeetings}
                    pastMeetings={this.state.pastMeetings}
                    registeredMeetings={this.state.registeredMeetings}
                />
                <FAQ />
                <Footer setUser={this.props.setUser} user={this.props.user} />
            </React.Fragment>
        );
    }
}

export default DashboardUser;