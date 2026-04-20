import { useState } from "react";
import { useAnimateIn } from "../hooks/useAnimateIn";
import "./Projects.css";

const ICONS = { Science: "🔬", Technology: "💻", "Environmental Science": "🌱", default: "📐" };

function ProjectCard({ project, index, visible }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`proj-card animate-in delay-${Math.min(index + 1, 5)} ${visible ? "visible" : ""}`}>
      <div className="proj-card-header">
        <span className="proj-icon">{ICONS[project.subject] || ICONS.default}</span>
        <div className="proj-meta">
          <span className="badge">{project.grade}</span>
          <span className="badge badge-gold">{project.subject}</span>
        </div>
      </div>

      <h3 className="proj-title">{project.title}</h3>
      <p className="proj-desc">{project.description}</p>

      {/* Skills */}
      <div className="proj-skills">
        {(project.skills_used || []).map((s) => (
          <span key={s} className="proj-skill-tag">{s}</span>
        ))}
      </div>

      {/* Impact metrics */}
      {project.impact_metrics?.length > 0 && (
        <div className="proj-impacts">
          {project.impact_metrics.map((m) => (
            <div key={m} className="proj-impact-item">
              <span className="proj-impact-dot" />
              {m}
            </div>
          ))}
        </div>
      )}

      {/* Expand toggle */}
      <button className="proj-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide details ↑" : "Show details ↓"}
      </button>

      {expanded && (
        <div className="proj-expanded">
          {project.reflection && (
            <div className="proj-reflection">
              <span className="proj-detail-label">Reflection</span>
              <p>{project.reflection}</p>
            </div>
          )}
          {project.mentor_feedback && (
            <div className="proj-mentor">
              <span className="proj-detail-label">Mentor Feedback</span>
              <p className="proj-mentor-text">{project.mentor_feedback}</p>
            </div>
          )}
          {project.tools_used?.length > 0 && (
            <div className="proj-tools">
              <span className="proj-detail-label">Tools Used</span>
              <div className="proj-tool-chips">
                {project.tools_used.map((t) => (
                  <span key={t} className="proj-tool-chip">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="proj-date">{project.completion_date}</div>
    </div>
  );
}

export default function Projects({ data }) {
  const { projects } = data;
  const { ref, visible } = useAnimateIn();

  if (!projects?.length) return null;

  return (
    <section id="projects" className="section projects-section">
      <div className="container" ref={ref}>
        <p className="section-label">Work</p>
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle">Hands-on projects that blend curiosity with real-world impact.</p>
        <div className="divider" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
