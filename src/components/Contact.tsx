import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
    if (name && email && message) {
      // handle form submission
      console.log('Form submitted');
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form-wrapper">
        <h1>Contact Me</h1>
        <p>I'm here to help you bring your ideas to life. Get in touch!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span className="error-message">Name is required.</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="error-message">Email is required.</span>}
          </div>

          <div className="form-field">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <span className="error-message">Message is required.</span>}
          </div>

          <div className="submit-button">
            <button type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
