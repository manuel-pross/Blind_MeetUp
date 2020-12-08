import React, { useState, useEffect } from "react";

import moment from 'moment';

const EditMeetingForm = props => {
    const [type, setType] = useState("");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");
    const [members, setMembers] = useState("");
    const [max_members, setMaxMembers] = useState("");
    const [rating, seRating] = useState("");
    const [img_link, setImgLink] = useState("");


    useEffect(() => {
        setType(props.editMeetingData.type);
        setDate(moment(props.editMeetingData.date).format("YYYY-MM-DDTkk:mm") == "Invalid date" ? "" : moment(props.editMeetingData.date).format("YYYY-MM-DDTkk:mm"));
        setPlace(props.editMeetingData.place);
        setMembers(props.editMeetingData.members);
        setMaxMembers(props.editMeetingData.max_members);
        seRating(props.editMeetingData.rating);
        setImgLink(props.editMeetingData.img_link);
    }, [props]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMeeting();
    }

    const updateMeeting = () => {
        axios.put('https://blind-meetup.dm.hs-furtwangen.de/Blind_MeetUp/public/api/meeting/' + props.editMeetingData.id, { type: type, place: place, date: date, members: members, max_members: max_members, rating: rating, img_link: img_link })
            .then((response) => {
                props.loadTask();
                props.modalHandler();
                resetEditState();
            })
    }

    const resetEditState = () => {
        setType("");
        setDate("");
        setPlace("");
        setMembers("");
        setMaxMembers("");
        seRating("");
        setImgLink("");
    }

    const cancelHandler = () => {
        props.modalHandler();
        resetEditState();
    }

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <h4 className="mt-0">Termin bearbeiten</h4>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Type:</p>
                <input className="mb-100" type="text" name="type" placeholder="Type" value={type} onChange={(event) => setType(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}> Date:</p>
                <input className="mb-100" type="datetime-local" name="date" placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}> Place:</p>
                <input className="mb-100" type="text" name="place" placeholder="Place" value={place} onChange={(event) => setPlace(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Members:</p>
                <input className="mb-100" type="number" name="members" placeholder="Members" value={members} onChange={(event) => setMembers(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Max Members:</p>
                <input className="mb-100" type="number" name="max_Members" placeholder="Max Members" value={max_members} onChange={(event) => setMaxMembers(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Rating:</p>
                <input className="mb-100" type="number" name="rating" placeholder="Rating" value={rating} onChange={(event) => seRating(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Img Link:</p>
                <input className="mb-100" type="text" name="img_link" placeholder="Img Link" value={img_link} onChange={(event) => setImgLink(event.target.value)} />
            </div>

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={cancelHandler} >Abbrechen</div>
        </form>
    );

}

export default EditMeetingForm;
