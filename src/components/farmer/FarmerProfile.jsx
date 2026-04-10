import { useState, useEffect, useRef } from "react";

const data = {
  accentColor: "#15803d",
  hero: {
    heading: "Growing Goodness Naturally",
    subheading: "12+ years cultivating pure, nutrient-rich organic produce using regenerative and traditional farming methods on my family farm near Bengaluru.",
    carousel: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
      "https://images.unsplash.com/photo-1500595046743-cd271d694394?w=1200&q=80",
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=1200&q=80"
    ],
    stats: [
      { label: "Years Farming", value: "12+" },
      { label: "Acres Cultivated", value: "25" },
      { label: "Happy Families", value: "2,500+" },
      { label: "Crops Grown", value: "40+" }
    ]
  },
  about: {
    description: "A passionate third-generation farmer turned organic agriculture expert. After working in the city, I returned to my roots to revive traditional farming practices blended with modern sustainable techniques. My farm focuses on soil health, biodiversity, and producing the purest possible food for Bengaluru families.",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&q=80",
    highlights: [
      { icon: "🌿", title: "Philosophy", value: "Regenerative Farming" },
      { icon: "🏆", title: "Certification", value: "NPOP Organic" },
      { icon: "👥", title: "Community", value: "Farm-to-Table Network" },
      { icon: "🌱", title: "Focus", value: "Soil & Biodiversity" }
    ]
  },
  services: [
    {
      title: "Fresh Organic Produce Delivery",
      description: "Weekly subscription boxes of seasonal, hand-picked organic vegetables, fruits, and millets delivered fresh from farm to your doorstep.",
      image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=600&q=80",
      price: "₹899",
      duration: "Weekly",
      badge: "Most Popular",
      features: ["Chemical-free", "Farm fresh", "Seasonal varieties", "Traceable origin"]
    },
    {
      title: "Educational Farm Tours & Workshops",
      description: "Guided tours of the farm with hands-on learning about organic practices, composting, and sustainable living.",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694394?w=600&q=80",
      price: "₹1,200",
      duration: "3 hours",
      badge: "Experiential",
      features: ["Guided tour", "Hands-on activities", "Organic lunch", "Q&A session"]
    },
    {
      title: "Bulk Organic Supply for Restaurants",
      description: "Reliable supply of premium organic produce to restaurants, cafes, and corporates seeking authentic farm-fresh ingredients.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c?w=600&q=80",
      price: "Contact for quote",
      duration: "Custom",
      badge: "B2B",
      features: ["Consistent quality", "Traceability", "Flexible scheduling", "Custom packaging"]
    }
  ],
  projects: [
    { title: "Regenerative Millets Revival", category: "Crop Restoration", year: "2024", desc: "Revived traditional millet cultivation on 8 acres using natural farming, increasing yield while restoring soil health.", tags: ["Millets", "Regenerative", "Soil Health"] },
    { title: "Zero Waste Composting Initiative", category: "Sustainability", year: "2023", desc: "On-farm composting system converting waste into rich organic fertilizer, reducing external inputs by 90%.", tags: ["Composting", "Circular Economy"] },
    { title: "Biodiversity Kitchen Garden Network", category: "Community", year: "2025", desc: "Created a network of 50+ home kitchen gardens in Bengaluru using seeds and training from our farm.", tags: ["Urban Farming", "Community"] },
    { title: "Organic Traceability System", category: "Innovation", year: "2024", desc: "Implemented full farm traceability using QR codes so customers can track produce from seed to plate.", tags: ["Traceability", "Transparency"] }
  ],
  skills: [
    { name: "Organic Vegetable Cultivation", level: 95 },
    { name: "Regenerative Agriculture", level: 92 },
    { name: "Composting & Soil Health", level: 90 },
    { name: "Crop Planning & Rotation", level: 88 },
    { name: "Biodynamic Farming", level: 85 },
    { name: "Farm-to-Consumer Marketing", level: 82 }
  ],
  testimonials: [
    { name: "Anita Rao", role: "Regular Customer", rating: 5, text: "The quality and taste of Mithun's organic vegetables are unmatched. My family loves the weekly box – everything is so fresh and flavorful.", date: "March 2026" },
    { name: "Dr. Suresh Menon", role: "Customer & Doctor", rating: 5, text: "As a doctor, I appreciate the chemical-free produce. Mithun's farm has helped many of my patients improve their health through better nutrition.", date: "February 2026" },
    { name: "Ramesh & Lakshmi", role: "Restaurant Owners", rating: 5, text: "Reliable bulk supply with excellent traceability. Our customers always notice and appreciate the superior taste of ingredients from this farm.", date: "January 2026" },
    { name: "Priya Nair", role: "Home Gardener", rating: 4, text: "Attended the farm workshop and learned so much. The seeds and guidance helped me start my own successful kitchen garden.", date: "December 2025" }
  ],
  faq: [
    { q: "Where is your farm located?", a: "Our farm is located near Devanahalli, about 40 km from central Bengaluru. We offer home delivery across Bengaluru and farm visits by appointment." },
    { q: "Are your products certified organic?", a: "Yes, the farm is NPOP certified and also follows Participatory Guarantee System (PGS) standards for transparency and trust." },
    { q: "Do you deliver weekly subscription boxes?", a: "Yes, we offer customizable weekly and fortnightly organic produce boxes. You can choose your preferred vegetables and fruits." },
    { q: "Can I visit the farm?", a: "Absolutely! We conduct guided farm tours and workshops every weekend. Advance booking is required." },
    { q: "Do you supply to restaurants and corporates?", a: "Yes, we provide bulk organic produce to restaurants, cafes, and corporate kitchens with reliable weekly deliveries." }
  ],
  gallery: [
    { url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80", cat: "Fields" },
    { url: "https://images.unsplash.com/photo-1500595046743-cd271d694394?w=600&q=80", cat: "Harvest" },
    { url: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=600&q=80", cat: "Farm Life" },
    { url: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=600&q=80", cat: "Produce" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a9c?w=600&q=80", cat: "Community" }
  ]
};

const G = "#15803d";
const GL = "#dcfce7";
const GD = "#14532d";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .farm-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .farm-wrap { font-family: 'DM Sans', sans-serif; color: #1a2e1a; background: #fafaf7; overflow-x: hidden; }
  .farm-wrap h1, .farm-wrap h2, .farm-wrap h3, .farm-wrap h4 { font-family: 'Playfair Display', serif; }

  .farm-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 5%; height: 64px;
    background: rgba(250,250,247,0.92); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(21,128,61,0.1);
    transition: box-shadow 0.3s;
  }
  .farm-nav.scrolled { box-shadow: 0 2px 20px rgba(21,128,61,0.08); }
  .farm-logo { font-family:'Playfair Display',serif; font-size:20px; color:${G}; font-weight:700; }
  .farm-logo span { color:#1a2e1a; }
  .farm-nav-links { display:flex; gap:28px; align-items:center; }
  .farm-nav-links a { font-size:14px; color:#4a5e4a; text-decoration:none; font-weight:500; transition:color 0.2s; }
  .farm-nav-links a:hover { color:${G}; }
  .nav-cta { background:${G}!important; color:#fff!important; padding:8px 20px; border-radius:100px; font-size:13px!important; }
  .nav-cta:hover { background:#166534!important; }
  .ham { display:none; background:none; border:none; cursor:pointer; padding:4px; }
  .ham span { display:block; width:22px; height:2px; background:#1a2e1a; margin:5px 0; border-radius:2px; transition:0.3s; }

  .farm-hero {
    position: relative; min-height: 100vh;
    display: flex; align-items: center;
    overflow: hidden;
  }
  .hero-bg { position:absolute; inset:0; z-index:0; }
  .hero-bg img { width:100%; height:100%; object-fit:cover; transition:opacity 1.2s; position:absolute; inset:0; }
  .hero-overlay { position:absolute; inset:0; background:linear-gradient(105deg, rgba(20,83,45,0.82) 0%, rgba(20,83,45,0.45) 60%, transparent 100%); }
  .hero-content { position:relative; z-index:1; max-width:680px; padding: 100px 5% 60px; }
  .hero-badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); color:#fff; font-size:13px; padding:6px 16px; border-radius:100px; margin-bottom:24px; backdrop-filter:blur(6px); }
  .hero-badge::before { content:'🌿'; font-size:14px; }
  .hero-h1 { font-size:clamp(2.4rem,5vw,4rem); color:#fff; line-height:1.15; margin-bottom:20px; }
  .hero-h1 em { color:#86efac; font-style:italic; }
  .hero-sub { font-size:1.05rem; color:rgba(255,255,255,0.85); line-height:1.7; max-width:520px; margin-bottom:36px; font-weight:300; }
  .hero-btns { display:flex; gap:14px; flex-wrap:wrap; }
  .btn-primary { background:#fff; color:${G}; padding:13px 28px; border-radius:100px; font-size:14px; font-weight:500; border:none; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all 0.25s; }
  .btn-primary:hover { background:#f0fdf4; transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,0.15); }
  .btn-outline { background:transparent; color:#fff; padding:13px 28px; border-radius:100px; font-size:14px; font-weight:500; border:2px solid rgba(255,255,255,0.5); cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; gap:8px; transition:all 0.25s; }
  .btn-outline:hover { border-color:#fff; background:rgba(255,255,255,0.1); }

  .hero-stats { display:flex; gap:0; margin-top:56px; background:rgba(255,255,255,0.1); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.2); border-radius:16px; overflow:hidden; }
  .stat-item { flex:1; text-align:center; padding:20px 16px; border-right:1px solid rgba(255,255,255,0.15); }
  .stat-item:last-child { border-right:none; }
  .stat-val { font-family:'Playfair Display',serif; font-size:1.8rem; color:#fff; font-weight:700; display:block; }
  .stat-lab { font-size:12px; color:rgba(255,255,255,0.7); margin-top:2px; display:block; }

  .hero-dots { position:absolute; bottom:30px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:2; }
  .hero-dot { width:8px; height:8px; border-radius:100px; background:rgba(255,255,255,0.4); border:none; cursor:pointer; transition:all 0.3s; padding:0; }
  .hero-dot.active { width:24px; background:#fff; }

  .section { padding: 90px 5%; }
  .section-alt { background:#f0fdf4; }
  .section-label { font-size:12px; font-weight:500; color:${G}; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:10px; display:block; }
  .section-title { font-size:clamp(1.8rem,3vw,2.6rem); color:#1a2e1a; line-height:1.25; margin-bottom:16px; }
  .section-sub { font-size:1rem; color:#4a5e4a; line-height:1.7; max-width:560px; font-weight:300; }

  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; max-width:1200px; margin:0 auto; }
  .about-img-wrap { position:relative; }
  .about-img { width:100%; height:480px; object-fit:cover; border-radius:20px; }
  .about-badge { position:absolute; bottom:24px; right:-20px; background:${G}; color:#fff; padding:16px 20px; border-radius:14px; text-align:center; box-shadow:0 8px 24px rgba(21,128,61,0.35); }
  .about-badge strong { font-family:'Playfair Display',serif; font-size:1.6rem; display:block; }
  .about-badge span { font-size:12px; opacity:0.85; }
  .about-highlights { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:36px; }
  .highlight-card { background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:16px 18px; }
  .highlight-icon { font-size:20px; margin-bottom:8px; }
  .highlight-title { font-size:12px; color:${G}; font-weight:500; text-transform:uppercase; letter-spacing:0.06em; }
  .highlight-val { font-size:15px; color:#1a2e1a; font-weight:500; margin-top:2px; }

  .services-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:28px; max-width:1200px; margin:48px auto 0; }
  .service-card { background:#fff; border:1px solid #e8f5e9; border-radius:20px; overflow:hidden; transition:all 0.3s; cursor:pointer; }
  .service-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(21,128,61,0.12); border-color:#bbf7d0; }
  .service-img { width:100%; height:200px; object-fit:cover; }
  .service-body { padding:24px; }
  .service-badge { display:inline-block; background:${GL}; color:${GD}; font-size:11px; font-weight:500; padding:4px 12px; border-radius:100px; margin-bottom:12px; }
  .service-title { font-size:1.1rem; color:#1a2e1a; margin-bottom:8px; }
  .service-desc { font-size:0.9rem; color:#4a5e4a; line-height:1.6; font-weight:300; }
  .service-footer { display:flex; align-items:center; justify-content:space-between; margin-top:16px; padding-top:16px; border-top:1px solid #f0fdf4; }
  .service-price { font-family:'Playfair Display',serif; font-size:1.3rem; color:${G}; font-weight:700; }
  .service-dur { font-size:12px; color:#6b7c6b; }
  .service-features { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
  .feat-tag { background:#f0fdf4; color:#166534; font-size:11px; padding:4px 10px; border-radius:100px; }

  .projects-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:24px; max-width:1200px; margin:48px auto 0; }
  .proj-card { background:#fff; border:1px solid #e8f5e9; border-radius:16px; padding:28px; transition:all 0.3s; }
  .proj-card:hover { border-color:#86efac; box-shadow:0 12px 32px rgba(21,128,61,0.1); }
  .proj-year { font-size:12px; color:${G}; font-weight:500; background:${GL}; display:inline-block; padding:3px 10px; border-radius:100px; margin-bottom:12px; }
  .proj-title { font-size:1.05rem; color:#1a2e1a; margin-bottom:8px; }
  .proj-desc { font-size:0.88rem; color:#4a5e4a; line-height:1.6; font-weight:300; }
  .proj-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
  .proj-tag { background:#f0fdf4; color:#166534; font-size:11px; padding:3px 10px; border-radius:100px; }

  .skills-wrap { max-width:1200px; margin:48px auto 0; display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  .skill-item { }
  .skill-header { display:flex; justify-content:space-between; margin-bottom:8px; }
  .skill-name { font-size:14px; color:#1a2e1a; font-weight:500; }
  .skill-pct { font-size:13px; color:${G}; font-weight:500; }
  .skill-track { background:#e8f5e9; border-radius:100px; height:6px; overflow:hidden; }
  .skill-bar { height:100%; background:linear-gradient(90deg, ${G}, #4ade80); border-radius:100px; transition:width 1.5s cubic-bezier(0.16,1,0.3,1); }

  .testimonials-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:24px; max-width:1200px; margin:48px auto 0; }
  .testi-card { background:#fff; border:1px solid #e8f5e9; border-radius:16px; padding:28px; }
  .testi-stars { color:#fbbf24; font-size:14px; margin-bottom:14px; }
  .testi-text { font-size:0.93rem; color:#4a5e4a; line-height:1.7; font-weight:300; font-style:italic; margin-bottom:20px; }
  .testi-author { display:flex; align-items:center; gap:12px; }
  .testi-avatar { width:40px; height:40px; border-radius:50%; background:${GL}; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; color:${G}; flex-shrink:0; }
  .testi-name { font-size:14px; font-weight:500; color:#1a2e1a; }
  .testi-role { font-size:12px; color:#6b7c6b; }

  .gallery-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; max-width:1200px; margin:48px auto 0; }
  .gallery-item { border-radius:16px; overflow:hidden; aspect-ratio:1; cursor:pointer; }
  .gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s; }
  .gallery-item:hover img { transform:scale(1.06); }

  .faq-wrap { max-width:800px; margin:48px auto 0; }
  .faq-item { border-bottom:1px solid #e8f5e9; }
  .faq-q { width:100%; text-align:left; background:none; border:none; padding:20px 0; display:flex; justify-content:space-between; align-items:center; cursor:pointer; font-size:1rem; color:#1a2e1a; font-weight:500; }
  .faq-icon { font-size:20px; color:${G}; transition:transform 0.3s; flex-shrink:0; }
  .faq-icon.open { transform:rotate(45deg); }
  .faq-a { overflow:hidden; max-height:0; transition:max-height 0.4s ease; }
  .faq-a.open { max-height:200px; }
  .faq-a p { font-size:0.93rem; color:#4a5e4a; line-height:1.7; padding-bottom:20px; font-weight:300; }

  .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; max-width:1200px; margin:48px auto 0; align-items:start; }
  .contact-info { }
  .contact-row { display:flex; gap:16px; align-items:flex-start; margin-bottom:24px; }
  .contact-icon { width:44px; height:44px; background:${GL}; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
  .contact-label { font-size:12px; color:${G}; font-weight:500; text-transform:uppercase; letter-spacing:0.06em; }
  .contact-val { font-size:15px; color:#1a2e1a; margin-top:2px; }
  .contact-form { background:#fff; border:1px solid #e8f5e9; border-radius:20px; padding:36px; }
  .form-group { margin-bottom:20px; }
  .form-label { font-size:13px; color:#4a5e4a; font-weight:500; display:block; margin-bottom:6px; }
  .form-input { width:100%; padding:12px 16px; border:1px solid #e8f5e9; border-radius:10px; font-size:14px; font-family:'DM Sans',sans-serif; color:#1a2e1a; background:#fafaf7; outline:none; transition:border-color 0.2s; }
  .form-input:focus { border-color:${G}; }
  .form-textarea { height:120px; resize:vertical; }
  .form-btn { width:100%; background:${G}; color:#fff; border:none; padding:14px; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; font-family:'DM Sans',sans-serif; transition:background 0.2s; }
  .form-btn:hover { background:#166534; }

  .footer { background:#1a2e1a; color:#fff; padding:48px 5% 32px; }
  .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr; gap:48px; max-width:1200px; margin:0 auto; padding-bottom:40px; border-bottom:1px solid rgba(255,255,255,0.1); }
  .footer-brand { font-family:'Playfair Display',serif; font-size:22px; color:#fff; margin-bottom:12px; }
  .footer-desc { font-size:14px; color:rgba(255,255,255,0.6); line-height:1.7; font-weight:300; }
  .footer-head { font-size:13px; font-weight:500; text-transform:uppercase; letter-spacing:0.08em; color:rgba(255,255,255,0.5); margin-bottom:16px; }
  .footer-links { list-style:none; }
  .footer-links li { margin-bottom:10px; }
  .footer-links a { font-size:14px; color:rgba(255,255,255,0.7); text-decoration:none; transition:color 0.2s; }
  .footer-links a:hover { color:#86efac; }
  .footer-bottom { max-width:1200px; margin:24px auto 0; display:flex; justify-content:space-between; align-items:center; }
  .footer-copy { font-size:13px; color:rgba(255,255,255,0.4); }
  .cert-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(134,239,172,0.15); border:1px solid rgba(134,239,172,0.3); color:#86efac; font-size:12px; padding:5px 14px; border-radius:100px; }

  @media(max-width: 900px) {
    .about-grid, .contact-grid, .footer-grid { grid-template-columns:1fr; }
    .about-img { height:300px; }
    .about-badge { right:10px; }
    .skills-wrap { grid-template-columns:1fr; }
    .farm-nav-links { display:none; }
    .farm-nav-links.open { display:flex; flex-direction:column; position:fixed; top:64px; left:0; right:0; background:rgba(250,250,247,0.97); backdrop-filter:blur(12px); padding:24px 5%; gap:16px; border-bottom:1px solid #e8f5e9; }
    .ham { display:block; }
    .hero-stats { flex-wrap:wrap; }
    .stat-item { flex:1 1 50%; border-right:none; border-bottom:1px solid rgba(255,255,255,0.15); }
    .stat-item:nth-child(odd) { border-right:1px solid rgba(255,255,255,0.15); }
  }
`;

function useIntersection(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function SkillBar({ name, level }) {
  const ref = useRef();
  const vis = useIntersection(ref);
  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-bar" style={{ width: vis ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span className={`faq-icon${open ? " open" : ""}`}>+</span>
      </button>
      <div className={`faq-a${open ? " open" : ""}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FarmerLanding() {
  const [slide, setSlide] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % data.hero.carousel?.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setNavScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="farm-wrap">
      <style>{styles}</style>

      {/* NAV */}
      <nav className={`farm-nav${navScrolled ? " scrolled" : ""}`}>
        <div className="farm-logo">Organic<span>Roots</span></div>
        <div className={`farm-nav-links${menuOpen ? " open" : ""}`}>
          {["about","services","projects","gallery","contact"]?.map(s => (
            <a key={s} href={`#${s}`} onClick={e => { e.preventDefault(); scrollTo(s); }}>{s.charAt(0).toUpperCase()+s.slice(1)}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Order Now</a>
        </div>
        <button className="ham" onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
      </nav>

      {/* HERO */}
      <section className="farm-hero">
        <div className="hero-bg">
          {data.hero.carousel?.map((src, i) => (
            <img key={i} src={src} alt="" style={{ opacity: i === slide ? 1 : 0 }} />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">NPOP Certified · Bengaluru</div>
          <h1 className="hero-h1">
            Growing <em>Goodness</em><br />Naturally
          </h1>
          <p className="hero-sub">{data.hero.subheading}</p>
          <div className="hero-btns">
            <a href="#services" className="btn-primary" onClick={e => { e.preventDefault(); scrollTo("services"); }}>🛒 Shop Fresh Produce</a>
            <a href="#contact" className="btn-outline" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>📍 Visit Our Farm</a>
          </div>
          <div className="hero-stats">
            {data.hero.stats?.map((s, i) => (
              <div key={i} className="stat-item">
                <strong className="stat-val">{s.value}</strong>
                <span className="stat-lab">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-dots">
          {data.hero.carousel?.map((_, i) => (
            <button key={i} className={`hero-dot${i === slide ? " active" : ""}`} onClick={() => setSlide(i)} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src={data.about.image} alt="Mithun K J" className="about-img" />
            <div className="about-badge">
              <strong>12+</strong>
              <span>Years Farming</span>
            </div>
          </div>
          <div>
            <span className="section-label">About Mithun K J</span>
            <h2 className="section-title">A Third-Generation<br />Organic Farmer</h2>
            <p className="section-sub">{data.about.description}</p>
            <div className="about-highlights">
              {data.about.highlights?.map((h, i) => (
                <div key={i} className="highlight-card">
                  <div className="highlight-icon">{h.icon}</div>
                  <div className="highlight-title">{h.title}</div>
                  <div className="highlight-val">{h.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt" id="services">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Fresh From Our Farm<br />to Your Table</h2>
        </div>
        <div className="services-grid">
          {data.services?.map((s, i) => (
            <div key={i} className="service-card">
              <img src={s.image} alt={s.title} className="service-img" />
              <div className="service-body">
                <span className="service-badge">{s.badge}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                <div className="service-features">
                  {s.features?.map((f, j) => <span key={j} className="feat-tag">{f}</span>)}
                </div>
                <div className="service-footer">
                  <span className="service-price">{s.price}</span>
                  <span className="service-dur">/ {s.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Farm Initiatives<br />& Projects</h2>
        </div>
        <div className="projects-grid">
          {data.projects?.map((p, i) => (
            <div key={i} className="proj-card">
              <span className="proj-year">{p.year} · {p.category}</span>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags?.map((t, j) => <span key={j} className="proj-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section-alt">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Farming Skills &<br />Specialisations</h2>
        </div>
        <div className="skills-wrap">
          {data.skills?.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">What Families Say</span>
          <h2 className="section-title">Trusted by 2,500+<br />Happy Families</h2>
        </div>
        <div className="testimonials-grid">
          {data.testimonials?.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.name.split(" ")?.map(w => w[0]).slice(0,2).join("")}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role} · {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="section section-alt" id="gallery">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Farm Gallery</span>
          <h2 className="section-title">Life at<br />Organic Roots Farm</h2>
        </div>
        <div className="gallery-grid">
          {data.gallery?.map((g, i) => (
            <div key={i} className="gallery-item">
              <img src={g.url} alt={g.cat} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <span className="section-label" style={{ display: "inline-block" }}>Got Questions?</span>
          <h2 className="section-title">Frequently Asked<br />Questions</h2>
        </div>
        <div className="faq-wrap">
          {data.faq?.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-alt" id="contact">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Visit the Farm or<br />Place an Order</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-row">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Farm Address</div>
                <div className="contact-val">Organic Roots Farm, Devanahalli Road<br />Bengaluru Rural, Karnataka 562110</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone / WhatsApp</div>
                <div className="contact-val">+91 98765 43210</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-val">mithun@organicroots.in</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon">🕐</div>
              <div>
                <div className="contact-label">Working Hours</div>
                <div className="contact-val">Mon – Sat: 8:00 AM – 6:00 PM<br />Sunday: Farm Visits by Appointment</div>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <span className="cert-badge">🏆 NPOP Certified Organic Farm</span>
            </div>
          </div>
          <div className="contact-form">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", marginBottom: 24, color: "#1a2e1a" }}>Send us a Message</h3>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Phone / Email</label>
              <input className="form-input" type="text" placeholder="Phone number or email" />
            </div>
            <div className="form-group">
              <label className="form-label">Interested In</label>
              <select className="form-input">
                <option>Fresh Produce Delivery</option>
                <option>Farm Tour / Workshop</option>
                <option>Bulk Supply (B2B)</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input form-textarea" placeholder="Tell us about your requirements…" />
            </div>
            <button className="form-btn">Send Message 🌿</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">OrganicRoots Farm</div>
            <p className="footer-desc">Third-generation organic farm near Bengaluru, dedicated to regenerative agriculture, soil health, and bringing the purest produce to your family.</p>
          </div>
          <div>
            <div className="footer-head">Quick Links</div>
            <ul className="footer-links">
              {["About", "Services", "Projects", "Gallery", "Contact"]?.map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-head">Certifications</div>
            <ul className="footer-links">
              <li><a href="#">NPOP Organic Certified</a></li>
              <li><a href="#">PGS Certification</a></li>
              <li><a href="#">APEDA Registered</a></li>
              <li><a href="#">KVK Trained Farmer</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Organic Roots Farm · Mithun K J · Bengaluru</span>
          <div style={{ display: "flex", gap: 14 }}>
            {["Instagram", "Facebook", "LinkedIn"]?.map(p => (
              <a key={p} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{p}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}