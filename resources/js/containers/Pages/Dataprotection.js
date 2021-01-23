import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { withTranslation } from 'react-i18next';

const Dataprotection = (props) => {
    const { t } = props;
    return (
        <React.Fragment>
            <Navbar setUser={props.setUser} user={props.user} />
            <div className="container" style={{ marginTop: '100px', marginBottom: '200px' }}>
                <h2>{t("title")}</h2>
                <p>{t("content")}</p>
            </div>
            <Footer setUser={props.setUser} user={props.user} />
        </React.Fragment>
    )
};
export default withTranslation('dataProtection')(Dataprotection);