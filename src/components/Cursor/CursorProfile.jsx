import { useEffect, useRef, useState } from "react";
import usePortfolioData from "../../data/portfolioData";
import { convertDriveToImageUrl } from "../../utly/utlyFunction";
import NotFound from "../../NotFound";
import { PortfolioType } from "../../utly/constants";

// ─── Inline styles & keyframes injected once ──────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080810;
    --surface: #0e0e1a;
    --card: #12121f;
    --border: rgba(120,120,200,.12);
    --accent: #7c6df0;
    --accent2: #e05fff;
    --gold: #f0c060;
    --text: #e8e8f0;
    --muted: #6e6e90;
    --font-display: 'DM Sans', sans-serif;
    --font-mono: 'DM Sans', sans-serif;
    --glow: 0 0 40px rgba(124,109,240,.25);
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-display); overflow-x: hidden; cursor: none; }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

  /* ── Cursor ── */
  .cur-dot {
    position: fixed; top: 0; left: 0; width: 8px; height: 8px;
    background: var(--accent2); border-radius: 50%; pointer-events: none;
    transform: translate(-50%,-50%); z-index: 9999;
    transition: transform .1s ease, background .2s ease, width .2s ease, height .2s ease;
    mix-blend-mode: screen;
  }
  .cur-ring {
    position: fixed; top: 0; left: 0; width: 36px; height: 36px;
    border: 1.5px solid rgba(124,109,240,.6); border-radius: 50%; pointer-events: none;
    transform: translate(-50%,-50%); z-index: 9998;
    transition: transform .18s cubic-bezier(.23,1,.32,1), width .25s ease, height .25s ease, border-color .2s ease, opacity .2s ease;
  }
  .cur-trail {
    position: fixed; pointer-events: none; z-index: 9997;
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); opacity: 0;
    transform: translate(-50%,-50%);
    transition: opacity .3s ease;
    mix-blend-mode: screen;
  }
  body:has(a:hover) .cur-ring,
  body:has(button:hover) .cur-ring { width: 56px; height: 56px; border-color: var(--accent2); }
  body:has(a:hover) .cur-dot,
  body:has(button:hover) .cur-dot { width: 4px; height: 4px; background: var(--gold); }

  /* ── Grid noise overlay ── */
  .noise {
    position: fixed; inset: 0; pointer-events: none; z-index: 1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");
    background-size: 180px;
    opacity: .45;
  }

  /* ── Nav ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 3rem;
    background: rgba(8,8,16,.75);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo { font-size: 1.2rem; font-weight: 800; letter-spacing: -.02em; }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 2.4rem; }
  .nav-links a { font-size: .82rem; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); transition: color .2s; }
  .nav-links a:hover { color: var(--text); }

  /* ── Hero ── */
  .hero {
    min-height: 100vh; display: grid;
    grid-template-columns: 1fr 1fr; gap: 4rem;
    align-items: center; padding: 8rem 5rem 4rem;
    position: relative; overflow: hidden;
  }
  .hero-bg-glow {
    position: absolute; width: 700px; height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,109,240,.15) 0%, transparent 70%);
    top: -100px; right: -150px; pointer-events: none;
    animation: pulse 6s ease-in-out infinite;
  }
  .hero-bg-glow2 {
    position: absolute; width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(224,95,255,.1) 0%, transparent 70%);
    bottom: 50px; left: -100px; pointer-events: none;
    animation: pulse 8s ease-in-out infinite reverse;
  }
  @keyframes pulse { 0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.1);opacity:1} }

  .hero-label {
    font-family: var(--font-mono); font-size: .75rem; color: var(--accent);
    letter-spacing: .2em; text-transform: uppercase; margin-bottom: 1.2rem;
    display: flex; align-items: center; gap: .6rem;
  }
  .hero-label::before { content:''; width:28px; height:1px; background:var(--accent); }

  .hero-name {
    font-size: clamp(3.2rem, 6vw, 5.5rem); font-weight: 800;
    line-height: 1; letter-spacing: -.04em; margin-bottom: .6rem;
  }
  .hero-name .hl {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-sub {
    font-family: var(--font-mono); font-size: .9rem; color: var(--muted);
    margin-bottom: 1.6rem; line-height: 1.6;
  }
  .hero-desc { font-size: 1rem; color: var(--muted); line-height: 1.75; max-width: 480px; margin-bottom: 2.4rem; }

  .hero-cta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary {
    padding: .85rem 2rem; font-size: .85rem; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    background: var(--accent); color: #fff; border: none; border-radius: 6px;
    cursor: none; transition: transform .2s, box-shadow .2s;
    box-shadow: 0 0 0 0 rgba(124,109,240,0);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(124,109,240,.4); }
  .btn-ghost {
    padding: .85rem 2rem; font-size: .85rem; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    background: transparent; color: var(--text);
    border: 1px solid var(--border); border-radius: 6px;
    cursor: none; transition: border-color .2s, color .2s;
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

  .hero-stats { display: flex; gap: 2.4rem; margin-top: 3rem; }
  .stat-val { font-size: 2rem; font-weight: 800; color: var(--accent); display: block; }
  .stat-label { font-family: var(--font-mono); font-size: .7rem; color: var(--muted); letter-spacing: .12em; text-transform: uppercase; }

  /* ── Hero image side ── */
  .hero-visual { position: relative; display: flex; justify-content: center; align-items: center; }
  .hero-img-wrap {
    position: relative; width: 360px; height: 420px;
    border-radius: 24px; overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: var(--glow);
    animation: float 5s ease-in-out infinite;
  }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
  .hero-img-wrap img { width:100%; height:100%; object-fit:cover; }
  .hero-img-placeholder {
    width:100%; height:100%;
    background: linear-gradient(135deg, #1a1a30, #0e0e1e);
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1rem;
  }
  .hero-img-placeholder svg { opacity:.3; }
  .hero-img-placeholder span { font-family:var(--font-mono); font-size:.7rem; color:var(--muted); }

  .hero-orbit {
    position: absolute; border-radius: 50%;
    border: 1px solid var(--border);
    animation: spin 18s linear infinite;
    pointer-events: none;
  }
  .hero-orbit:nth-child(1) { width:460px; height:460px; top:50%; left:50%; transform:translate(-50%,-50%); }
  .hero-orbit:nth-child(2) { width:560px; height:560px; top:50%; left:50%; transform:translate(-50%,-50%); animation-duration:28s; animation-direction:reverse; }
  .orbit-dot {
    position:absolute; width:8px; height:8px; border-radius:50%; background:var(--accent);
    top:0; left:50%; transform:translate(-50%,-50%);
  }
  .orbit-dot2 { background: var(--accent2); top:100%; }
  @keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }

  /* ── Sections ── */
  section { padding: 6rem 5rem; position: relative; }
  .section-tag {
    font-family:var(--font-mono); font-size:.7rem; color:var(--accent);
    letter-spacing:.22em; text-transform:uppercase; margin-bottom:.8rem;
    display:flex; align-items:center; gap:.6rem;
  }
  .section-tag::before { content:''; width:22px; height:1px; background:var(--accent); }
  h2 { font-size: clamp(2rem,4vw,3rem); font-weight:800; letter-spacing:-.03em; margin-bottom:3rem; }
  .sep { height:1px; background:var(--border); margin: 0 5rem; }

  /* ── Skills ── */
  .skills-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem; }
  .skill-card {
    background:var(--card); border:1px solid var(--border); border-radius:14px;
    padding:1.6rem; transition:border-color .3s, transform .3s, box-shadow .3s;
  }
  .skill-card:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:var(--glow); }
  .skill-card h3 { font-family:var(--font-mono); font-size:.72rem; color:var(--accent); letter-spacing:.15em; text-transform:uppercase; margin-bottom:1.2rem; }
  .skill-pills { display:flex; flex-wrap:wrap; gap:.5rem; }
  .pill {
    background:rgba(124,109,240,.1); border:1px solid rgba(124,109,240,.2);
    color:var(--text); font-size:.75rem; padding:.3rem .8rem; border-radius:99px;
    font-family:var(--font-mono);
    transition:background .2s, border-color .2s;
  }
  .pill:hover { background:rgba(124,109,240,.25); border-color:var(--accent); }

  /* ── Projects ── */
  .projects-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:2rem; }
  .project-card {
    background:var(--card); border:1px solid var(--border); border-radius:18px;
    overflow:hidden; transition:transform .3s, box-shadow .3s, border-color .3s;
    display:flex; flex-direction:column;
  }
  .project-card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(0,0,0,.4); border-color:var(--accent); }
  .project-img {
    height:200px; background:linear-gradient(135deg,#12121e,#1a1a30);
    display:flex; align-items:center; justify-content:center;
    border-bottom:1px solid var(--border); overflow:hidden; position:relative;
  }
  .project-img img { width:100%; height:100%; object-fit:cover; }
  .project-img-placeholder { opacity:.25; }
  .project-body { padding:1.6rem; flex:1; display:flex; flex-direction:column; }
  .project-title { font-size:1.1rem; font-weight:700; margin-bottom:.6rem; }
  .project-desc { font-size:.85rem; color:var(--muted); line-height:1.6; flex:1; margin-bottom:1.2rem; }
  .project-tech { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:1.4rem; }
  .project-link {
    font-family:var(--font-mono); font-size:.72rem; color:var(--accent);
    letter-spacing:.1em; text-transform:uppercase;
    display:flex; align-items:center; gap:.4rem;
    transition:gap .2s;
  }
  .project-link:hover { gap:.7rem; }

  /* ── About ── */
  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:start; }
  .about-desc p { color:var(--muted); line-height:1.85; margin-bottom:1rem; }
  .about-info { margin-top:1.6rem; display:flex; flex-direction:column; gap:.7rem; }
  .info-row { display:flex; gap:1rem; font-size:.85rem; }
  .info-label { font-family:var(--font-mono); color:var(--muted); min-width:80px; font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; }
  .info-value { color:var(--text); }

  .exp-list { display:flex; flex-direction:column; gap:1.4rem; }
  .exp-item {
    background:var(--card); border:1px solid var(--border); border-radius:14px;
    padding:1.5rem; position:relative; overflow:hidden;
    transition:border-color .3s;
  }
  .exp-item::before {
    content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
    background:linear-gradient(to bottom,var(--accent),var(--accent2));
    border-radius:3px 0 0 3px;
  }
  .exp-item:hover { border-color:var(--accent); }
  .exp-role { font-weight:700; font-size:.95rem; margin-bottom:.2rem; }
  .exp-company { color:var(--accent); font-size:.85rem; margin-bottom:.2rem; }
  .exp-period { font-family:var(--font-mono); font-size:.7rem; color:var(--muted); margin-bottom:.9rem; }
  .exp-tech { display:flex; flex-wrap:wrap; gap:.4rem; }
  .exp-tag { font-family:var(--font-mono); font-size:.65rem; color:var(--muted); background:rgba(255,255,255,.04); padding:.2rem .6rem; border-radius:4px; }

  /* ── Contact ── */
  .contact-wrap {
    max-width:680px; margin:0 auto; text-align:center;
  }
  .contact-desc { color:var(--muted); line-height:1.75; margin-bottom:2.4rem; }
  .contact-email {
    font-size:1.4rem; font-weight:700; color:var(--accent);
    display:inline-block; margin-bottom:.8rem;
    transition:color .2s;
  }
  .contact-email:hover { color:var(--accent2); }
  .contact-phone { font-family:var(--font-mono); font-size:.85rem; color:var(--muted); margin-bottom:2rem; }
  .social-row { display:flex; gap:1rem; justify-content:center; margin-top:1.6rem; }
  .social-btn {
    padding:.7rem 1.6rem; border:1px solid var(--border); border-radius:8px;
    font-size:.8rem; font-family:var(--font-mono); letter-spacing:.1em; text-transform:uppercase;
    color:var(--muted); transition:all .2s;
  }
  .social-btn:hover { border-color:var(--accent); color:var(--accent); transform:translateY(-2px); }

  /* ── Footer ── */
  footer {
    padding:2rem 5rem; border-top:1px solid var(--border);
    display:flex; justify-content:space-between; align-items:center;
  }
  footer p { font-family:var(--font-mono); font-size:.72rem; color:var(--muted); }
  .footer-links { display:flex; gap:1.6rem; }
  .footer-links a { font-family:var(--font-mono); font-size:.72rem; color:var(--muted); letter-spacing:.08em; transition:color .2s; }
  .footer-links a:hover { color:var(--accent); }

  /* ── Fade-in on scroll ── */
  .reveal { opacity:10; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }

  /* ── Animated gradient border for hero name ── */
  @keyframes gradShift {
    0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}
  }

  /* ── Mobile ── */
  @media (max-width:900px) {
    .hero { grid-template-columns:1fr; padding:7rem 2rem 3rem; text-align:center; }
    .hero-visual { display:none; }
    .hero-stats { justify-content:center; }
    .hero-cta-row { justify-content:center; }
    .hero-label { justify-content:center; }
    .about-grid { grid-template-columns:1fr; }
    section { padding:4rem 2rem; }
    nav { padding:1rem 1.5rem; }
    .nav-links { gap:1.4rem; }
    footer { flex-direction:column; gap:1rem; text-align:center; }
    .sep { margin:0 2rem; }
  }
`;

// ─── Cursor component ──────────────────────────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const trails = useRef(Array(8).fill({ x: 0, y: 0 }));
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      // ring lags behind dot
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      // update trail positions
      trails.current = [
        { x: pos.current.x, y: pos.current.y },
        ...trails.current.slice(0, 7),
      ];
      trailsRef.current.forEach((el, i) => {
        if (!el) return;
        const t = trails.current[i] || { x: 0, y: 0 };
        el.style.left = `${t.x}px`;
        el.style.top = `${t.y}px`;
        el.style.opacity = String((8 - i) / 16);
        el.style.width = `${6 - i * 0.5}px`;
        el.style.height = `${6 - i * 0.5}px`;
      });

      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="cur-dot" ref={dotRef} />
      <div className="cur-ring" ref={ringRef} />
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="cur-trail"
          ref={(el) => (trailsRef.current[i] = el)}
        />
      ))}
    </>
  );
}

// ─── useReveal hook ────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Particle canvas background ───────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random(),
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,109,240,${p.a * 0.5})`;
        ctx.fill();
      });
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,109,240,${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
}

// ─── TypeWriter ───────────────────────────────────────────────────────────────
function TypeWriter({ text }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(id);
    }, 38);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {display}
      <span style={{ animation: "pulse 1s infinite", color: "var(--accent)" }}>
        |
      </span>
    </span>
  );
}

// ─── Main Portfolio ────────────────────────────────────────────────────────────
export default function CursorProfile() {
  const data = usePortfolioData();

  useReveal();
  if (!data || data.type !== PortfolioType.CURSOR) return <NotFound />;

  // Default fallback data
  const portfolioData = data || {
    hero: {
      name: "Mithun",
      highlight: "K J",
      subtitle: "Full Stack Developer · MERN · Golang · GraphQL",
      desc: "Building scalable, production-ready web applications with 3.5 years of experience.",
      image: null,
      stats: [
        { value: "3.5+", label: "Years Experience" },
        { value: "10+", label: "Projects Shipped" },
        { value: "2", label: "Companies" },
      ],
    },
    projects: [
      {
        title: "Multi-Vendor Marketplace",
        desc: "Scalable platform with real-time vendor management and payment integration.",
        link: "https://apisr.shareurinterest.com/",
        tech: ["React", "Node", "MongoDB"],
        image: "",
      },
      {
        title: "ShareMyInterest",
        desc: "Instagram-inspired social networking app with stories, reels, and real-time messaging.",
        link: "https://snap.shareurinterest.com/",
        tech: ["React", "Node"],
        image: "",
      },
    ],
    about: {
      desc: [
        "I'm a Full Stack Developer with 3.5+ years of experience building scalable web applications.",
        "I specialize in MERN stack, Golang, and GraphQL, focusing on performance and clean architecture.",
      ],
      info: [
        { label: "Location", value: "Bengaluru, India" },
        { label: "Phone", value: "+91 6361849001" },
        { label: "Email", value: "mithunkj1996@gmail.com" },
      ],
      experience: [
        {
          company: "Eduate Pvt Ltd",
          role: "Full Stack Developer",
          period: "Nov 2024 - Present",
          tech: ["React.js", "Golang", "GraphQL"],
        },
        {
          company: "Vanilla Networks",
          role: "MERN Stack Developer",
          period: "2022 - 2024",
          tech: ["React", "Node", "MongoDB"],
        },
      ],
    },
    skills: [
      {
        title: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "Golang", "GraphQL"],
      },
      { title: "Database", items: ["MongoDB", "PostgreSQL", "Firebase"] },
      { title: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
    ],
    contact: {
      title: "Let's Work Together",
      desc: "Have a project or opportunity? Let's connect and build something amazing.",
      email: "mithunkj1996@gmail.com",
      phone: "+91 6361849001",
      social: [
        { name: "GitHub", link: "https://github.com/" },
        { name: "LinkedIn", link: "https://linkedin.com/" },
      ],
    },
    footer: {
      text: "© 2026 Mithun K J. All rights reserved.",
      links: [
        { name: "GitHub", link: "https://github.com/" },
        { name: "LinkedIn", link: "https://linkedin.com/" },
      ],
    },
  };

  const { hero, projects, about, skills, contact, footer } = portfolioData;

  const driveLink = hero.image ? hero.image : "";

  const imageUrl = convertDriveToImageUrl(driveLink);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <Cursor />
      <div className="noise" />
      <ParticleCanvas />

      {/* NAV */}
      <nav>
        <div className="nav-logo">
          {hero?.name.charAt(0)} <span>{hero?.highlight.charAt(0)}</span>
        </div>
        <ul className="nav-links">
          {["Skills", "Projects", "About", "Contact"].map((s, i) => (
            <li key={i}>
              <a href={`#${s.toLowerCase()}`}>{s}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      {hero && (
        <section
          className="hero"
          id="hero"
          style={{ zIndex: 2, position: "relative" }}
        >
          <div className="hero-bg-glow" />
          <div className="hero-bg-glow2" />
          <div className="hero-content">
            <div className="hero-label">Available for work</div>
            <h1 className="hero-name">
              {hero.name}
              <br />
              <span className="hl">{hero.highlight}</span>
            </h1>
            <p className="hero-sub">
              <TypeWriter text={hero.subtitle} />
            </p>
            <p className="hero-desc">{hero.desc}</p>
            <div className="hero-cta-row">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn-ghost">
                View Work
              </a>
            </div>
            <div className="hero-stats">
              {hero.stats.map((s, i) => (
                <div key={i}>
                  <span className="stat-val">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit">
              <div className="orbit-dot" />
              <div className="orbit-dot2" />
            </div>
            <div
              className="hero-orbit"
              style={{
                animationDuration: "28s",
                animationDirection: "reverse",
              }}
            >
              <div
                className="orbit-dot"
                style={{
                  background: "var(--accent2)",
                  top: "25%",
                  left: "100%",
                }}
              />
            </div>
            <div className="hero-img-wrap">
              {hero.image && imageUrl ? (
                <img src={imageUrl} alt={hero.name} />
              ) : (
                <div className="hero-img-placeholder">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle
                      cx="40"
                      cy="30"
                      r="18"
                      stroke="#7c6df0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 70c0-16.569 13.431-30 30-30s30 13.431 30 30"
                      stroke="#7c6df0"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>heroimage2.png</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="sep" />

      {/* SKILLS */}
      {skills && (
        <section id="skills" style={{ zIndex: 2, position: "relative" }}>
          <div className="section-tag">Expertise</div>
          <h2 className="reveal">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((cat, i) => (
              <div
                className="skill-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3>{cat.title}</h3>
                <div className="skill-pills">
                  {cat.items.map((item, i) => (
                    <span className="pill" key={i}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="sep" />

      {/* PROJECTS */}
      {projects && (
        <section id="projects" style={{ zIndex: 2, position: "relative" }}>
          <div className="section-tag">Work</div>
          <h2 className="reveal">Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div
                className="project-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="project-img">
                  {p.image && convertDriveToImageUrl(p.image) ? (
                    <img
                      src={convertDriveToImageUrl(p.image)}
                      className=""
                      alt={p.image}
                    />
                  ) : (
                    <svg
                      className="project-img-placeholder"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <rect
                        x="5"
                        y="10"
                        width="50"
                        height="35"
                        rx="4"
                        stroke="#7c6df0"
                        strokeWidth="1.5"
                      />
                      <path d="M5 18h50" stroke="#7c6df0" strokeWidth="1.5" />
                      <circle cx="11" cy="14" r="2" fill="#7c6df0" />
                      <circle cx="18" cy="14" r="2" fill="#e05fff" />
                      <path
                        d="M15 30l8-8 8 8 8-12"
                        stroke="#7c6df0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tech">
                    {p.tech.map((t, i) => (
                      <span className="pill" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="sep" />

      {/* ABOUT */}
      <section id="about" style={{ zIndex: 2, position: "relative" }}>
        <div className="section-tag">About</div>
        <h2 className="reveal">Who I Am</h2>
        <div className="about-grid">
          <div className="about-desc reveal">
            {about.desc.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-info">
              {about.info.map((row, i) => (
                <div className="info-row" key={i}>
                  <span className="info-label">{row.label}</span>
                  <span className="info-value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="exp-list reveal" style={{ transitionDelay: ".15s" }}>
            {about.experience.map((exp, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-period">{exp.period}</div>
                <div className="exp-tech">
                  {exp.tech.map((t, i) => (
                    <span className="exp-tag" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sep" />

      {/* CONTACT */}
      {contact && (
        <section id="contact" style={{ zIndex: 2, position: "relative" }}>
          <div className="contact-wrap reveal">
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Contact
            </div>
            <h2 style={{ textAlign: "center" }}>{contact.title}</h2>
            <p className="contact-desc">{contact.desc}</p>
            <a href={`mailto:${contact.email}`} className="contact-email">
              {contact.email}
            </a>
            <p className="contact-phone">{contact.phone}</p>
            <a
              href={`mailto:${contact.email}`}
              className="btn-primary"
              style={{ display: "inline-block" }}
            >
              Send a Message
            </a>
            <div className="social-row">
              {contact.social.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      {footer && (
        <footer style={{ zIndex: 2, position: "relative" }}>
          <p>{footer.text}</p>
          <div className="footer-links">
            {footer.links.map((l) => (
              <a key={l.name} href={l.link} target="_blank" rel="noreferrer">
                {l.name}
              </a>
            ))}
          </div>
        </footer>
      )}
    </>
  );
}
