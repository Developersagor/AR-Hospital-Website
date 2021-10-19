import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <form className="contact-form">
        <h3>Contact With Us</h3>
        <input type="text" placeholder="your name" className="box" />
        <input type="email" placeholder="your email" className="box" />
        <input type="tel" placeholder="subject" className="box" />
        <textarea
          placeholder="your message"
          className="box"
          cols="30"
          rows="10"
        ></textarea>
        <Link to="/about">
          <button className="detail-btn">Send Message</button>
        </Link>
      </form>
    </div>
  );
};

export default Contact;
