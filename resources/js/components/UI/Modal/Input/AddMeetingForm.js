import React, { useState } from "react";

const AddMeetingForm = (props) => {
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [specific_place, setSpecific_place] = useState("");
    const [members, setMembers] = useState(0);
    const [max_members, setMaxMembers] = useState("");
    const [rating, seRating] = useState("");
    const [img_link, setImgLink] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addMeeting();
    }

    const addMeeting = () => {
        setMembers(0);
        let sendingData = { specific_place: specific_place, place: place, date: date, members: members, max_members: max_members, rating: rating, img_link: img_link };
        // console.log(sendingData);
        // let dummyData = { date: "2020-11-11T16:52", place: "Mensa", specific_place: "lalelu", members: 1, max_members: 2, rating: 1, img_link: "adsfsfd" }
        // console.log(dummyData);
        axios.post('/api/meeting', sendingData).then((response) => {
            props.loadMeetings();
            props.modalHandler();
            resetEditState();
        })
    }

    const resetEditState = () => {
        setPlace("");
        setSpecific_place("");
        setMembers(0);
        setMaxMembers("");
        seRating("");
        setImgLink("");
    }

    const setPlaces = (value) => {
        setPlace(value)
        switch (value) {
            case "I-Bau/I-Build":
                setImgLink("/images/ibau.jpg")
                break;
            case "Mensa":
                setImgLink("/images/mensa.jpg")
                break;
            case "Cafeedelweiss":
                setImgLink("/images/cafeedelweiss.jpg")
                break;
            case "Cafeteria":
                setImgLink("/images/cafeteria.jpg")
                break;
            case "Engel":
                setImgLink("/images/engel.jpg")
                break;
        }
    }

    const cancelHandler = () => {
        props.modalHandler();
        resetEditState();
    }

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <h4 className="mt-0">Termin hinzufügen</h4>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}> Place:</p>
                <select name="location" onChange={(event) => setPlaces(event.target.value)}>
                    <option value="">Auswählen...</option>
                    <option value="I-Bau/I-Build">I-Bau</option>
                    <option value="Mensa">Mensa</option>
                    <option value="Cafeedelweiss">Cafeedelweiss</option>
                    <option value="Cafeteria">Cafeteria</option>
                    <option value="Engel">Engel</option>
                </select>
                {/* <input className="mb-100" type="text" name="place" placeholder="Place" value={place} onChange={(event) => setPlace(event.target.value)} /> */}
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Specific Place:</p>
                <input className="mb-100" type="text" name="specific_place" placeholder="Specific Place" value={specific_place} onChange={(event) => setSpecific_place(event.target.value)} />
            </div>
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}> Date:</p>
                <input className="mb-100" type="datetime-local" name="date" placeholder="Date" value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            {/* <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Members:</p>
                <input className="mb-100" type="number" name="members" placeholder="Members" value={members} onChange={(event) => setMembers(event.target.value)} />
            </div> */}
            <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Max Members:</p>
                <input className="mb-100" type="number" name="max_Members" placeholder="Max Members" value={max_members} onChange={(event) => setMaxMembers(event.target.value)} />
            </div>
            {/* <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Rating:</p>
                <input className="mb-100" type="number" name="rating" placeholder="Rating" value={rating} onChange={(event) => seRating(event.target.value)} />
            </div> */}
            {/* <div>
                <p className="mb-0 mt-0" style={{ display: 'inline-block' }}>Img Link:</p>
                <select name="locationImage" onChange={(event) => setImgLink(event.target.value)}>
                    <option value="">Auswählen...</option>
                    <option value="/images/ibau.jpg">I-Bau</option>
                    <option value="/images/mensa.jpg">Mensa</option>
                    <option value="/images/cafeedelweiss">Cafeedelweiss</option>
                    <option value="/images/cafeteria.jpg">Cafeteria</option>
                    <option value="/images/engel.jpg">Engel</option>
                </select>
                <input className="mb-100" type="text" name="img_link" placeholder="Img Link" value={img_link} onChange={(event) => setImgLink(event.target.value)} />
            </div> */}

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={cancelHandler} >Abbrechen</div>
        </form>
    );

}

export default AddMeetingForm;
