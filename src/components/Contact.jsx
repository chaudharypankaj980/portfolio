import "./Contact.css";
import my_cv from "../assets/my_cv.pdf";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="title">Contact</h2>

      <div className="contact-panel">
        <p>
          Have a project, internship opportunity, or collaboration in mind? I am
          open to frontend and MERN stack work.
        </p>

        <div className="contact-icons">
          <a href="mailto:chaudharypankaj057@gmail.com" aria-label="Email Pankaj">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/chaudharypankaj980"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pankaj-chaudhary-b7b34529a"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/916290591977"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <a href={my_cv} download className="resume-btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
