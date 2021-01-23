import React, { useState } from 'react';
import { FaRegSmile, FaRegMeh, FaRegFrown } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { withTranslation } from 'react-i18next';

import { Email } from '../../smtp';

import AlertCheck from '../../../assets/img/icons/alert-check.svg';
import ActionCancel from '../../../assets/img/icons/action-cancel.svg';

const FeedbackForm = (props) => {
    const { t } = props;
    const [feedbackSmiley, setFeedbackSmiley] = useState(null);
    const [feedbackDevice, setFeedbackDevice] = useState(null);
    const [feedbackText, setFeedbackText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showFillError, setShowFillError] = useState(false);

    const toggleFeedbackSmiley = (feedbackValue) => {
        setFeedbackSmiley(feedbackValue)
    }
    const togglefeedbackDevice = (feedbackValue) => {
        setFeedbackDevice(feedbackValue)
    }
    const handleUserText = (event) => {
        setFeedbackText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: translation mit googleTranslater. Inhalte überprüfen
        //TODO: delete this?
        if (feedbackSmiley != null && feedbackDevice != null && feedbackText != "") {
            setShowFillError(false);
            setIsSubmitted(true);
            goToTop();
            sendEmail();
        } else {
            setShowFillError(true);
        }
    }

    const sendEmail = () => {
        Email.send({
            SecureToken: "6a874af8-d44a-48ec-9f35-d9e49db014d3",
            To: 'blindlunch@web.de',
            From: "blindlunch@web.de",
            Subject: `Feedback | Formular `,
            Body:
                `
                <p> <strong>Feedback Formular: </strong> <br/><br/>
                <strong>Die Anwendung gefällt mir: </strong> <br/>
                ${feedbackSmiley}  <br/> <br/>
                <strong>Ich nutze die Anwendung auf folgednem Gerät:  </strong> <br/>
                ${feedbackDevice}  <br/> <br/>
                <strong>Freitext: </strong><br/> 
                ${feedbackText} <p/>
            `
        }).then((message) => {
            // console.log(message);
        }).catch(err => {
            return err
        });
    }

    const resetValues = () => {
        setShowFillError(false);
        setFeedbackSmiley(null);
        setFeedbackDevice(null);
        setFeedbackText("");
    }
    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    const fomular = (
        <form onSubmit={handleSubmit} className="feedbackForm">
            <p className="subpages__subtext">{t("yourRate")}</p>
            {[...Array(3)].map((element, i) => {
                const feedbackOptions = [
                    "gut",
                    "ok",
                    "nicht gut"
                ];
                const icons = [
                    <FaRegSmile className="feedbackForm__smiley" color="#ffffff" size='50' />,
                    <FaRegMeh className="feedbackForm__smiley" color="#ffffff" size='50' />,
                    <FaRegFrown className="feedbackForm__smiley" color="#ffffff" size='50' />
                ];
                return (
                    <label key={i}>
                        <input type="radio" name="feebackSmiley" value={feedbackOptions[i]} onClick={() => toggleFeedbackSmiley(feedbackOptions[i])} />
                        <IconContext.Provider value={{ className: feedbackSmiley == feedbackOptions[i] ? "feedbackForm__smiley-container feedbackForm__smiley-active" : "feedbackForm__smiley-container" }}>
                            {icons[i]}
                        </IconContext.Provider>
                    </label>
                );
            })}
            <p className="subpages__subtext">{t("whichDevice")}</p>
            <div className="mb-200">
                <a><div className={feedbackDevice == "PC/Laptop" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => togglefeedbackDevice("PC/Laptop")}>PC/Laptop</div></a>
                <a><div className={feedbackDevice == "Tablet-PC" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => togglefeedbackDevice("Tablet-PC")}>Tablet-PC</div></a>
                <a> <div className={feedbackDevice == "Smartphone" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => togglefeedbackDevice("Smartphone")}>Smartphone</div></a>
            </div>
            <div className="mb-300">
                <input type="text" name="feedbackText" placeholder={t("tellUs")} value={feedbackText} onChange={handleUserText} />
            </div >
            <a><div className="btn btn-primary mr-100 mb-100" onClick={(e) => handleSubmit(e)}>{t("submit")}</div></a>
            <a><div className="btn btn-second" onClick={resetValues}>{t("cancel")}</div></a>
        </form>
    );

    const formFeedbackText = (
        <div className="guidelines__container">
            <img src={AlertCheck} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText">{t("thank")}</p>
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

            <h1>{t("giveFeedback")}</h1>
            <p className="mb-400">{t("desc")}</p>

            {!isSubmitted ? fomular : formFeedbackText}
            {showFillError ? notCompletedMessage : null}
        </div>
    );
}

export default withTranslation('feedbackForm')(FeedbackForm);