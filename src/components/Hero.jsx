import React from "react";
import "./Hero.css";
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-text">
          <h3>Hello, I'm</h3>

          <h1>
            Pankaj <span>Chaudhary</span>
          </h1>

          <p>
            Frontend Developer creating modern websites and user interfaces.
          </p>

          <button>View Projects</button>
        </div>

        <div className="hero-image">
          <img src={profile} alt="img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
