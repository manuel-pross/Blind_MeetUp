import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { withTranslation } from 'react-i18next';


const Impressum = ({ t }) => {
    // const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
            <Navbar />
            <div className="container" style={{ marginTop: '100px' }}>
                <h1>{t('Heading')}</h1 >
                <p>{t('Heading text')}</p>
            </div>
            <Footer />
        </React.Fragment >
    );
}

export default withTranslation('impressum')(Impressum);