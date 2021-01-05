import React, { useState } from 'react';

import AlertCheck from '../../../assets/img/icons/alert-check.svg';
import ActionCancel from '../../../assets/img/icons/action-cancel.svg';
import { withTranslation } from 'react-i18next';

const ContactForm = (props) => {
    const { t } = props;
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
            //TODO: translation mit googleTranslater. Inhalte überprüfen
            //TODO: delete this?
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
                    <input type="text" name="Name" placeholder={t("yourName")} value={name} onChange={handleUserName} />
                </label>
            </div >
            <div className="mb-100">
                <label className={isEmail ? "contactForm__inputSymbol" : null}  >
                    <input type="email" name="Name" placeholder={t("emailAdress")} value={email} onChange={handleEmail} />
                </label>
            </div>
            <p className="subpages__subtext">{t("referProblem")}</p>
            <div className="mb-200">
                <div className={problem == "Anmeldung" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Anmeldung")}>{t("login")}</div>
                <div className={problem == "Treffen teilnehmen/stornieren" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Treffen teilnehmen/stornieren")}>{t("joinCancel")}</div>
                <div className={problem == "Mein Profil" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Mein Profil")}>{t("profile")}</div>
                <div className={problem == "Sonstiges" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => toggleProblem("Sonstiges")}>{t("other")}</div>
            </div>
            <div className="mb-300">
                <input className="contactForm__inputText" type="text" name="Name" placeholder={t("yourMsg")} value={problemText} onChange={handleProblemText} />
            </div>
            <p className="mb-200 subpages__subtext-small">{t("privacy")}</p>

            <button className="btn btn-primary mr-100 mb-50" type="submit">{t("submit")}</button>
            <div className="btn btn-second" onClick={resetValues}>{t("cancel")}</div>
        </form>

    );

    const formFeedbackText = (
        <div className="guidelines__container mb-600">
            <img src={AlertCheck} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText">{t("feedbackTxt")}</p>
        </div>
    );

    const notCompletedMessage = (
        <div className="guidelines__container">
            <img src={ActionCancel} className="guidelines__icon" alt="BlindMeetUp_action-cancel" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText-error">{t("fillAllFields")}</p>
        </div>
    );


    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '400px' }}>
            <h1>{t("title")}</h1>
            <p className="mb-400">{t("desc")}</p>
            {!isSubmitted ? fomular : formFeedbackText}
            {showFillError ? notCompletedMessage : null}

        </div>
    );
}

export default withTranslation('contactForm')(ContactForm);