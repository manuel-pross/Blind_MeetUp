import React, { Component } from 'react';
import FooterButton from './FooterButton/FooterButton';
import Wortmarke_OneLine_invertiert_cut from '../../../assets/img/Wortmarke_OneLine_invertiert_cut.png';

import FlagDE from '../../../assets/img/flags/flag-de.svg';
import FlagEN from '../../../assets/img/flags/flag-en.svg';

import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

class Footer extends Component {

    changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    render() {
        const { t } = this.props;
        return (
            <div className="footer container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <p className="footer__heading">{t('Informations')}</p>
                        {this.props.user != null ? <FooterButton link="/" setUser={this.props.setUser} signout>{t("SignIn")}</FooterButton> : <FooterButton link="/login">{t('SignIn')}</FooterButton>}
                        <FooterButton link="/feedback">{t('Feedback')}</FooterButton>
                        <FooterButton link="/kontakt">{t('Contact')}</FooterButton>
                        <FooterButton href link="https://www.hs-furtwangen.de/">{t('HochschuleFurtwangen')}</FooterButton>
                    </div>
                    <div className="col-lg-5">
                        <p className="footer__heading">{t('Legal')}</p>
                        <FooterButton link="/impressum">{t('Impressum')}</FooterButton>
                        <FooterButton link="/datenschutz">{t('DataProtection')}</FooterButton>
                        {/* <FooterButton link="/richtlinien">{t('Guidelines')}</FooterButton> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-8" >
                        <img src={Wortmarke_OneLine_invertiert_cut} className="footer__logo" alt="BlindMeetUp_Logo"></img>
                        <p className="footer__text">{t('AllRightsReserved')}</p>
                    </div>
                    <div className="col-lg-5 col-4">
                        <div className="footer__flags">
                            <img src={FlagDE} onClick={() => this.changeLanguage('de')} className="footer__flag" alt="BlindMeetUp_flag_de" style={{ width: "200px" }}></img>
                            <img src={FlagEN} onClick={() => this.changeLanguage('en')} className="footer__flag" alt="BlindMeetUp_flag_en" style={{ width: "200px" }}></img>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withTranslation('footer')(Footer);