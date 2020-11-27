import React from 'react';
import hfuIcon from '../../../assets/img/Hochschule_Furtwangen_logo.svg'

import { withTranslation } from 'react-i18next';

const textIconHFU = (props) => {

    const { t } = props;
    return (
        <div className="container mb-600">
            <div className="text-icon">
                <h3 className="text-icon__heading-mobile">{t("headingMobile")}</h3>
                <h3 className="text-icon__heading-desktop">{t("headingDesktop")}</h3>
                <img className="text-icon__img" src={hfuIcon}></img>
            </div>
        </div>
    )
};

export default withTranslation('textIcon')(textIconHFU);