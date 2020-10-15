import React, { Component } from 'react';
import FooterButton from './FooterButton/FooterButton';
import Wortmarke_OneLine_invertiert_cut from '../../../assets/img/Wortmarke_OneLine_invertiert_cut.png';

import FlagDE from '../../../assets/img/flags/flag-de.svg';
import FlagEN from '../../../assets/img/flags/flag-en.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <p className="footer__heading">Informationen</p>
                        <FooterButton href link="https://www.hs-furtwangen.de/">Anmelden</FooterButton>
                        <FooterButton link="/feedback">Feedback</FooterButton>
                        <FooterButton link="/kontakt">Kontakt</FooterButton>
                        <FooterButton href link="https://www.hs-furtwangen.de/">Hochschule Furtwangen</FooterButton>
                    </div>
                    <div className="col-lg-5">
                        <p className="footer__heading">Rechtliches</p>
                        <FooterButton link="/impressum">Impressum</FooterButton>
                        <FooterButton link="/datenschutz">Datenschutz</FooterButton>
                        <FooterButton link="/richtlinien">Richtlinien</FooterButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-8" >
                        <img src={Wortmarke_OneLine_invertiert_cut} className="footer__logo" alt="BlindMeetUp_Logo"></img>
                        <p className="footer__text">© 2020 Blind MeetUp. Alle Rechte vorbehalten. Ein Semesterprojekt unterstützt durch die Hochschule Furtwangen.</p>
                    </div>
                    <div className="col-lg-5 col-4">
                        <div className="footer__flags">
                            <img src={FlagDE} className="footer__flag" alt="BlindMeetUp_flag_de"></img>
                            <img src={FlagEN} className="footer__flag" alt="BlindMeetUp_flag_en"></img>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;