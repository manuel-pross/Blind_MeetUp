import React, { useState } from "react";

const AddMeetingForm = (props) => {
    const [type, setLocation] = useState("pending"); 
    const [place, setPlace] = useState("Mensa");
    const [members, setMembers] = useState(0);
    const [max_members, setMaxMembers] = useState(5);
    const [rating, seRating] = useState(5);
    const [img_link, setIMGLink] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(location);
        addMeeting();
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const handleMaxMembers = (event) => {
        setMaxMembers(event.target.value);
    }

    const addMeeting = () => {
        const sendingData = { type: type, place: place, members: members, max_members: max_members, rating: rating, img_link: img_link };
        console.log(sendingData);
        axios.post('/api/meeting', {
            type: "pending",
            place: "Mensa",
            members: 3,
            max_mebers: 6,
            rating: 1,
            img_link: null
        }).then((response) => {
            // let { tasks } = this.state;
            // this.loadTask();
            // this.setState({
            //     tasks,
            //     newTaskModal: false,
            //     newTaskData: {
            //         name: "",
            //         description: ""
            //     }
            // });
            console.log('gesetzt')
        })
        // .catch(error => {
        //     console.log(error)
        // });
    }


    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div>
                Ort/Platz
            <input className="mb-100" type="text" name="Ort" placeholder="Ort/Platz" value={place} onChange={handleLocation} />
            </div>
            <div>
                Anzahl der maximalen Teilnehmer
            <input className="mb-100" type="number" name="max_Members" placeholder="Anzahl der maximalen Teilnehmer" value={max_members} onChange={handleMaxMembers} />
            </div>

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={props.modalHandler} >Abbrechen</div>
        </form>
    );

}

export default AddMeetingForm;
