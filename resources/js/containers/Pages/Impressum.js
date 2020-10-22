import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { withNamespaces } from 'react-i18next';


const Impressum = ({ t }) => (
    <React.Fragment>
        <Navbar />
        <div className="container" style={{ marginTop: '100px' }}>
            <h1>{t('Heading')}</h1 >
            <p>Die nachstehenden Informationen enthalten die gesetzlich vorgesehenen Pflichtangaben zur
                Anbieterkennzeichnung und weitere Hinweise zur Internetpräsenz „www.blindmeetup.hs-furtwangen.de“  </p>
            <p>{t('Welcome to React')}</p>
        </div>
        <Footer />
    </React.Fragment >
);

export default withNamespaces('impressum')(Impressum);