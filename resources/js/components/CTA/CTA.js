import React from 'react';

import { withTranslation } from 'react-i18next';

const cta = (props) => {

    const { t } = props;
    return (
        <div className="container mb-600">
            <div className="cta">
                <h3 className="cta__heading">{t("heading")}</h3>
                <div className="cta__buttons">
                    <a className="cta__button-item btn btn-primary" href="https://www.hs-furtwangen.de/">{t("logIn")}</a>
                    <button className="cta__button-item btn btn-second">{t("feedback")}</button>
                </div>
            </div>
        </div>
    )
};

export default withTranslation('cta')(cta);