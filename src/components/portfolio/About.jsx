// import usePortfolioData from "../data/portfolioData";

import usePortfolioData from "../../data/portfolioData";

export default function About() {
  const { about } = usePortfolioData()

  return (
    <section id="about">
      <div className="section-tag">Who I Am</div>
      <div className="section-title">About Me</div>

      <div className="about-grid">
    
        <div className="about-text">
          {about.desc.map((text, i) => (
            <p key={i} className="about-desc">
              {text}
            </p>
          ))}

          <div className="about-info">
            {about.info.map((item, i) => (
              <div key={i} className="info-row">
                <div className="info-row">
                  <span>{item.label} </span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="experience">
          {about.experience.map((exp, i) => (
            <div key={i} className="exp-card">

              <div className="exp-head">
                <div>
                  <div className="exp-company">{exp.company}</div>

                  <div className="exp-role">{exp.role}</div>
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>

              <div className="exp-pills">
                {exp.tech.map((t, idx) => (
                  <span key={idx} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
