import React from 'react';
import hfuIcon from '../../../assets/img/Hochschule_Furtwangen_logo.svg'

import { withTranslation } from 'react-i18next';

const textIconHFU = (props) => {

    const { t } = props;
    return (
        <div className="container mb-600">
            <div className="text-icon">
                <p className="text-icon__heading-mobile">{t("headingMobile")}</p>
                <p className="text-icon__heading-desktop">{t("headingDesktop")}</p>
                <a href="https://www.hs-furtwangen.de/">
                    <img className="text-icon__img" src={hfuIcon}></img>
                </a>
            </div>
        </div>
    )
};

export default withTranslation('textIcon')(textIconHFU);