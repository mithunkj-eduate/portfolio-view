import { useEffect, useRef, useState } from "react";
import { convertDriveToImageUrl } from "../../utly/utlyFunction";

/* ─── SECTION THEME CONFIG ─────────────────────────────────────────────────── */
const SECTION_THEMES = {
  hero: {
    name: "Violet",
    accent: "#8b5cf6",
    accent2: "#ec4899",
    bubble: "rgba(139,92,246,",
    glow: "rgba(139,92,246,0.25)",
  },
  skills: {
    name: "Cyan",
    accent: "#06b6d4",
    accent2: "#3b82f6",
    bubble: "rgba(6,182,212,",
    glow: "rgba(6,182,212,0.22)",
  },
  projects: {
    name: "Rose",
    accent: "#f43f5e",
    accent2: "#f97316",
    bubble: "rgba(244,63,94,",
    glow: "rgba(244,63,94,0.22)",
  },
  about: {
    name: "Emerald",
    accent: "#10b981",
    accent2: "#6366f1",
    bubble: "rgba(16,185,129,",
    glow: "rgba(16,185,129,0.22)",
  },
  contact: {
    name: "Amber",
    accent: "#f59e0b",
    accent2: "#ef4444",
    bubble: "rgba(245,158,11,",
    glow: "rgba(245,158,11,0.22)",
  },
};

/* ─── GLOBAL CSS ────────────────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#07070f;--surface:#0d0d1a;--card:#111120;--border:rgba(255,255,255,.07);
  --text:#eeeef4;--muted:#6868888;
  --accent:#8b5cf6;--accent2:#ec4899;--glow:rgba(139,92,246,.25);
  --tr:background .55s ease,color .38s ease,border-color .38s ease;
  --display:'DM Sans', sans-serif;--mono:'DM Sans', sans-serif;
}
[data-theme="light"]{--bg:#f4f3ff;--surface:#edeafb;--card:#e6e3f6;--border:rgba(0,0,0,.09);--text:#16152b;--muted:#68688a}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--display);overflow-x:hidden;cursor:none;transition:var(--tr)}
a{color:inherit;text-decoration:none}ul{list-style:none}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:var(--accent);border-radius:2px}

/* cursor */
.c-dot{position:fixed;top:0;left:0;width:9px;height:9px;border-radius:50%;background:var(--accent2);pointer-events:none;transform:translate(-50%,-50%);z-index:9999;mix-blend-mode:screen;transition:width .14s,height .14s,background .28s}
.c-ring{position:fixed;top:0;left:0;width:38px;height:38px;border-radius:50%;border:1.5px solid var(--accent);pointer-events:none;transform:translate(-50%,-50%);z-index:9998;transition:width .22s cubic-bezier(.23,1,.32,1),height .22s cubic-bezier(.23,1,.32,1),border-color .28s}
.c-trail{position:fixed;border-radius:50%;background:var(--accent);mix-blend-mode:screen;transform:translate(-50%,-50%);pointer-events:none;z-index:9997}
.is-hover .c-ring{width:58px;height:58px;border-color:var(--accent2)}
.is-hover .c-dot{width:4px;height:4px}

/* noise */
.noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.28;
  background:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E") repeat;background-size:160px}

/* mouse glow */
.m-glow{position:fixed;pointer-events:none;z-index:2;width:560px;height:560px;border-radius:50%;transform:translate(-50%,-50%);transition:background .5s ease}

/* nav */
nav{position:fixed;top:0;inset-x:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1.1rem 3rem;background:rgba(7,7,15,.65);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);transition:var(--tr)}
[data-theme="light"] nav{background:rgba(244,243,255,.78)}
.logo{font-size:1.15rem;font-weight:800;letter-spacing:-.02em;}
.logo span{color:var(--accent);transition:color .4s}
.nav-r{display:flex;gap:1.8rem;align-items:center}
.nav-r a{font-size:.76rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:color .2s}
.nav-r a:hover{color:var(--accent)}
.tbtn{background:var(--card);border:1px solid var(--border);color:var(--text);padding:.38rem .9rem;border-radius:99px;font-size:.7rem;font-family:var(--mono);cursor:none;transition:all .22s}
.tbtn:hover{border-color:var(--accent);color:var(--accent)}

/* reveal */
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:none}

/* section */
.sw{padding:6rem 5rem;position:relative;z-index:3}
.stag{font-family:var(--mono);font-size:.63rem;color:var(--accent);letter-spacing:.22em;text-transform:uppercase;margin-bottom:.65rem;display:flex;align-items:center;gap:.5rem;transition:color .4s}
.stag::before{content:'';width:18px;height:1px;background:var(--accent);transition:background .4s}
h2{font-size:clamp(1.9rem,3.6vw,2.75rem);font-weight:800;letter-spacing:-.03em;margin-bottom:2.6rem;transition:color .4s}
.sep{height:1px;background:var(--border);margin:0 5rem;transition:background .4s}

/* hero */
.hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;padding:8rem 5rem 4rem;z-index:3;position:relative}
.hlbl{font-family:var(--mono);font-size:.68rem;color:var(--accent);letter-spacing:.2em;text-transform:uppercase;margin-bottom:1rem;display:flex;align-items:center;gap:.5rem;transition:color .4s}
.hlbl::before{content:'';width:22px;height:1px;background:var(--accent);transition:background .4s}
.hname{font-size:clamp(3rem,5.5vw,5rem);font-weight:800;line-height:1;letter-spacing:-.04em;margin-bottom:.5rem}
.hl{background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hsub{font-family:var(--mono);font-size:.8rem;color:var(--muted);margin-bottom:1.4rem;line-height:1.75;transition:color .4s}
.hdesc{font-size:.93rem;color:var(--muted);line-height:1.85;max-width:450px;margin-bottom:2.2rem;transition:color .4s}
.crow{display:flex;gap:.9rem;flex-wrap:wrap}
.bp{padding:.78rem 1.85rem;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:none;transition:transform .2s,box-shadow .2s,background .4s}
.bp:hover{transform:translateY(-2px);box-shadow:0 8px 26px var(--glow)}
.bg{padding:.78rem 1.85rem;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:transparent;color:var(--text);border:1px solid var(--border);border-radius:8px;cursor:none;transition:border-color .2s,color .2s}
.bg:hover{border-color:var(--accent);color:var(--accent)}
.stats{display:flex;gap:2.2rem;margin-top:2.8rem}
.sv{font-size:1.85rem;font-weight:800;color:var(--accent);display:block;transition:color .4s}
.sl{font-family:var(--mono);font-size:.62rem;color:var(--muted);letter-spacing:.12em;text-transform:uppercase;transition:color .4s}

/* hero visual */
.hvis{position:relative;display:flex;justify-content:center;align-items:center}
.himgw{width:330px;height:390px;border-radius:20px;overflow:hidden;border:1px solid var(--border);box-shadow:0 0 50px var(--glow);animation:float 5s ease-in-out infinite;transition:box-shadow .5s}
.hph{width:100%;height:100%;background:linear-gradient(145deg,var(--surface),var(--card));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}
.hph svg{opacity:.22}.hph span{font-family:var(--mono);font-size:.62rem;color:var(--muted)}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
.orb{position:absolute;border-radius:50%;border:1px solid var(--border);pointer-events:none;top:50%;left:50%;transform:translate(-50%,-50%);animation:spin 22s linear infinite;transition:border-color .4s}
.orb2{animation-duration:34s;animation-direction:reverse}
.od{position:absolute;width:7px;height:7px;border-radius:50%;background:var(--accent);top:0;left:50%;transform:translate(-50%,-50%);transition:background .4s}
.od2{background:var(--accent2);top:100%;transition:background .4s}
@keyframes spin{to{transform:translate(-50%,-50%) rotate(360deg)}}

/* skills */
.sgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(205px,1fr));gap:1.3rem}
.scard{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:1.45rem;transition:border-color .32s,transform .28s,box-shadow .28s,background .4s}
.scard:hover{border-color:var(--accent);transform:translateY(-4px);box-shadow:0 12px 34px var(--glow)}
.scard h3{font-family:var(--mono);font-size:.62rem;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;margin-bottom:.95rem;transition:color .4s}
.pills{display:flex;flex-wrap:wrap;gap:.42rem}
.pill{background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);color:var(--text);font-size:.7rem;padding:.26rem .72rem;border-radius:99px;font-family:var(--mono);transition:background .2s,border-color .2s}
.pill:hover{background:rgba(139,92,246,.27);border-color:var(--accent)}

/* projects */
.pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(295px,1fr));gap:1.75rem}
. {background:var(--card);border:1px solid var(--border);border-radius:17px;overflow:hidden;transition:transform .3s,box-shadow .3s,border-color .32s,background .4s;display:flex;flex-direction:column}
.pcard:hover{transform:translateY(-5px);box-shadow:0 18px 52px rgba(0,0,0,.35);border-color:var(--accent)}
.pimg{height:180px;background:linear-gradient(145deg,var(--surface),var(--card));display:flex;align-items:center;justify-content:center;border-bottom:1px solid var(--border)}
.pimg svg{opacity:.2}
.pbody{padding:1.45rem;flex:1;display:flex;flex-direction:column}
.ptitle{font-size:1.03rem;font-weight:700;margin-bottom:.45rem}
.pdesc{font-size:.8rem;color:var(--muted);line-height:1.65;flex:1;margin-bottom:1rem;transition:color .4s}
.plink{font-family:var(--mono);font-size:.65rem;color:var(--accent);letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.35rem;transition:gap .2s,color .4s}
.plink:hover{gap:.65rem}

/* about */
.agrid{display:grid;grid-template-columns:1fr 1fr;gap:3.8rem;align-items:start}
.adesc p{color:var(--muted);line-height:1.85;margin-bottom:.85rem;font-size:.9rem;transition:color .4s}
.alist{margin-top:1.4rem;display:flex;flex-direction:column;gap:.6rem}
.arow{display:flex;gap:.85rem;font-size:.8rem}
.albl{font-family:var(--mono);color:var(--muted);min-width:74px;font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;transition:color .4s}
.aval{color:var(--text);transition:color .4s}
.elist{display:flex;flex-direction:column;gap:1.15rem}
.ecard{background:var(--card);border:1px solid var(--border);border-radius:13px;padding:1.35rem;position:relative;overflow:hidden;transition:border-color .32s,background .4s}
.ecard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(to bottom,var(--accent),var(--accent2));border-radius:3px 0 0 3px}
.ecard:hover{border-color:var(--accent)}
.erole{font-weight:700;font-size:.9rem;margin-bottom:.18rem}
.eco{color:var(--accent);font-size:.8rem;margin-bottom:.16rem;transition:color .4s}
.eper{font-family:var(--mono);font-size:.65rem;color:var(--muted);margin-bottom:.82rem;transition:color .4s}
.etags{display:flex;flex-wrap:wrap;gap:.32rem}
.etag{font-family:var(--mono);font-size:.6rem;color:var(--muted);background:rgba(255,255,255,.04);padding:.17rem .52rem;border-radius:4px;transition:color .4s,background .4s}

/* contact */
.cwrap{max-width:620px;margin:0 auto;text-align:center}
.cdesc{color:var(--muted);line-height:1.8;margin-bottom:2.1rem;font-size:.9rem;transition:color .4s}
.cemail{font-size:1.25rem;font-weight:700;color:var(--accent);display:inline-block;margin-bottom:.55rem;transition:color .4s}
.cemail:hover{color:var(--accent2)}
.cphone{font-family:var(--mono);font-size:.78rem;color:var(--muted);margin-bottom:1.75rem;transition:color .4s}
.srow{display:flex;gap:.85rem;justify-content:center;margin-top:1.45rem;flex-wrap:wrap}
.sbtn{padding:.62rem 1.45rem;border:1px solid var(--border);border-radius:8px;font-size:.72rem;font-family:var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);transition:all .2s}
.sbtn:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}

/* footer */
footer{padding:1.75rem 5rem;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;z-index:3;position:relative;transition:var(--tr)}
footer p{font-family:var(--mono);font-size:.65rem;color:var(--muted)}
.flinks{display:flex;gap:1.4rem}
.flinks a{font-family:var(--mono);font-size:.65rem;color:var(--muted);transition:color .2s}.flinks a:hover{color:var(--accent)}

/* theme indicator dots */
.idots{position:fixed;bottom:1.4rem;right:1.4rem;z-index:200;display:flex;flex-direction:column;gap:.45rem;align-items:flex-end}
.idots-label{font-family:var(--mono);font-size:.58rem;color:var(--accent);letter-spacing:.12em;text-transform:uppercase;transition:color .4s}
.idots-row{display:flex;gap:.32rem}
.idot{width:7px;height:7px;border-radius:50%;transition:background .4s,transform .2s}

/* blink */
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.blink{animation:blink 1.1s step-end infinite;color:var(--accent)}

@media(max-width:900px){
  .hero{grid-template-columns:1fr;padding:7rem 1.8rem 3rem;text-align:center}
  .hvis{display:none}.stats{justify-content:center}.crow{justify-content:center}.hlbl{justify-content:center}
  .agrid{grid-template-columns:1fr}.sw{padding:4rem 1.8rem}
  nav{padding:.56rem 1.2rem}.nav-r{gap:1.2rem}
.nav-r a{font-size:.56rem;}
  footer{flex-direction:column;gap:.75rem;text-align:center;padding:1.5rem 1.8rem}
  .sep{margin:0 1.8rem}
}
`;

/* ─── BUBBLE PHYSICS ────────────────────────────────────────────────────────── */
class Bubble {
  constructor(W, H, col) {
    this.W = W;
    this.H = H;
    this.spawn(col);
    this.y = Math.random() * H;
  }
  spawn(col) {
    this.x = Math.random() * this.W;
    this.y = this.H + 60;
    this.r = Math.random() * 26 + 9;
    this.vx = (Math.random() - 0.5) * 0.45;
    this.vy = -(Math.random() * 0.75 + 0.28);
    this.alpha = Math.random() * 0.32 + 0.07;
    this.wobble = Math.random() * Math.PI * 2;
    this.ws = Math.random() * 0.022 + 0.007;
    this.col = col;
  }
  update(mx, my) {
    this.wobble += this.ws;
    this.x += this.vx + Math.sin(this.wobble) * 0.38;
    this.y += this.vy;
    const dx = this.x - mx,
      dy = this.y - my,
      d = Math.sqrt(dx * dx + dy * dy);
    if (d < 130 && d > 0) {
      const f = (130 - d) / 130;
      this.x += (dx / d) * f * 2.8;
      this.y += (dy / d) * f * 2.8;
    }
    return this.y < -this.r * 2;
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.r,
    );
    g.addColorStop(0, `${this.col}0.13)`);
    g.addColorStop(1, `${this.col}0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.strokeStyle = `${this.col}0.65)`;
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(
      this.x - this.r * 0.3,
      this.y - this.r * 0.32,
      this.r * 0.26,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = `${this.col}0.38)`;
    ctx.fill();
    ctx.restore();
  }
}

function BubbleCanvas({ section }) {
  const cvs = useRef(null);
  const bubbles = useRef([]);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(null);
  const col = useRef(
    SECTION_THEMES[section]?.bubble || SECTION_THEMES.hero.bubble,
  );

  useEffect(() => {
    col.current = SECTION_THEMES[section]?.bubble || SECTION_THEMES.hero.bubble;
  }, [section]);

  useEffect(() => {
    const c = cvs.current,
      ctx = c.getContext("2d");
    let W = (c.width = window.innerWidth),
      H = (c.height = window.innerHeight);
    const N = Math.floor(W / 26);
    bubbles.current = Array.from(
      { length: N },
      () => new Bubble(W, H, col.current),
    );
    const onMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse);
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      const m = mouse.current;
      bubbles.current = bubbles.current.filter((b) => {
        b.col = col.current;
        return !b.update(m.x, m.y);
      });
      while (bubbles.current.length < N)
        bubbles.current.push(new Bubble(W, H, col.current));
      bubbles.current.forEach((b) => b.draw(ctx));
      raf.current = requestAnimationFrame(tick);
    };
    tick();
    const onResize = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={cvs}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}

/* ─── CURSOR ────────────────────────────────────────────────────────────────── */
function Cursor() {
  const dot = useRef(null),
    ring = useRef(null),
    trails = useRef([]);
  const pos = useRef({ x: 0, y: 0 }),
    rp = useRef({ x: 0, y: 0 }),
    hist = useRef(Array(10).fill({ x: 0, y: 0 }));
  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      rp.current.x += (pos.current.x - rp.current.x) * 0.13;
      rp.current.y += (pos.current.y - rp.current.y) * 0.13;
      if (dot.current) {
        dot.current.style.left = pos.current.x + "px";
        dot.current.style.top = pos.current.y + "px";
      }
      if (ring.current) {
        ring.current.style.left = rp.current.x + "px";
        ring.current.style.top = rp.current.y + "px";
      }
      hist.current = [{ ...pos.current }, ...hist.current.slice(0, 9)];
      trails.current.forEach((el, i) => {
        if (!el) return;
        const t = hist.current[i] || pos.current;
        el.style.left = t.x + "px";
        el.style.top = t.y + "px";
        const s = Math.max(0.5, 5 - i * 0.45);
        el.style.width = s + "px";
        el.style.height = s + "px";
        el.style.opacity = String((10 - i) / 16);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div className="c-dot" ref={dot} />
      <div className="c-ring" ref={ring} />
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className="c-trail"
          ref={(el) => (trails.current[i] = el)}
        />
      ))}
    </>
  );
}

/* ─── MOUSE GLOW ────────────────────────────────────────────────────────────── */
function MouseGlow({ section }) {
  const ref = useRef(null);
  const t = SECTION_THEMES[section] || SECTION_THEMES.hero;
  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="m-glow"
      ref={ref}
      style={{
        background: `radial-gradient(circle, ${t.glow} 0%, transparent 65%)`,
      }}
    />
  );
}

/* ─── TYPEWRITER ────────────────────────────────────────────────────────────── */
function TypeWriter({ text }) {
  const [d, setD] = useState("");
  useEffect(() => {
    let i = 0;
    setD("");
    const id = setInterval(() => {
      setD(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [text]);
  return (
    <>
      {d}
      <span className="blink">|</span>
    </>
  );
}

/* ─── REVEAL HOOK ───────────────────────────────────────────────────────────── */
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
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── ACTIVE SECTION HOOK ───────────────────────────────────────────────────── */
function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const ids = ["hero", "skills", "projects", "about", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.38 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

/* ─── MAIN COMPONENT ────────────────────────────────────────────────────────── */
export default function BubbleCursorProfile({ data }) {
  const [theme, setTheme] = useState("dark");
  const [hover, setHover] = useState(false);
  const active = useActiveSection();
  useReveal();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const t = SECTION_THEMES[active] || SECTION_THEMES.hero;
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--accent2", t.accent2);
    document.documentElement.style.setProperty("--glow", t.glow);
  }, [active]);

  useEffect(() => {
    const add = () => setHover(true),
      rem = () => setHover(false);
    const els = document.querySelectorAll("a,button");
    els.forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", rem);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", rem);
      });
  });

  const D = data;
  const { hero, projects, about, skills, contact, footer } = D;

  const driveLink = hero.image ? hero.image : "";

  const imageUrl = convertDriveToImageUrl(driveLink);
  return (
    <>
      <style>{CSS}</style>
      <div className={hover ? "is-hover" : ""}>
        <Cursor />
        <MouseGlow section={active} />
        <div className="noise" />
        <BubbleCanvas section={active} />

        {/* Section indicator */}
        <div className="idots">
          <div className="idots-label">{SECTION_THEMES[active]?.name}</div>
          <div className="idots-row">
            {Object.entries(SECTION_THEMES).map(([k, v]) => (
              <div
                key={k}
                className="idot"
                style={{
                  background: active === k ? v.accent : "var(--border)",
                  transform: active === k ? "scale(1.5)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* NAV */}
        <nav>
          <div className="logo">
            {hero?.name.charAt(0)} <span>{hero.highlight.charAt(0)}</span>
          </div>
          <div className="nav-r">
            {["Skills", "Projects", "About", "Contact"].map((s, i) => (
              <a key={i} href={`#${s.toLowerCase()}`}>
                {s}
              </a>
            ))}
            <button
              className="tbtn"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section id="hero" className="hero">
          <div>
            <div className="hlbl">Available for work</div>
            <h1 className="hname">
              {hero.name}
              <br />
              <span className="hl">{hero.highlight}</span>
            </h1>
            <p className="hsub">
              <TypeWriter text={hero.subtitle} />
            </p>
            <p className="hdesc">{hero.desc}</p>
            <div className="crow">
              <a href="#contact" className="bp">
                Get In Touch
              </a>
              <a href="#projects" className="bg">
                View Work
              </a>
            </div>
            <div className="stats">
              {hero.stats.map((s, i) => (
                <div key={i}>
                  <span className="sv">{s.value}</span>
                  <span className="sl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hvis">
            <div className="orb" style={{ width: "430px", height: "430px" }}>
              <div className="od" />
              <div className="od2" />
            </div>
            <div
              className="orb orb2"
              style={{ width: "530px", height: "530px" }}
            >
              <div className="od" style={{ top: "25%", left: "100%" }} />
            </div>
            <div className="himgw">
              {hero.image && imageUrl ? (
                <img
                  src={imageUrl}
                  alt={hero.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div className="hph">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <circle
                      cx="34"
                      cy="25"
                      r="15"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 62c0-14.912 12.088-27 27-27s27 12.088 27 27"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span>heroimage2.png</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="sep" />

        {/* SKILLS */}
        <section id="skills" className="sw">
          <div className="stag">Expertise</div>
          <h2 className="reveal">Skills & Technologies</h2>
          <div className="sgrid">
            {skills.map((cat, i) => (
              <div
                className="scard reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <h3>{cat.title}</h3>
                <div className="pills">
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

        <div className="sep" />

        {/* PROJECTS */}
        <section id="projects" className="sw">
          <div className="stag">Work</div>
          <h2 className="reveal">Selected Projects</h2>
          <div className="pgrid">
            {projects.map((p, i) => (
              <div
                className="pcard reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.11}s` }}
              >
                <div className="pimg">
                  {p.image && convertDriveToImageUrl(p.image) ? (
                    <img
                      src={convertDriveToImageUrl(p.image)}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                      <rect
                        x="3"
                        y="7"
                        width="46"
                        height="32"
                        rx="4"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3 15h46"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                      />
                      <circle cx="9" cy="11" r="1.7" fill="var(--accent)" />
                      <circle cx="15" cy="11" r="1.7" fill="var(--accent2)" />
                      <path
                        d="M13 27l6-6 6 6 6-10"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="pbody">
                  <div className="ptitle">{p.title}</div>
                  <div className="pdesc">{p.desc}</div>
                  <div className="pills" style={{ marginBottom: "1rem" }}>
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
                    className="plink"
                  >
                    View Live →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="sep" />

        {/* ABOUT */}
        <section id="about" className="sw">
          <div className="stag">About</div>
          <h2 className="reveal">Who I Am</h2>
          <div className="agrid">
            <div className="adesc reveal">
              {about.desc.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="alist">
                {about.info.map((r, i) => (
                  <div className="arow" key={i}>
                    <span className="albl">{r.label}</span>
                    <span className="aval">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="elist reveal" style={{ transitionDelay: ".13s" }}>
              {about.experience.map((exp, i) => (
                <div className="ecard" key={i}>
                  <div className="erole">{exp.role}</div>
                  <div className="eco">{exp.company}</div>
                  <div className="eper">{exp.period}</div>
                  <div className="etags">
                    {exp.tech.map((t, i) => (
                      <span className="etag" key={i}>
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
        <section id="contact" className="sw">
          <div className="cwrap reveal">
            <div className="stag" style={{ justifyContent: "center" }}>
              Contact
            </div>
            <h2 style={{ textAlign: "center" }}>{contact.title}</h2>
            <p className="cdesc">{contact.desc}</p>
            <a href={`mailto:${contact.email}`} className="cemail">
              {contact.email}
            </a>
            <p className="cphone">{contact.phone}</p>
            <a
              href={`mailto:${contact.email}`}
              className="bp"
              style={{ display: "inline-block" }}
            >
              Send a Message
            </a>
            <div className="srow">
              {contact.social.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="sbtn"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer>
          <p>{footer.text}</p>
          <div className="flinks">
            {footer.links.map((l, i) => (
              <a key={i} href={l.link} target="_blank" rel="noreferrer">
                {l.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
