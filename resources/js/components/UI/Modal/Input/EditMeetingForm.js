import React, { useState, useEffect } from "react";

import moment from 'moment';

const EditMeetingForm = props => {
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [specific_place, setSpecific_place] = useState("");
    const [members, setMembers] = useState("");
    const [max_members, setMaxMembers] = useState("");
    const [rating, seRating] = useState("");
    const [img_link, setImgLink] = useState("");

    useEffect(() => {
        setPlace(props.editMeetingData.place);
        setDate(moment(props.editMeetingData.date).format("YYYY-MM-DDTkk:mm") == "Invalid date" ? "" : moment(props.editMeetingData.date).format("YYYY-MM-DDTkk:mm"));
        setSpecific_place(props.editMeetingData.specific_place);
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
        axios.put('/api/meeting/' + props.editMeetingData.id, { date: date, place: place, specific_place: specific_place, members: members, max_members: max_members, rating: rating, img_link: img_link })
            .then((response) => {
                props.loadMeetings();
                props.modalHandler();
                resetEditState();
            })
    }

    const resetEditState = () => {
        setPlace("");
        setDate("");
        setSpecific_place("");
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
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}> Place:</p>
                <input className="mb-100" type="text" name="place" placeholder="Place" value={place} onChange={(event) => setPlace(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}> Date:</p>
                <input className="mb-100" type="datetime-local" name="date" placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Specific Place:</p>
                <input className="mb-100" type="text" name="specific_place" placeholder="Specific Place" value={specific_place} onChange={(event) => setSpecific_place(event.target.value)} />
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
                <input className="mb-100" type="text" name="img_link" placeholder="Img Link" value={img_link == null ? "link ist Null in DB" : img_link} onChange={(event) => setImgLink(event.target.value)} />
            </div>

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={cancelHandler} >Abbrechen</div>
        </form>
    );

}

export default EditMeetingForm;
