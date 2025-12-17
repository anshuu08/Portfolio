import formal from "../assets/formal.jpg";
function Hero({ name }) {
  return (
    <section className="hero" id="home">
      {/* LEFT SIDE: text content */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span>{name}</span>
        </h1>

        <p>
          I’m a full stack developer passionate about building end-to-end web
          applications. I enjoy turning ideas into fully functional products.
        </p>

        <button
  className="hero-btn"
  onClick={() => window.open("https://github.com/anshuu08", "_blank")}
>
  View My Projects
</button>

      </div>

      {/* RIGHT SIDE: image */}
      <div className="hero-right">
        <img src={formal} alt="Anshu profile" />
      </div>
    </section>
  );
}

export default Hero;
