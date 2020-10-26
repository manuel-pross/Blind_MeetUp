import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Dataprotection = () => (
    <React.Fragment>
        <Navbar />
        <div className="container" style={{ marginTop: '100px', marginBottom: '200px' }}>
            <h1>Datenschutzerklärung < br />blindmeetup.hs-furtwangen.de</h1>
            <p className="mb-500">Die nachstehenden Informationen enthalten die gesetzlich vorgesehenen Pflichtangaben zur Anbieterkennzeichnung und weitere Hinweise zur Internetpräsenz „www.blindmeetup.hs-furtwangen.de“  </p>
            <h4 className="subpages__subheading">1. Datenschutz</h4>
            <p className="subpages__subtext">Der Schutz aller personenbezogenen Daten ist für uns ein wichtiges Anliegen. In diesen Datenschutzhinweisen erklären wir, wie wir Ihre personenbezogenen Daten erheben, was wir damit tun, für welche Zwecke und auf welchen Rechtsgrundlagen dies geschieht und welche Rechte und Ansprüche sich damit für Sie verbinden. Unsere Datenschutzhinweise für den Gebrauch unserer Webseite gilt nicht für Ihre Aktivitäten auf den Webseiten von sozialen Netzwerken oder anderen Anbietern, die Sie über die Links auf unserer Webseiter erreichen können. Bitte informieren Sie sich auf den Webseiten dieser Anbieter über deren Datenschutzbestimmungen.</p>
            <h4 className="subpages__subheading">2. Verantwortlicher</h4>
            <p className="subpages__subtext mb-300">Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten ist:</p>
            <p className="subpages__subtext">Hochschule Furtwangen < br /> Robert-Gerwig-Platz 1 < br /> 78120 Furtwangen</p>
        </div>
        <Footer />
    </React.Fragment>
);

export default Dataprotection;