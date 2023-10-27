import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nwqbd4s",
        "template_12ygvq6",
        form.current,
        "UbF-i9_HOSQvO7C9a"
      )
      .then((res) => {
        alert("Email sent!");
      })
      .catch((err) => {
        alert(err);
      });

    e.target.reset();
  };

  return (
    <div id="contact">
      <form ref={form} className="contact-form-container" onSubmit={sendEmail}>
        <div className="contact-title">Contact Me</div>

        <input
          className="contact-input"
          type="text"
          placeholder="Full Name*"
          name="user_name"
          required
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Email*"
          name="user_email"
          required
        />
        <textarea
          className="contact-message"
          type="text"
          placeholder="Message*"
          name="message"
          required
        />
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
