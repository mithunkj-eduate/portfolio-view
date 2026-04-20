import { useEffect, useRef } from "react";
// import "./Hero.css";

/* Generates initials avatar when no photo is provided */
function Avatar({ name, photo }) {
  const initials = name
    ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "??";
  if (photo) {
    return <img src={photo} alt={name} className="hero-avatar-img" loading="lazy" />;
  }
  return (
    <div className="hero-avatar-placeholder">
      <span>{initials}</span>
    </div>
  );
}

export default function Hero({ data, darkMode, onToggleDark }) {
  const { student_profile, journey_summary, analytics } = data;
  const canvasRef = useRef(null);

  /* Animated particle background */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const stats = [
    { label: "Projects", value: analytics?.total_projects || 0 },
    { label: "Achievements", value: analytics?.total_achievements || 0 },
    { label: "Leadership Roles", value: analytics?.leadership_roles || 0 },
    { label: "Hours Active", value: analytics?.hours_in_extracurriculars || 0 },
  ];

  return (
    <header className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Dark mode toggle */}
      <button className="hero-dark-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">
        {darkMode ? "☀" : "☽"}
      </button>

      <div className="hero-inner container">
        <div className="hero-left">
          <div className="hero-avatar-wrap">
            <Avatar name={student_profile?.full_name} photo={student_profile?.profile_photo} />
            <div className="hero-verified-ring" title="School Verified">✓</div>
          </div>

          <div className="hero-meta">
            <p className="hero-school">{student_profile?.school_name || "School"} · {student_profile?.board}</p>
            <h1 className="hero-name">{student_profile?.full_name || "Student Name"}</h1>
            <p className="hero-tagline">{journey_summary?.tagline}</p>
            <p className="hero-location">📍 {student_profile?.location}</p>

            {/* Strength chips */}
            {journey_summary?.strengths?.length > 0 && (
              <div className="hero-chips">
                {journey_summary.strengths.map((s) => (
                  <span key={s} className="hero-chip">{s}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={s.label} className={`hero-stat delay-${i + 1}`}>
              <AnimCounter target={s.value} />
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero-scroll-arrow" />
      </div>
    </header>
  );
}

/* Animated number counter */
function AnimCounter({ target }) {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.round(ease * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <span ref={ref} className="hero-stat-value">0</span>;
}
