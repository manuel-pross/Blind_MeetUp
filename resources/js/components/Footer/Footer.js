import React, { Component } from 'react';

import Wortmarke_OneLine_invertiert from '../../../assets/img/Wortmarke_OneLine_invertiert.png';
import { FaFlagUsa } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className="footer container-fluid">
                <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="col-lg-7">
                        <p className="footer__heading">Informationen</p>
                        <button className="btn btn-second mr-100 footer__button">Anmelden</button>
                        <button className="btn btn-second mr-100 footer__button">Feedback</button>
                        <button className="btn btn-second mr-100 footer__button">Kontakt</button>
                        <button className="btn btn-second mr-100 footer__button">Hochschule Furtwangen</button>
                    </div>
                    <div className="col-lg-5">
                        <p className="footer__heading">Rechtliches</p>
                        <button className="btn btn-second mr-100 footer__button">Impressum</button>
                        <button className="btn btn-second mr-100 footer__button">Datenschutz</button>
                        <button className="btn btn-second mr-100 footer__button">Richtlinien</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-6" >
                        <img src={Wortmarke_OneLine_invertiert} className="footer__logo" alt="BlindMeetUp_Logo"></img>
                        <p className="footer__heading">© 2020 Blind MeetUp. Alle Rechte vorbehalten. Ein Semesterprojekt unterstützt durch die Hochschule Furtwangen.</p>
                    </div>
                    <div className="col-lg-5 col-6">
                        <div style={{ float: "right" }}>
                            <FaFlagUsa size={30} color="white" style={{ marginRight: "10px" }} />
                            <FaFlagUsa size={30} color="white" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;