function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      {/* About Card */}
      <div className="pink-card">
        <p>
          I’m a full stack developer with a strong interest in building complete
          end-to-end web applications. I enjoy working across the frontend and
          backend, turning ideas into scalable and user-friendly products.
        </p>
        <p>
          I’m passionate about learning new technologies, writing clean code,
          and continuously improving my problem-solving and development skills.
        </p>
        <p>
          Strong background in system design, troubleshooting, and distributed systems, with a 
          track record of delivering applications that improve performance and automate workflows. 
          Fluent in English with strong communication skills, able to participate 
          in technical discussions effectively.  
        </p>
      </div>

      <h2>Education</h2>

      {/* Education Card 1 */}
      <div className="pink-card">
        <h3>Bachelor of Technology in Computer Science and Engineering</h3>
        <p className="edu-place">
          Vellore Institute of Technology, Amaravati
        </p>
        <span className="edu-date">June 2022 – July 2026</span>
      </div>

      {/* Education Card 2 */}
      <div className="pink-card">
        <h3>Board of Intermediate Education</h3>
        <p className="edu-place">Sarada College</p>
        <span className="edu-date">June 2020 – March 2022</span>
      </div>
    </section>
  );
}

export default About;
