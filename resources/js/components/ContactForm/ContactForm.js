import React, { useState } from 'react';

import AlertCheck from '../../../assets/img/icons/alert-check.svg';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [problem, setProblem] = useState(null);
    const [problemText, setProblemText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleUserName = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const toggleProblem = (feedbackValue) => {
        setProblem(feedbackValue);
    }
    const handleProblemText = (event) => {
        setProblemText(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Problem: " + problem);
        console.log("Problem Text: " + problemText);
        setIsSubmitted(true);
        goToTop();
    }
    const resetValues = () => {
        setName("");
        setEmail("");
        setProblem(null);
        setProblemText("");
    }
    const goToTop = () => {
        window.scrollTo(0, 0);
    }


    const fomular = (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div className="mb-100">
                <input type="text" name="Name" placeholder="Dein Name" value={name} onChange={handleUserName} />
            </div >
            <div className="mb-100">
                <input type="email" name="Name" placeholder="Deine Mail-Adresse" value={email} onChange={handleEmail} />
            </div>
            <p className="subpages__subtext">Worauf bezieht sich das Problem?</p>
            <div className="mb-200">
                <div className={problem == "Anmeldung" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Anmeldung")}>Anmeldung</div>
                <div className={problem == "Treffen teilnehmen/stornieren" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Treffen teilnehmen/stornieren")}>Treffen teilnehmen/stornieren</div>
                <div className={problem == "Mein Profil" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Mein Profil")}>Mein Profil</div>
                <div className={problem == "Sonstiges" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Sonstiges")}>Sonstiges</div>
            </div>
            <div className="mb-300">
                <input className="contactForm__inputText" type="text" name="Name" placeholder="Deine ausführliche Nachricht an uns" value={problemText} onChange={handleProblemText} />
            </div>
            <p className="mb-200 subpages__subtext-small">Mit dem Absenden dieses Formular erklärst du dich einverstanden, dass wir zum Zweck der Kontaktaufnahme die übermittelten personenbezogenen Daten vorübergehend speichern dürfen. Mehr dazu findest du in unserer Datenschutzerklärung.</p>
            <input className="btn btn-primary mr-100 mb-100" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={resetValues}>Abbrechen</div>
        </form>

    );

    const formFeedbackText = (
        <div className="guidelines__container mb-600">
            <img src={AlertCheck} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText">Vielen Dank, Wir haben haben deine Anfrage erhalten und werden uns demnächst bei dir melden.</p>
        </div>
    );

    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '400px' }}>
            <h1>Kontaktformular</h1>
            <p className="mb-400">Du hast eine Frage zu unserer Anwendung oder ein bestehendes Problem? Wir helfen dir gerne. Bitte fülle das Formular vollständig aus, sodass wir wissen, worum es geht.</p>
            {!isSubmitted ? fomular : formFeedbackText}
        </div>
    );
}

export default ContactForm;