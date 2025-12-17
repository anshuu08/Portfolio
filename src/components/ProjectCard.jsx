function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <span className="project-tech">{tech}</span>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
