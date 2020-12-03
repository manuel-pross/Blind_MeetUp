import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';

import SubNavbar from '../../components/SubNavbar/SubNavbar';
import axios from 'axios'


class Dashboard extends Component {
    render() {
        return (

            <React.Fragment>
                <Navbar setUser={this.props.setUser} user={this.props.user} />
                <DashboardHeader user={this.props.user} />
                <MeetUps />
                <FAQ />
                <Footer setUser={this.props.setUser} user={this.props.user} />
            </React.Fragment>
        );
    }
}

export default Dashboard;

// class Dashboard extends Component {
//     state = {
//         meetings: []
//     }

//     loadTask = () => {
//         axios.get('/api/meetings').then((response) => {
//             this.setState({
//                 meetings: response.data
//             });
//         });
//     }

//     componentDidMount() {
//         this.loadTask();
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Navbar />
//                 <DashboardHeader />
//                 <SubNavbar match={this.props.match} meetings={this.state.meetings} loadTask={this.loadTask} />
//                 <FAQ />
//                 <Footer />
//             </React.Fragment>
//         );
//     }