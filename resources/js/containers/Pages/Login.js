import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
// import ErrorMessage from "./UI/ErrorMessage";

class Login extends Component {
    state = {
        loggedIn: false
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            hfu_user_name: this.hfu_user_name,
            password: this.password
        }

        axios.post('/api/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState({
                    loggedIn: true
                });
                this.props.setUser(res.data.user);
            }).catch(err => {
                this.setState({
                    message: err.response.data.message
                })
            })
    }

    render() {
        if (this.state.loggedIn || this.props.user) {
            return <Redirect
            to={{
                pathname: "/dashboard/anmelden"
            }}
        />
        }


        return (
            <form onSubmit={this.handleSubmit}>
                {/* <ErrorMessage>{this.state.message}</ErrorMessage> */}
                <h3>Einloggen</h3>
                <div className="form-group">
                    <label>Benutzername</label>
                    <input type="text" className="form-control" placeholder="Name" onChange={e => this.hfu_user_name = e.target.value}></input>
                </div>
                <div className="form-group">
                    <label>Passwort</label>
                    <input type="password" className="form-control" placeholder="Passwort" onChange={e => this.password = e.target.value}></input>
                </div>
                <button className="btn btn-primary btn-block">Anmelden</button>
                {/* <p className="fogot-passsword text-right"><Link to="/forgot">Passwort vergessen?</Link></p> */}
            </form>
        );
    }

}

export default Login;