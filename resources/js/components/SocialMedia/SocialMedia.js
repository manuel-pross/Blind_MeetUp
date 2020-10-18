import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"

const socialMediaIcons = () => (
    <div className="container mb-400">
        <div className="social-media">
            <h3 className="social-media__heading">Du willst mehr vom Projekt sehen?<br />Folge uns!</h3>
            <div className="social-media__icons">
                <a href="https://www.instagram.com/blindmeetup_fuwa/" className="social-media__link"><FaInstagram className="social-media__icon" size={32}/></a>
                <a href="https://de-de.facebook.com/" className="social-media__link"><FaFacebookF className="social-media__icon" size={32}/></a>
                <a href="https://twitter.com/?lang=de" className="social-media__link"><FaTwitter className="social-media__icon" size={32}/></a>
            </div>
        </div>
    </div>
);

export default socialMediaIcons;