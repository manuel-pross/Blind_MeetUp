import React, { useState } from "react";

const EditMeetingForm = (props) => {
    const [type, setType] = useState("");
    const [place, setPlace] = useState("");
    const [members, setMembers] = useState("");
    const [max_members, setMaxMembers] = useState("");
    const [rating, seRating] = useState("");
    const [img_link, setImgLink] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMeeting();
    }

    const updateMeeting = () => {
        axios.put('/api/meeting/' + props.editMeetingData.id, { type: type, place: place, members: members, max_members: max_members, rating: rating, img_link: img_link })
            .then((response) => {
                props.loadTask();
                props.modalHandler();
                resetEditState();
            })
    }

    const resetEditState = () => {
        setType("");
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
            <div>
                Type:
            <input className="mb-100" type="text" name="type" placeholder="Type" value={type} onChange={(event) => setType(event.target.value)} />
            </div>
            <div>
                Place:
            <input className="mb-100" type="text" name="place" placeholder="Place" value={place} onChange={(event) => setPlace(event.target.value)} />
            </div>
            <div>
                Members:
            <input className="mb-100" type="number" name="members" placeholder="Members" value={members} onChange={(event) => setMembers(event.target.value)} />
            </div>
            <div>
                Max Members:
            <input className="mb-100" type="number" name="max_Members" placeholder="Max Members" value={max_members} onChange={(event) => setMaxMembers(event.target.value)} />
            </div>
            <div>
                Rating:
            <input className="mb-100" type="number" name="rating" placeholder="Rating" value={rating} onChange={(event) => seRating(event.target.value)} />
            </div>
            <div>
                Img Link:
            <input className="mb-100" type="text" name="img_link" placeholder="Img Link" value={img_link} onChange={(event) => setImgLink(event.target.value)} />
            </div>

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={cancelHandler} >Abbrechen</div>
        </form>
    );

}

export default EditMeetingForm;
