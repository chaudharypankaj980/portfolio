import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Responsive shopping website UI with product browsing, clean cards, and mobile-ready layouts.",
    stack: "React / CSS",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio focused on responsive design, clear sections, and smooth navigation.",
    stack: "React / Vite",
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard interface with organized data sections and a practical visual hierarchy.",
    stack: "JavaScript / CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.stack}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
