import React from 'react';
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
