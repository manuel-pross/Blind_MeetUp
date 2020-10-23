import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ContactForm />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;