import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Wortmarke_OneLine_invertiert_cut from '../../../assets/img/Wortmarke_OneLine_invertiert_cut.png';
import { FaFlagUsa } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className="footer container-fluid">
                <div className="row" style={{ marginBottom: "10px" }}>
                    <div className="col-lg-7">
                        <p className="footer__heading">Informationen</p>
                        <button className="btn btn-second mr-100 footer__button">Anmelden</button>
                        <Link to="/feedback"><button className="btn btn-second mr-100 footer__button">Feedback</button></Link>
                        <Link to="/kontakt"><button className="btn btn-second mr-100 footer__button">Kontakt</button></Link>
                        <a href="https://www.hs-furtwangen.de/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-second mr-100 footer__button">Hochschule Furtwangen</button>
                        </a >
                    </div>
                    <div className="col-lg-5">
                        <p className="footer__heading">Rechtliches</p>
                        <Link to="/impressum"><button className="btn btn-second mr-100 footer__button">Impressum</button></Link>
                        <Link to="/datenschutz"><button className="btn btn-second mr-100 footer__button">Datenschutz</button></Link>
                        <Link to="/richtlinien"><button className="btn btn-second mr-100 footer__button">Richtlinien</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-8" >
                        <img src={Wortmarke_OneLine_invertiert_cut} className="footer__logo" alt="BlindMeetUp_Logo"></img>
                        <p className="footer__text">© 2020 Blind MeetUp. Alle Rechte vorbehalten. Ein Semesterprojekt unterstützt durch die Hochschule Furtwangen.</p>
                    </div>
                    <div className="col-lg-5 col-4">
                        <div style={{ float: "right", display: 'flex', alignItems: 'center', height: '100%' }}>
                            <FaFlagUsa size={30} color="white" style={{ marginRight: "10px", display: 'block' }} />
                            <FaFlagUsa size={30} color="white" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;