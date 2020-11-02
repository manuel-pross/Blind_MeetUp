import React, { useState } from "react";

const AddMeetingForm = (props) => {
    const [location, setLocation] = useState("");
    const [maxMembers, setMaxMembers] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(location);
        console.log(maxMembers);
        addMeeting();
        console.log("submitted")
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const handleMaxMembers = (event) => {
        setMaxMembers(event.target.value);
    }

    const addMeeting = () => {
        // axios.post('/api/meeting', { location, maxMembers }).then((response) => {
        //     let { tasks } = this.state;
        //     this.loadTask();
        //     this.setState({
        //         tasks,
        //         newTaskModal: false,
        //         newTaskData: {
        //             name: "",
        //             description: ""
        //         }
        //     });
        //     console.log('gesetzt')
        // });
    }


    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div>
                Ort/Platz
            <input className="mb-100" type="text" name="Ort" placeholder="Ort/Platz" value={location} onChange={handleLocation} />
            </div>
            <div>
                Anzahl der maximalen Teilnehmer
            <input className="mb-100" type="number" name="max_Members" placeholder="Anzahl der maximalen Teilnehmer" value={maxMembers} onChange={handleMaxMembers} />
            </div>

            <input className="btn btn-primary mr-100 mb-50" type="submit" value="Abschicken" />
            <div className="btn btn-second" onClick={props.modalHandler} >Abbrechen</div>
        </form>
    );

}

export default AddMeetingForm;
