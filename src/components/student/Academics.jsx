import { useState } from "react";
import { useAnimateIn } from "../hooks/useAnimateIn";
import "./Academics.css";

const SUBJECT_COLORS = {
  Mathematics: "#1a4731",
  Science: "#2d6a4f",
  English: "#c9a84c",
  "Social Studies": "#8b6914",
  default: "#6b6b6b",
};

export default function Academics({ data }) {
  const { academic_journey } = data;
  const [selectedGrade, setSelectedGrade] = useState(0);
  const { ref, visible } = useAnimateIn();

  if (!academic_journey?.length) return null;
  const current = academic_journey[selectedGrade] || academic_journey[0];

  return (
    <section id="academics" className="section academics-section">
      <div className="container" ref={ref}>
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic Journey</h2>
        <div className="divider" />

        {/* Grade tabs */}
        <div className={`academics-tabs animate-in ${visible ? "visible" : ""}`}>
          {academic_journey.map((g, i) => (
            <button
              key={g.grade}
              className={`academics-tab ${selectedGrade === i ? "active" : ""}`}
              onClick={() => setSelectedGrade(i)}
            >
              <span className="academics-tab-grade">{g.grade}</span>
              <span className="academics-tab-year">{g.year}</span>
            </button>
          ))}
        </div>

        {/* Summary bar */}
        <div className={`academics-summary animate-in delay-2 ${visible ? "visible" : ""}`}>
          <div className="academics-summary-item">
            <span className="academics-summary-label">Overall %</span>
            <span className="academics-summary-value">{current.overall_percentage}%</span>
          </div>
          <div className="academics-summary-divider" />
          <div className="academics-summary-item">
            <span className="academics-summary-label">Class Rank</span>
            <span className="academics-summary-value">{current.rank}</span>
          </div>
          <div className="academics-summary-divider" />
          <div className="academics-summary-item">
            <span className="academics-summary-label">Attendance</span>
            <span className="academics-summary-value">{current.attendance}</span>
          </div>
        </div>

        {/* Subject cards */}
        <div className="academics-subjects">
          {(current.subjects || []).map((sub, i) => {
            const color = SUBJECT_COLORS[sub.name] || SUBJECT_COLORS.default;
            return (
              <div
                key={sub.name}
                className={`academics-subject-card animate-in delay-${Math.min(i + 1, 5)} ${visible ? "visible" : ""}`}
              >
                <div className="academics-subject-header">
                  <div>
                    <h4 className="academics-subject-name">{sub.name}</h4>
                    <p className="academics-subject-feedback">{sub.teacher_feedback}</p>
                  </div>
                  <div className="academics-subject-grade-badge">{sub.grade}</div>
                </div>

                <div className="academics-subject-score-row">
                  <span className="academics-subject-score" style={{ color }}>
                    {sub.score}
                  </span>
                  <span className="academics-subject-total">/100</span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: visible ? `${sub.score}%` : "0%",
                      background: `linear-gradient(90deg, ${color}, ${color}88)`,
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline visualization */}
        <div className={`academics-timeline animate-in delay-3 ${visible ? "visible" : ""}`}>
          <h3 className="academics-timeline-title">Progress Over Years</h3>
          <div className="academics-timeline-bars">
            {academic_journey.map((g) => (
              <div key={g.grade} className="academics-timeline-bar-group">
                <div className="academics-timeline-bar-wrap">
                  <div
                    className="academics-timeline-bar"
                    style={{ height: visible ? `${g.overall_percentage}%` : "0%" }}
                  />
                </div>
                <span className="academics-timeline-bar-pct">{g.overall_percentage}%</span>
                <span className="academics-timeline-bar-grade">{g.grade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
