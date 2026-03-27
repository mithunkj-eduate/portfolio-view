import usePortfolioData from "../../data/portfolioData";
import { convertDriveToImageUrl } from "../../utly/utlyFunction";

export default function Projects() {
  const { projects } = usePortfolioData();

  return (
    <section id="projects">
      <div className="section-tag">What I've Built</div>
      <div className="section-title">Key Projects</div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card"
            onClick={() => window.open(p.link, "_blank")}
          >
            <div
              className="project-thumb"
              style={{ background: "linear-gradient(135deg,#0f0f20,#161628)" }}
            >
              {p.image && convertDriveToImageUrl(p.image) && (
                <img src={convertDriveToImageUrl(p.image)} className="" />
              )}
            </div>

            <div className="project-body">
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>

              <div className="project-stack">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <a className="project-link" href={p.link}>
                View Live →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <section id="projects">
  <div class="section-tag">What I've Built</div>
  <div class="section-title">Key Projects</div>
  <p class="section-sub">A selection of production applications I've designed and developed.</p>
  <div class="projects-grid">

    <div class="project-card" onclick="window.open('https://apisr.shareurinterest.com/','_blank')">
      <div class="project-thumb" style="background:linear-gradient(135deg,#0f0f20,#161628);">
        <svg width="100%" height="100%" viewBox="0 0 300 175">
          <circle cx="150" cy="88" r="55" fill="rgba(124,111,255,0.07)" stroke="rgba(124,111,255,0.18)" stroke-width="1"/>
          <circle cx="150" cy="88" r="32" fill="rgba(124,111,255,0.1)" stroke="rgba(124,111,255,0.25)" stroke-width="1"/>
          <path d="M150 60 C140 60,130 70,130 80 C130 96,150 112,150 112 C150 112,170 96,170 80 C170 70,160 60,150 60Z" fill="rgba(124,111,255,0.55)" stroke="rgba(124,111,255,0.8)" stroke-width="1.2"/>
          <circle cx="150" cy="80" r="6" fill="#08080f"/>
          <circle cx="92" cy="74" r="8" fill="rgba(67,232,160,0.45)" stroke="rgba(67,232,160,0.7)" stroke-width="1"/>
          <circle cx="210" cy="78" r="8" fill="rgba(255,107,107,0.45)" stroke="rgba(255,107,107,0.7)" stroke-width="1"/>
          <circle cx="105" cy="125" r="8" fill="rgba(255,153,0,0.45)" stroke="rgba(255,153,0,0.7)" stroke-width="1"/>
          <line x1="100" y1="74" x2="130" y2="80" stroke="rgba(124,111,255,0.3)" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="202" y1="78" x2="172" y2="80" stroke="rgba(124,111,255,0.3)" stroke-width="1" stroke-dasharray="4 3"/>
          <line x1="113" y1="118" x2="138" y2="105" stroke="rgba(124,111,255,0.3)" stroke-width="1" stroke-dasharray="4 3"/>
        </svg>
      </div>
      <div class="project-body">
        <div class="project-title">Multi-Vendor Marketplace</div>
        <p class="project-desc">Scalable platform with sellers, resellers & rentals. Location-based discovery, wallet payments, full order lifecycle, and admin dashboard.</p>
        <div class="project-stack">
          <span class="pill">React.js</span><span class="pill">Node.js</span><span class="pill">MongoDB</span><span class="pill">Express</span>
        </div>
        <a class="project-link" href="https://apisr.shareurinterest.com/" target="_blank">View Live →</a>
      </div>
    </div>

    <div class="project-card" onclick="window.open('https://snap.shareurinterest.com/','_blank')">
      <div class="project-thumb" style="background:linear-gradient(135deg,#18101e,#1e1228);">
        <svg width="100%" height="100%" viewBox="0 0 300 175">
          <rect x="90" y="20" width="120" height="135" rx="10" fill="rgba(229,53,171,0.07)" stroke="rgba(229,53,171,0.18)" stroke-width="1"/>
          <rect x="98" y="28" width="104" height="60" rx="6" fill="rgba(229,53,171,0.1)" stroke="rgba(229,53,171,0.2)" stroke-width="0.5"/>
          <rect x="98" y="96" width="104" height="48" rx="6" fill="rgba(229,53,171,0.07)" stroke="rgba(229,53,171,0.15)" stroke-width="0.5"/>
          <path d="M148 52 C148 49,144 46,140 49 C136 46,132 49,132 52 C132 58,140 64,140 64 C140 64,148 58,148 52Z" fill="rgba(229,53,171,0.7)"/>
          <circle cx="196" cy="52" r="5" fill="rgba(124,111,255,0.55)" stroke="rgba(124,111,255,0.7)" stroke-width="1"/>
          <circle cx="196" cy="66" r="5" fill="rgba(67,232,160,0.55)" stroke="rgba(67,232,160,0.7)" stroke-width="1"/>
          <circle cx="196" cy="115" r="5" fill="rgba(255,153,0,0.55)" stroke="rgba(255,153,0,0.7)" stroke-width="1"/>
        </svg>
      </div>
      <div class="project-body">
        <div class="project-title">ShareMyInterest</div>
        <p class="project-desc">Instagram-like social platform for sharing posts and interactions. Features user auth, feeds, likes, and user engagement.</p>
        <div class="project-stack">
          <span class="pill">React.js</span><span class="pill">Node.js</span><span class="pill">MongoDB</span>
        </div>
        <a class="project-link" href="https://snap.shareurinterest.com/" target="_blank">View Live →</a>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb" style="background:linear-gradient(135deg,#0c1a1a,#0a1f20);">
        <svg width="100%" height="100%" viewBox="0 0 300 175">
          <rect x="80" y="25" width="140" height="125" rx="12" fill="rgba(0,173,216,0.06)" stroke="rgba(0,173,216,0.18)" stroke-width="1"/>
          <polygon points="150,45 175,60 175,90 150,105 125,90 125,60" fill="none" stroke="rgba(229,53,171,0.5)" stroke-width="1.5"/>
          <circle cx="150" cy="45" r="5" fill="rgba(229,53,171,0.7)"/>
          <circle cx="175" cy="60" r="5" fill="rgba(229,53,171,0.7)"/>
          <circle cx="175" cy="90" r="5" fill="rgba(229,53,171,0.7)"/>
          <circle cx="150" cy="105" r="5" fill="rgba(229,53,171,0.7)"/>
          <circle cx="125" cy="90" r="5" fill="rgba(229,53,171,0.7)"/>
          <circle cx="125" cy="60" r="5" fill="rgba(229,53,171,0.7)"/>
          <circle cx="150" cy="75" r="14" fill="rgba(0,173,216,0.15)" stroke="rgba(0,173,216,0.4)" stroke-width="1.5"/>
          <text x="150" y="79" text-anchor="middle" fill="rgba(0,173,216,0.9)" font-size="9" font-family="DM Sans,sans-serif" font-weight="700">Go</text>
        </svg>
      </div>
      <div class="project-body">
        <div class="project-title">TransformTMC</div>
        <p class="project-desc">Enterprise app with optimized GraphQL data fetching via Apollo Client and scalable Golang backend with structured relational data via Entgo.</p>
        <div class="project-stack">
          <span class="pill g">Golang</span><span class="pill">TypeScript</span><span class="pill">GraphQL</span><span class="pill">React.js</span>
        </div>
        <span style="font-size:0.8rem;color:var(--muted);">Private / Internal</span>
      </div>
    </div>

    <div class="project-card">
      <div class="project-thumb" style="background:linear-gradient(135deg,#101a10,#14201a);">
        <svg width="100%" height="100%" viewBox="0 0 300 175">
          <rect x="80" y="30" width="140" height="115" rx="10" fill="rgba(104,160,99,0.07)" stroke="rgba(104,160,99,0.18)" stroke-width="1"/>
          <rect x="80" y="30" width="140" height="32" rx="10" fill="rgba(104,160,99,0.14)" stroke="rgba(104,160,99,0.25)" stroke-width="1"/>
          <text x="150" y="51" text-anchor="middle" fill="rgba(104,160,99,0.9)" font-size="11" font-family="DM Sans,sans-serif" font-weight="600">SRH Hardwares</text>
          <line x1="88" y1="88" x2="212" y2="88" stroke="rgba(104,160,99,0.28)" stroke-width="1"/>
          <line x1="88" y1="115" x2="212" y2="115" stroke="rgba(104,160,99,0.28)" stroke-width="1"/>
          <rect x="93" y="93" width="18" height="14" rx="3" fill="rgba(255,153,0,0.4)"/>
          <rect x="118" y="93" width="18" height="14" rx="3" fill="rgba(124,111,255,0.4)"/>
          <rect x="143" y="93" width="18" height="14" rx="3" fill="rgba(229,53,171,0.4)"/>
          <rect x="168" y="93" width="18" height="14" rx="3" fill="rgba(67,232,160,0.4)"/>
          <rect x="93" y="118" width="18" height="16" rx="3" fill="rgba(97,218,251,0.4)"/>
          <rect x="118" y="118" width="18" height="16" rx="3" fill="rgba(255,107,107,0.4)"/>
          <rect x="143" y="118" width="18" height="16" rx="3" fill="rgba(255,153,0,0.4)"/>
        </svg>
      </div>
      <div class="project-body">
        <div class="project-title">SRH Hardwares & Others</div>
        <p class="project-desc">E-commerce store + company websites + backend systems including STRICX, TRH, MoneyMaze, and a Chartered Accountant portal.</p>
        <div class="project-stack">
          <span class="pill">Next.js</span><span class="pill">MongoDB</span><span class="pill">Node.js</span><span class="pill">Express</span>
        </div>
        <span style="font-size:0.8rem;color:var(--muted);">Multiple projects</span>
      </div>
    </div>

  </div>
</section> */}
    </section>
  );
}
