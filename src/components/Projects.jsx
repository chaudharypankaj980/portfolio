import "./Projects.css";

const projects = [
  {
    title: "My Website",
    description:
      "Responsive shopping website UI with product browsing, clean cards, and mobile-ready layouts.",
    stack: "React / CSS",
    link: "https://my-website-pied-six-74.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio focused on responsive design, clear sections, and smooth navigation.",
    stack: "React / Vite",
    link: "https://portfolio-pearl-ten-14.vercel.app/",
  },
  {
    title: "Dashboard UI",
    description:
      "Admin dashboard interface with organized data sections and a practical visual hierarchy.",
    stack: "JavaScript / CSS",
    link: "https://menu-app-murex.vercel.app/menu/pushpa-hotel",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            onClick={() => window.open(project.link, "_blank")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                window.open(project.link, "_blank");
              }
            }}
            tabIndex={0}
            role="button"
          >
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
