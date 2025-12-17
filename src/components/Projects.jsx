import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "AI-Based Skincare Recommendation App",
      description:
        "A full-stack web application that provides personalized skincare recommendations.",
      tech: "Node.js, Express, MongoDB, EJS",
      link: "https://glowmuse.onrender.com/",
    },
    {
      title: "Prep-Pilot (AI Interview Preparation Platform)",
      description:
        "An AI-driven platform offering personalized interview guidance and preparation tools.",
      tech: "Next.js, Tailwind CSS, ShadCN, LLM APIs",
      link: "https://ai-prep-pilot-4.onrender.com/",
    },
    {
      title: "Java Stock Trading Simulation System",
      description:
        "A Java-based trading simulation system implementing real-time order matching.",
      tech: "Java, DSA, Concurrency,OOPS,Multithreading",
      link: "https://github.com/anshuu08/AdvancedStockTradingSystem",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
