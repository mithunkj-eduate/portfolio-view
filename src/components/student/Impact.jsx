import { useAnimateIn } from "../hooks/useAnimateIn";
import "./Impact.css";

export function Impact({ data }) {
  const { impact_portfolio } = data;
  const { ref, visible } = useAnimateIn();
  if (!impact_portfolio?.length) return null;

  return (
    <section id="impact" className="section impact-section">
      <div className="container" ref={ref}>
        <p className="section-label">Community</p>
        <h2 className="section-title">Impact Portfolio</h2>
        <div className="divider" />
        <div className="impact-grid">
          {impact_portfolio.map((item, i) => (
            <div
              key={item.title}
              className={`impact-card animate-in delay-${Math.min(i + 1, 4)} ${visible ? "visible" : ""}`}
            >
              <div className="impact-card-year">{item.year}</div>
              <h3 className="impact-card-title">{item.title}</h3>
              <p className="impact-card-desc">{item.description}</p>
              <div className="impact-metrics">
                {(item.impact_metrics || []).map((m) => (
                  <div key={m} className="impact-metric-pill">{m}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Verification({ data }) {
  const { verification } = data;
  const { ref, visible } = useAnimateIn();
  if (!verification) return null;

  return (
    <section id="verify" className="section verify-section">
      <div className="container" ref={ref}>
        <p className="section-label">Trust</p>
        <h2 className="section-title">Verified & Trusted</h2>
        <div className="divider" />

        <div className="verify-layout">
          {/* Trust badges */}
          <div className={`verify-badges animate-in ${visible ? "visible" : ""}`}>
            <div className={`verify-badge-card ${verification.school_verified ? "verified" : ""}`}>
              <div className="verify-badge-icon">🏫</div>
              <div>
                <div className="verify-badge-label">School Verified</div>
                <div className="verify-badge-status">{verification.school_verified ? "Confirmed" : "Pending"}</div>
              </div>
              {verification.school_verified && <div className="verify-check">✓</div>}
            </div>
            <div className={`verify-badge-card ${verification.parent_verified ? "verified" : ""}`}>
              <div className="verify-badge-icon">👨‍👩‍👦</div>
              <div>
                <div className="verify-badge-label">Parent Verified</div>
                <div className="verify-badge-status">{verification.parent_verified ? "Confirmed" : "Pending"}</div>
              </div>
              {verification.parent_verified && <div className="verify-check">✓</div>}
            </div>
            <div className={`verify-badge-card ${verification.certificates_uploaded ? "verified" : ""}`}>
              <div className="verify-badge-icon">📄</div>
              <div>
                <div className="verify-badge-label">Certificates Uploaded</div>
                <div className="verify-badge-status">{verification.certificates_uploaded ? "Uploaded" : "Pending"}</div>
              </div>
              {verification.certificates_uploaded && <div className="verify-check">✓</div>}
            </div>
          </div>

          {/* Verified by */}
          {verification.verified_by?.length > 0 && (
            <div className={`verify-by animate-in delay-2 ${visible ? "visible" : ""}`}>
              <h3 className="verify-by-title">Endorsed By</h3>
              {verification.verified_by.map((v) => (
                <div key={v.name} className="verify-person">
                  <div className="verify-person-avatar">
                    {v.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </div>
                  <div className="verify-person-info">
                    <strong>{v.name}</strong>
                    <span className="verify-person-role">{v.role}</span>
                    {v.verification_note && (
                      <p className="verify-person-note">"{v.verification_note}"</p>
                    )}
                  </div>
                </div>
              ))}
              {verification.last_verified_date && (
                <p className="verify-date">
                  Last verified: {new Date(verification.last_verified_date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer({ data }) {
  const { student_profile, digital_presence } = data;
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-name">{student_profile?.full_name}</span>
            <span className="footer-school">{student_profile?.school_name} · {student_profile?.board}</span>
          </div>
          <div className="footer-links">
            {digital_presence?.portfolio_url && (
              <a href={digital_presence.portfolio_url} target="_blank" rel="noreferrer" className="footer-link">
                🌐 Portfolio
              </a>
            )}
            {digital_presence?.linkedin && (
              <a href={digital_presence.linkedin} target="_blank" rel="noreferrer" className="footer-link">
                💼 LinkedIn
              </a>
            )}
            {digital_presence?.github && (
              <a href={digital_presence.github} target="_blank" rel="noreferrer" className="footer-link">
                💻 GitHub
              </a>
            )}
            {!digital_presence?.portfolio_url && !digital_presence?.linkedin && !digital_presence?.github && (
              <span className="footer-no-links">Social profiles coming soon</span>
            )}
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Student Portfolio · Built with pride</p>
        </div>
      </div>
    </footer>
  );
}
