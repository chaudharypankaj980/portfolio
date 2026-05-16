import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2 className="title">Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>E-Commerce Website</h3>
            <p>Responsive shopping website UI.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Modern portfolio with responsive design.</p>
          </div>

          <div className="project-card">
            <h3>Dashboard UI</h3>
            <p>Admin dashboard interface design.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
