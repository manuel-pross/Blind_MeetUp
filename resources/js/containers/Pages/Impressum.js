import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { withTranslation } from 'react-i18next';


const Impressum = ({ t }) => {
    // const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
            <Navbar />
            <div className="container mb-1000" style={{ marginTop: '100px' }}>
                <h1 className="subpages__heading">{t('Heading')}</h1 >
                <p className="mb-500">{t('Heading text')}</p>
                <h4 className="subpages__subheading">{t('Provider')}</h4>
                <p className="subpages__subtext">{t('Provider informations')}</p>
                <h4 className="subpages__subheading">{t('Project management')}</h4>
                <p className="subpages__subtext">{t('Project management informations')}</p>
                <h4 className="subpages__subheading">{t('Contact')}</h4>
                <p className="subpages__subtext">{t('Contact informations')}</p>
                <h4 className="subpages__subheading">{t('Liability for content')}</h4>
                <p className="subpages__subtext">{t('Liability for content text')}</p>
                <h4 className="subpages__subheading">{t('Disclaimer of liability')}</h4>
                <p className="subpages__subtext">{t('Disclaimer of liability text')}</p>
                <h4 className="subpages__subheading">{t('Copyright')}</h4>
                <p className="subpages__subtext">{t('Copyright text')}</p>
                <h4 className="subpages__subheading">{t('Technical implementation')}</h4>
                <p className="subpages__subtext">{t('Technical implementation text')}</p>
            </div>
            <Footer />
        </React.Fragment >
    );
}

export default withTranslation('impressum')(Impressum);