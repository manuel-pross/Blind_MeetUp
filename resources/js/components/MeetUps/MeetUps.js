import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import axios from 'axios';

class MeetUps extends Component {
   state = {
      newMeetingModal: false,

      editMeetingModal: false,
      editMeetingData: {
         id: "",
         type: "",
         date: "",
         place: "",
         members: "",
         max_members: "",
         rating: "",
         img_link: ""
      }
   }

   deleteMeeting = (id) => {

      axios.delete('/api/meeting/' + id).then((response) => {
         this.props.loadTask();
      });
   }

   editMeeting = (id, type, date, place, members, max_members, rating, img_link) => {
      this.setState({
         editMeetingData: {
            id,
            type,
            date,
            place,
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

   render() {
      let meetings = this.props.meetings.map((meeting) => {
         return (
            <ul key={meeting.id}>
               {/* <li> <strong>ID: </strong>{meeting.id}</li> */}
               <li><strong>type:</strong> {meeting.type}</li>
               <li><strong>date:</strong> {meeting.date}</li>
               <li><strong>place:</strong> {meeting.place}</li>
               <li><strong>members:</strong> {meeting.members}</li>
               <li><strong>max_members:</strong> {meeting.max_members}</li>
               <li><strong>rating:</strong> {meeting.rating}</li>
               {/* <li><strong>img_link:</strong> {meeting.img_link}</li> */}
               <button className="btn btn-tertiary"  onClick={() => this.editMeeting(meeting.id, meeting.type, meeting.date, meeting.place, meeting.members, meeting.max_members, meeting.rating, meeting.img_link)}>Bearbeiten</button>
               <button className="btn btn-tertiary"  onClick={() => this.deleteMeeting(meeting.id)}>Löschen</button>
            </ul>
         );
      })

      return (
         <div className="container">
            {meetings}
            <button className="btn btn-primary" onClick={() => this.newMeetingModalHandler()}>Treffen Hinzufügen</button>
            <Modal show={this.state.newMeetingModal} modalClosed={this.newMeetingModalHandler} >
               <AddMeetingForm modalHandler={this.newMeetingModalHandler} loadTask={this.props.loadTask} />
            </Modal>
            <Modal show={this.state.editMeetingModal} modalClosed={this.editMeetingModalHandler}>
               <EditMeetingForm modalHandler={this.editMeetingModalHandler} editMeetingData={this.state.editMeetingData} loadTask={this.props.loadTask} />
            </Modal>
         </div>
      );
   }
}

// class MeetUps extends Component {
//    render() {
//       const { t } = this.props;

//       const meetings = [1, 2, 3, 4]

//       function SampleNextArrow(props) {
//          const { onClick } = props;
//          return (
//             <div
//                className={"slick-arrow slick-next teamSlider__arrow-right"}
//                onClick={onClick}>
//                <div className="teamSlider__arrow-right-stroke"></div>
//             </div>
//          );
//       }

//       function SamplePrevArrow(props) {
//          const { onClick } = props;
//          return (
//             <div
//                className={"slick-arrow slick-prev teamSlider__arrow-left"}
//                onClick={onClick}>
//                <div className="teamSlider__arrow-left-stroke"></div>
//             </div>
//          );
//       }

//       const settings = {
//          speed: 500,
//          slidesToShow: 3,
//          slidesToScroll: 1,
//          dots: true,
//          // nextArrow: <SampleNextArrow />,
//          // prevArrow: <SamplePrevArrow />,
//          responsive: [
//             {
//                breakpoint: 1199,
//                settings: {
//                   slidesToShow: 1,
//                }
//             },
//             // {
//             //    breakpoint: 767,
//             //    settings: {
//             //       slidesToShow: 1,
//             //    }
//             // }
//          ]
//       };

//       // const settings = {
//       //    speed: 500,
//       //    slidesToShow: 2,
//       //    slidesToScroll: 1,
//       //    dots: true,
//       //    // nextArrow: <SampleNextArrow />,
//       //    // prevArrow: <SamplePrevArrow />,
//       //    responsive: [
//       //       {
//       //          breakpoint: 1920,
//       //          settings: {
//       //             slidesToShow: 2,
//       //          }
//       //       },
//       //       {
//       //          breakpoint: 1199,
//       //          settings: {
//       //             slidesToShow: 2,
//       //          }
//       //       },
//       //       {
//       //          breakpoint: 767,
//       //          settings: {
//       //             slidesToShow: 1,
//       //          }
//       //       }
//       //    ]
//       // };

//       return (
//          <div className="container mb-400">
//             <div className="meetUps">
//                <h2 className="meetUps__heading">{t("title")}</h2>
//                <Slider {...settings}>
//                   {meetings.map((i) => {
//                      return (
//                         <PastMeeting key={i} />
//                      )
//                   })}
//                </Slider>
//             </div>
//          </div>
//       )
//    };
// };

export default withTranslation('meetUps')(MeetUps);