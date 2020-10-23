import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Footer from '../../components/Footer/Footer';

const Feedback = () => (
    <React.Fragment>
        <Navbar />
        <FeedbackForm />
        <Footer />
    </React.Fragment>
);

export default Feedback;