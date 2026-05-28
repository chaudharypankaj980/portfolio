import "./Skills.css";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "Power BI", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <article className="skill" key={skill.name}>
            <span>{skill.name}</span>
            <small>{skill.level}</small>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
