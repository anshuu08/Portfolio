function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "RESTful APIs",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Java",
    "Problem Solving",
    "Data Structures & Algorithms",
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
