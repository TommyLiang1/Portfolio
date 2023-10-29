import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInFromLeft, fadeInFromTop } from "./Animations";

const Contact = () => {
  const form = useRef();
  const contactTitle = useAnimation();
  const contactForm = useAnimation();
  const [ref, inView] = useInView();

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

  useEffect(() => {
    if (inView) {
      contactTitle.start("visible");
      contactForm.start("visible");
    }
  }, [contactTitle, contactForm, inView]);

  return (
    <div id="contact">
      <form ref={form} className="contact-form-container" onSubmit={sendEmail}>
        <motion.div
          ref={ref}
          animate={contactTitle}
          initial="hidden"
          variants={fadeInFromLeft}
          className="contact-title"
        >
          Contact Me
        </motion.div>

        <motion.div
          ref={ref}
          animate={contactForm}
          initial="hidden"
          variants={fadeInFromTop}
        >
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
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
