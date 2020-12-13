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
        axios.get('/api/related_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    relatedMeetings: response.data
                });
            }
        });

    }

    loadPendingMeetings = () => {
        axios.get('/api/pending_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    pendingMeetings: response.data
                });
            }
        });
    }

    loadPastMeetings = () => {
        axios.get('/api/past_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    pastMeetings: response.data
                });
            }
        });
    }

    loadRegisteredMeetings = () => {
        axios.get('/api/registered_meetings/' + this.props.user.id + '/').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    registeredMeetings: response.data
                });
            }
        });
    }

    loadMeetings = () => { //Bitte noch in loadMeetings umbenennen. Das wurde vom Task beispiel kopiert
        axios.get('/api/meetings').then((response) => {
            if (this._isMounted && this.props.user) {
                this.setState({
                    meetings: response.data
                });
            }
        });
    }

    componentDidMount() {
        // console.log(this.props.user);
        this._isMounted = true;
        if (this.props.user) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            this.loadMeetings();
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
        if (this.props.user) {
            return (
                <React.Fragment>
                    <Navbar setUser={this.props.setUser} user={this.props.user} />
                    <DashboardHeader user={this.props.user} />
                    <SubNavbar match={this.props.routerObj.match} meetings={this.state.meetings} loadMeetings={this.loadMeetings} />
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