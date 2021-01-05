import React, { Component } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';

import PendingContainer from '../MeetUps/PendingContainer';
import JointContainer from '../MeetUps/JointContainer';
import PastContainer from '../MeetUps/PastContainer';
import { withTranslation } from 'react-i18next';

class SubNavbar extends Component {

    render() {

        const { t } = this.props;

        let pathEndswithBackslash = false;
        if (this.props.match.url.substr(-1) === "/") {
            pathEndswithBackslash = true;
        }

        return (
            <div className="container subnavbar">
                <div className="subnavbar__links">
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "anmelden" : "/anmelden")}>{t("joint")} {" "}</NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "anstehend" : "/anstehend")}>{t("pending")} {" "}</NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + (pathEndswithBackslash ? "vergangen" : "/vergangen")}>{t("past")} {" "}</NavLink>
                </div>

                {/* {console.log(this.props)} */}
                {/* Dashboard SubRoutes */}
                <Route exact path={this.props.match.url + "/anmelden"} render={() => <JointContainer user={this.props.user} meetings={this.props.registeredMeetings} loadAllMeetings={this.props.loadAllMeetings} />} />
                <Route exact path={this.props.match.url + "/anstehend"} render={() => <PendingContainer user={this.props.user} meetings={this.props.pendingMeetings} loadAllMeetings={this.props.loadAllMeetings} />} />
                <Route exact path={this.props.match.url + "/vergangen"} render={() => <PastContainer meetings={this.props.pastMeetings} loadAllMeetings={this.props.loadAllMeetings} />} />
            </div>

        );
    }
}
export default withTranslation('meetUps')(SubNavbar);