import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

import { css } from '@emotion/react';
import { ClipLoader } from "react-spinners";
// import ErrorMessage from "./UI/ErrorMessage";

class Login extends Component {
    state = {
        loggedIn: false,
        loadingLogin: false,
    }

    handleSubmit = (e) => {
        this.setState({ loadingLogin: true })
        e.preventDefault();

        const data = {
            hfu_user_name: this.hfu_user_name,
            password: this.password
        }

        axios.post('/api/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.setState({
                    loggedIn: true,
                    loadingLogin: false
                });
                this.props.setUser(res.data.user);
            }).catch(err => {
                this.setState({ loadingLogin: false })
            })
    }

    render() {
        if (this.state.loggedIn || this.props.user) {
            if (this.props.location.state == undefined) {
                // Weiterleitung von der Login Seite
                return <Redirect
                    to={{
                        pathname: "/dashboard/anmelden"
                    }}
                />
            } else {
                // Weiterleitung beim neu laden 
                return <Redirect
                    to={{
                        pathname: this.props.location.state
                    }}
                />
            }
        }

        if (this.state.loadingLogin) {

            const override = css`
                margin-left: auto;
                margin-right: auto;
                margin-top: 10px
                margin-bottom: 10px
            `;
            return (
                <div style={{ display: "flex" }}>
                    <ClipLoader
                        css={override}
                        size={110}
                        color={"#50b375"}
                        loading />
                </div>
            );
        }

        return (
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <p>HINWEIS: <br /> Dieser Login ist ein Platzhalter und wird  in Zukunft durch einen SSO (Shibboleth) ersetzt, bei dem sich Studierende ohne Registrierung anmelden können. <br /> Aus technischen Gründen und wegen Covid-19, ist unsere Anwendung aktuell jedoch noch nicht nutzbar.</p>
                {/* <ErrorMessage>{this.state.message}</ErrorMessage> */}
                <h3>Einloggen</h3>
                <div className="form-group loginForm__wrapper">
                    <label className="loginForm__user" >Benutzername</label>
                    <input type="text" className="form-control" placeholder="Name" onChange={e => this.hfu_user_name = e.target.value}></input>
                </div>
                <div className="form-group loginForm__wrapper">
                    <label className="loginForm__pw">Passwort</label>
                    <input type="password" className="form-control" placeholder="Passwort" onChange={e => this.password = e.target.value}></input>
                </div>
                <button className="btn btn-primary btn-block">Anmelden</button>
                {/* <p className="fogot-passsword text-right"><Link to="/forgot">Passwort vergessen?</Link></p> */}
            </form>
        );
    }

}

export default Login;