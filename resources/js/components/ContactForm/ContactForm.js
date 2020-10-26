import React, { useState } from 'react';

import AlertCheck from '../../../assets/img/icons/alert-check.svg';
import ActionCancel from '../../../assets/img/icons/action-cancel.svg';


const ContactForm = () => {
    const [name, setName] = useState("");
    const [isName, setIsName] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    const [problem, setProblem] = useState(null);
    const [problemText, setProblemText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showFillError, setShowFillError] = useState(false);


    const handleUserName = (event) => {
        console.log(event.target.value);
        if (event.target.value.length >= 3) {
            setIsName(true);
        } else {
            setIsName(false);
        }
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        let re = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
        if (event.target.value.match(re)) {
            setIsEmail(true);
        } else {
            setIsEmail(false);
        }
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
        if (isName && isEmail && problem != null && problemText != "") {
            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Problem: " + problem);
            console.log("Problem Text: " + problemText);
            setShowFillError(false);
            setIsSubmitted(true);
            goToTop();
        } else {
            setShowFillError(true);
        }

    }
    const resetValues = () => {
        setIsName(false);
        setIsName(false);
        setShowFillError(false);
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
                <label className={isName ? "contactForm__inputSymbol" : null} >
                    <input type="text" name="Name" placeholder="Dein Name" value={name} onChange={handleUserName} />
                </label>
            </div >
            <div className="mb-100">
                <label className={isEmail ? "contactForm__inputSymbol" : null}  >
                    <input type="email" name="Name" placeholder="Deine Mail-Adresse" value={email} onChange={handleEmail} />
                </label>
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

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={resetValues}>Abbrechen</div>
        </form>

    );

    const formFeedbackText = (
        <div className="guidelines__container mb-600">
            <img src={AlertCheck} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText">Vielen Dank, Wir haben haben deine Anfrage erhalten und werden uns demnächst bei dir melden.</p>
        </div>
    );

    const notCompletedMessage = (
        <div className="guidelines__container">
            <img src={ActionCancel} className="guidelines__icon" alt="BlindMeetUp_action-cancel" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText-error">Bitte alle Felder korrekt ausfüllen</p>
        </div>
    );


    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '400px' }}>
            <h1>Kontaktformular</h1>
            <p className="mb-400">Du hast eine Frage zu unserer Anwendung oder ein bestehendes Problem? Wir helfen dir gerne. Bitte fülle das Formular vollständig aus, sodass wir wissen, worum es geht.</p>
            {!isSubmitted ? fomular : formFeedbackText}
            {showFillError ? notCompletedMessage : null}

        </div>
    );
}

export default ContactForm;