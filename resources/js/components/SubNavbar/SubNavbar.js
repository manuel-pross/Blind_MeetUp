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

        return (
            <div className="container subnavbar" style={{ marginTop: '100px' }}>
                <div className="subnavbar__links">
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "anmelden" : "/anmelden")}>Angemeldet  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "anstehend" : "/anstehend")}>Anstehend  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "vergangen" : "/vergangen")}>Vergangen  </NavLink>
                </div>


                {/* {console.log(this.props)} */}
                {/* Dashboard SubRoutes */}
                <Route exact path={this.props.match.url + "/anmelden"} render={() => <JointContainer meetings={this.props.registeredMeetings} loadMeetings={this.props.loadMeetings} />} />
                <Route exact path={this.props.match.url + "/anstehend"} render={() => <PendingContainer meetings={this.props.pendingMeetings} loadMeetings={this.props.loadMeetings} />} />
                <Route exact path={this.props.match.url + "/vergangen"} render={() => <PastContainer meetings={this.props.pastMeetings} loadMeetings={this.props.loadMeetings} />} />
            </div>

        );
    }
}
export default SubNavbar;