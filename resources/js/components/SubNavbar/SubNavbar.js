import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';


import MeetUps from '../MeetUps/MeetUps';


class SubNavbar extends Component {
    state = {
        registered: 0,
        pending: 2,
        past: 0,
    }

    render() {
        return (
            <div className="container subnavbar" style={{ marginTop: '100px' }}>
                <div className="subnavbar__links">
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + "/anmelden"}>Angemeldet  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + "/anstehend"}>Anstehend  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={this.props.match.url + "/vergangen"}>Vergangen  </NavLink>
                </div>



                {/* Dashboard SubRoutes */}

                <Route exact path={this.props.match.url + "/anmelden"} render={() => <div>Angemeldet</div>} />
                <Route exact path={this.props.match.url + "/anstehend"} render={() => <MeetUps meetings={this.props.meetings} loadTask={this.props.loadTask} />} />
                <Route exact path={this.props.match.url + "/vergangen"} render={() => <div>Vergangen</div>} />

            </div>

        );
    }
}
export default SubNavbar;