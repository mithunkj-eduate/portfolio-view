import usePortfolioData from "../data/portfolioData";

export default function Hero() {
  const { hero } = usePortfolioData();
  function convertDriveToImageUrl(driveUrl) {
    // Extract file ID using regex
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);

    if (!match) {
      console.error("Invalid Google Drive URL");
      return null;
    }

    const fileId = match[1];

    // Return thumbnail URL (best for <img>)
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
  }

  const driveLink = hero.image ? hero.image : "";

  const imageUrl = convertDriveToImageUrl(driveLink);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-photo-wrap">
        <div className="hero-photo-overlay"></div>
        {hero.image && imageUrl ? (
          <img src={imageUrl} className="hero-photo" />
        ) : null}
      </div>

      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>

        <h1>
          {hero.name} <br />
          <span className="accent">{hero.highlight}</span>
        </h1>

        <p className="hero-subtitle">{hero.subtitle}</p>
        <p className="hero-desc">{hero.desc}</p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects">
            View Projects →
          </a>
          <a className="btn btn-outline" href="#contact">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          {hero.stats.map((s, i) => (
            <div key={i}>
              <div className="stat-num">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
