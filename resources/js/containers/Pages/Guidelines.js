import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

import AlertCross from '../../../assets/img/icons/alert-cross.svg';

const Guidelines = (props) => (
    <React.Fragment>
        <Navbar setUser={props.setUser} user={props.user} />
        <div className="container" style={{ marginTop: '100px', marginBottom: '200px' }}>
            <h1>Richtlinien im Überblick</h1>
            <p className="mb-500">Damit alle Nutzer und Nutzerinnen im Umgang mit der Anwendung den Spaß nicht verlieren haben wir bestimmte Regelungen aufgestellt, die es zu beachten gilt.</p>
            <h4 className="subpages__subheading">Grundlegendes</h4>
            <p className="subpages__subtext">Wir erwarten von allen Teilnehmern und Teilnehmerinnen einen respektvollen Umgang mit allen, die die Anwendung nutzen.</p>
            <h4 className="subpages__subheading">Untersagt/Verboten</h4>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="guidelines__container">
                        <img src={AlertCross} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
                        <p className="subpages__subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="guidelines__container">
                        <img src={AlertCross} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
                        <p className="subpages__subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="guidelines__container">
                        <img src={AlertCross} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
                        <p className="subpages__subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="guidelines__container">
                        <img src={AlertCross} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
                        <p className="subpages__subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="guidelines__container">
                        <img src={AlertCross} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
                        <p className="subpages__subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="guidelines__container">
                        <img src={AlertCross} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
                        <p className="subpages__subtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </div>
            </div>
            <h4 className="subpages__subheading">Missbrauch oder widriges Verhalten melden</h4>
            <p className="subpages__subtext mb-300">Du bist der Meinung, dass sich jemand in der Anwendung selbst oder während eines Treffens falsch benommen hat, eine oder mehrere unserer Richtlinien nicht eingehalten hat? Bitte kontaktiere uns über das Kontaktformular und wir werden uns so schnell wie möglich mit dir in Kontakt setzen um eine Lösung für das Problem zu finden.</p>
            <Link to="/kontakt"><button className="btn btn-primary">Kontaktieren</button></Link>
        </div>
        <Footer setUser={props.setUser} user={props.user} />
    </React.Fragment>
);

export default Guidelines;  