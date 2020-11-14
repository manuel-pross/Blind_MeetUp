import React, { Component } from 'react';
import { NavLink,  Route } from 'react-router-dom';


import MeetUps from '../MeetUps/MeetUps';


class SubNavbar extends Component {
    state = {
        registered: 0,
        pending: 2,
        past: 0,
    }

    render() {
        // let pathEndswithBackslash = false;
        // if (this.props.match.url.substr(-1) === "/") {
        //     pathEndswithBackslash = true;
        // }
        return (
            <div className="container subnavbar" style={{ marginTop: '100px' }}>
                <div className="subnavbar__links">
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={"/anmelden"}>Angemeldet  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={"/anstehend"}>Anstehend  </NavLink>
                    <NavLink activeClassName="subnavbar__active" className="subnavbar__link" to={"/vergangen"}>Vergangen  </NavLink>
                </div>



                {/* Dashboard SubRoutes */}
                <Route exact path={"/anmelden"} render={() => <div>Angemeldet</div>} />
                <Route exact path={"/anstehend"} render={() => <MeetUps meetings={this.props.meetings} loadTask={this.props.loadTask} />} />
                <Route exact path={"/vergangen"} render={() => <div>Vergangen</div>} />

            </div>

        );
    }
}
export default SubNavbar;