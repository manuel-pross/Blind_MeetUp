import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { withTranslation } from 'react-i18next';


const Impressum = ({ t }) => {
    // const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
            <Navbar />
            <div className="container mb500" style={{ marginTop: '100px', marginBottom: '200px'}}>
                <h1 className="impressum__heading">{t('Heading')}</h1 >
                <p>{t('Heading text')}</p>
                <h4 className="impressum__subheading">{t('Provider')}</h4>
                <p>{t('Provider informations')}</p>
                <h4 className="impressum__subheading">{t('Project management')}</h4>
                <p>{t('Project management informations')}</p>
                <h4 className="impressum__subheading">{t('Contact')}</h4>
                <p>{t('Contact informations')}</p>
                <h4 className="impressum__subheading">{t('Liability for content')}</h4>
                <p>{t('Liability for content text')}</p>
                <h4 className="impressum__subheading">{t('Disclaimer of liability')}</h4>
                <p>{t('Disclaimer of liability text')}</p>
                <h4 className="impressum__subheading">{t('Copyright')}</h4>
                <p>{t('Copyright text')}</p>
                <h4 className="impressum__subheading">{t('Technical implementation')}</h4>
                <p>{t('Technical implementation text')}</p>
            </div>
            <Footer />
        </React.Fragment >
    );
}

export default withTranslation('impressum')(Impressum);