import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import PendingMeeting from './PendingMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import axios from 'axios';
import i18n from '../../i18n';
let testcount = 0
class PendingContainer extends Component {
   state = {
      newMeetingModal: false,

      editMeetingModal: false,
      editMeetingData: {
         id: "",
         date: "",
         place: "",
         specific_place: "",
         members: "",
         max_members: "",
         rating: "",
         img_link: ""
      },
      memberFilter: false,
      maxMeetingSetting: 3,
      maxMeetingSettingMD: 2,
   }

   deleteMeeting = (id) => {
      axios.delete('/api/meeting/' + id).then((response) => {
         this.props.loadMeetings();
      });
   }

   editMeeting = (id, date, place, specific_place, members, max_members, rating, img_link) => {
      this.setState({
         editMeetingData: {
            id,
            date,
            place,
            specific_place,
            members,
            max_members,
            rating,
            img_link
         },
         editMeetingModal: !this.state.editMeetingModal
      })
   }

   newMeetingModalHandler = () => {
      if (this.state.newMeetingModal) {
         this.setState({ newMeetingModal: false });
      } else {
         this.setState({ newMeetingModal: true });
      }
   }

   editMeetingModalHandler = () => {
      if (this.state.editMeetingModal) {
         this.setState({ editMeetingModal: false });
      } else {
         this.setState({ editMeetingModal: true });
      }
   }

   formateDate = (date) => {
      const year = date.slice(0, 4)
      const month = date.slice(5, 7)
      const day = date.slice(8, 10)
      return (day + "." + month + "." + year)
   }

   getThisDay = (date) => {
      const thisDate = new Date(date).getDay()
      switch (thisDate) {
         case 0:
            return "sunday"
         case 1:
            return "monday"
         case 2:
            return "thursday"
         case 3:
            return "wednesday"
         case 4:
            return "tuesday"
         case 5:
            return "friday"
         case 6:
            return "saturday"
      }
   }

   filterClickHandler = (type) => {
      if (type == "group") {
         this.setState({ memberFilter: true })
         this.setSettingState(type)
      } else
         this.setState({ memberFilter: false })
      this.setSettingState(type)
   }

   setSettingState = (type) => {
      let meetingDuoCount = 0;
      let meetingGroupCount = 0;
      let meetingDuoMD = 0;
      let meetingGroupMD = 0;
      this.props.meetings.map(e => {
         if (e.max_members == 2) {
            meetingDuoCount++;
            meetingDuoMD++;
         } else if (e.max_members > 2) {
            meetingGroupCount++
            meetingGroupMD++;
         }
      })
      if (meetingDuoCount > 3) {
         meetingDuoCount = 3
         meetingDuoMD = 2;
      }
      if (meetingGroupCount > 3) {
         meetingGroupCount = 3
         meetingGroupMD = 2;
      }
      if (type == "duo") {
         this.setState({ maxMeetingSetting: meetingDuoCount })
         this.setState({ maxMeetingSettingMD: meetingDuoMD })
      } else {
         this.setState({ maxMeetingSetting: meetingGroupCount })
         this.setState({ maxMeetingSettingMD: meetingGroupMD })
      }
   }

   componentDidMount() {
      this.setSettingState("duo");
   }

   render() {
      const { t } = this.props;

      // function SampleNextArrow(props) {
      //    const { onClick } = props;
      //    return (
      //       <div
      //          className={"slick-arrow slick-next teamSlider__arrow-right"}
      //          onClick={onClick}>
      //          <div className="teamSlider__arrow-right-stroke"></div>
      //       </div>
      //    );
      // }
      // function SamplePrevArrow(props) {
      //    const { onClick } = props;
      //    return (
      //       <div
      //          className={"slick-arrow slick-prev teamSlider__arrow-left"}
      //          onClick={onClick}>
      //          <div className="teamSlider__arrow-left-stroke"></div>
      //       </div>
      //    );
      // }

      // TODO: slideToShow Bedingung für zu viele/wenig Meetings
      const settings = {
         speed: 500,
         slidesToShow: this.state.maxMeetingSetting,
         dots: true,
         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,
         responsive: [
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: this.state.maxMeetingSettingMD,
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            }
         ]
      };

      // TODO: Image Link hinzufügen
      return (
         <div className="container mb-400">
            <div className="pendingContainer">
               <div className="pendingContainer__headlineWrapper">
                  <h2 className="pendingContainer__heading">{t("title")}</h2>
                  <div className="pendingContainer__filterWrapper">
                     <button onClick={() => { this.filterClickHandler("group") }} style={this.state.memberFilter ? { backgroundColor: "#50b375" } : { backgroundColor: "#707070" }} className="pendingContainer__filterTeam">Group</button>
                     <button onClick={() => { this.filterClickHandler("duo") }} style={this.state.memberFilter ? { backgroundColor: "#707070" } : { backgroundColor: "#50b375" }} className="pendingContainer__filterGroup">Duo</button>
                  </div>
               </div>
               <Slider {...settings}>
                  {this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     if (this.state.memberFilter && e.max_members > 2) {
                        return (
                           <PendingMeeting key={i} maxMembers={e.max_members} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} />
                        )
                     } else if (!this.state.memberFilter && e.max_members == 2) {
                        testcount++;
                        return (
                           <PendingMeeting key={i} maxMembers={e.max_members} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} />
                        )
                     }
                  })}
               </Slider>
            </div>
         </div>
      )
   };
};


export default withTranslation('meetUps')(PendingContainer);
   // TODO: delete this
  //    let meetings = this.props.meetings.map((meeting) => {
   //       return (
   //          <ul key={meeting.id}>
   //             {/* <li> <strong>ID: </strong>{meeting.id}</li> */}
   //             <li><strong>type:</strong> {meeting.type}</li>
   //             <li><strong>date:</strong> {meeting.date}</li>
   //             <li><strong>place:</strong> {meeting.place}</li>
   //             <li><strong>members:</strong> {meeting.members}</li>
   //             <li><strong>max_members:</strong> {meeting.max_members}</li>
   //             <li><strong>rating:</strong> {meeting.rating}</li>
   //             {/* <li><strong>img_link:</strong> {meeting.img_link}</li> */}
   //             <button className="btn btn-tertiary"  onClick={() => this.editMeeting(meeting.id, meeting.type, meeting.date, meeting.place, meeting.members, meeting.max_members, meeting.rating, meeting.img_link)}>Bearbeiten</button>
   //             <button className="btn btn-tertiary"  onClick={() => this.deleteMeeting(meeting.id)}>Löschen</button>
   //          </ul>
   //       );
   //    })

   //    return (
   //       <div className="container">
   //          {meetings}
   //          <button className="btn btn-primary" onClick={() => this.newMeetingModalHandler()}>Treffen Hinzufügen</button>
   //          <Modal show={this.state.newMeetingModal} modalClosed={this.newMeetingModalHandler} >
   //             <AddMeetingForm modalHandler={this.newMeetingModalHandler} loadMeetings={this.props.loadMeetings} />
   //          </Modal>
   //          <Modal show={this.state.editMeetingModal} modalClosed={this.editMeetingModalHandler}>
   //             <EditMeetingForm modalHandler={this.editMeetingModalHandler} editMeetingData={this.state.editMeetingData} loadMeetings={this.props.loadMeetings} />
   //          </Modal>
   //       </div>
   //    );

   // class MeetUps extends Component {