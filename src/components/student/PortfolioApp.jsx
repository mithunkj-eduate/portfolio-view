import { useState, useEffect, useRef } from "react";

/* ============================================================
   STUDENT DATA
   ============================================================ */
const STUDENT = {
  student_profile: {
    full_name: "Aarav Sharma",
    date_of_birth: "2010-06-15",
    location: "Bengaluru, India",
    school_name: "Green Valley High School",
    board: "CBSE",
    profile_photo: "",
  },
  journey_summary: {
    tagline: "Curious learner passionate about science and leadership",
    philosophy: "Learning by doing and solving real-world problems",
    future_goals: ["Environmental Engineer", "Sustainability Researcher"],
    strengths: ["Analytical Thinking", "Leadership", "Creativity"],
    areas_of_interest: ["Science", "Technology", "Chess", "Public Speaking"],
  },
  academic_journey: [
    {
      grade: "Grade 5", year: "2020-2021",
      subjects: [
        { name: "Mathematics", score: 98, grade: "A+", teacher_feedback: "Excellent problem-solving skills" },
        { name: "Science", score: 95, grade: "A+", teacher_feedback: "Very curious and experimental mindset" },
        { name: "English", score: 90, grade: "A+", teacher_feedback: "Strong communicator" },
        { name: "Social Studies", score: 88, grade: "A", teacher_feedback: "Good analytical skills" },
      ],
      overall_percentage: 94.5, rank: "Top 3", attendance: "96%",
    },
    {
      grade: "Grade 6", year: "2021-2022",
      subjects: [
        { name: "Mathematics", score: 96, grade: "A+", teacher_feedback: "Outstanding computational thinking" },
        { name: "Science", score: 97, grade: "A+", teacher_feedback: "Natural scientist" },
        { name: "English", score: 92, grade: "A+", teacher_feedback: "Excellent vocabulary" },
        { name: "Social Studies", score: 85, grade: "A", teacher_feedback: "Curious and engaged" },
      ],
      overall_percentage: 92.5, rank: "Top 5", attendance: "98%",
    },
    {
      grade: "Grade 7", year: "2022-2023",
      subjects: [
        { name: "Mathematics", score: 99, grade: "A+", teacher_feedback: "Exceptional" },
        { name: "Science", score: 98, grade: "A+", teacher_feedback: "Future scientist" },
        { name: "English", score: 94, grade: "A+", teacher_feedback: "Creative writer" },
        { name: "Social Studies", score: 90, grade: "A+", teacher_feedback: "Well-rounded" },
      ],
      overall_percentage: 95.5, rank: "Top 1", attendance: "99%",
    },
  ],
  projects: [
    {
      id: "P1", title: "Solar Cooker Model", grade: "Grade 5", subject: "Science",
      description: "Built a functional solar cooker using recyclable materials that can reach temperatures up to 150°C.",
      skills_used: ["Creativity", "Scientific Thinking"], tools_used: ["Cardboard", "Aluminum Foil"],
      impact_metrics: ["Demonstrated to 50+ students", "Reduced cooking fuel usage conceptually"],
      reflection: "Learned how renewable energy can be applied in daily life.",
      mentor_feedback: "Outstanding creative thinking — Mrs. Verma",
      completion_date: "Jan 2021",
    },
    {
      id: "P2", title: "Water Purification System", grade: "Grade 6", subject: "Environmental Science",
      description: "Designed a low-cost water filtration prototype using sand, gravel, and activated charcoal layers.",
      skills_used: ["Problem Solving", "Research", "Engineering"], tools_used: ["PVC Pipes", "Sand", "Gravel"],
      impact_metrics: ["Presented at school science fair", "Won 1st place in school category"],
      reflection: "Understood water scarcity challenges and how simple solutions make a big difference.",
      mentor_feedback: "Brilliant initiative addressing real-world problems — Mr. Rajan",
      completion_date: "Mar 2022",
    },
    {
      id: "P3", title: "AI Waste Sorter Concept", grade: "Grade 7", subject: "Technology",
      description: "Conceptualized an AI-powered waste sorting system with a Python prototype for image classification.",
      skills_used: ["Python", "AI/ML Concepts", "Design Thinking"], tools_used: ["Python", "Google Teachable Machine"],
      impact_metrics: ["Presented to school board", "Selected for district tech showcase"],
      reflection: "Combined programming skills with environmental passion to create a meaningful solution.",
      mentor_feedback: "Exceptional vision for technology in sustainability — Dr. Mehta",
      completion_date: "Feb 2023",
    },
  ],
  sports: [
    {
      sport_name: "Chess", role: "Team Captain",
      achievements: [
        { title: "Inter-School Chess Champion", level: "District", year: "2021", impact: "Trained 3 juniors to qualify for district level" },
        { title: "State Level Qualifier", level: "State", year: "2022", impact: "Represented school at state level" },
      ],
      skills_gained: ["Strategic Thinking", "Patience", "Focus"],
    },
    {
      sport_name: "Table Tennis", role: "Team Member",
      achievements: [
        { title: "School Champion", level: "School", year: "2023", impact: "Undefeated in school circuit" },
      ],
      skills_gained: ["Agility", "Quick Thinking", "Sportsmanship"],
    },
  ],
  extra_curriculars: [
    {
      category: "Debating", activity: "School Debate Club", role: "Speaker",
      achievements: ["Won 2nd place in inter-school debate", "Represented school in district MUN"],
      reflection: "Improved confidence and communication skills significantly.",
    },
    {
      category: "Arts", activity: "Painting", role: "Participant",
      achievements: ["Exhibited artwork in school annual day", "Won appreciation award for environmental art"],
    },
    {
      category: "Music", activity: "School Choir", role: "Vocalist",
      achievements: ["Performed at Independence Day celebration", "Participated in inter-school music festival"],
    },
  ],
  leadership_and_responsibility: [
    {
      title: "Class Monitor", grade: "Grade 6",
      responsibilities: ["Managed classroom discipline", "Coordinated with teachers"],
      impact: "Improved class punctuality by 20%",
    },
    {
      title: "Science Club President", grade: "Grade 7",
      responsibilities: ["Organised weekly experiments", "Mentored 15 junior members", "Arranged guest lectures"],
      impact: "Increased club membership by 40%",
    },
    {
      title: "Green Campus Ambassador", grade: "Grade 7",
      responsibilities: ["Led recycling initiatives", "Ran awareness campaigns"],
      impact: "Reduced campus paper waste by 30%",
    },
  ],
  certifications: [
    { title: "Basic Python Programming", platform: "Coursera", year: "2023" },
    { title: "Introduction to AI", platform: "Elements of AI", year: "2023" },
    { title: "Environmental Sustainability", platform: "Khan Academy", year: "2022" },
  ],
  job_ready_skills: {
    technical: ["Python", "MS Excel", "Basic Robotics", "Google Workspace", "Canva"],
    soft_skills: ["Leadership", "Communication", "Critical Thinking", "Teamwork", "Problem Solving"],
    languages: [
      { language: "English", proficiency: "Fluent" },
      { language: "Hindi", proficiency: "Fluent" },
      { language: "Kannada", proficiency: "Basic" },
    ],
  },
  impact_portfolio: [
    {
      title: "Community Cleanliness Drive", year: "2022",
      description: "Organised a local cleanliness campaign in the school neighbourhood.",
      impact_metrics: ["Led a team of 10 students", "Collected 50 kg waste", "Planted 20 saplings"],
    },
    {
      title: "Digital Literacy Workshop", year: "2023",
      description: "Conducted basic computer literacy sessions for underprivileged children.",
      impact_metrics: ["Trained 25 children", "3 sessions conducted", "100% attendance"],
    },
  ],
  analytics: { total_projects: 5, total_achievements: 12, leadership_roles: 3, hours_in_extracurriculars: 120 },
  verification: {
    school_verified: true, parent_verified: true, certificates_uploaded: true,
    last_verified_date: "2024-03-01",
    verified_by: [
      { name: "Mrs. Verma", role: "Science Teacher", verification_note: "Consistently excellent performance" },
      { name: "Mr. Rajan", role: "Principal", verification_note: "One of our most outstanding students" },
    ],
  },
  digital_presence: { portfolio_url: "", linkedin: "", github: "" },
};

/* ============================================================
   DESIGN TOKENS (injected via <style>)
   ============================================================ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

.pr{
  --g: #1a4731; --gl: #2d6a4f; --gxl: #e8f4ed;
  --ac: #c9a84c; --acl: #f5e9c8; --acd: #7a5c18;
  --bg: #faf8f3; --sf: #fff; --sf2: #f3f0e8;
  --tx: #1a1a1a; --txm: #6b6b6b; --txl: #9a9a9a;
  --bd: #e0dbd0;
  --sh: rgba(26,71,49,.10); --shd: rgba(26,71,49,.20);
  --fd: 'Playfair Display',Georgia,serif;
  --fb: 'DM Sans',sans-serif;
  --tr:.3s cubic-bezier(.4,0,.2,1);
  font-family:var(--fb);background:var(--bg);color:var(--tx);line-height:1.6;
}
.pr.dark{
  --g:#4ade80;--gl:#86efac;--gxl:#14291c;
  --ac:#f5c842;--acl:#2d2210;--acd:#fde68a;
  --bg:#0f1a14;--sf:#162219;--sf2:#1e2e24;
  --tx:#f0ede4;--txm:#a8a39a;--txl:#6b6661;
  --bd:#2a3a30;--sh:rgba(0,0,0,.35);--shd:rgba(0,0,0,.55);
}
.pr a{color:inherit;text-decoration:none}
.pr button{font-family:var(--fb)}

/* layout helpers */
.pr .wrap{max-width:1100px;margin:0 auto;padding:0 24px}
.pr .sec{padding:80px 0}
.pr .slabel{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:var(--ac);margin-bottom:10px}
.pr .slabel::before{content:'';display:block;width:20px;height:2px;background:var(--ac);border-radius:2px}
.pr .stitle{font-family:var(--fd);font-size:clamp(26px,4vw,40px);font-weight:700;color:var(--g);line-height:1.2;margin-bottom:6px}
.pr .ssub{font-size:15px;color:var(--txm);margin-bottom:40px;max-width:480px}
.pr .div{width:56px;height:3px;background:linear-gradient(90deg,var(--g),var(--ac));border-radius:100px;margin:14px 0 40px}
.pr .card{background:var(--sf);border-radius:20px;border:1px solid var(--bd);padding:26px;transition:transform var(--tr),box-shadow var(--tr)}
.pr .card:hover{transform:translateY(-4px);box-shadow:0 18px 44px var(--shd)}
.pr .badge{display:inline-flex;align-items:center;padding:3px 11px;border-radius:100px;font-size:11px;font-weight:500;background:var(--gxl);color:var(--g);border:1px solid rgba(26,71,49,.12)}
.pr .badgeg{background:var(--acl);color:var(--acd);border-color:rgba(201,168,76,.2)}
.pr .ptk{width:100%;height:7px;background:var(--sf2);border-radius:100px;overflow:hidden}
.pr .pfl{height:100%;border-radius:100px;background:linear-gradient(90deg,var(--gl),var(--ac));transition:width 1.3s cubic-bezier(.4,0,.2,1)}
.pr .g2{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
.pr .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.pr .ga{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:22px}
.pr .ai{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.pr .ai.vis{opacity:1;transform:translateY(0)}
.pr .d1{transition-delay:.1s}.pr .d2{transition-delay:.2s}.pr .d3{transition-delay:.3s}.pr .d4{transition-delay:.4s}.pr .d5{transition-delay:.5s}

/* NAV */
.pr .nav{position:sticky;top:0;z-index:100;background:transparent;transition:background var(--tr),box-shadow var(--tr)}
.pr .nav.sc{background:rgba(250,248,243,.92);backdrop-filter:blur(12px);box-shadow:0 2px 20px rgba(26,71,49,.08)}
.pr.dark .nav.sc{background:rgba(15,26,20,.92)}
.pr .navi{display:flex;align-items:center;justify-content:space-between;height:58px}
.pr .nlogo{font-family:var(--fd);font-size:17px;font-weight:700;color:var(--g)}
.pr .nlinks{list-style:none;display:flex;gap:2px}
.pr .nlnk{background:none;border:none;padding:6px 11px;border-radius:100px;font-size:12px;font-weight:500;color:var(--txm);cursor:pointer;transition:background var(--tr),color var(--tr)}
.pr .nlnk:hover,.pr .nlnk.act{background:var(--gxl);color:var(--g)}
.pr .nbur{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:8px}
.pr .nbur span{display:block;width:22px;height:2px;background:var(--g);border-radius:2px;transition:transform var(--tr),opacity var(--tr)}
.pr .nbur.op span:nth-child(1){transform:rotate(45deg) translateY(7px)}
.pr .nbur.op span:nth-child(2){opacity:0}
.pr .nbur.op span:nth-child(3){transform:rotate(-45deg) translateY(-7px)}
.pr .nmob{display:flex;flex-direction:column;background:var(--sf);border-top:1px solid var(--bd);padding:10px 0;animation:sd .2s ease}
.pr .nmlnk{background:none;border:none;padding:12px 24px;text-align:left;font-size:15px;color:var(--tx);cursor:pointer;transition:background var(--tr)}
.pr .nmlnk:hover{background:var(--sf2)}
@keyframes sd{from{transform:translateY(-8px);opacity:0}to{transform:translateY(0);opacity:1}}

/* HERO */
.pr .hero{position:relative;min-height:88vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden;background:linear-gradient(148deg,#1a4731 0%,#0d2b1f 55%,#0a1e16 100%);color:#fff;padding:80px 0 48px}
.pr .hcv{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.pr .hero::before{content:'';position:absolute;top:-120px;right:-120px;width:580px;height:580px;border-radius:50%;background:radial-gradient(circle,rgba(201,168,76,.13) 0%,transparent 70%);pointer-events:none}
.pr .hero::after{content:'';position:absolute;bottom:-60px;left:-80px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(74,222,128,.07) 0%,transparent 70%);pointer-events:none}
.pr .hdtog{position:absolute;top:22px;right:22px;width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:18px;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;transition:background var(--tr),transform var(--tr);backdrop-filter:blur(6px)}
.pr .hdtog:hover{background:rgba(255,255,255,.18);transform:scale(1.1) rotate(15deg)}
.pr .hinner{position:relative;z-index:2;display:flex;flex-direction:column;gap:52px}
.pr .hleft{display:flex;align-items:flex-start;gap:34px}
.pr .havw{position:relative;flex-shrink:0}
.pr .havp{width:118px;height:118px;border-radius:50%;background:linear-gradient(135deg,#2d6a4f,#c9a84c);display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:38px;font-weight:700;color:#fff;border:3px solid rgba(201,168,76,.5);box-shadow:0 0 0 6px rgba(201,168,76,.1)}
.pr .havi{width:118px;height:118px;border-radius:50%;object-fit:cover;border:3px solid rgba(201,168,76,.6)}
.pr .hvr{position:absolute;bottom:2px;right:2px;width:27px;height:27px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#f5e9c8);color:#5a3e0a;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2.5px solid #0d2b1f}
.pr .hsc{font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:rgba(201,168,76,.8);font-weight:600;margin-bottom:7px}
.pr .hname{font-family:var(--fd);font-size:clamp(30px,6vw,58px);font-weight:700;line-height:1.05;color:#fff;margin-bottom:11px}
.pr .htag{font-size:17px;color:rgba(255,255,255,.72);font-style:italic;font-family:var(--fd);margin-bottom:9px}
.pr .hloc{font-size:12px;color:rgba(255,255,255,.48);margin-bottom:18px}
.pr .hchips{display:flex;flex-wrap:wrap;gap:7px}
.pr .hchip{padding:5px 14px;border-radius:100px;border:1px solid rgba(201,168,76,.35);background:rgba(201,168,76,.1);color:#f5e9c8;font-size:12px;font-weight:500}
.pr .hstats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.08);border-radius:20px;overflow:hidden;backdrop-filter:blur(6px)}
.pr .hst{padding:22px 14px;text-align:center;background:rgba(255,255,255,.04);display:flex;flex-direction:column;align-items:center;gap:3px;transition:background var(--tr)}
.pr .hst:hover{background:rgba(201,168,76,.1)}
.pr .hstv{font-family:var(--fd);font-size:34px;font-weight:700;color:#c9a84c;line-height:1}
.pr .hstl{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.48);font-weight:500}
.pr .hscr{position:absolute;bottom:26px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:7px;color:rgba(255,255,255,.37);font-size:10px;letter-spacing:.1em;text-transform:uppercase;z-index:2}
.pr .hsca{width:18px;height:18px;border-right:2px solid rgba(255,255,255,.28);border-bottom:2px solid rgba(255,255,255,.28);transform:rotate(45deg);animation:hb 1.6s ease-in-out infinite}
@keyframes hb{0%,100%{transform:rotate(45deg) translateY(0)}50%{transform:rotate(45deg) translateY(5px)}}

/* JOURNEY */
.pr .jsec{background:var(--bg)}
.pr .jgrid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:22px;align-items:start}
.pr .jphil{background:linear-gradient(145deg,var(--g) 0%,#0d3520 100%);border-radius:20px;padding:38px 30px;color:#fff;position:relative;overflow:hidden}
.pr .jphil::before{content:'';position:absolute;top:-40px;right:-40px;width:190px;height:190px;border-radius:50%;background:rgba(201,168,76,.1)}
.pr .jqi{font-family:var(--fd);font-size:72px;line-height:.55;color:rgba(201,168,76,.35);margin-bottom:14px}
.pr .jpht{font-family:var(--fd);font-size:19px;font-style:italic;line-height:1.5;color:rgba(255,255,255,.88);position:relative;z-index:1}
.pr .jaut{margin-top:14px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:rgba(201,168,76,.65);position:relative;z-index:1}
.pr .jblk{background:var(--sf);border-radius:20px;padding:26px;border:1px solid var(--bd);height:100%}
.pr .jbt{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--txm);margin-bottom:18px}
.pr .jgoals{display:flex;flex-direction:column;gap:11px}
.pr .jgi{display:flex;align-items:center;gap:13px;font-size:14px;font-weight:500;color:var(--tx)}
.pr .jgn{font-family:var(--fd);font-size:12px;font-weight:700;color:var(--ac);min-width:22px}
.pr .jchips{display:flex;flex-wrap:wrap;gap:9px}
.pr .jch{padding:7px 15px;border-radius:100px;background:var(--gxl);color:var(--g);font-size:12px;font-weight:500;border:1px solid rgba(26,71,49,.12);transition:background var(--tr),transform var(--tr);cursor:default}
.pr .jch:hover{background:var(--g);color:#fff;transform:scale(1.05)}

/* ACADEMICS */
.pr .acadsec{background:var(--sf2)}
.pr .atabs{display:flex;gap:11px;margin-bottom:26px;flex-wrap:wrap}
.pr .atab{display:flex;flex-direction:column;padding:11px 22px;border-radius:14px;border:1.5px solid var(--bd);background:var(--sf);cursor:pointer;transition:all var(--tr);text-align:left;gap:2px}
.pr .atab:hover{border-color:var(--gl);background:var(--gxl)}
.pr .atab.act{border-color:var(--g);background:var(--g)}
.pr .atg{font-size:13px;font-weight:600;color:var(--tx)}
.pr .atab.act .atg{color:#fff}
.pr .aty{font-size:11px;color:var(--txl);letter-spacing:.06em}
.pr .atab.act .aty{color:rgba(255,255,255,.6)}
.pr .asum{display:flex;background:var(--sf);border-radius:18px;border:1px solid var(--bd);overflow:hidden;margin-bottom:30px}
.pr .asi{flex:1;display:flex;flex-direction:column;align-items:center;padding:18px 14px;gap:3px}
.pr .asd{width:1px;height:46px;background:var(--bd);align-self:center}
.pr .asl{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--txm);font-weight:500}
.pr .asv{font-family:var(--fd);font-size:24px;font-weight:700;color:var(--g)}
.pr .asubs{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:18px;margin-bottom:36px}
.pr .asc{background:var(--sf);border-radius:16px;padding:20px;border:1px solid var(--bd);transition:transform var(--tr),box-shadow var(--tr)}
.pr .asc:hover{transform:translateY(-3px);box-shadow:0 10px 28px var(--shd)}
.pr .ash{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;gap:8px}
.pr .asn{font-size:14px;font-weight:600;color:var(--tx);margin-bottom:3px}
.pr .asf{font-size:11px;color:var(--txm);font-style:italic}
.pr .asgb{flex-shrink:0;padding:4px 10px;border-radius:8px;background:var(--acl);color:var(--acd);font-size:12px;font-weight:700;font-family:var(--fd)}
.pr .ascr{display:flex;align-items:baseline;gap:2px;margin-bottom:9px}
.pr .ascv{font-family:var(--fd);font-size:30px;font-weight:700;line-height:1}
.pr .asct{font-size:13px;color:var(--txl)}
.pr .atl{background:var(--sf);border-radius:18px;padding:26px;border:1px solid var(--bd)}
.pr .atlt{font-size:13px;font-weight:600;color:var(--txm);text-transform:uppercase;letter-spacing:.1em;margin-bottom:22px}
.pr .atlb{display:flex;align-items:flex-end;gap:22px;height:130px}
.pr .atlbg{flex:1;display:flex;flex-direction:column;align-items:center;height:100%;gap:5px}
.pr .atlbw{flex:1;display:flex;align-items:flex-end;width:100%}
.pr .atlbar{width:100%;max-width:60px;margin:0 auto;border-radius:8px 8px 0 0;background:linear-gradient(180deg,var(--ac) 0%,var(--gl) 100%);transition:height 1.4s cubic-bezier(.4,0,.2,1)}
.pr .atlbp{font-family:var(--fd);font-size:12px;font-weight:700;color:var(--g)}
.pr .atlbl{font-size:10px;color:var(--txl);text-align:center}

/* PROJECTS */
.pr .projsec{background:var(--bg)}
.pr .pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px}
.pr .pc{background:var(--sf);border-radius:20px;padding:26px;border:1px solid var(--bd);display:flex;flex-direction:column;gap:13px;transition:transform var(--tr),box-shadow var(--tr);position:relative;overflow:hidden}
.pr .pc::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--g),var(--ac));opacity:0;transition:opacity var(--tr)}
.pr .pc:hover{transform:translateY(-6px);box-shadow:0 20px 50px var(--shd)}
.pr .pc:hover::before{opacity:1}
.pr .pch{display:flex;justify-content:space-between;align-items:flex-start}
.pr .pci{font-size:30px;line-height:1}
.pr .pmeta{display:flex;flex-wrap:wrap;gap:5px}
.pr .ptitle{font-family:var(--fd);font-size:18px;font-weight:700;color:var(--tx);line-height:1.3}
.pr .pdesc{font-size:13px;color:var(--txm);line-height:1.55}
.pr .pskills{display:flex;flex-wrap:wrap;gap:5px}
.pr .pstag{padding:3px 10px;border-radius:100px;font-size:10px;font-weight:500;background:var(--sf2);color:var(--txm);border:1px solid var(--bd)}
.pr .pimps{display:flex;flex-direction:column;gap:5px}
.pr .pimp{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--g);font-weight:500}
.pr .pimd{width:5px;height:5px;border-radius:50%;background:var(--ac);flex-shrink:0}
.pr .ptog{background:none;border:1px solid var(--bd);border-radius:8px;padding:7px 13px;font-size:11px;font-weight:500;color:var(--g);cursor:pointer;transition:background var(--tr);align-self:flex-start}
.pr .ptog:hover{background:var(--gxl)}
.pr .pexp{display:flex;flex-direction:column;gap:12px;padding-top:13px;border-top:1px solid var(--bd);animation:fs .3s ease}
@keyframes fs{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.pr .pdl{display:block;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--txl);margin-bottom:5px}
.pr .pref p,.pr .pment p{font-size:12px;color:var(--txm);line-height:1.5}
.pr .pment p{font-style:italic;color:var(--g) !important}
.pr .ptchips{display:flex;flex-wrap:wrap;gap:5px}
.pr .ptch{padding:3px 10px;border-radius:8px;font-size:10px;background:var(--acl);color:var(--acd);border:1px solid rgba(201,168,76,.2)}
.pr .pdate{font-size:10px;color:var(--txl);margin-top:auto}

/* SPORTS */
.pr .sptsec{background:var(--sf2)}
.pr .sptgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:22px}
.pr .sptc{background:var(--sf);border-radius:20px;padding:26px;border:1px solid var(--bd);display:flex;flex-direction:column;gap:18px;transition:transform var(--tr),box-shadow var(--tr)}
.pr .sptc:hover{transform:translateY(-4px);box-shadow:0 16px 40px var(--shd)}
.pr .spttop{display:flex;align-items:center;gap:14px}
.pr .sptiw{width:54px;height:54px;border-radius:14px;background:var(--gxl);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0}
.pr .sptn{font-family:var(--fd);font-size:20px;font-weight:700;color:var(--tx);margin-bottom:5px}
.pr .sptachs{display:flex;flex-direction:column;gap:12px}
.pr .sptach{display:flex;gap:12px;align-items:flex-start}
.pr .sptmed{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;color:#fff}
.pr .sptai strong{font-size:13px;color:var(--tx);font-weight:600}
.pr .sptam{display:flex;align-items:center;gap:7px;margin-top:3px}
.pr .spty{font-size:11px;color:var(--txl)}
.pr .sptii{font-size:11px;color:var(--txm);font-style:italic;margin-top:3px}
.pr .sptsk{border-top:1px solid var(--bd);padding-top:14px}
.pr .sptsklbl{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--txl);font-weight:600;display:block;margin-bottom:7px}
.pr .sptskch{display:flex;flex-wrap:wrap;gap:5px}
.pr .sptsktg{padding:4px 12px;border-radius:100px;font-size:11px;background:var(--gxl);color:var(--g);font-weight:500}

/* EXTRAS */
.pr .exsec{background:var(--bg)}
.pr .exgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px}
.pr .exc{background:var(--sf);border-radius:18px;padding:22px;border:1px solid var(--bd);display:flex;flex-direction:column;gap:9px;transition:transform var(--tr),box-shadow var(--tr)}
.pr .exc:hover{transform:translateY(-4px);box-shadow:0 12px 30px var(--sh)}
.pr .exci{font-size:30px}
.pr .excat{font-size:9px;text-transform:uppercase;letter-spacing:.14em;font-weight:600;color:var(--txl)}
.pr .exact{font-family:var(--fd);font-size:17px;font-weight:700;color:var(--tx)}
.pr .exachs{list-style:none;display:flex;flex-direction:column;gap:5px;margin-top:3px}
.pr .exachs li{font-size:12px;color:var(--txm);padding-left:11px;position:relative}
.pr .exachs li::before{content:'→';position:absolute;left:0;color:var(--ac);font-size:10px}
.pr .exref{font-size:11px;color:var(--txl);font-style:italic;margin-top:3px}

/* LEADERSHIP */
.pr .leadsec{background:var(--sf2)}
.pr .leadlist{display:flex;flex-direction:column;gap:18px}
.pr .leaditem{display:flex;gap:22px;align-items:flex-start;background:var(--sf);border-radius:18px;padding:26px;border:1px solid var(--bd);transition:transform var(--tr),box-shadow var(--tr)}
.pr .leaditem:hover{transform:translateX(4px);box-shadow:0 8px 24px var(--sh)}
.pr .leadnum{font-family:var(--fd);font-size:38px;font-weight:700;color:var(--bd);line-height:1;min-width:46px;user-select:none}
.pr .leadc{flex:1}
.pr .leadhdr{display:flex;align-items:center;gap:11px;margin-bottom:11px;flex-wrap:wrap}
.pr .leadt{font-family:var(--fd);font-size:19px;font-weight:700;color:var(--tx)}
.pr .leadresp{list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:12px}
.pr .leadresp li{font-size:13px;color:var(--txm);padding-left:13px;position:relative}
.pr .leadresp li::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:4px;height:4px;border-radius:50%;background:var(--gl)}
.pr .leadimp{display:inline-flex;align-items:center;gap:5px;padding:5px 13px;background:var(--gxl);border-radius:100px;font-size:12px;font-weight:500;color:var(--g)}
.pr .leadimpi{font-weight:700;color:var(--ac)}

/* CERTS */
.pr .certsec{background:var(--bg)}
.pr .certgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px}
.pr .certc{display:flex;align-items:center;gap:14px;background:var(--sf);border-radius:14px;padding:18px 20px;border:1px solid var(--bd);transition:transform var(--tr),box-shadow var(--tr)}
.pr .certc:hover{transform:translateY(-3px);box-shadow:0 10px 26px var(--sh)}
.pr .certicon{font-size:26px}
.pr .certinf{flex:1}
.pr .certt{font-size:13px;font-weight:600;color:var(--tx);margin-bottom:3px}
.pr .certm{display:flex;gap:7px;align-items:center}
.pr .certp{font-size:11px;color:var(--g);font-weight:500}
.pr .certy{font-size:10px;color:var(--txl)}
.pr .certvb{width:26px;height:26px;border-radius:50%;background:var(--gxl);color:var(--g);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}

/* SKILLS */
.pr .skillsec{background:var(--sf2)}
.pr .skilllay{display:grid;grid-template-columns:1fr 1fr 1fr;gap:22px}
.pr .skillblk{background:var(--sf);border-radius:18px;padding:26px;border:1px solid var(--bd)}
.pr .skillbt{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--txm);margin-bottom:18px}
.pr .techch{display:flex;flex-wrap:wrap;gap:7px}
.pr .techtg{padding:7px 14px;border-radius:9px;background:var(--g);color:#fff;font-size:12px;font-weight:500;transition:transform var(--tr),background var(--tr);cursor:default}
.pr .techtg:hover{background:var(--gl);transform:scale(1.05)}
.pr .softlist{display:flex;flex-direction:column;gap:13px}
.pr .softitem{display:flex;align-items:center;justify-content:space-between;gap:11px}
.pr .softn{font-size:13px;font-weight:500;color:var(--tx);white-space:nowrap}
.pr .langs{display:flex;flex-direction:column;gap:14px}
.pr .langitem{display:flex;flex-direction:column;gap:5px}
.pr .langinf{display:flex;justify-content:space-between;align-items:center}
.pr .langn{font-size:13px;font-weight:600;color:var(--tx)}
.pr .langl{font-size:11px;color:var(--txm)}

/* IMPACT */
.pr .impsec{background:var(--bg)}
.pr .impgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:22px}
.pr .impc{background:linear-gradient(145deg,var(--g) 0%,#0d3520 100%);border-radius:20px;padding:30px 26px;color:#fff;display:flex;flex-direction:column;gap:13px;position:relative;overflow:hidden;transition:transform var(--tr),box-shadow var(--tr)}
.pr .impc::before{content:'';position:absolute;top:-55px;right:-55px;width:180px;height:180px;border-radius:50%;background:rgba(201,168,76,.12);pointer-events:none}
.pr .impc:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(26,71,49,.4)}
.pr .impcy{font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:rgba(201,168,76,.7);font-weight:600}
.pr .impct{font-family:var(--fd);font-size:20px;font-weight:700;color:#fff;line-height:1.3}
.pr .impcd{font-size:13px;color:rgba(255,255,255,.68);line-height:1.55}
.pr .impcm{display:flex;flex-wrap:wrap;gap:7px;margin-top:3px}
.pr .imcpill{padding:5px 13px;border-radius:100px;background:rgba(201,168,76,.18);border:1px solid rgba(201,168,76,.28);color:#f5e9c8;font-size:11px;font-weight:500}

/* VERIFY */
.pr .verisec{background:var(--sf2)}
.pr .verilay{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:start}
.pr .veribadgs{display:flex;flex-direction:column;gap:14px}
.pr .vbc{display:flex;align-items:center;gap:14px;background:var(--sf);border-radius:14px;padding:16px 18px;border:1.5px solid var(--bd);transition:border-color var(--tr)}
.pr .vbc.ok{border-color:rgba(26,71,49,.3);background:var(--gxl)}
.pr .vbico{font-size:26px}
.pr .vblbl{font-size:13px;font-weight:600;color:var(--tx)}
.pr .vbst{font-size:11px;color:var(--txm);margin-top:2px}
.pr .vbc.ok .vbst{color:var(--g)}
.pr .vchk{margin-left:auto;width:26px;height:26px;border-radius:50%;background:var(--g);color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pr .vby{background:var(--sf);border-radius:18px;padding:26px;border:1px solid var(--bd);display:flex;flex-direction:column;gap:14px}
.pr .vbyt{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--txm)}
.pr .vp{display:flex;gap:13px;align-items:flex-start;padding:13px 0;border-bottom:1px solid var(--bd)}
.pr .vp:last-of-type{border-bottom:none}
.pr .vpav{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--g),var(--ac));color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pr .vpinf{display:flex;flex-direction:column;gap:2px}
.pr .vpinf strong{font-size:13px;color:var(--tx)}
.pr .vpinf span{font-size:11px;color:var(--txm)}
.pr .vpinf p{font-size:12px;color:var(--g);font-style:italic;margin-top:3px}
.pr .verid{font-size:11px;color:var(--txl)}

/* FOOTER */
.pr .pfoot{background:linear-gradient(145deg,#1a4731 0%,#0d2b1f 100%);color:rgba(255,255,255,.65);padding:46px 0 34px}
.pr .ftin{display:flex;flex-direction:column;align-items:center;gap:18px;text-align:center}
.pr .fbn{font-family:var(--fd);font-size:22px;font-weight:700;color:#fff;display:block;margin-bottom:4px}
.pr .fbs{font-size:12px;color:rgba(201,168,76,.65);letter-spacing:.06em}
.pr .flinks{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
.pr .flnk{padding:7px 17px;border-radius:100px;border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.75);font-size:12px;font-weight:500;transition:background var(--tr)}
.pr .flnk:hover{background:rgba(255,255,255,.1)}
.pr .fnolnk{font-size:12px;color:rgba(255,255,255,.3);font-style:italic}
.pr .fcopy{font-size:11px;color:rgba(255,255,255,.28)}

/* responsive */
@media(max-width:900px){
  .pr .jgrid,.pr .skilllay{grid-template-columns:1fr}
  .pr .verilay{grid-template-columns:1fr}
  .pr .leaditem{flex-direction:column;gap:10px}
  .pr .leadnum{font-size:26px}
}
@media(max-width:768px){
  .pr .hleft{flex-direction:column;align-items:center;text-align:center}
  .pr .hchips{justify-content:center}
  .pr .hstats{grid-template-columns:repeat(2,1fr)}
  .pr .sec{padding:60px 0}
  .pr .nlinks{display:none}
  .pr .nbur{display:flex}
  .pr .g2,.pr .g3{grid-template-columns:1fr}
}
`;

/* ============================================================
   HOOKS
   ============================================================ */
function useAnimateIn(threshold = 0.14) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.disconnect(); } }, { threshold });
    ob.observe(el);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ============================================================
   ANIMATED COUNTER
   ============================================================ */
function AnimCount({ target }) {
  const ref = useRef(null);
  useEffect(() => {
    let start = null;
    const dur = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      if (ref.current) ref.current.textContent = Math.round(e * target);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <span ref={ref}>0</span>;
}

/* ============================================================
   NAV
   ============================================================ */
const NAV_LINKS = [
  { id: "journey", label: "Journey" }, { id: "academics", label: "Academics" },
  { id: "projects", label: "Projects" }, { id: "sports", label: "Sports" },
  { id: "activities", label: "Activities" }, { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" }, { id: "impact", label: "Impact" },
  { id: "verify", label: "Verified" },
];

function Nav() {
  const [act, setAct] = useState("");
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => {
      setSc(window.scrollY > 70);
      let cur = "";
      NAV_LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el && window.scrollY >= el.offsetTop - 130) cur = id; });
      setAct(cur);
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <nav className={`nav ${sc ? "sc" : ""}`}>
      <div className="navi wrap">
        <span className="nlogo">Portfolio</span>
        <ul className="nlinks">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}><button className={`nlnk ${act === id ? "act" : ""}`} onClick={() => go(id)}>{label}</button></li>
          ))}
        </ul>
        <button className={`nbur ${open ? "op" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="nmob">
          {NAV_LINKS.map(({ id, label }) => (
            <button key={id} className="nmlnk" onClick={() => go(id)}>{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ d, dark, onToggle }) {
  const { student_profile: sp, journey_summary: js, analytics: an } = d;
  const cvs = useRef(null);

  useEffect(() => {
    const c = cvs.current; if (!c) return;
    const ctx = c.getContext("2d"); let raf;
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * c.offsetWidth, y: Math.random() * c.offsetHeight,
      r: Math.random() * 2 + .5, dx: (Math.random() - .5) * .4, dy: (Math.random() - .5) * .4, a: Math.random() * .4 + .1,
    }));
    const rz = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    rz(); window.addEventListener("resize", rz);
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > c.width) p.dx *= -1;
        if (p.y < 0 || p.y > c.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", rz); };
  }, []);

  const initials = (sp?.full_name || "").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const stats = [
    { l: "Projects", v: an?.total_projects || 0 },
    { l: "Achievements", v: an?.total_achievements || 0 },
    { l: "Leadership Roles", v: an?.leadership_roles || 0 },
    { l: "Activity Hours", v: an?.hours_in_extracurriculars || 0 },
  ];

  return (
    <header className="hero">
      <canvas ref={cvs} className="hcv" />
      <button className="hdtog" onClick={onToggle}>{dark ? "☀" : "☽"}</button>
      <div className="hinner wrap">
        <div className="hleft">
          <div className="havw">
            {sp?.profile_photo
              ? <img src={sp.profile_photo} alt={sp.full_name} className="havi" />
              : <div className="havp">{initials}</div>}
            <div className="hvr">✓</div>
          </div>
          <div>
            <p className="hsc">{sp?.school_name} · {sp?.board}</p>
            <h1 className="hname">{sp?.full_name}</h1>
            <p className="htag">{js?.tagline}</p>
            <p className="hloc">📍 {sp?.location}</p>
            <div className="hchips">{(js?.strengths || []).map(s => <span key={s} className="hchip">{s}</span>)}</div>
          </div>
        </div>
        <div className="hstats">
          {stats.map((s, i) => (
            <div key={s.l} className={`hst d${i + 1}`}>
              <span className="hstv"><AnimCount target={s.v} /></span>
              <span className="hstl">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hscr"><span>Scroll to explore</span><div className="hsca" /></div>
    </header>
  );
}

/* ============================================================
   JOURNEY
   ============================================================ */
function Journey({ d }) {
  const { ref, visible } = useAnimateIn();
  const js = d.journey_summary;
  if (!js) return null;
  return (
    <section id="journey" className="sec jsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Overview</p>
        <h2 className="stitle">The Journey</h2>
        <div className="div" />
        <div className="jgrid">
          <div className={`jphil ai ${visible ? "vis" : ""}`}>
            <div className="jqi">"</div>
            <p className="jpht">{js.philosophy}</p>
            <div className="jaut">— Aarav's Learning Mantra</div>
          </div>
          <div className={`ai d2 ${visible ? "vis" : ""}`}>
            <div className="jblk">
              <h3 className="jbt">Future Goals</h3>
              <div className="jgoals">
                {(js.future_goals || []).map((g, i) => (
                  <div key={g} className="jgi">
                    <span className="jgn">{String(i + 1).padStart(2, "0")}</span>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`ai d3 ${visible ? "vis" : ""}`}>
            <div className="jblk">
              <h3 className="jbt">Areas of Interest</h3>
              <div className="jchips">{(js.areas_of_interest || []).map(a => <span key={a} className="jch">{a}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ACADEMICS
   ============================================================ */
const SCOLS = { Mathematics: "#1a4731", Science: "#2d6a4f", English: "#c9a84c", "Social Studies": "#8b6914" };

function Academics({ d }) {
  const { ref, visible } = useAnimateIn();
  const [sel, setSel] = useState(0);
  const aj = d.academic_journey || [];
  if (!aj.length) return null;
  const cur = aj[sel];

  return (
    <section id="academics" className="sec acadsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Education</p>
        <h2 className="stitle">Academic Journey</h2>
        <div className="div" />
        <div className={`atabs ai ${visible ? "vis" : ""}`}>
          {aj.map((g, i) => (
            <button key={g.grade} className={`atab ${sel === i ? "act" : ""}`} onClick={() => setSel(i)}>
              <span className="atg">{g.grade}</span>
              <span className="aty">{g.year}</span>
            </button>
          ))}
        </div>
        <div className={`asum ai d2 ${visible ? "vis" : ""}`}>
          <div className="asi"><span className="asl">Overall %</span><span className="asv">{cur.overall_percentage}%</span></div>
          <div className="asd" />
          <div className="asi"><span className="asl">Class Rank</span><span className="asv">{cur.rank}</span></div>
          <div className="asd" />
          <div className="asi"><span className="asl">Attendance</span><span className="asv">{cur.attendance}</span></div>
        </div>
        <div className="asubs">
          {(cur.subjects || []).map((s, i) => {
            const col = SCOLS[s.name] || "#6b6b6b";
            return (
              <div key={s.name} className={`asc ai d${Math.min(i + 1, 5)} ${visible ? "vis" : ""}`}>
                <div className="ash">
                  <div><div className="asn">{s.name}</div><div className="asf">{s.teacher_feedback}</div></div>
                  <div className="asgb">{s.grade}</div>
                </div>
                <div className="ascr">
                  <span className="ascv" style={{ color: col }}>{s.score}</span>
                  <span className="asct">/100</span>
                </div>
                <div className="ptk">
                  <div className="pfl" style={{ width: visible ? `${s.score}%` : "0%", background: `linear-gradient(90deg,${col},${col}88)`, transitionDelay: `${i * .15}s` }} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={`atl ai d3 ${visible ? "vis" : ""}`}>
          <div className="atlt">Year-on-Year Progress</div>
          <div className="atlb">
            {aj.map(g => (
              <div key={g.grade} className="atlbg">
                <div className="atlbw">
                  <div className="atlbar" style={{ height: visible ? `${g.overall_percentage}%` : "0%" }} />
                </div>
                <span className="atlbp">{g.overall_percentage}%</span>
                <span className="atlbl">{g.grade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */
const PICONS = { Science: "🔬", Technology: "💻", "Environmental Science": "🌱" };

function ProjectCard({ p, i, visible }) {
  const [exp, setExp] = useState(false);
  return (
    <div className={`pc ai d${Math.min(i + 1, 5)} ${visible ? "vis" : ""}`}>
      <div className="pch">
        <span className="pci">{PICONS[p.subject] || "📐"}</span>
        <div className="pmeta">
          <span className="badge">{p.grade}</span>
          <span className="badge badgeg">{p.subject}</span>
        </div>
      </div>
      <h3 className="ptitle">{p.title}</h3>
      <p className="pdesc">{p.description}</p>
      <div className="pskills">{(p.skills_used || []).map(s => <span key={s} className="pstag">{s}</span>)}</div>
      {p.impact_metrics?.length > 0 && (
        <div className="pimps">
          {p.impact_metrics.map(m => <div key={m} className="pimp"><span className="pimd" />{m}</div>)}
        </div>
      )}
      <button className="ptog" onClick={() => setExp(!exp)}>{exp ? "Hide details ↑" : "View details ↓"}</button>
      {exp && (
        <div className="pexp">
          {p.reflection && <div className="pref"><span className="pdl">Reflection</span><p>{p.reflection}</p></div>}
          {p.mentor_feedback && <div className="pment"><span className="pdl">Mentor Feedback</span><p>{p.mentor_feedback}</p></div>}
          {p.tools_used?.length > 0 && (
            <div><span className="pdl">Tools Used</span><div className="ptchips">{p.tools_used.map(t => <span key={t} className="ptch">{t}</span>)}</div></div>
          )}
        </div>
      )}
      <div className="pdate">{p.completion_date}</div>
    </div>
  );
}

function Projects({ d }) {
  const { ref, visible } = useAnimateIn();
  const projs = d.projects || [];
  if (!projs.length) return null;
  return (
    <section id="projects" className="sec projsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Work</p>
        <h2 className="stitle">Project Showcase</h2>
        <p className="ssub">Hands-on projects that blend curiosity with real-world impact.</p>
        <div className="div" />
        <div className="pgrid">{projs.map((p, i) => <ProjectCard key={p.id} p={p} i={i} visible={visible} />)}</div>
      </div>
    </section>
  );
}

/* ============================================================
   SPORTS
   ============================================================ */
const LCOLS = { District: "#1a4731", State: "#c9a84c", School: "#6b6b6b" };
const SICONS = { Chess: "♟", "Table Tennis": "🏓" };

function Sports({ d }) {
  const { ref, visible } = useAnimateIn();
  const sp = d.sports || [];
  if (!sp.length) return null;
  return (
    <section id="sports" className="sec sptsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Athletics</p>
        <h2 className="stitle">Sports & Achievements</h2>
        <div className="div" />
        <div className="sptgrid">
          {sp.map((s, si) => (
            <div key={s.sport_name} className={`sptc ai d${si + 1} ${visible ? "vis" : ""}`}>
              <div className="spttop">
                <div className="sptiw">{SICONS[s.sport_name] || "🏅"}</div>
                <div>
                  <div className="sptn">{s.sport_name}</div>
                  <span className="badge badgeg">{s.role}</span>
                </div>
              </div>
              <div className="sptachs">
                {(s.achievements || []).map(a => (
                  <div key={a.title} className="sptach">
                    <div className="sptmed" style={{ background: LCOLS[a.level] || "#6b6b6b" }}>🏆</div>
                    <div className="sptai">
                      <strong>{a.title}</strong>
                      <div className="sptam">
                        <span className="badge">{a.level}</span>
                        <span className="spty">{a.year}</span>
                      </div>
                      {a.impact && <p className="sptii">{a.impact}</p>}
                    </div>
                  </div>
                ))}
              </div>
              {s.skills_gained?.length > 0 && (
                <div className="sptsk">
                  <span className="sptsklbl">Skills Gained</span>
                  <div className="sptskch">{s.skills_gained.map(sk => <span key={sk} className="sptsktg">{sk}</span>)}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ACTIVITIES
   ============================================================ */
const CICONS = { Debating: "🎤", Arts: "🎨", Music: "🎵" };

function Activities({ d }) {
  const { ref, visible } = useAnimateIn();
  const ec = d.extra_curriculars || [];
  if (!ec.length) return null;
  return (
    <section id="activities" className="sec exsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Beyond Academics</p>
        <h2 className="stitle">Extra-Curricular Activities</h2>
        <div className="div" />
        <div className="exgrid">
          {ec.map((e, i) => (
            <div key={e.activity} className={`exc ai d${Math.min(i + 1, 5)} ${visible ? "vis" : ""}`}>
              <div className="exci">{CICONS[e.category] || "⭐"}</div>
              <div className="excat">{e.category}</div>
              <h3 className="exact">{e.activity}</h3>
              <span className="badge">{e.role}</span>
              {e.achievements?.length > 0 && (
                <ul className="exachs">{e.achievements.map(a => <li key={a}>{a}</li>)}</ul>
              )}
              {e.reflection && <p className="exref">{e.reflection}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LEADERSHIP
   ============================================================ */
function Leadership({ d }) {
  const { ref, visible } = useAnimateIn();
  const lr = d.leadership_and_responsibility || [];
  if (!lr.length) return null;
  return (
    <section id="leadership" className="sec leadsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Responsibility</p>
        <h2 className="stitle">Leadership & Responsibility</h2>
        <div className="div" />
        <div className="leadlist">
          {lr.map((l, i) => (
            <div key={l.title} className={`leaditem ai d${Math.min(i + 1, 4)} ${visible ? "vis" : ""}`}>
              <div className="leadnum">{String(i + 1).padStart(2, "0")}</div>
              <div className="leadc">
                <div className="leadhdr">
                  <h3 className="leadt">{l.title}</h3>
                  <span className="badge">{l.grade}</span>
                </div>
                <ul className="leadresp">{(l.responsibilities || []).map(r => <li key={r}>{r}</li>)}</ul>
                {l.impact && <div className="leadimp"><span className="leadimpi">↑</span> {l.impact}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CERTIFICATIONS
   ============================================================ */
function Certifications({ d }) {
  const { ref, visible } = useAnimateIn();
  const certs = d.certifications || [];
  if (!certs.length) return null;
  return (
    <section className="sec certsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Credentials</p>
        <h2 className="stitle">Certifications</h2>
        <div className="div" />
        <div className="certgrid">
          {certs.map((c, i) => (
            <div key={c.title} className={`certc ai d${Math.min(i + 1, 5)} ${visible ? "vis" : ""}`}>
              <span className="certicon">🎓</span>
              <div className="certinf">
                <div className="certt">{c.title}</div>
                <div className="certm">
                  <span className="certp">{c.platform}</span>
                  <span className="certy">{c.year}</span>
                </div>
              </div>
              <div className="certvb">✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS
   ============================================================ */
const PLVL = { Fluent: 95, Advanced: 80, Intermediate: 60, Basic: 35 };

function Skills({ d }) {
  const { ref, visible } = useAnimateIn();
  const sk = d.job_ready_skills;
  if (!sk) return null;
  return (
    <section id="skills" className="sec skillsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Capabilities</p>
        <h2 className="stitle">Skills & Languages</h2>
        <div className="div" />
        <div className="skilllay">
          <div className={`skillblk ai ${visible ? "vis" : ""}`}>
            <h3 className="skillbt">Technical Skills</h3>
            <div className="techch">{(sk.technical || []).map(t => <span key={t} className="techtg">{t}</span>)}</div>
          </div>
          <div className={`skillblk ai d2 ${visible ? "vis" : ""}`}>
            <h3 className="skillbt">Soft Skills</h3>
            <div className="softlist">
              {(sk.soft_skills || []).map((s, i) => (
                <div key={s} className="softitem">
                  <span className="softn">{s}</span>
                  <div className="ptk" style={{ width: "110px" }}>
                    <div className="pfl" style={{ width: visible ? `${88 - i * 4}%` : "0%", transitionDelay: `${i * .12}s` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`skillblk ai d3 ${visible ? "vis" : ""}`}>
            <h3 className="skillbt">Languages</h3>
            <div className="langs">
              {(sk.languages || []).map(l => (
                <div key={l.language} className="langitem">
                  <div className="langinf">
                    <span className="langn">{l.language}</span>
                    <span className="langl">{l.proficiency}</span>
                  </div>
                  <div className="ptk">
                    <div className="pfl" style={{ width: visible ? `${PLVL[l.proficiency] || 50}%` : "0%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   IMPACT
   ============================================================ */
function Impact({ d }) {
  const { ref, visible } = useAnimateIn();
  const ip = d.impact_portfolio || [];
  if (!ip.length) return null;
  return (
    <section id="impact" className="sec impsec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Community</p>
        <h2 className="stitle">Impact Portfolio</h2>
        <div className="div" />
        <div className="impgrid">
          {ip.map((item, i) => (
            <div key={item.title} className={`impc ai d${Math.min(i + 1, 4)} ${visible ? "vis" : ""}`}>
              <div className="impcy">{item.year}</div>
              <h3 className="impct">{item.title}</h3>
              <p className="impcd">{item.description}</p>
              <div className="impcm">{(item.impact_metrics || []).map(m => <span key={m} className="imcpill">{m}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   VERIFICATION
   ============================================================ */
function Verification({ d }) {
  const { ref, visible } = useAnimateIn();
  const v = d.verification;
  if (!v) return null;
  const badges = [
    { icon: "🏫", label: "School Verified", status: v.school_verified ? "Confirmed" : "Pending", ok: v.school_verified },
    { icon: "👨‍👩‍👦", label: "Parent Verified", status: v.parent_verified ? "Confirmed" : "Pending", ok: v.parent_verified },
    { icon: "📄", label: "Certificates Uploaded", status: v.certificates_uploaded ? "Uploaded" : "Pending", ok: v.certificates_uploaded },
  ];
  return (
    <section id="verify" className="sec verisec">
      <div className="wrap" ref={ref}>
        <p className="slabel">Trust</p>
        <h2 className="stitle">Verified & Trusted</h2>
        <div className="div" />
        <div className="verilay">
          <div className={`veribadgs ai ${visible ? "vis" : ""}`}>
            {badges.map(b => (
              <div key={b.label} className={`vbc ${b.ok ? "ok" : ""}`}>
                <div className="vbico">{b.icon}</div>
                <div><div className="vblbl">{b.label}</div><div className="vbst">{b.status}</div></div>
                {b.ok && <div className="vchk">✓</div>}
              </div>
            ))}
          </div>
          <div className={`vby ai d2 ${visible ? "vis" : ""}`}>
            <h3 className="vbyt">Endorsed By</h3>
            {(v.verified_by || []).map(vb => (
              <div key={vb.name} className="vp">
                <div className="vpav">{vb.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</div>
                <div className="vpinf">
                  <strong>{vb.name}</strong>
                  <span>{vb.role}</span>
                  {vb.verification_note && <p>"{vb.verification_note}"</p>}
                </div>
              </div>
            ))}
            {v.last_verified_date && (
              <p className="verid">Last verified: {new Date(v.last_verified_date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ d }) {
  const { student_profile: sp, digital_presence: dp } = d;
  const links = [
    dp?.portfolio_url && { href: dp.portfolio_url, label: "🌐 Portfolio" },
    dp?.linkedin && { href: dp.linkedin, label: "💼 LinkedIn" },
    dp?.github && { href: dp.github, label: "💻 GitHub" },
  ].filter(Boolean);
  return (
    <footer className="pfoot">
      <div className="wrap">
        <div className="ftin">
          <div><span className="fbn">{sp?.full_name}</span><span className="fbs">{sp?.school_name} · {sp?.board}</span></div>
          <div className="flinks">
            {links.length > 0
              ? links.map(l => <a key={l.href} href={l.href} className="flnk" target="_blank" rel="noreferrer">{l.label}</a>)
              : <span className="fnolnk">Social profiles coming soon</span>}
          </div>
          <p className="fcopy">© {new Date().getFullYear()} Student Portfolio · Built with pride</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */
export default function PortfolioApp({ data }) {
  const [dark, setDark] = useState(false);
  const d = data || STUDENT;

  return (
    <>
      <style>{CSS}</style>
      <div className={`pr ${dark ? "dark" : ""}`}>
        <Nav />
        <Hero d={d} dark={dark} onToggle={() => setDark(x => !x)} />
        <Journey d={d} />
        <Academics d={d} />
        <Projects d={d} />
        <Sports d={d} />
        <Activities d={d} />
        <Leadership d={d} />
        <Certifications d={d} />
        <Skills d={d} />
        <Impact d={d} />
        <Verification d={d} />
        <Footer d={d} />
      </div>
    </>
  );
}
