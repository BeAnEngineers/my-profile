export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Neeraj</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MLOps</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
          I'm fully prepared to provide MLOps consultancy support, ready to help streamline
            <br /> your machine learning processes and ensure efficiency. Let's optimize your operations together!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
