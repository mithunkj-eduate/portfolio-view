import { useState, useEffect } from "react";
import { convertDriveToImageUrl } from "../../utly/utlyFunction";

const data1 = {
  meta: {
    name: "Dr. Priya Sharma",
    tagline: "Specialist in Cardiology & Internal Medicine",
    accentColor: "#0ea5e9",
  },
  hero: {
    heading: "Expert Heart Care You Can Trust",
    subheading:
      "15+ years of excellence in cardiology, helping patients lead healthier, longer lives with personalized treatment plans.",
    carousel: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=1200&q=80",
    ],
    stats: [
      { label: "Years Experience", value: "15+" },
      { label: "Patients Treated", value: "12,000+" },
      { label: "Success Rate", value: "98%" },
      { label: "Awards Won", value: "8" },
    ],
  },
  about: {
    title: "About Dr. Priya Sharma",
    description:
      "A passionate cardiologist committed to delivering world-class cardiac care. Trained at AIIMS Delhi and Johns Hopkins, Dr. Sharma combines cutting-edge medical science with genuine compassion.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
    highlights: [
      { icon: "🎓", title: "Education", value: "AIIMS Delhi, MD" },
      { icon: "🏆", title: "Fellowship", value: "Johns Hopkins Cardiology" },
      { icon: "📍", title: "Location", value: "Bengaluru, Karnataka" },
      { icon: "🗣️", title: "Languages", value: "English, Hindi, Kannada" },
    ],
  },
  services: [
    {
      id: "s1",
      title: "Comprehensive Cardiac Evaluation",
      description:
        "Full heart health checkup including ECG, echocardiogram, stress test, and blood panel analysis.",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80",
      price: "₹3,500",
      duration: "2 hours",
      badge: "Most Popular",
      features: [
        "ECG & Echo",
        "Stress Test",
        "Lipid Profile",
        "Report & Consultation",
      ],
    },
    {
      id: "s2",
      title: "Heart Disease Management",
      description:
        "Ongoing management of hypertension, arrhythmia, coronary artery disease, and heart failure.",
      image:
        "https://images.unsplash.com/photo-1631217873436-e8d8b64ce0b3?w=600&q=80",
      price: "₹1,200",
      duration: "45 min",
      features: ["Medication Review", "Lifestyle Counseling", "Follow-up Plan"],
    },
    {
      id: "s3",
      title: "Preventive Cardiology",
      description:
        "Risk assessment and preventive strategies for patients with family history of heart disease.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
      price: "₹2,000",
      duration: "1 hour",
      features: ["Risk Scoring", "Diet Planning", "Exercise Prescription"],
    },
    {
      id: "s4",
      title: "Angioplasty & Stenting",
      description:
        "Minimally invasive procedures to open blocked arteries and restore healthy blood flow.",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80",
      price: "Contact for Pricing",
      badge: "Surgical",
      features: [
        "Pre-op Workup",
        "Procedure",
        "Post-op Care",
        "Rehabilitation",
      ],
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Rajesh Kumar",
      role: "Patient",
      rating: 5,
      text: "Dr. Sharma saved my life. After my heart attack, her quick diagnosis and expert treatment got me back on my feet in record time. Truly the best cardiologist in Bengaluru.",
      date: "March 2024",
    },
    {
      id: "t2",
      name: "Sunita Reddy",
      role: "Patient",
      rating: 5,
      text: "I was terrified of my diagnosis, but Dr. Sharma explained everything so clearly. Her calm, compassionate approach made all the difference during a very difficult time.",
      date: "January 2024",
    },
    {
      id: "t3",
      name: "Anand Menon",
      role: "Patient",
      rating: 5,
      text: "After years of high BP and anxiety, I finally found a doctor who listens. Dr. Sharma's preventive approach has transformed my lifestyle and my heart health.",
      date: "November 2023",
    },
    {
      id: "t4",
      name: "Meena Iyer",
      role: "Patient",
      rating: 4,
      text: "Excellent care, modern facilities, and a team that truly cares. The only improvement could be shorter waiting times, but the quality of treatment is unmatched.",
      date: "October 2023",
    },
  ],
  certifications: [
    {
      title: "Board Certified Cardiologist",
      issuer: "National Board of Examinations",
      year: "2010",
    },
    {
      title: "Fellowship – Interventional Cardiology",
      issuer: "Johns Hopkins Hospital",
      year: "2012",
    },
    {
      title: "ACLS Certification",
      issuer: "American Heart Association",
      year: "2023",
    },
    {
      title: "Best Cardiologist Award",
      issuer: "Karnataka Medical Council",
      year: "2022",
    },
  ],
  skills: [
    { name: "Interventional Cardiology", level: 98, category: "Clinical" },
    { name: "Echocardiography", level: 95, category: "Diagnostics" },
    { name: "Cardiac Imaging", level: 90, category: "Diagnostics" },
    { name: "Heart Failure Management", level: 93, category: "Clinical" },
    { name: "Electrophysiology", level: 80, category: "Specialized" },
    { name: "Patient Communication", level: 99, category: "Soft Skills" },
  ],
  faq: [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book via WhatsApp, phone call, or the contact form below. We typically confirm appointments within 2 hours.",
    },
    {
      question: "Do you accept health insurance?",
      answer:
        "Yes, we work with most major insurance providers including Star Health, ICICI Lombard, Bajaj Allianz, and government schemes like Ayushman Bharat.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring any previous ECGs, reports, prescription history, and your insurance card. Arriving 15 minutes early helps with paperwork.",
    },
    {
      question: "Do you offer telemedicine?",
      answer:
        "Yes, we offer video consultations for follow-up appointments and prescription renewals. Home visits are available for mobility-limited patients within Bengaluru.",
    },
  ],
  contact: {
    email: "dr.priyasharma@heartcare.in",
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    address:
      "404, MedCity Tower, 100 Feet Road, Indiranagar, Bengaluru – 560038",
    workingHours: [
      { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
      { day: "Sunday", hours: "Emergency Only" },
    ],
  },
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
      alt: "Clinic exterior",
      category: "Clinic",
    },
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      alt: "Consultation room",
      category: "Clinic",
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
      alt: "Modern equipment",
      category: "Equipment",
    },
    {
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
      alt: "ECG machine",
      category: "Equipment",
    },
    {
      url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
      alt: "Patient care",
      category: "Team",
    },
    {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
      alt: "Medical team",
      category: "Team",
    },
  ],
};

const NAV_LINKS = [
  "About",
  "Services",
  "Skills",
  "Gallery",
  "Testimonials",
  "FAQ",
  "Contact",
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  html { scroll-behavior: smooth; }
  img { max-width: 100%; display: block; }
  input, textarea, button { font-family: inherit; }
  input::placeholder, textarea::placeholder { color: #94a3b8; }

  .nav-desktop { display: flex; gap: 24px; align-items: center; }
  .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
  .nav-bar {margin: 0 auto;}
  .ham-bar { width: 22px; height: 2px; transition: all 0.25s; }
  .mobile-drawer { display: none; position: fixed; top: 64px; left: 0; right: 0; background: #fff; border-bottom: 1px solid #e2e8f0; z-index: 99; flex-direction: column; padding: 8px 0 20px; }
  .mobile-drawer.open { display: flex; }
  .mob-link { background: none; border: none; padding: 13px 24px; font-size: 15px; font-weight: 500; color: #0f172a; text-align: left; cursor: pointer; width: 100%; }
  .mob-cta { margin: 8px 20px 0; background: var(--accent); color: #fff; border: none; border-radius: 8px; padding: 12px; font-size: 14px; font-weight: 700; cursor: pointer; }

  .hero-title { font-size: clamp(28px, 5vw, 54px); }
  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 56px; }

  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .about-float { position: absolute; bottom: -20px; right: -20px; background: #fff; border-radius: 16px; padding: 18px 22px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); display: flex; align-items: center; gap: 12px; }

  .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

  .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }

  .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }

  .testi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }

  .sec-pad { padding: 80px 0; }

  /* Tablet */
  @media (max-width: 900px) {
    .nav-bar { margin:0;}
    .nav-desktop { display: none; }
    .nav-hamburger { display: flex; }

    .stats-grid { grid-template-columns: repeat(2, 1fr); }

    .about-grid { grid-template-columns: 1fr; gap: 36px; }
    .about-img-col { max-width: 480px; margin: 0 auto; width: 100%; }
    .about-float { right: 0; bottom: -14px; }

    .services-grid { grid-template-columns: 1fr; }

    .skills-grid { grid-template-columns: 1fr; gap: 32px; }

    .gallery-grid { grid-template-columns: repeat(2, 1fr); }

    .testi-grid { grid-template-columns: 1fr; }

    .contact-grid { grid-template-columns: 1fr; gap: 32px; }

    .sec-pad { padding: 56px 0; }
  }

  /* Mobile */
  @media (max-width: 560px) {
  .nav-bar { margin:0;}
    .hero-btns { flex-direction: column; }
    .hero-btns > * { width: 100%; text-align: center; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .highlights-grid { grid-template-columns: 1fr; }
    .about-float { position: static; margin-top: 20px; width: max-content; border-radius: 12px; }
    .gallery-grid { grid-template-columns: 1fr; }
    .filter-row { gap: 8px; }
    .filter-row button { font-size: 12px; padding: 6px 12px; }
    .faq-q { font-size: 14px !important; padding: 14px 16px !important; }
    .contact-form { padding: 20px !important; }
    .sec-pad { padding: 40px 0; }
  }
`;

function useAccent(color) {
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", color);
    document.documentElement.style.setProperty("--accent-light", color + "22");
  }, [color]);
}

function Stars({ count }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 14 }}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

function Wrap({ children }) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
      {children}
    </div>
  );
}

function SectionHead({ label, title, subtitle, dark }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <span
        style={{
          display: "inline-block",
          background: dark ? "rgba(255,255,255,0.1)" : "var(--accent-light)",
          color: dark ? "#7dd3fc" : "var(--accent)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "4px 14px",
          borderRadius: 20,
          marginBottom: 12,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: "clamp(22px,4vw,32px)",
          fontWeight: 700,
          margin: "0 0 12px",
          color: dark ? "#fff" : "#0f172a",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: dark ? "#94a3b8" : "#64748b",
            maxWidth: 500,
            margin: "0 auto",
            fontSize: 16,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* NAVBAR */
function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const solid = scrolled || open;
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: solid ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          borderBottom: solid ? "1px solid #e2e8f0" : "none",
          transition: "all 0.3s",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            // margin:"0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
          className="nav-bar"
        >
          {/* {name && (
            <span
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: solid ? "#0f172a" : "#fff",
              }}
            >
              {name.charAt(0)}
            </span>
          )} */}
          <div className="nav-desktop">
            {NAV_LINKS?.map((l) => (
              <button
                key={l}
                onClick={() => go(l)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 500,
                  color: solid ? "#475569" : "rgba(255,255,255,0.88)",
                  padding: 0,
                }}
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => go("Contact")}
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Book Appointment
            </button>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <div
              className="ham-bar"
              style={{
                background: solid ? "#0f172a" : "#fff",
                transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
              }}
            />
            <div
              className="ham-bar"
              style={{
                background: solid ? "#0f172a" : "#fff",
                opacity: open ? 0 : 1,
              }}
            />
            <div
              className="ham-bar"
              style={{
                background: solid ? "#0f172a" : "#fff",
                transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>
      <div className={`mobile-drawer${open ? " open" : ""}`}>
        {NAV_LINKS?.map((l) => (
          <button key={l} className="mob-link" onClick={() => go(l)}>
            {l}
          </button>
        ))}
        <button className="mob-cta" onClick={() => go("Contact")}>
          Book Appointment
        </button>
      </div>
    </>
  );
}

/* HERO */
function Hero({data}) {
  const [slide, setSlide] = useState(0);
  const imgs = data.hero.carousel;
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % imgs?.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {imgs?.map((src, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === slide ? 1 : 0,
            transition: "opacity 1.2s",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,rgba(3,7,18,0.8),rgba(3,7,18,0.45))",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "100px 20px 60px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <span
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 18,
            }}
          >
            {data.meta.tagline}
          </span>
          <h1
            className="hero-title"
            style={{
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 18px",
            }}
          >
            {data.hero.heading}
          </h1>
          <p
            style={{
              fontSize: "clamp(15px,2vw,18px)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
              margin: "0 0 32px",
            }}
          >
            {data.hero.subheading}
          </p>
          <div className="hero-btns">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "13px 26px",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              📅 Book Appointment
            </button>
            <a
              href={`https://wa.me/${data.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.4)",
                borderRadius: 10,
                padding: "13px 26px",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
        <div className="stats-grid">
          {data.hero.stats?.map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 12,
                padding: "14px 10px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(18px,3vw,24px)",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(9px,1.5vw,11px)",
                  color: "rgba(255,255,255,0.65)",
                  marginTop: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 28 }}>
          {imgs?.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: i === slide ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  i === slide ? "var(--accent)" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ABOUT */
function About({data}) {
  const d = data.about;
  return (
    <section id="about" className="sec-pad" style={{ background: "#f8fafc" }}>
      <Wrap>
        <div className="about-grid">
          <div className="about-img-col" style={{ position: "relative" }}>
            <img
              src={convertDriveToImageUrl(d.image)}
              alt={d.title}
              style={{
                width: "100%",
                borderRadius: 20,
                objectFit: "cover",
                height: "min(460px,55vw)",
              }}
            />
            <div className="about-float">
              <span style={{ fontSize: 30 }}>❤️</span>
              <div>
                <div
                  style={{ fontSize: 20, fontWeight: 800, color: "#0f172a" }}
                >
                  12,000+
                </div>
                <div style={{ fontSize: 11, color: "#64748b" }}>
                  Lives Impacted
                </div>
              </div>
            </div>
          </div>
          <div>
            <span
              style={{
                display: "inline-block",
                background: "var(--accent-light)",
                color: "var(--accent)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 14px",
                borderRadius: 20,
                marginBottom: 14,
              }}
            >
              About the Doctor
            </span>
            <h2
              style={{
                fontSize: "clamp(22px,3vw,34px)",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 14px",
              }}
            >
              {d.title}
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: 16,
                lineHeight: 1.8,
                margin: "0 0 28px",
              }}
            >
              {d.description}
            </p>
            <div className="highlights-grid">
              {d.highlights?.map((h) => (
                <div
                  key={h.title}
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 5 }}>{h.icon}</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {h.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0f172a",
                      marginTop: 2,
                    }}
                  >
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* SERVICES */
function Services({data}) {
  return (
    <section id="services" className="sec-pad">
      <Wrap>
        <SectionHead
          label="What We Offer"
          title="Our Services"
          subtitle="Comprehensive cardiac care tailored to your needs"
        />
        <div className="services-grid">
          {data.services?.map((s) => (
            <div
              key={s.id}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                overflow: "hidden",
                transition: "transform 0.2s,box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={convertDriveToImageUrl(s.image)}
                  alt={s.title}
                  style={{ width: "100%", height: 190, objectFit: "cover" }}
                />
                {s.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      background: "var(--accent)",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 6,
                    }}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
              <div style={{ padding: "18px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.price}
                  </span>
                </div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: "0 0 12px",
                  }}
                >
                  {s.description}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.features?.map((f) => (
                    <span
                      key={f}
                      style={{
                        background: "var(--accent-light)",
                        color: "var(--accent)",
                        fontSize: 11,
                        padding: "3px 9px",
                        borderRadius: 20,
                        fontWeight: 500,
                      }}
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
                {s.duration && (
                  <div
                    style={{ marginTop: 12, color: "#94a3b8", fontSize: 12 }}
                  >
                    ⏱ {s.duration}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* SKILLS */
function Skills({data}) {
  return (
    <section id="skills" className="sec-pad" style={{ background: "#f8fafc" }}>
      <Wrap>
        <SectionHead label="Expertise" title="Skills & Certifications" />
        <div className="skills-grid">
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 22,
                color: "#0f172a",
              }}
            >
              Clinical Expertise
            </h3>
            {data.skills?.map((s) => (
              <div key={s.name} style={{ marginBottom: 18 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <span
                    style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}
                  >
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {s.level}%
                  </span>
                </div>
                <div
                  style={{ height: 7, background: "#e2e8f0", borderRadius: 8 }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${s.level}%`,
                      background: "var(--accent)",
                      borderRadius: 8,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    marginTop: 3,
                    display: "block",
                  }}
                >
                  {s.category}
                </span>
              </div>
            ))}
          </div>
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 22,
                color: "#0f172a",
              }}
            >
              Certifications & Awards
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {data.certifications?.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "16px 18px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 18,
                    }}
                  >
                    🏅
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#0f172a",
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}
                    >
                      {c.issuer}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--accent)",
                        fontWeight: 600,
                        marginTop: 3,
                      }}
                    >
                      {c.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* GALLERY */
function Gallery({data}) {
  const cats = ["All", ...new Set(data.gallery?.map((g) => g.category))];
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? data.gallery
      : data.gallery.filter((g) => g.category === active);
  return (
    <section id="gallery" className="sec-pad">
      <Wrap>
        <SectionHead label="Our Space" title="Clinic Gallery" />
        <div
          className="filter-row"
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {cats?.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                background: c === active ? "var(--accent)" : "#f1f5f9",
                color: c === active ? "#fff" : "#64748b",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filtered?.map((g, i) => (
            <div
              key={i}
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={convertDriveToImageUrl(g.url)}
                alt={g.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.06)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent,rgba(0,0,0,0.6))",
                  padding: "20px 12px 10px",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {g.alt}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* TESTIMONIALS */
function Testimonials({data}) {
  return (
    <section
      id="testimonials"
      className="sec-pad"
      style={{ background: "#f8fafc" }}
    >
      <Wrap>
        <SectionHead label="Patient Stories" title="What Our Patients Say" />
        <div className="testi-grid">
          {data.testimonials?.map((t) => (
            <div
              key={t.id}
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: 10,
                  opacity: 0.35,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "#475569",
                  lineHeight: 1.75,
                  margin: "0 0 18px",
                }}
              >
                {t.text}
              </p>
              <Stars count={t.rating} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: "1px solid #f1f5f9",
                }}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "var(--accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#0f172a",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 12, color: "#94a3b8" }}>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* FAQ */
function FAQ({data}) {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="sec-pad">
      <Wrap>
        <SectionHead label="Questions" title="Frequently Asked Questions" />
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {data.faq?.map((f, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                marginBottom: 12,
                overflow: "hidden",
              }}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: open === i ? "var(--accent-light)" : "#fff",
                  border: "none",
                  padding: "16px 20px",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#0f172a",
                  gap: 12,
                }}
              >
                <span>{f.question}</span>
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: 22,
                    flexShrink: 0,
                    display: "inline-block",
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 20px 16px",
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* CONTACT */
function Contact({data}) {
  const c = data.contact;
  return (
    <section id="contact" className="sec-pad" style={{ background: "#0f172a" }}>
      <Wrap>
        <SectionHead
          dark
          label="Get In Touch"
          title="Book an Appointment"
          subtitle="We're here to help you with your heart health"
        />
        <div className="contact-grid">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                marginBottom: 28,
              }}
            >
              {[
                { icon: "📧", label: "Email", value: c.email },
                { icon: "📞", label: "Phone", value: c.phone },
                { icon: "📍", label: "Address", value: c.address },
              ]?.map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#e2e8f0",
                        fontWeight: 500,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "18px 20px",
              }}
            >
              <h4 style={{ color: "#fff", margin: "0 0 14px", fontSize: 14 }}>
                Working Hours
              </h4>
              {c.workingHours?.map((w) => (
                <div
                  key={w.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 4,
                    padding: "7px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#94a3b8" }}>{w.day}</span>
                  <span style={{ color: "#e2e8f0", fontWeight: 500 }}>
                    {w.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="contact-form"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <h3 style={{ color: "#fff", margin: "0 0 20px", fontSize: 18 }}>
              Send a Message
            </h3>
            {[
              { ph: "Your Name", type: "text" },
              { ph: "Phone Number", type: "tel" },
              { ph: "Email Address", type: "email" },
            ]?.map((f) => (
              <input
                key={f.ph}
                type={f.type}
                placeholder={f.ph}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "11px 14px",
                  color: "#e2e8f0",
                  fontSize: 14,
                  marginBottom: 12,
                  outline: "none",
                }}
              />
            ))}
            <textarea
              placeholder="How can we help you?"
              rows={4}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "11px 14px",
                color: "#e2e8f0",
                fontSize: 14,
                marginBottom: 14,
                resize: "vertical",
                outline: "none",
              }}
            />
            <button
              style={{
                width: "100%",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "13px",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: 10,
              }}
            >
              Send Message →
            </button>
            <a
              href={`https://wa.me/${c.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "#25d366",
                color: "#fff",
                borderRadius: 10,
                padding: "12px",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* COLOR PICKER */
function ColorPicker({ color, onChange }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 200,
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 14,
        padding: "10px 14px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>
        Theme
      </span>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: 30,
          height: 30,
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          padding: 0,
        }}
      />
    </div>
  );
}

/* APP */
export default function ProfessionalProfile({data}) {
  const [accent, setAccent] = useState(data.meta.accentColor);
  useAccent(accent);
  return (
    <div
      style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#fff" }}
    >
      <style>{`:root{--accent:${accent};--accent-light:${accent}22;}${CSS}`}</style>
      <Navbar name={data.meta.name} />
      <Hero  data ={data}/>
      <About  data ={data} />
      <Services  data ={data}/>
      <Skills data ={data} />
      <Gallery  data ={data}/>
      <Testimonials data ={data} />
      <FAQ  data ={data}/>
      <Contact  data ={data}/>
      <footer
        style={{
          background: "#020617",
          color: "#64748b",
          textAlign: "center",
          padding: "20px",
          fontSize: 13,
        }}
      >
        © 2026 {data.meta.name} — {data.meta.tagline}
      </footer>
      <ColorPicker color={accent} onChange={setAccent} />
    </div>
  );
}
