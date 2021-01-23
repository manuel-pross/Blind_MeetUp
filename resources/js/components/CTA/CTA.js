import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const cta = (props) => {

    const { t } = props;
    return (
        <div className="container mb-600">
            <div className="cta">
                <h3 className="cta__heading">{t("heading")}</h3>
                <div className="cta__buttons">
                    <Link className="btn btn-primary cta__button-item" to={"/login"}>
                        {t("logIn")}
                    </Link>
                    <Link className="btn btn-second cta__button-item" to={"/feedback"}>
                        {t("feedback")}
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default withTranslation('cta')(cta);