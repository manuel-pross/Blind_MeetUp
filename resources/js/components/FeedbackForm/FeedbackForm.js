import React, { useState } from 'react';
import { FaRegSmile, FaRegMeh, FaRegFrown } from 'react-icons/fa';
import { IconContext } from "react-icons";

import AlertCheck from '../../../assets/img/icons/alert-check.svg';

const FeedbackForm = () => {
    const [feedbackSmiley, setFeedbackSmiley] = useState(null);
    const [feedbackDevice, setFeedbackDevice] = useState(null);
    const [feedbackText, setFeedbackText] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

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

        console.log("Smiley: " + feedbackSmiley);
        console.log("Device: " + feedbackDevice);
        console.log("Text: " + feedbackText);
        setIsSubmitted(true);
    }

    const resetValues = () => {
        setFeedbackSmiley(null);
        setFeedbackDevice(null);
        setFeedbackText("");
    }

    const fomular = (
        <form onSubmit={handleSubmit} className="feedbackForm">
            <p className="subpages__subtext">Wie gefällt dir die Anwendung?</p>
            {[...Array(3)].map((element, i) => {
                const feedbackOptions = [
                    "good",
                    "ok",
                    "bad"
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
            <p className="subpages__subtext">Mit welchem Gerät nutzt du unsere Anwendung? </p>
            <div className="mb-200">
                <div className={feedbackDevice == "PC/Laptop" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => togglefeedbackDevice("PC/Laptop")}>PC/Laptop</div>
                <div className={feedbackDevice == "Tablet-PC" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => togglefeedbackDevice("Tablet-PC")}>Tablet-PC</div>
                <div className={feedbackDevice == "Smartphone" ? "btn btn-select btn-select-active feedbackForm__button" : "btn btn-select feedbackForm__button"} onClick={() => togglefeedbackDevice("Smartphone")}>Smartphone</div>
            </div>
            <div className="mb-300">
                <input type="text" name="feedbackText" placeholder="Möchtest du uns noch etwas mitteilen?" value={feedbackText} onChange={handleUserText} />
            </div >
            <input className="btn btn-primary mr-100 mb-100" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={resetValues}>Abbrechen</div>
        </form>
    );

    const formFeedbackText = (
        <div className="guidelines__container">
            <img src={AlertCheck} className="guidelines__icon" alt="BlindMeetUp_alert-cross" style={{ width: "200px", float: 'left' }}></img>
            <p className="subpages__subtext feedbackForm__feedbackText">Vielen Dank, wir haben dein Feedback erhalten.</p>
        </div>

    );


    return (
        <React.Fragment>
            <h1>Feedback geben</h1>
            <p className="mb-400">Wir freuen uns sehr, dass du hier her gefunden hast! Nur mithilfe deines ehrlichen und ausführlichen Feedbacks können wir unser Angebot und die Anwendung stetig verbessern. Also hau in die Tasten und lass uns von dir hören.</p>

            {!isSubmitted ? fomular : formFeedbackText}


        </React.Fragment>
    );
}

export default FeedbackForm;