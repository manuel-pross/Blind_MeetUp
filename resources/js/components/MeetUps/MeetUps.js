import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/AddMeetingForm/AddMeetingForm';

import axios from 'axios';

class MeetUps extends Component {
   state = {
      newMeetingModal: false
   }

   deleteMeeting = (id) => {

      axios.delete('/api/meeting/' + id).then((response) => {
         this.props.loadTask();

      });
   }

   modalHandler = () => {
      if (this.state.newMeetingModal) {
         this.setState({ newMeetingModal: false });
      } else {
         this.setState({ newMeetingModal: true });
      }
   }



   render() {
      let meetings = this.props.meetings.map((meeting) => {
         return (
            <ul key={meeting.id}>
               <li>{meeting.id}</li>
               <li>{meeting.type}</li>
               <li>{meeting.place}</li>
               {/* <button
                  color="success"
                  size="sm"
                  className="mr-2"
                  onClick={this.updateMeeting(this, meeting.id, meeting.type, meeting.place)}>Edit</button> */}
               <button
                  color="danger"
                  size="sm"
                  onClick={() => this.deleteMeeting(meeting.id)}>Delete</button>
            </ul>

         );
      })

      return (
         <div>
            {meetings}
               <button
               color="danger"
               size="sm"
               onClick={() => this.modalHandler()}>Treffen Hinzufügen</button>
            <Modal show={this.state.newMeetingModal} modalClosed={this.modalHandler}>
               <AddMeetingForm  modalHandler={this.modalHandler}/>
            </Modal>
         </div>
      );
   }
}

export default MeetUps;