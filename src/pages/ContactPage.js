import React from 'react';
import Navigation from "../components/Navigation";
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
