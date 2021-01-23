import React, { Component } from "react";

import { withTranslation } from "react-i18next";
import Collapsible from "react-collapsible";

class ProfilContent extends Component {
    render() {
        const { t } = this.props;
        const contentStyle = this.props.displayContent ? "block" : "none";

        return (
            <div className="FAQ__content" style={{ display: contentStyle }}>
                <h4 className="FAQ__content__title">{t("Profil.title1")}</h4>
                <p className="FAQ__content__text">{t("Profil.content1")}</p>
            </div>
        );
    }
}

export default withTranslation("faq")(ProfilContent);
