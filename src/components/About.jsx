import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <h2 className="title">About Me</h2>

        <div className="about-container">
          <p>
            I am a passionate frontend developer who loves building modern and
            responsive websites using react and JavaScript. I'm, currently
            pursuing BCA from the institute of advance education and research.
            I’m good with html, CSS, MS office, and I really enjoy working in a
            team, solving problems, and learning new things.
          </p>

          {/* Timeline Section */}
          <div className="timeline">
            <div className="timeline-item">
              <h3>🎓 Education</h3>
              <p className="bullet-item">
                Bachelor of Computer Applications (BCA) - Institute of Advance
                Education and Research (IAER) (2023 - Present)
              </p>
              <br />
              <p className="bullet-item">
                Higher Secondary Education (NEB) - Bhanu Memorial English
                Boarding Secondary School (2019 - 2021)
              </p>
              <br />
              <p className="bullet-item">
                Secondary Education (NEB) - Jaycee Bal Sadan MA VI (2010 - 2019)
              </p>
            </div>

            <div className="timeline-item">
              <h3>💼 Experience</h3>
              <p>
                <p>Billing System with AI Integration</p>
                <br />
                <p className="bullet-item">
                  Role: MERN Stack Developer Intern | Euphoria GenX / Techno
                  Exponent
                </p>

                <p className="bullet-item">
                  Tech Stack: MongoDB, Express.js, React.js, Node.js, AI
                  Integration
                </p>
                <p className="bullet-item">
                  Key Contribution: Developed a 120-hour comprehensive billing
                  system.
                </p>
                <p className="bullet-item">
                  Highlight: Successfully integrated AI functionalities to
                  optimize billing workflows and data processing, enhancing
                  system automation.
                </p>
              </p>
            </div>

            <div className="timeline-item">
              <h3>🏆 Certificates</h3>
              <p>
                Completed certifications in
                <p className="bullet-item">HTML</p>
                <p className="bullet-item">CSS</p>
                <p className="bullet-item">JavaScript</p>
                <p className="bullet-item">Excel</p>
                <p className="bullet-item">React</p>
                <p className="bullet-item">Node.js</p>
                <p className="bullet-item">Innovation Ambassador</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
