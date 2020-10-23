import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import Footer from '../../components/Footer/Footer';

const Feedback = () => (
    <React.Fragment>
        <Navbar />
        <div className="container" style={{ marginTop: '100px', marginBottom: '200px' }}>
            <FeedbackForm />
        </div>
        <Footer />
    </React.Fragment>
);

export default Feedback;