import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>

      <div className="about-container">
        <p className="about-intro">
          I am a passionate frontend developer who loves building modern,
          responsive websites with React and JavaScript. I am currently pursuing
          a BCA from the Institute of Advance Education and Research, and I enjoy
          teamwork, problem solving, and learning new technologies.
        </p>

        <div className="timeline">
          <article className="timeline-item">
            <h3>Education</h3>
            <ul>
              <li>
                Bachelor of Computer Applications (BCA) - Institute of Advance
                Education and Research (IAER) (2023 - Present)
              </li>
              <li>
                Higher Secondary Education (NEB) - Bhanu Memorial English
                Boarding Secondary School (2019 - 2021)
              </li>
              <li>
                Secondary Education (NEB) - Jaycee Bal Sadan MA VI (2010 - 2019)
              </li>
            </ul>
          </article>

          <article className="timeline-item featured">
            <h3>Experience</h3>
            <h4>Billing System with AI Integration</h4>
            <ul>
              <li>Role: MERN Stack Developer Intern | Euphoria GenX / Techno Exponent</li>
              <li>Tech Stack: MongoDB, Express.js, React.js, Node.js, AI Integration</li>
              <li>Developed a 120-hour comprehensive billing system.</li>
              <li>
                Integrated AI features to optimize billing workflows, improve
                data processing, and support automation.
              </li>
            </ul>
          </article>

          <article className="timeline-item">
            <h3>Certifications</h3>
            <ul className="tag-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Excel</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Innovation Ambassador</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
