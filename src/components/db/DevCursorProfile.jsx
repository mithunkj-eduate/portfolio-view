import { useState } from "react";

// ── Google Fonts injection ──────────────────────────────────────────────────
const FONT_LINK = document.createElement("link");
FONT_LINK.href =
  "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap";
FONT_LINK.rel = "stylesheet";
document.head.appendChild(FONT_LINK);

// ── Tokens ──────────────────────────────────────────────────────────────────
const T = {
  bg: "#080c10",
  bg2: "#0d1117",
  bg3: "#111820",
  surface: "#141c25",
  border: "rgba(255,255,255,0.07)",
  border2: "rgba(255,255,255,0.14)",
  text: "#e8edf2",
  text2: "#7a8a99",
  text3: "#3a4a5a",
  accent: "#00d4ff",
  green: "#00e5a0",
  gold: "#f0c060",
  red: "#ff5252",
  mono: "'DM Mono', monospace",
  display: "'Syne', sans-serif",
  serif: "'Instrument Serif', serif",
};

// ── Initial data ─────────────────────────────────────────────────────────────
const INIT = {
  hero: {
    name: "Mithun",
    highlight: "K J",
    subtitle: "Full Stack Developer · MERN · Golang · GraphQL",
    desc: "Building scalable, production-ready web applications with 3.5 years of experience.",
    stats: [
      { value: "3.5+", label: "Years Experience" },
      { value: "10+", label: "Projects Shipped" },
      { value: "2", label: "Companies" },
    ],
  },
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
        id: "e1",
        company: "Eduate Pvt Ltd",
        role: "Full Stack Developer",
        period: "Nov 2024 – Present",
        current: true,
        tech: ["React.js", "Golang", "GraphQL"],
      },
      {
        id: "e2",
        company: "Vanilla Networks",
        role: "MERN Stack Developer",
        period: "2022 – 2024",
        current: false,
        tech: ["React", "Node.js", "MongoDB"],
      },
    ],
  },
  skills: [
    {
      id: "s1",
      title: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "s2",
      title: "Backend",
      items: ["Node.js", "Express.js", "Golang", "GraphQL"],
    },
    {
      id: "s3",
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    { id: "s4", title: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ],
  projects: [
    {
      id: "p1",
      title: "Multi-Vendor Marketplace",
      desc: "Scalable e-commerce platform supporting multiple vendors with real-time inventory and payments.",
      link: "https://apisr.shareurinterest.com/",
      tech: ["React", "Node", "MongoDB"],
    },
    {
      id: "p2",
      title: "ShareMyInterest",
      desc: "Instagram-inspired social platform with real-time feeds, stories, and media sharing.",
      link: "https://snap.shareurinterest.com/",
      tech: ["React", "Node"],
    },
  ],
  contact: {
    title: "Let's Work Together",
    desc: "Have a project or opportunity? Let's connect and build something amazing.",
    email: "mithunkj1996@gmail.com",
    phone: "+91 6361849001",
    social: [
      { id: "sc1", name: "GitHub", link: "https://github.com/" },
      { id: "sc2", name: "LinkedIn", link: "https://linkedin.com/" },
    ],
  },
};

// ── uid helper ───────────────────────────────────────────────────────────────
let uidN = 100;
const uid = () => `id_${++uidN}`;

// ═══════════════════════════════════════════════════════════════════════════
// PREVIEW PANEL
// ═══════════════════════════════════════════════════════════════════════════
function Preview({ data }) {
  const { hero, about, skills, projects, contact } = data;

  const s = {
    root: {
      fontFamily: T.display,
      background: T.bg,
      color: T.text,
      minHeight: "100vh",
      fontSize: 14,
      lineHeight: 1.6,
      overflowX: "hidden",
    },
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(8,12,16,0.9)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${T.border}`,
      padding: "14px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    navLogo: {
      fontFamily: T.mono,
      fontSize: 12,
      color: T.accent,
      letterSpacing: "0.15em",
      fontWeight: 700,
    },
    navLinks: {
      display: "flex",
      gap: 28,
      listStyle: "none",
    },
    navLink: {
      color: T.text2,
      textDecoration: "none",
      fontSize: 10,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    badge: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: T.mono,
      fontSize: 10,
      color: T.green,
      background: "rgba(0,229,160,0.07)",
      border: `1px solid rgba(0,229,160,0.2)`,
      padding: "5px 12px",
      borderRadius: 100,
    },
    dot: {
      width: 6,
      height: 6,
      background: T.green,
      borderRadius: "50%",
    },
    hero: {
      padding: "60px 32px 40px",
      background: T.bg,
      position: "relative",
      borderBottom: `1px solid ${T.border}`,
    },
    heroName: {
      fontSize: 52,
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: "-0.03em",
      margin: 0,
    },
    heroHighlight: {
      fontFamily: T.serif,
      fontStyle: "italic",
      fontWeight: 400,
      color: T.accent,
      display: "block",
    },
    heroSub: {
      fontFamily: T.mono,
      fontSize: 11,
      color: T.text2,
      letterSpacing: "0.06em",
      margin: "16px 0 12px",
    },
    heroDesc: {
      fontSize: 14,
      color: T.text2,
      maxWidth: 480,
      marginBottom: 28,
    },
    statsRow: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginTop: 8,
    },
    statCard: {
      background: T.surface,
      border: `1px solid ${T.border}`,
      padding: "18px 20px",
      minWidth: 110,
    },
    statVal: {
      fontSize: 28,
      fontWeight: 800,
      color: T.accent,
      lineHeight: 1,
      marginBottom: 4,
    },
    statLabel: {
      fontFamily: T.mono,
      fontSize: 9,
      color: T.text3,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    sectionWrap: {
      padding: "40px 32px",
      borderBottom: `1px solid ${T.border}`,
    },
    sectionLabel: {
      fontFamily: T.mono,
      fontSize: 9,
      color: T.accent,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      margin: "0 0 24px",
    },
    em: {
      fontFamily: T.serif,
      fontStyle: "italic",
      color: T.accent,
      fontWeight: 400,
    },
    twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
    aboutDesc: {
      fontSize: 14,
      color: T.text2,
      lineHeight: 1.8,
      marginBottom: 10,
    },
    infoTable: { border: `1px solid ${T.border}`, marginTop: 16 },
    infoRow: { display: "flex", borderBottom: `1px solid ${T.border}` },
    infoLabel: {
      width: 90,
      padding: "10px 14px",
      fontFamily: T.mono,
      fontSize: 9,
      color: T.text3,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      borderRight: `1px solid ${T.border}`,
      background: "rgba(255,255,255,0.02)",
    },
    infoVal: { flex: 1, padding: "10px 14px", fontSize: 13, color: T.text },
    expCard: {
      border: `1px solid ${T.border}`,
      borderBottom: "none",
      padding: "18px 20px",
      position: "relative",
    },
    expRole: { fontSize: 15, fontWeight: 700, marginBottom: 2 },
    expCo: {
      fontFamily: T.mono,
      fontSize: 11,
      color: T.accent,
      marginBottom: 4,
    },
    expPeriod: { fontFamily: T.mono, fontSize: 10, color: T.text3 },
    expTags: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 },
    expTag: {
      fontFamily: T.mono,
      fontSize: 9,
      color: T.text2,
      background: "rgba(255,255,255,0.04)",
      border: `1px solid ${T.border}`,
      padding: "3px 8px",
    },
    curBadge: {
      position: "absolute",
      top: 14,
      right: 16,
      fontFamily: T.mono,
      fontSize: 9,
      color: T.green,
      background: "rgba(0,229,160,0.08)",
      border: `1px solid rgba(0,229,160,0.2)`,
      padding: "3px 8px",
      borderRadius: 100,
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 2,
      background: T.border,
    },
    skillGroup: { background: T.bg, padding: "24px 20px" },
    skillGTitle: {
      fontFamily: T.mono,
      fontSize: 10,
      color: T.accent,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 14,
    },
    skillItem: {
      fontSize: 13,
      fontWeight: 600,
      color: T.text,
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8,
    },
    skillDot: {
      width: 4,
      height: 4,
      background: T.accent,
      borderRadius: "50%",
    },
    projGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 2,
      background: T.border,
    },
    projCard: { background: T.bg2, padding: "32px 28px", position: "relative" },
    projTitle: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      marginBottom: 8,
    },
    projDesc: {
      fontSize: 13,
      color: T.text2,
      lineHeight: 1.7,
      marginBottom: 14,
    },
    projTechRow: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 16,
    },
    projTechTag: {
      fontFamily: T.mono,
      fontSize: 9,
      color: T.accent,
      background: "rgba(0,212,255,0.07)",
      border: `1px solid rgba(0,212,255,0.2)`,
      padding: "3px 8px",
    },
    projLink: { fontFamily: T.mono, fontSize: 10, color: T.text3 },
    contactGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
    contactTitle: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      marginBottom: 12,
    },
    contactDesc: { fontSize: 14, color: T.text2, marginBottom: 20 },
    contactItem: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      padding: "14px 18px",
      border: `1px solid ${T.border}`,
      borderBottom: "none",
    },
    contactIcon: {
      width: 36,
      height: 36,
      border: `1px solid ${T.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: T.accent,
      fontSize: 14,
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      border: `1px solid ${T.border}`,
      borderBottom: "none",
      textDecoration: "none",
    },
    footer: {
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      background: T.bg2,
      borderTop: `1px solid ${T.border}`,
    },
    footerText: { fontFamily: T.mono, fontSize: 10, color: T.text3 },
  };

  return (
    <div style={s.root}>
      {/* Nav */}
      <nav style={s.nav}>
        <span style={s.navLogo}>MKJ</span>
        <ul style={s.navLinks}>
          {["About", "Skills", "Projects", "Contact"].map((l) => (
            <li key={l}>
              <a style={s.navLink} href="#">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div style={s.badge}>
          <div style={s.dot} />
          Available for work
        </div>
      </nav>

      {/* Hero */}
      <section style={s.hero}>
        <h1 style={s.heroName}>
          {hero.name}
          <span style={s.heroHighlight}>{hero.highlight}</span>
        </h1>
        <div style={s.heroSub}>{hero.subtitle}</div>
        <p style={s.heroDesc}>{hero.desc}</p>
        <div style={s.statsRow}>
          {hero.stats.map((st, i) => (
            <div key={i} style={s.statCard}>
              <div style={s.statVal}>{st.value}</div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={s.sectionWrap}>
        <div style={s.sectionLabel}>01 — About</div>
        <h2 style={s.sectionTitle}>
          Who I <em style={s.em}>Am</em>
        </h2>
        <div style={s.twoCol}>
          <div>
            {about.desc.map((d, i) => (
              <p key={i} style={s.aboutDesc}>
                {d}
              </p>
            ))}
            <div style={s.infoTable}>
              {about.info.map((row, i) => (
                <div
                  key={i}
                  style={{
                    ...s.infoRow,
                    borderBottom:
                      i < about.info.length - 1
                        ? `1px solid ${T.border}`
                        : "none",
                  }}
                >
                  <div style={s.infoLabel}>{row.label}</div>
                  <div style={s.infoVal}>{row.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {about.experience.map((ex, i) => (
              <div
                key={ex.id}
                style={{
                  ...s.expCard,
                  borderBottom:
                    i === about.experience.length - 1
                      ? `1px solid ${T.border}`
                      : "none",
                }}
              >
                {ex.current && <div style={s.curBadge}>● Current</div>}
                <div style={s.expRole}>{ex.role}</div>
                <div style={s.expCo}>{ex.company}</div>
                <div style={s.expPeriod}>{ex.period}</div>
                <div style={s.expTags}>
                  {ex.tech.map((t, j) => (
                    <span key={j} style={s.expTag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ ...s.sectionWrap, padding: "40px 0" }}>
        <div style={{ padding: "0 32px 24px" }}>
          <div style={s.sectionLabel}>02 — Skills</div>
          <h2 style={{ ...s.sectionTitle, marginBottom: 0 }}>
            Tech <em style={s.em}>Stack</em>
          </h2>
        </div>
        <div style={s.skillsGrid}>
          {skills.map((sg) => (
            <div key={sg.id} style={s.skillGroup}>
              <div style={s.skillGTitle}>{sg.title}</div>
              {sg.items.map((it, j) => (
                <div key={j} style={s.skillItem}>
                  <div style={s.skillDot} />
                  {it}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        style={{ ...s.sectionWrap, padding: "40px 0", background: T.bg2 }}
      >
        <div style={{ padding: "0 32px 24px" }}>
          <div style={s.sectionLabel}>03 — Projects</div>
          <h2 style={{ ...s.sectionTitle, marginBottom: 0 }}>
            Selected <em style={s.em}>Work</em>
          </h2>
        </div>
        <div style={s.projGrid}>
          {projects.map((p) => (
            <div key={p.id} style={s.projCard}>
              <div style={s.projTitle}>{p.title}</div>
              <p style={s.projDesc}>{p.desc}</p>
              <div style={s.projTechRow}>
                {p.tech.map((t, i) => (
                  <span key={i} style={s.projTechTag}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={s.projLink}>↗ {p.link}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={s.sectionWrap}>
        <div style={s.sectionLabel}>04 — Contact</div>
        <div style={s.contactGrid}>
          <div>
            <div style={s.contactTitle}>{contact.title}</div>
            <p style={s.contactDesc}>{contact.desc}</p>
            <div>
              {[
                { label: "Email", val: contact.email, icon: "✉" },
                { label: "Phone", val: contact.phone, icon: "☎" },
              ].map((ci, i) => (
                <div
                  key={i}
                  style={{
                    ...s.contactItem,
                    borderBottom: i === 1 ? `1px solid ${T.border}` : "none",
                  }}
                >
                  <div style={s.contactIcon}>{ci.icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: T.mono,
                        fontSize: 9,
                        color: T.text3,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: 3,
                      }}
                    >
                      {ci.label}
                    </div>
                    <div style={{ fontSize: 13, color: T.text }}>{ci.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {contact.social.map((sc, i) => (
              <div
                key={sc.id}
                style={{
                  ...s.socialLink,
                  borderBottom:
                    i === contact.social.length - 1
                      ? `1px solid ${T.border}`
                      : "none",
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: T.text }}>
                  {sc.name}
                </span>
                <span
                  style={{
                    fontFamily: T.mono,
                    fontSize: 10,
                    color: T.text3,
                    marginLeft: "auto",
                  }}
                >
                  {sc.link}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={s.footer}>
        <span style={s.footerText}>
          © 2026 {hero.name} {hero.highlight}. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {contact.social.map((sc) => (
            <span
              key={sc.id}
              style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}
            >
              {sc.name}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SHARED UI ATOMS
// ═══════════════════════════════════════════════════════════════════════════
const Btn = ({ children, onClick, variant = "primary", small, style: sx }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: T.display,
    fontWeight: 700,
    fontSize: small ? 11 : 12,
    letterSpacing: "0.07em",
    padding: small ? "6px 12px" : "9px 18px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.15s",
    ...sx,
  };
  const vars = {
    primary: { background: T.accent, color: "#000" },
    outline: {
      background: "transparent",
      color: T.text,
      border: `1px solid ${T.border2}`,
    },
    danger: {
      background: "rgba(255,82,82,0.12)",
      color: T.red,
      border: `1px solid rgba(255,82,82,0.25)`,
    },
    ghost: {
      background: "transparent",
      color: T.text2,
      border: `1px solid ${T.border}`,
    },
  };
  return (
    <button style={{ ...base, ...vars[variant] }} onClick={onClick}>
      {children}
    </button>
  );
};

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  mono,
}) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 9,
        color: T.text3,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
      }}
    >
      {label}
    </span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        background: T.bg3,
        border: `1px solid ${T.border}`,
        color: T.text,
        fontFamily: mono ? T.mono : T.display,
        fontSize: 13,
        padding: "9px 12px",
        outline: "none",
        width: "100%",
        transition: "border-color 0.2s",
      }}
      onFocus={(e) => (e.target.style.borderColor = T.accent)}
      onBlur={(e) => (e.target.style.borderColor = T.border)}
    />
  </label>
);

const Textarea = ({ label, value, onChange, rows = 3 }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 9,
        color: T.text3,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
      }}
    >
      {label}
    </span>
    <textarea
      value={value}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: T.bg3,
        border: `1px solid ${T.border}`,
        color: T.text,
        fontFamily: T.display,
        fontSize: 13,
        padding: "9px 12px",
        outline: "none",
        resize: "vertical",
        width: "100%",
      }}
      onFocus={(e) => (e.target.style.borderColor = T.accent)}
      onBlur={(e) => (e.target.style.borderColor = T.border)}
    />
  </label>
);

const Toggle = ({ checked, onChange, label }) => (
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
    }}
  >
    <div
      onClick={() => onChange(!checked)}
      style={{
        width: 36,
        height: 20,
        borderRadius: 10,
        position: "relative",
        background: checked ? T.green : T.bg3,
        border: `1px solid ${checked ? T.green : T.border}`,
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 2,
          left: checked ? 18 : 2,
          width: 14,
          height: 14,
          background: checked ? "#000" : T.text3,
          borderRadius: "50%",
          transition: "left 0.2s",
        }}
      />
    </div>
    <span style={{ fontFamily: T.mono, fontSize: 11, color: T.text2 }}>
      {label}
    </span>
  </label>
);

const TagEditor = ({ tags, onChange }) => {
  const [inp, setInp] = useState("");
  const add = () => {
    const v = inp.trim();
    if (v && !tags.includes(v)) onChange([...tags, v]);
    setInp("");
  };
  return (
    <div>
      <span
        style={{
          fontFamily: T.mono,
          fontSize: 9,
          color: T.text3,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          display: "block",
          marginBottom: 6,
        }}
      >
        Tags
      </span>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}
      >
        {tags.map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontFamily: T.mono,
              fontSize: 10,
              color: T.accent,
              background: "rgba(0,212,255,0.07)",
              border: `1px solid rgba(0,212,255,0.2)`,
              padding: "3px 8px",
            }}
          >
            {t}
            <button
              onClick={() => onChange(tags.filter((_, j) => j !== i))}
              style={{
                background: "none",
                border: "none",
                color: T.red,
                cursor: "pointer",
                fontSize: 12,
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Add tag, press Enter"
          style={{
            flex: 1,
            background: T.bg3,
            border: `1px solid ${T.border}`,
            color: T.text,
            fontFamily: T.mono,
            fontSize: 12,
            padding: "7px 10px",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = T.accent)}
          onBlur={(e) => (e.target.style.borderColor = T.border)}
        />
        <Btn onClick={add} small variant="ghost">
          + Add
        </Btn>
      </div>
    </div>
  );
};

const Card = ({ children, title, action }) => (
  <div
    style={{
      background: T.surface,
      border: `1px solid ${T.border}`,
      marginBottom: 12,
      overflow: "hidden",
    }}
  >
    {(title || action) && (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "11px 16px",
          borderBottom: `1px solid ${T.border}`,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <span
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            color: T.text2,
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </span>
        {action}
      </div>
    )}
    <div
      style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}
    >
      {children}
    </div>
  </div>
);

const Section = ({ title, num, children }) => (
  <div style={{ marginBottom: 32 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 16,
        paddingBottom: 10,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <span style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}>
        {num}
      </span>
      <span
        style={{
          fontFamily: T.display,
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </span>
    </div>
    {children}
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// EDITOR SECTIONS
// ═══════════════════════════════════════════════════════════════════════════

// HERO EDITOR
function HeroEditor({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });
  const setStat = (i, k, v) => {
    const stats = [...data.stats];
    stats[i] = { ...stats[i], [k]: v };
    set("stats", stats);
  };
  const addStat = () =>
    set("stats", [...data.stats, { value: "0", label: "New Stat" }]);
  const delStat = (i) =>
    set(
      "stats",
      data.stats.filter((_, j) => j !== i),
    );

  return (
    <Section title="Hero" num="01">
      <Card>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          <Input
            label="First Name"
            value={data.name}
            onChange={(v) => set("name", v)}
          />
          <Input
            label="Last Name / Highlight"
            value={data.highlight}
            onChange={(v) => set("highlight", v)}
          />
        </div>
        <Input
          label="Subtitle"
          value={data.subtitle}
          onChange={(v) => set("subtitle", v)}
        />
        <Textarea
          label="Description"
          value={data.desc}
          onChange={(v) => set("desc", v)}
          rows={2}
        />
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}>
          STATS
        </span>
        <Btn small onClick={addStat} variant="ghost">
          + Add Stat
        </Btn>
      </div>
      {data.stats.map((st, i) => (
        <Card
          key={i}
          title={`Stat ${i + 1}`}
          action={
            <Btn small variant="danger" onClick={() => delStat(i)}>
              Remove
            </Btn>
          }
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Input
              label="Value"
              value={st.value}
              onChange={(v) => setStat(i, "value", v)}
            />
            <Input
              label="Label"
              value={st.label}
              onChange={(v) => setStat(i, "label", v)}
            />
          </div>
        </Card>
      ))}
    </Section>
  );
}

// ABOUT EDITOR
function AboutEditor({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });

  const setDesc = (i, v) => {
    const d = [...data.desc];
    d[i] = v;
    set("desc", d);
  };
  const addDesc = () => set("desc", [...data.desc, ""]);
  const delDesc = (i) =>
    set(
      "desc",
      data.desc.filter((_, j) => j !== i),
    );

  const setInfo = (i, k, v) => {
    const arr = [...data.info];
    arr[i] = { ...arr[i], [k]: v };
    set("info", arr);
  };
  const addInfo = () => set("info", [...data.info, { label: "", value: "" }]);
  const delInfo = (i) =>
    set(
      "info",
      data.info.filter((_, j) => j !== i),
    );

  const setExp = (id, k, v) =>
    set(
      "experience",
      data.experience.map((e) => (e.id === id ? { ...e, [k]: v } : e)),
    );
  const addExp = () =>
    set("experience", [
      ...data.experience,
      {
        id: uid(),
        company: "Company",
        role: "Role",
        period: "2024 – Present",
        current: false,
        tech: [],
      },
    ]);
  const delExp = (id) =>
    set(
      "experience",
      data.experience.filter((e) => e.id !== id),
    );

  return (
    <Section title="About" num="02">
      {/* Paragraphs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <span style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}>
          PARAGRAPHS
        </span>
        <Btn small onClick={addDesc} variant="ghost">
          + Add
        </Btn>
      </div>
      {data.desc.map((d, i) => (
        <Card
          key={i}
          title={`Paragraph ${i + 1}`}
          action={
            <Btn small variant="danger" onClick={() => delDesc(i)}>
              Remove
            </Btn>
          }
        >
          <Textarea
            label="Text"
            value={d}
            onChange={(v) => setDesc(i, v)}
            rows={2}
          />
        </Card>
      ))}

      {/* Info rows */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px 0 8px",
        }}
      >
        <span style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}>
          INFO ROWS
        </span>
        <Btn small onClick={addInfo} variant="ghost">
          + Add
        </Btn>
      </div>
      {data.info.map((row, i) => (
        <Card
          key={i}
          action={
            <Btn small variant="danger" onClick={() => delInfo(i)}>
              Remove
            </Btn>
          }
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 }}
          >
            <Input
              label="Label"
              value={row.label}
              onChange={(v) => setInfo(i, "label", v)}
            />
            <Input
              label="Value"
              value={row.value}
              onChange={(v) => setInfo(i, "value", v)}
            />
          </div>
        </Card>
      ))}

      {/* Experience */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "16px 0 8px",
        }}
      >
        <span style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}>
          EXPERIENCE
        </span>
        <Btn small onClick={addExp} variant="ghost">
          + Add
        </Btn>
      </div>
      {data.experience.map((ex) => (
        <Card
          key={ex.id}
          title={ex.company}
          action={
            <Btn small variant="danger" onClick={() => delExp(ex.id)}>
              Remove
            </Btn>
          }
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <Input
              label="Company"
              value={ex.company}
              onChange={(v) => setExp(ex.id, "company", v)}
            />
            <Input
              label="Role"
              value={ex.role}
              onChange={(v) => setExp(ex.id, "role", v)}
            />
          </div>
          <Input
            label="Period"
            value={ex.period}
            onChange={(v) => setExp(ex.id, "period", v)}
          />
          <Toggle
            checked={ex.current}
            onChange={(v) => setExp(ex.id, "current", v)}
            label="Currently working here"
          />
          <TagEditor
            tags={ex.tech}
            onChange={(v) => setExp(ex.id, "tech", v)}
          />
        </Card>
      ))}
    </Section>
  );
}

// SKILLS EDITOR
function SkillsEditor({ data, onChange }) {
  const addGroup = () =>
    onChange([...data, { id: uid(), title: "New Category", items: [] }]);
  const delGroup = (id) => onChange(data.filter((g) => g.id !== id));
  const setGroup = (id, k, v) =>
    onChange(data.map((g) => (g.id === id ? { ...g, [k]: v } : g)));

  return (
    <Section title="Skills" num="03">
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}
      >
        <Btn small onClick={addGroup} variant="ghost">
          + Add Group
        </Btn>
      </div>
      {data.map((sg) => (
        <Card
          key={sg.id}
          title={sg.title}
          action={
            <Btn small variant="danger" onClick={() => delGroup(sg.id)}>
              Remove
            </Btn>
          }
        >
          <Input
            label="Category Name"
            value={sg.title}
            onChange={(v) => setGroup(sg.id, "title", v)}
          />
          <TagEditor
            tags={sg.items}
            onChange={(v) => setGroup(sg.id, "items", v)}
          />
        </Card>
      ))}
    </Section>
  );
}

// PROJECTS EDITOR
function ProjectsEditor({ data, onChange }) {
  const add = () =>
    onChange([
      ...data,
      { id: uid(), title: "New Project", desc: "", link: "", tech: [] },
    ]);
  const del = (id) => onChange(data.filter((p) => p.id !== id));
  const set = (id, k, v) =>
    onChange(data.map((p) => (p.id === id ? { ...p, [k]: v } : p)));

  return (
    <Section title="Projects" num="04">
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}
      >
        <Btn small onClick={add} variant="ghost">
          + Add Project
        </Btn>
      </div>
      {data.map((p) => (
        <Card
          key={p.id}
          title={p.title}
          action={
            <Btn small variant="danger" onClick={() => del(p.id)}>
              Remove
            </Btn>
          }
        >
          <Input
            label="Title"
            value={p.title}
            onChange={(v) => set(p.id, "title", v)}
          />
          <Textarea
            label="Description"
            value={p.desc}
            onChange={(v) => set(p.id, "desc", v)}
            rows={2}
          />
          <Input
            label="Live Link"
            value={p.link}
            onChange={(v) => set(p.id, "link", v)}
            mono
          />
          <TagEditor tags={p.tech} onChange={(v) => set(p.id, "tech", v)} />
        </Card>
      ))}
    </Section>
  );
}

// CONTACT EDITOR
function ContactEditor({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });
  const setSocial = (id, k, v) =>
    set(
      "social",
      data.social.map((s) => (s.id === id ? { ...s, [k]: v } : s)),
    );
  const addSocial = () =>
    set("social", [
      ...data.social,
      { id: uid(), name: "Platform", link: "https://" },
    ]);
  const delSocial = (id) =>
    set(
      "social",
      data.social.filter((s) => s.id !== id),
    );

  return (
    <Section title="Contact" num="05">
      <Card>
        <Input
          label="Section Title"
          value={data.title}
          onChange={(v) => set("title", v)}
        />
        <Textarea
          label="Description"
          value={data.desc}
          onChange={(v) => set("desc", v)}
          rows={2}
        />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          <Input
            label="Email"
            value={data.email}
            onChange={(v) => set("email", v)}
            mono
          />
          <Input
            label="Phone"
            value={data.phone}
            onChange={(v) => set("phone", v)}
            mono
          />
        </div>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "8px 0",
        }}
      >
        <span style={{ fontFamily: T.mono, fontSize: 10, color: T.text3 }}>
          SOCIAL LINKS
        </span>
        <Btn small onClick={addSocial} variant="ghost">
          + Add
        </Btn>
      </div>
      {data.social.map((sc) => (
        <Card
          key={sc.id}
          title={sc.name}
          action={
            <Btn small variant="danger" onClick={() => delSocial(sc.id)}>
              Remove
            </Btn>
          }
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12 }}
          >
            <Input
              label="Platform"
              value={sc.name}
              onChange={(v) => setSocial(sc.id, "name", v)}
            />
            <Input
              label="URL"
              value={sc.link}
              onChange={(v) => setSocial(sc.id, "link", v)}
              mono
            />
          </div>
        </Card>
      ))}
    </Section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════
export default function DevCursorProfile() {
  const [data, setData] = useState(INIT);
  const [view, setView] = useState("split"); // split | editor | preview
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");

  const set = (k) => (v) => setData((d) => ({ ...d, [k]: v }));

  const handleSave = () => {
    console.log(data, "data");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const layout = {
    app: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: T.bg,
      fontFamily: T.display,
      color: T.text,
      overflow: "hidden",
    },
    topbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      height: 52,
      background: T.bg2,
      borderBottom: `1px solid ${T.border}`,
      flexShrink: 0,
      gap: 16,
    },
    logo: {
      fontFamily: T.mono,
      fontSize: 13,
      color: T.accent,
      fontWeight: 700,
      letterSpacing: "0.12em",
      whiteSpace: "nowrap",
    },
    tabs: {
      display: "flex",
      gap: 1,
      flex: 1,
      justifyContent: "center",
    },
    tab: (active) => ({
      fontFamily: T.mono,
      fontSize: 11,
      color: active ? T.accent : T.text2,
      background: active ? "rgba(0,212,255,0.08)" : "transparent",
      border: `1px solid ${active ? "rgba(0,212,255,0.25)" : "transparent"}`,
      padding: "6px 14px",
      cursor: "pointer",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      transition: "all 0.15s",
    }),
    viewToggle: {
      display: "flex",
      gap: 2,
    },
    viewBtn: (active) => ({
      fontFamily: T.mono,
      fontSize: 10,
      color: active ? "#000" : T.text3,
      background: active ? T.accent : T.bg3,
      border: `1px solid ${active ? T.accent : T.border}`,
      padding: "5px 12px",
      cursor: "pointer",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      transition: "all 0.15s",
    }),
    body: {
      display: "flex",
      flex: 1,
      overflow: "hidden",
    },
    editorPane: {
      width: view === "split" ? "40%" : view === "editor" ? "100%" : "0",
      display: view === "preview" ? "none" : "flex",
      flexDirection: "column",
      borderRight: `1px solid ${T.border}`,
      overflow: "hidden",
      transition: "width 0.3s",
      minWidth: 0,
    },
    editorScroll: {
      flex: 1,
      overflowY: "auto",
      padding: "24px 20px",
    },
    previewPane: {
      flex: 1,
      overflow: "auto",
      display: view === "editor" ? "none" : "flex",
      flexDirection: "column",
    },
    previewLabel: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      background: T.bg2,
      borderBottom: `1px solid ${T.border}`,
      fontFamily: T.mono,
      fontSize: 9,
      color: T.text3,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      flexShrink: 0,
    },
    liveDot: {
      width: 6,
      height: 6,
      background: T.green,
      borderRadius: "50%",
      animation: "pulse 2s ease-in-out infinite",
    },
    saveRow: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      whiteSpace: "nowrap",
    },
  };

  const renderEditor = () => {
    switch (activeTab) {
      case "hero":
        return <HeroEditor data={data.hero} onChange={set("hero")} />;
      case "about":
        return <AboutEditor data={data.about} onChange={set("about")} />;
      case "skills":
        return <SkillsEditor data={data.skills} onChange={set("skills")} />;
      case "projects":
        return (
          <ProjectsEditor data={data.projects} onChange={set("projects")} />
        );
      case "contact":
        return <ContactEditor data={data.contact} onChange={set("contact")} />;
      default:
        return null;
    }
  };

  return (
    <div style={layout.app}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb { background: ${T.border2}; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      {/* TOP BAR */}
      <div style={layout.topbar}>
        {/* <div style={layout.logo}></div> */}

        {/* Section Tabs */}
        <div style={layout.tabs}>
          {tabs.map((t) => (
            <button
              key={t.id}
              style={layout.tab(activeTab === t.id)}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div style={layout.saveRow}>
          <div style={layout.viewToggle}>
            {[
              ["split", "Split"],
              ["editor", "Edit"],
              ["preview", "Preview"],
            ].map(([v, l]) => (
              <button
                key={v}
                style={layout.viewBtn(view === v)}
                onClick={() => setView(v)}
              >
                {l}
              </button>
            ))}
          </div>
          <Btn onClick={handleSave} variant={saved ? "ghost" : "primary"} small>
            {saved ? "✓ Saved" : "Save"}
          </Btn>
        </div>
      </div>

      {/* BODY */}
      <div style={layout.body}>
        {/* EDITOR */}
        <div style={layout.editorPane}>
          <div style={layout.editorScroll}>{renderEditor()}</div>
        </div>

        {/* PREVIEW */}
        <div style={layout.previewPane}>
          <div style={layout.previewLabel}>
            <div style={layout.liveDot} />
            Live Preview — updates as you type
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            <Preview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
