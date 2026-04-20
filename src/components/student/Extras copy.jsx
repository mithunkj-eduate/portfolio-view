import { useAnimateIn } from "../hooks/useAnimateIn";
import "./Extras.css";

const CAT_ICONS = { Debating: "🎤", Arts: "🎨", Music: "🎵", default: "⭐" };

export function Activities({ data }) {
  const { extra_curriculars } = data;
  const { ref, visible } = useAnimateIn();
  if (!extra_curriculars?.length) return null;

  return (
    <section id="activities" className="section extras-section">
      <div className="container" ref={ref}>
        <p className="section-label">Beyond Academics</p>
        <h2 className="section-title">Extra-Curricular Activities</h2>
        <div className="divider" />
        <div className="extras-grid">
          {extra_curriculars.map((ec, i) => (
            <div
              key={ec.activity}
              className={`extras-card animate-in delay-${Math.min(i + 1, 5)} ${visible ? "visible" : ""}`}
            >
              <div className="extras-card-icon">{CAT_ICONS[ec.category] || CAT_ICONS.default}</div>
              <div className="extras-category">{ec.category}</div>
              <h3 className="extras-activity">{ec.activity}</h3>
              <span className="badge">{ec.role}</span>
              {ec.achievements?.length > 0 && (
                <ul className="extras-achievements">
                  {ec.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              )}
              {ec.reflection && <p className="extras-reflection">{ec.reflection}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Leadership({ data }) {
  const { leadership_and_responsibility } = data;
  const { ref, visible } = useAnimateIn();
  if (!leadership_and_responsibility?.length) return null;

  return (
    <section id="leadership" className="section leadership-section">
      <div className="container" ref={ref}>
        <p className="section-label">Responsibility</p>
        <h2 className="section-title">Leadership & Responsibility</h2>
        <div className="divider" />
        <div className="leadership-list">
          {leadership_and_responsibility.map((l, i) => (
            <div
              key={l.title}
              className={`leadership-item animate-in delay-${Math.min(i + 1, 4)} ${visible ? "visible" : ""}`}
            >
              <div className="leadership-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="leadership-content">
                <div className="leadership-header">
                  <h3 className="leadership-title">{l.title}</h3>
                  <span className="badge">{l.grade}</span>
                </div>
                <ul className="leadership-resp">
                  {(l.responsibilities || []).map((r) => <li key={r}>{r}</li>)}
                </ul>
                {l.impact && (
                  <div className="leadership-impact">
                    <span className="leadership-impact-icon">↑</span> {l.impact}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications({ data }) {
  const { certifications } = data;
  const { ref, visible } = useAnimateIn();
  if (!certifications?.length) return null;

  return (
    <section className="section certs-section">
      <div className="container" ref={ref}>
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <div className="divider" />
        <div className="certs-grid">
          {certifications.map((c, i) => (
            <div
              key={c.title}
              className={`cert-card animate-in delay-${Math.min(i + 1, 5)} ${visible ? "visible" : ""}`}
            >
              <div className="cert-icon">🎓</div>
              <div className="cert-info">
                <h4 className="cert-title">{c.title}</h4>
                <div className="cert-meta">
                  <span className="cert-platform">{c.platform}</span>
                  <span className="cert-year">{c.year}</span>
                </div>
              </div>
              <div className="cert-verified-badge">✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROFICIENCY_LEVELS = { Fluent: 95, Advanced: 80, Intermediate: 60, Basic: 35 };

export function Skills({ data }) {
  const { job_ready_skills } = data;
  const { ref, visible } = useAnimateIn();
  if (!job_ready_skills) return null;

  return (
    <section id="skills" className="section skills-section">
      <div className="container" ref={ref}>
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills & Languages</h2>
        <div className="divider" />

        <div className="skills-layout">
          {/* Technical */}
          <div className={`skills-block animate-in ${visible ? "visible" : ""}`}>
            <h3 className="skills-block-title">Technical Skills</h3>
            <div className="skills-tech-chips">
              {(job_ready_skills.technical || []).map((s) => (
                <span key={s} className="skills-tech-chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className={`skills-block animate-in delay-2 ${visible ? "visible" : ""}`}>
            <h3 className="skills-block-title">Soft Skills</h3>
            <div className="skills-soft-list">
              {(job_ready_skills.soft_skills || []).map((s, i) => (
                <div key={s} className="skills-soft-item">
                  <span className="skills-soft-name">{s}</span>
                  <div className="progress-track" style={{ width: "120px" }}>
                    <div
                      className="progress-fill"
                      style={{ width: visible ? `${88 - i * 4}%` : "0%", transitionDelay: `${i * 0.12}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`skills-block animate-in delay-3 ${visible ? "visible" : ""}`}>
            <h3 className="skills-block-title">Languages</h3>
            <div className="skills-langs">
              {(job_ready_skills.languages || []).map((l) => (
                <div key={l.language} className="skills-lang-item">
                  <div className="skills-lang-info">
                    <span className="skills-lang-name">{l.language}</span>
                    <span className="skills-lang-level">{l.proficiency}</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: visible ? `${PROFICIENCY_LEVELS[l.proficiency] || 50}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
