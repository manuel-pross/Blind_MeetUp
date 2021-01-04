import React, { Component } from 'react';

import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import AdminMeeting from '../../../components/MeetUps/AdminMeeting';
import { withTranslation } from 'react-i18next';
import Slider from "react-slick";
import Modal from '../../../components/UI/Modal/Modal';
import AddMeetingForm from '../../../components/UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../../../components/UI/Modal/Input/EditMeetingForm';

import axios from 'axios'


class DashboardAdmin extends Component {
    state = {
        meetings: [],

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
        }
    }

    loadMeetings = () => {
        axios.get('/api/meetings').then((response) => {
            console.log(response)
            console.log(response.data)
            if (this.props.user) {
                this.setState({
                    meetings: response.data
                });
            }
        });
    }

    componentDidMount() {
        // console.log(this.props.user);
        if (this.props.user) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            this.loadMeetings();
        }
    }


    deleteMeeting = (id) => {

        axios.delete('/api/meeting/' + id).then((response) => {
            this.loadMeetings();
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

    render() {
        const { t } = this.props;

        const settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
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
        return (
            <React.Fragment>
                <Navbar setUser={this.props.setUser} user={this.props.user} />
                <DashboardHeader user={this.props.user} />
                <h1>Admin</h1>
                <Slider {...settings}>
                {this.state.meetings.map((e, i) => {
                    const time = e.date.slice(11, 16);
                    return (
                        <React.Fragment key={i}>
                            <AdminMeeting key={i} meetings={this.state.meetings} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} />
                            {/* <PendingMeeting  place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} /> */}
                            <button className="btn btn-tertiary" onClick={() => this.editMeeting(e.id, e.date, e.place, e.specific_place, e.members, e.max_members, e.rating, e.img_link)}>Bearbeiten</button>
                            <button className="btn btn-tertiary" onClick={() => this.deleteMeeting(e.id)}>Löschen</button>
                        </React.Fragment>
                    )
                })}
                </Slider>

                <button className="btn btn-primary" onClick={() => this.newMeetingModalHandler()}>Treffen Hinzufügen</button>
                <Modal show={this.state.newMeetingModal} modalClosed={this.newMeetingModalHandler} >
                    <AddMeetingForm modalHandler={this.newMeetingModalHandler} loadMeetings={this.loadMeetings} />
                </Modal>
                <Modal show={this.state.editMeetingModal} modalClosed={this.editMeetingModalHandler}>
                    <EditMeetingForm modalHandler={this.editMeetingModalHandler} editMeetingData={this.state.editMeetingData} loadMeetings={this.loadMeetings} />
                </Modal>


                <Footer setUser={this.props.setUser} user={this.props.user} />
            </React.Fragment>
        );

    }
}

export default withTranslation('meetUps')(DashboardAdmin);