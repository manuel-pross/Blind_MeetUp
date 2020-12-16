import React, { Component } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';

import PendingContainer from '../MeetUps/PendingContainer';
import JointContainer from '../MeetUps/JointContainer';
import PastContainer from '../MeetUps/PastContainer';


class SubNavbar extends Component {

    render() {
        let pathEndswithBackslash = false;
        if (this.props.match.url.substr(-1) === "/") {
            pathEndswithBackslash = true;
        }

        const pendingMeetingData = {
            number: 0,
            meeting: []
        }

        const jointMeetingData = {
            number: 0,
            meeting: []
        }

        const pastMeetingData = {
            number: 0,
            meeting: []
        }

        // this.props.meetings.forEach(e => {
        //     switch (e.type) {
        //         case "pending":
        //             pendingMeetingData.number++;
        //             pendingMeetingData.meeting.push({ date: e.date, place: e.place });
        //             break;
        //         case "joint":
        //             jointMeetingData.meeting.number++;
        //             jointMeetingData.meeting.push({ date: e.date, place: e.place });
        //             break;
        //         case "past":
        //             pastMeetingData.meeting.number++;
        //             pastMeetingData.meeting.push({ date: e.date, place: e.place });
        //             break;
        //         default:
        //             pendingMeetingData.meeting.push({ id: e.id, date: e.date, place: e.place, specific_place: e.specific_place, members: e.members, max_members: e.max_members, rating: e.rating, img_link: e.img_link });
        //     }
        // });

        return (
            <div className="container subnavbar" style={{ marginTop: '100px' }}>
                <div className="subnavbar__links">
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "anmelden" : "/anmelden")}>Angemeldet  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "anstehend" : "/anstehend")}>Anstehend  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "vergangen" : "/vergangen")}>Vergangen  </NavLink>
                </div>


                {/* {console.log(this.props)} */}
                {/* Dashboard SubRoutes */}
                <Route exact path={this.props.match.url + "/anmelden"} render={() => <JointContainer meetings={jointMeetingData} loadMeetings={this.props.loadMeetings} />} />
                <Route exact path={this.props.match.url + "/anstehend"} render={() => <PendingContainer meetings={this.props.pendingMeetings} loadMeetings={this.props.loadMeetings} />} />
                <Route exact path={this.props.match.url + "/vergangen"} render={() => <PastContainer meetings={pastMeetingData} loadMeetings={this.props.loadMeetings} />} />
            </div>

        );
    }
}
export default SubNavbar;