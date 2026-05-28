import "./Hero.css";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow">Frontend Developer</p>

        <h1>
          Hi, I'm Pankaj Chaudhary.
          <span> I build clean, responsive web experiences.</span>
        </h1>

        <p>
          I create modern interfaces with React, JavaScript, and thoughtful UI
          details that make websites feel fast, clear, and easy to use.
        </p>

        <div className="hero-actions">
          <a className="button-link primary" href="#projects">
            View Projects
          </a>
          <a className="button-link secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-stats" aria-label="Portfolio highlights">
          <div>
            <strong>10+</strong>
            <span>Certificates</span>
          </div>
          <div>
            <strong>MERN</strong>
            <span>Internship</span>
          </div>
          <div>
            <strong>BCA</strong>
            <span>Student</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img src={profile} alt="Pankaj Chaudhary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
