import { useState, useEffect, useRef } from "react";

/* ─── Google Fonts ────────────────────────────────────────────────────── */
const gf = document.createElement("link");
gf.href =
  "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap";
gf.rel = "stylesheet";
document.head.appendChild(gf);



/* ─── useInView hook ─────────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Reveal wrapper ─────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, direction = "up" }) {
  const [ref, vis] = useInView();
  const transforms = {
    up: "translateY(32px)",
    left: "translateX(32px)",
    right: "translateX(-32px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : transforms[direction],
        transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── CSS injection ──────────────────────────────────────────────────── */
const CSS = `
  :root {
    --bg:#080c10; --bg2:#0d1117; --bg3:#111820;
    --surface:#141c25; --border:rgba(255,255,255,0.07);
    --border2:rgba(255,255,255,0.14);
    --text:#e8edf2; --text2:#7a8a99; --text3:#3a4a5a;
    --accent:#00d4ff; --green:#00e5a0; --gold:#f0c060; --red:#ff5252;
    --mono:'DM Mono',monospace; --display:'Syne',sans-serif;
    --serif:'Instrument Serif',serif;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:var(--bg);color:var(--text);font-family:var(--display);cursor:none;overflow-x:hidden}
  ::selection{background:rgba(0,212,255,.18);color:var(--text)}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:var(--bg)}
  ::-webkit-scrollbar-thumb{background:var(--border2)}

  /* cursor */
  .cur{width:8px;height:8px;background:var(--accent);border-radius:50%;position:fixed;pointer-events:none;z-index:9999;mix-blend-mode:difference;transition:transform .1s}
  .cur-ring{width:36px;height:36px;border:1.5px solid rgba(0,212,255,.45);border-radius:50%;position:fixed;pointer-events:none;z-index:9998;transition:width .2s,height .2s}

  /* noise */
  .noise{position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");pointer-events:none;z-index:900;opacity:.55}

  /* nav */
  .nav{position:fixed;top:0;left:0;right:0;z-index:400;padding:18px 60px;display:flex;justify-content:space-between;align-items:center;backdrop-filter:blur(20px);border-bottom:1px solid var(--border);background:rgba(8,12,16,.82);transition:padding .3s}
  .nav.scrolled{padding:12px 60px}
  .nav-logo{font-family:var(--mono);font-size:14px;font-weight:700;letter-spacing:.15em;color:var(--accent)}
  .nav-links{display:flex;gap:36px;list-style:none}
  .nav-links a{color:var(--text2);text-decoration:none;font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;transition:color .2s;cursor:none;position:relative}
  .nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:1px;background:var(--accent);transform:scaleX(0);transition:transform .25s;transform-origin:left}
  .nav-links a:hover{color:var(--text)} .nav-links a:hover::after,.nav-links a.active::after{transform:scaleX(1)}
  .nav-links a.active{color:var(--accent)}
  .nav-badge{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:10px;color:var(--green);background:rgba(0,229,160,.07);border:1px solid rgba(0,229,160,.2);padding:6px 14px;border-radius:100px}
  .nav-badge::before{content:'';width:6px;height:6px;background:var(--green);border-radius:50%;animation:blink 2s ease-in-out infinite}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}

  /* hero */
  #hero{min-height:100vh;display:flex;align-items:center;padding:120px 60px 80px;position:relative;overflow:hidden}
  .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,212,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,.025) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)}
  .hero-glow{position:absolute;top:-200px;left:-200px;width:700px;height:700px;background:radial-gradient(circle,rgba(0,212,255,.07) 0%,transparent 70%);pointer-events:none}
  .hero-glow2{position:absolute;bottom:-100px;right:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(0,120,255,.05) 0%,transparent 70%);pointer-events:none}
  .hero-inner{max-width:1200px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
  .hero-tag{display:inline-flex;align-items:center;gap:12px;font-family:var(--mono);font-size:11px;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;margin-bottom:28px}
  .hero-tag::before{content:'';display:block;width:28px;height:1px;background:var(--accent)}
  h1.hero-name{font-size:clamp(52px,7vw,90px);font-weight:800;line-height:.95;letter-spacing:-.03em;margin-bottom:8px}
  .hero-hl{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--accent);display:block}
  .hero-sub{font-family:var(--mono);font-size:12px;color:var(--text2);letter-spacing:.06em;margin:20px 0 16px}
  .hero-desc{font-size:16px;color:var(--text2);line-height:1.8;max-width:440px;margin-bottom:44px}
  .hero-cta{display:flex;gap:16px;flex-wrap:wrap}

  /* btns */
  .btn-p{display:inline-flex;align-items:center;gap:10px;background:var(--accent);color:#000;font-family:var(--display);font-weight:700;font-size:12px;letter-spacing:.08em;padding:14px 28px;border:none;cursor:none;text-decoration:none;transition:all .2s;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))}
  .btn-p:hover{background:#fff;transform:translateY(-2px)}
  .btn-o{display:inline-flex;align-items:center;gap:10px;background:transparent;color:var(--text);font-family:var(--display);font-weight:600;font-size:12px;letter-spacing:.08em;padding:13px 28px;border:1px solid var(--border2);cursor:none;text-decoration:none;transition:all .2s;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))}
  .btn-o:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}

  /* hero right */
  .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px}
  .stat-card{background:var(--surface);border:1px solid var(--border);padding:24px 18px;position:relative;overflow:hidden;transition:border-color .3s}
  .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .4s}
  .stat-card:hover::before{transform:scaleX(1)}
  .stat-card:hover{border-color:var(--border2)}
  .stat-val{font-size:36px;font-weight:800;color:var(--accent);line-height:1;margin-bottom:6px}
  .stat-lbl{font-family:var(--mono);font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.1em}

  /* terminal */
  .term{background:var(--bg2);border:1px solid var(--border);overflow:hidden}
  .term-bar{background:var(--bg3);padding:10px 16px;display:flex;align-items:center;gap:7px;border-bottom:1px solid var(--border)}
  .td{width:10px;height:10px;border-radius:50%}
  .td.r{background:#ff5f57}.td.y{background:#febc2e}.td.g{background:#28c840}
  .term-title{font-family:var(--mono);font-size:10px;color:var(--text3);margin-left:8px}
  .term-body{padding:20px;font-family:var(--mono);font-size:12px;line-height:2.1}
  .tc{color:var(--text3)}.tk{color:var(--accent)}.tv{color:var(--green)}.ts{color:var(--gold)}
  .tcur{display:inline-block;width:8px;height:14px;background:var(--accent);vertical-align:middle;animation:blink 1s steps(1) infinite}

  /* divider */
  .divider{width:100%;height:1px;background:var(--border);position:relative}
  .divider::after{content:'';position:absolute;left:60px;top:0;width:80px;height:1px;background:var(--accent)}

  /* sections */
  .sec-wrap{max-width:1200px;margin:0 auto;padding:100px 60px}
  .sec-label{display:flex;align-items:center;gap:16px;font-family:var(--mono);font-size:10px;color:var(--accent);letter-spacing:.18em;text-transform:uppercase;margin-bottom:14px}
  .sec-label::after{content:'';flex:1;height:1px;background:var(--border);max-width:80px}
  h2.sec-title{font-size:clamp(36px,5vw,60px);font-weight:800;letter-spacing:-.03em;line-height:1;margin-bottom:60px}
  h2 em{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--accent)}

  /* about */
  #about{background:var(--bg2)}
  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
  .about-p{font-size:16px;color:var(--text2);line-height:1.85;margin-bottom:18px}
  .about-p strong{color:var(--text);font-weight:600}
  .info-table{border:1px solid var(--border);margin-top:32px}
  .info-row{display:flex;border-bottom:1px solid var(--border)}
  .info-row:last-child{border-bottom:none}
  .info-lbl{width:110px;padding:13px 18px;font-family:var(--mono);font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.1em;border-right:1px solid var(--border);background:rgba(255,255,255,.02)}
  .info-val{flex:1;padding:13px 18px;font-size:14px;color:var(--text)}

  /* exp */
  .exp-list{display:flex;flex-direction:column}
  .exp-card{border:1px solid var(--border);border-bottom:none;padding:26px 26px;display:flex;gap:22px;position:relative;transition:background .2s}
  .exp-card:last-child{border-bottom:1px solid var(--border)}
  .exp-card:hover{background:rgba(0,212,255,.025)}
  .exp-num{font-family:var(--mono);font-size:10px;color:var(--text3);padding-top:3px;min-width:22px}
  .exp-body{flex:1}
  .exp-role{font-size:18px;font-weight:700;margin-bottom:3px}
  .exp-co{font-family:var(--mono);font-size:11px;color:var(--accent);margin-bottom:8px}
  .exp-period{font-family:var(--mono);font-size:10px;color:var(--text3)}
  .exp-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}
  .exp-tag{font-family:var(--mono);font-size:9px;color:var(--text2);background:rgba(255,255,255,.04);border:1px solid var(--border);padding:3px 9px}
  .exp-cur{position:absolute;top:18px;right:22px;font-family:var(--mono);font-size:9px;color:var(--green);background:rgba(0,229,160,.08);border:1px solid rgba(0,229,160,.2);padding:3px 9px;border-radius:100px}

  /* skills */
  #skills{background:var(--bg)}
  .skills-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:var(--border);max-width:1200px;margin:0 auto}
  .skill-group{background:var(--bg);padding:40px 32px;position:relative;overflow:hidden;transition:background .2s}
  .skill-group::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .4s}
  .skill-group:hover::before{transform:scaleX(1)}
  .skill-group:hover{background:var(--surface)}
  .sg-num{font-family:var(--mono);font-size:9px;color:var(--text3);margin-bottom:18px;display:block}
  .sg-title{font-size:11px;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:.12em;margin-bottom:18px;font-family:var(--mono)}
  .skill-item{font-size:15px;font-weight:600;color:var(--text);display:flex;align-items:center;gap:10px;margin-bottom:10px}
  .skill-item::before{content:'';width:4px;height:4px;background:var(--accent);border-radius:50%;flex-shrink:0}

  /* projects */
  #projects{background:var(--bg2)}
  .proj-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--border)}
  .proj-card{background:var(--bg2);padding:52px 44px;position:relative;overflow:hidden;text-decoration:none;display:block;transition:background .3s;color:inherit}
  .proj-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--green));transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.4,0,.2,1)}
  .proj-card:hover::before{transform:scaleX(1)}
  .proj-card:hover{background:var(--bg3)}
  .proj-arrow{position:absolute;top:44px;right:44px;width:44px;height:44px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--text3);transition:all .2s}
  .proj-card:hover .proj-arrow{border-color:var(--accent);color:var(--accent);background:rgba(0,212,255,.08)}
  .proj-num{font-family:var(--mono);font-size:10px;color:var(--text3);margin-bottom:22px;display:block}
  .proj-title{font-size:26px;font-weight:800;letter-spacing:-.02em;margin-bottom:12px;line-height:1.1}
  .proj-desc{font-size:14px;color:var(--text2);line-height:1.75;margin-bottom:26px}
  .proj-techs{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:26px}
  .proj-tech{font-family:var(--mono);font-size:9px;color:var(--accent);background:rgba(0,212,255,.07);border:1px solid rgba(0,212,255,.2);padding:3px 9px;letter-spacing:.05em}
  .proj-link{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:10px;color:var(--text3);letter-spacing:.1em;text-transform:uppercase;transition:color .2s}
  .proj-card:hover .proj-link{color:var(--accent)}

  /* contact */
  #contact{background:var(--bg)}
  .contact-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
  .contact-title{font-size:clamp(32px,4.5vw,56px);font-weight:800;letter-spacing:-.03em;line-height:1;margin-bottom:18px}
  .contact-desc{font-size:16px;color:var(--text2);line-height:1.75;margin-bottom:36px}
  .contact-list{border:1px solid var(--border)}
  .contact-item{display:flex;align-items:center;gap:18px;padding:20px 22px;border-bottom:1px solid var(--border);text-decoration:none;transition:background .2s;color:inherit}
  .contact-item:last-child{border-bottom:none}
  .contact-item:hover{background:rgba(0,212,255,.04)}
  .contact-icon{width:40px;height:40px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0}
  .ci-lbl{font-family:var(--mono);font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.1em;margin-bottom:3px}
  .ci-val{font-size:14px;color:var(--text)}
  .social-panel{border:1px solid var(--border);padding:36px 30px;position:relative;overflow:hidden}
  .social-panel::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--accent),var(--green))}
  .sp-title{font-family:var(--mono);font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:22px}
  .social-link{display:flex;align-items:center;gap:14px;text-decoration:none;padding:14px 16px;border:1px solid var(--border);border-bottom:none;transition:all .2s;color:var(--text);cursor:none}
  .social-link:last-child{border-bottom:1px solid var(--border)}
  .social-link:hover{border-color:var(--accent);background:rgba(0,212,255,.04);color:var(--accent)}
  .sl-name{font-weight:700;font-size:15px}
  .sl-url{margin-left:auto;font-family:var(--mono);font-size:10px;color:var(--text3)}

  /* footer */
  footer{border-top:1px solid var(--border);padding:28px 60px;display:flex;justify-content:space-between;align-items:center;background:var(--bg2)}
  .ft{font-family:var(--mono);font-size:10px;color:var(--text3)}
  .flinks{display:flex;gap:28px}
  .flinks a{font-family:var(--mono);font-size:10px;color:var(--text3);text-decoration:none;transition:color .2s;letter-spacing:.08em;cursor:none}
  .flinks a:hover{color:var(--accent)}

  /* hero anim */
  .h-anim{opacity:0;transform:translateY(24px);animation:fadeUp .6s forwards}
  @keyframes fadeUp{to{opacity:1;transform:none}}
  .h-anim-r{opacity:0;transform:translateX(24px);animation:fadeRight .7s forwards}
  @keyframes fadeRight{to{opacity:1;transform:none}}

  /* mobile */
  @media(max-width:900px){
    .nav{padding:14px 24px}
    .nav-links{display:none}
    #hero{padding:100px 24px 60px}
    .hero-inner{grid-template-columns:1fr;gap:48px}
    .sec-wrap{padding:70px 24px}
    .divider::after{left:24px}
    .about-grid,.contact-inner{grid-template-columns:1fr;gap:40px}
    .skills-grid{grid-template-columns:repeat(2,1fr)}
    .proj-grid{grid-template-columns:1fr}
    footer{padding:24px;flex-direction:column;gap:14px;text-align:center}
  }
`;

/* ─── Icons ───────────────────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const ArrowDiag = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7A16 16 0 0 0 16 16.73l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const GHIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const LIIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ─── Custom cursor ───────────────────────────────────────────────────── */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
      }
    };
    const grow = () => {
      if (ring.current) {
        ring.current.style.width = "56px";
        ring.current.style.height = "56px";
      }
    };
    const shrink = () => {
      if (ring.current) {
        ring.current.style.width = "36px";
        ring.current.style.height = "36px";
      }
    };
    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    let raf;
    const animate = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ring.current)
        ring.current.style.transform = `translate(${p.rx - 18}px,${p.ry - 18}px)`;
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cur" />
      <div ref={ring} className="cur-ring" />
    </>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["hero", "about", "skills", "projects", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo">MKJ</div>
      <ul className="nav-links">
        {["about", "skills", "projects", "contact"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? "active" : ""}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-badge">Available for work</div>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
function Hero({ data }) {
  const { name, highlight, subtitle, desc, stats } = data;
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-inner">
        {/* Left */}
        <div>
          <div className="hero-tag h-anim" style={{ animationDelay: ".1s" }}>
            Full Stack Developer
          </div>
          <h1 className="hero-name h-anim" style={{ animationDelay: ".25s" }}>
            {name}
            <span className="hero-hl">{highlight}</span>
          </h1>
          <div className="hero-sub h-anim" style={{ animationDelay: ".4s" }}>
            {subtitle}
          </div>
          <p className="hero-desc h-anim" style={{ animationDelay: ".55s" }}>
            {desc}
          </p>
          <div className="hero-cta h-anim" style={{ animationDelay: ".7s" }}>
            <a href="#projects" className="btn-p">
              View Projects <ArrowRight />
            </a>
            <a href="mailto:mithunkj1996@gmail.com" className="btn-o">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="h-anim-r" style={{ animationDelay: ".85s" }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-val">{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
          {/* Terminal */}
          <div className="term">
            <div className="term-bar">
              <div className="td r" />
              <div className="td y" />
              <div className="td g" />
              <span className="term-title">mithun.config.json</span>
            </div>
            <div className="term-body">
              <div>
                <span className="tc">// Current stack</span>
              </div>
              <div>
                <span className="tk">frontend</span>:{" "}
                <span className="ts">"React.js, Next.js"</span>
              </div>
              <div>
                <span className="tk">backend</span>:{" "}
                <span className="ts">"Node.js, Golang"</span>
              </div>
              <div>
                <span className="tk">api</span>:{" "}
                <span className="ts">"GraphQL, REST"</span>
              </div>
              <div>
                <span className="tk">db</span>:{" "}
                <span className="ts">"MongoDB, PostgreSQL"</span>
              </div>
              <div>
                <span className="tk">location</span>:{" "}
                <span className="tv">"Bengaluru, IN"</span>
              </div>
              <div>
                <span className="tk">status</span>:{" "}
                <span className="tv">"open_to_work"</span>{" "}
                <span className="tcur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────────────────── */
function About({ data }) {
  const { desc, info, experience } = data;
  return (
    <section id="about">
      <div className="sec-wrap">
        <Reveal>
          <div className="sec-label">01 — About</div>
          <h2 className="sec-title">
            Who I <em>Am</em>
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={0.1}>
            <div>
              {desc.map((d, i) => (
                <p
                  key={i}
                  className="about-p"
                  dangerouslySetInnerHTML={{
                    __html: d.replace(
                      /(MERN|Golang|GraphQL|Full Stack Developer)/g,
                      "<strong>$1</strong>",
                    ),
                  }}
                />
              ))}
              <div className="info-table">
                {info.map((row, i) => (
                  <div key={i} className="info-row">
                    <div className="info-lbl">{row.label}</div>
                    <div className="info-val">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="exp-list">
              {experience.map((ex, i) => (
                <div key={i} className="exp-card">
                  {ex.current && <div className="exp-cur">● Current</div>}
                  <div className="exp-num">0{i + 1}</div>
                  <div className="exp-body">
                    <div className="exp-role">{ex.role}</div>
                    <div className="exp-co">{ex.company}</div>
                    <div className="exp-period">{ex.period}</div>
                    <div className="exp-tags">
                      {ex.tech.map((t, j) => (
                        <span key={j} className="exp-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills ──────────────────────────────────────────────────────────── */
function Skills({ data }) {
  return (
    <section id="skills">
      <div className="sec-wrap" style={{ paddingBottom: 0 }}>
        <Reveal>
          <div className="sec-label">02 — Skills</div>
          <h2 className="sec-title">
            Tech <em>Stack</em>
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="skills-grid">
          {data.map((sg, i) => (
            <div key={i} className="skill-group">
              <span className="sg-num">0{i + 1}</span>
              <div className="sg-title">{sg.title}</div>
              {sg.items.map((item, j) => (
                <div key={j} className="skill-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
      <div style={{ height: 100 }} />
    </section>
  );
}

/* ─── Projects ────────────────────────────────────────────────────────── */
function Projects({ data }) {
  return (
    <section id="projects">
      <div className="sec-wrap" style={{ paddingBottom: 0 }}>
        <Reveal>
          <div className="sec-label">03 — Projects</div>
          <h2 className="sec-title">
            Selected <em>Work</em>
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="proj-grid">
          {data.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card"
            >
              <div className="proj-arrow">
                <ArrowDiag />
              </div>
              <span className="proj-num">0{i + 1}</span>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-techs">
                {p.tech.map((t, j) => (
                  <span key={j} className="proj-tech">
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-link">
                Visit Project <ArrowDiag size={11} />
              </div>
            </a>
          ))}
        </div>
      </Reveal>
      <div style={{ height: 100 }} />
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────────────────── */
function Contact({ data }) {
  const { title, desc, email, phone, social } = data;
  const socialIcons = { GitHub: <GHIcon />, LinkedIn: <LIIcon /> };

  return (
    <section id="contact">
      <div className="sec-wrap">
        <Reveal>
          <div className="sec-label">04 — Contact</div>
        </Reveal>
        <div className="contact-inner">
          <Reveal delay={0.1}>
            <div>
              <div className="contact-title">
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <em
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--accent)",
                  }}
                >
                  {title.split(" ").slice(-1)[0]}
                </em>
              </div>
              <p className="contact-desc">{desc}</p>
              <div className="contact-list">
                <a href={`mailto:${email}`} className="contact-item">
                  <div className="contact-icon">
                    <MailIcon />
                  </div>
                  <div>
                    <div className="ci-lbl">Email</div>
                    <div className="ci-val">{email}</div>
                  </div>
                </a>
                <a
                  href={`tel:${phone}`}
                  className="contact-item"
                  style={{ borderBottom: "none" }}
                >
                  <div className="contact-icon">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="ci-lbl">Phone</div>
                    <div className="ci-val">{phone}</div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="social-panel">
              <div className="sp-title">// Find me online</div>
              {social.map((sc, i) => (
                <a
                  key={i}
                  href={sc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {socialIcons[sc.name] || null}
                  <span className="sl-name">{sc.name}</span>
                  <span className="sl-url">
                    {sc.link.replace("https://", "")}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────── */
function Footer({ data }) {
  return (
    <footer>
      <span className="ft">{data.text}</span>
      <div className="flinks">
        {data.links.map((l, i) => (
          <a key={i} href={l.link} target="_blank" rel="noopener noreferrer">
            {l.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

/* ─── Divider ─────────────────────────────────────────────────────────── */
const Divider = () => <div className="divider" />;

/* ═══════════════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════════════ */
export default function DevloperPortfolio({ data }) {
  const { hero, projects, about, skills, contact, footer } = data;

  return (
    <>
      <style>{CSS}</style>
      <div className="noise" />
      <Cursor />
      <Navbar />
      <main>
        <Hero data={hero} />
        <Divider />
        <About data={about} />
        <Divider />
        <Skills data={skills} />
        <Divider />
        <Projects data={projects} />
        <Divider />
        <Contact data={contact} />
      </main>
      <Footer data={footer} />
    </>
  );
}
