import React, { useState, useEffect } from 'react';
import './Contact.css';

import whatsappIcon from '../../assets/icons8-whatsapp (5).svg';
import linkedinIcon from '../../assets/icons8-linkedin.svg';
import githubIcon from '../../assets/icons8-github (1).svg';
import twitterIcon from '../../assets/icons8-twitterx.svg';

const initialFormState = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [messageStatus, setMessageStatus] = useState('');

  useEffect(() => {
    if (messageStatus) {
      const timer = setTimeout(() => {
        setMessageStatus('');
      }, 5000); // Increased timeout for better UX
      return () => clearTimeout(timer);
    }
  }, [messageStatus]);

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessageStatus('Invalid email format. Please enter a valid email.');
      return;
    }

    const formData = {
      ...form,
      access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY, // Use environment variable
    };

    try {
      // Use a backend proxy instead of calling Web3Forms directly (fix CSP issue)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result); // Debugging API response

      if (result.success) {
        setMessageStatus('Your message has been sent successfully!');
        setForm(initialFormState);
      } else {
        setMessageStatus(result.message || 'Failed to send the message, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessageStatus('Error: Could not send message.');
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-t">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-sect">
        <div className="contact-left">
          <div className="contact-detail">
            <h2>Email</h2>
            <p>jonanutong@gmail.com</p>
          </div>

          <div className="contact-detail">
            <h2>Contact</h2>
            <p>+211 987003030<br />+250 791899857</p>
          </div>

          <div className="contact-detail">
            <p>Let's get in touch and build your dream web applications.</p>
            <a href="https://wa.me/+250791899857"><img src={whatsappIcon} alt="WhatsApp" /></a>
            <a href="https://github.com/Jonan23"><img src={githubIcon} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/jonan-fermo-06813b275"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://x.com/JonanUtong33061"><img src={twitterIcon} alt="Twitter" /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="contact-buttons">
            <button type="submit" className="contact-submit">Submit</button>
          </div>
        </form>
      </div>

      {messageStatus && <div className="message-status">{messageStatus}</div>}
    </div>
  );
};

export default Contact;
