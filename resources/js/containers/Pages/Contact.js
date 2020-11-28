import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = (props) => {
    return (
        <React.Fragment>
            <Navbar setUser={props.setUser} user={props.user} />
            <ContactForm />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;