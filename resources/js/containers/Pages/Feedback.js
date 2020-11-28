import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Footer from '../../components/Footer/Footer';

const Feedback = (props) => (
    <React.Fragment>
        <Navbar setUser={props.setUser} user={props.user} />
        <FeedbackForm />
        <Footer />
    </React.Fragment>
);

export default Feedback;