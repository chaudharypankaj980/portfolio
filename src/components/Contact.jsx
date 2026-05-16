import React from "react";
import "./Contact.css";
import my_cv from "../assets/my_cv.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <h2 className="title">Contact</h2>

        <div className="contact-icons">
          <a
            href="chaudharypankaj057@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/chaudharypankaj980"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pankaj-chaudhary-b7b34529a"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="https://wa.me/916290591977" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        <a href={my_cv} download className="resume-btn">
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Contact;
