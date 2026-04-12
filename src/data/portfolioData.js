const portfolioData = {
  hero: {
    name: "Mithun",
    highlight: "K J",
    subtitle: "Full Stack Developer · MERN · Golang · GraphQL",
    desc: `Building scalable, production-ready web applications with 3.5 years of experience.`,
    image: "/heroimage2.png",
    stats: [
      { value: "3.5+", label: "Years Experience" },
      { value: "10+", label: "Projects Shipped" },
      { value: "2", label: "Companies" },
    ],
  },

  projects: [
    {
      title: "Multi-Vendor Marketplace",
      desc: "Scalable platform...",
      link: "https://apisr.shareurinterest.com/",
      tech: ["React", "Node", "MongoDB"],
      // bg: "linear-gradient(135deg,#0f0f20,#161628)",
      image: "",
    },
    {
      title: "ShareMyInterest",
      desc: "Instagram clone...",
      link: "https://snap.shareurinterest.com/",
      tech: ["React", "Node"],
      // bg: "linear-gradient(135deg,#18101e,#1e1228)",
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
    {
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "AWS", "Vercel"],
    },
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

const portfolioData2 = {
  type: PortfolioType.DEFAULT,
  hero: {
    name: "Alex",
    highlight: "Sharma",
    subtitle: "Full Stack Developer · React · Node.js · TypeScript",
    desc: "Building scalable web applications with clean architecture and modern technologies.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "12+", label: "Projects Delivered" },
      { value: "6+", label: "Technologies Mastered" },
    ],
  },
  projects: [
    {
      title: "DevConnect Platform",
      desc: "A developer networking platform with real-time chat and project collaboration features.",
      link: "https://devconnect.app",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-Commerce Store",
      desc: "Full-featured online store with payment integration, admin dashboard, and order tracking.",
      link: "https://shopverse.app",
      tech: ["Next.js", "Node.js", "Stripe", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Task Management SaaS",
      desc: "Multi-user task management system with role-based access and real-time updates.",
      link: "https://taskflow.app",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Portfolio Builder",
      desc: "Dynamic portfolio generator allowing users to create and host personal websites.",
      link: "https://portify.app",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Apollo"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ],
  about: {
    desc: [
      "Full Stack Developer with strong experience in building modern, scalable web applications.",
      "Focused on performance, clean code, and delivering high-quality user experiences.",
    ],
    info: [
      { label: "Location", value: "Bengaluru, India" },
      { label: "Experience", value: "3+ Years" },
      { label: "Availability", value: "Open to Opportunities" },
    ],
    experience: [
      {
        company: "TechNova Solutions",
        role: "Full Stack Developer",
        period: "2023 - Present",
        tech: ["React", "Node.js", "TypeScript", "AWS"],
      },
      {
        company: "CodeCraft Labs",
        role: "Frontend Developer",
        period: "2021 - 2023",
        tech: ["React", "JavaScript", "Redux", "CSS"],
      },
    ],
  },
  skills: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
    },
    {
      title: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      title: "DevOps & Tools",
      items: ["Docker", "AWS", "Git", "CI/CD"],
    },
    {
      title: "Other",
      items: [
        "System Design",
        "API Integration",
        "Authentication",
        "Performance Optimization",
      ],
    },
  ],
  contact: {
    title: "Let's Work Together",
    desc: "Available for freelance work and full-time opportunities. Reach out to discuss your project.",
    email: "alex.sharma.dev@gmail.com",
    phone: "+91 98765 43210",
    social: [
      { name: "GitHub", link: "https://github.com/alex-sharma" },
      { name: "LinkedIn", link: "https://linkedin.com/in/alex-sharma" },
    ],
  },
  footer: {
    text: "© 2026 Alex Sharma. All rights reserved.",
    links: [
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
    ],
  },
};

const portfolioData3 = {
  type: PortfolioType.BUBBLE,
  hero: {
    name: "Priya",
    highlight: "Design",
    subtitle: "UI/UX Designer · Figma · Webflow · Motion Design",
    desc: "Designing intuitive digital experiences with a strong focus on usability, aesthetics, and user-centered design.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "20+", label: "Projects Completed" },
      { value: "8+", label: "Design Tools Mastered" },
    ],
  },
  projects: [
    {
      title: "Fintech Mobile App Design",
      desc: "Modern banking app with clean UI, intuitive flows, and accessibility-focused design system.",
      link: "https://dribbble.com/priya-fintech",
      tech: ["Figma", "Prototyping", "UX Research", "Design System"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "E-Commerce UX Revamp",
      desc: "Redesigned shopping experience improving conversion rates with streamlined checkout flows.",
      link: "https://behance.net/priya-ecommerce",
      tech: ["Figma", "User Testing", "Wireframing", "Interaction Design"],
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SaaS Dashboard UI Kit",
      desc: "Reusable UI kit for analytics dashboards with scalable components and responsive layouts.",
      link: "https://dribbble.com/priya-dashboard",
      tech: ["Figma", "Design Systems", "Auto Layout", "Component Library"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Portfolio Website Design",
      desc: "High-converting personal portfolio with motion interactions and Webflow implementation.",
      link: "https://priyadesign.webflow.io",
      tech: ["Webflow", "Motion Design", "Responsive Design", "Branding"],
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
  ],
  about: {
    desc: [
      "UI/UX Designer with a passion for crafting meaningful digital experiences through research-driven design.",
      "Experienced in creating scalable design systems, prototypes, and visually engaging interfaces.",
    ],
    info: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Experience", value: "4+ Years" },
      { label: "Availability", value: "Available for Freelance & Full-time" },
    ],
    experience: [
      {
        company: "PixelCraft Studio",
        role: "Senior UI/UX Designer",
        period: "2023 - Present",
        tech: ["Figma", "Webflow", "UX Research", "Design Systems"],
      },
      {
        company: "Creative Minds Agency",
        role: "UI Designer",
        period: "2021 - 2023",
        tech: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
      },
    ],
  },
  skills: [
    {
      title: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "Webflow"],
    },
    {
      title: "UX Skills",
      items: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      title: "UI Skills",
      items: [
        "Design Systems",
        "Typography",
        "Color Theory",
        "Responsive Design",
      ],
    },
    {
      title: "Motion & Interaction",
      items: [
        "Microinteractions",
        "Animation",
        "After Effects",
        "Framer Motion",
      ],
    },
    {
      title: "Other",
      items: ["Branding", "Accessibility", "Collaboration", "Agile Workflow"],
    },
  ],
  contact: {
    title: "Let's Design Together",
    desc: "Open to freelance projects and collaborations to create impactful digital experiences.",
    email: "priya.design@gmail.com",
    phone: "+91 91234 56789",
    social: [
      {
        name: "Dribbble",
        link: "https://dribbble.com/priya-design",
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com/in/priya-design",
      },
    ],
  },
  footer: {
    text: "© 2026 Priya Design. All rights reserved.",
    links: [
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
    ],
  },
};

const portfolioData4 = {
  type: PortfolioType.CURSOR,
  hero: {
    name: "Rahul",
    highlight: "Builds",
    subtitle: "Product Manager · Strategy · Agile · Go-To-Market",
    desc: "Driving product vision and execution by aligning business goals with user needs and data-driven insights.",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "15+", label: "Products Launched" },
      { value: "10+", label: "Cross-Functional Teams Led" },
    ],
  },
  projects: [
    {
      title: "SaaS CRM Platform",
      desc: "Led product strategy and roadmap for a scalable CRM platform used by SMBs to manage customer lifecycles.",
      link: "https://rahulcrm.app",
      tech: ["Product Strategy", "Agile", "User Research", "Jira"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fintech Lending App",
      desc: "Defined product vision and GTM strategy for a digital lending platform improving loan approval speed.",
      link: "https://rahulfintech.app",
      tech: [
        "GTM Strategy",
        "Analytics",
        "A/B Testing",
        "Stakeholder Management",
      ],
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-Commerce Growth Initiative",
      desc: "Optimized checkout funnel and implemented growth experiments to increase conversion rates.",
      link: "https://rahulecom.app",
      tech: [
        "Growth Strategy",
        "Funnel Analysis",
        "Experimentation",
        "Mixpanel",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mobile App Redesign",
      desc: "Collaborated with design and engineering teams to revamp UX, improving user engagement metrics.",
      link: "https://rahulmobile.app",
      tech: ["UX Strategy", "Agile", "User Feedback", "Roadmapping"],
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
  ],
  about: {
    desc: [
      "Product Manager with a strong track record of delivering user-centric digital products across industries.",
      "Experienced in bridging business, design, and engineering to launch impactful solutions.",
    ],
    info: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Experience", value: "5+ Years" },
      { label: "Availability", value: "Open to Leadership Roles" },
    ],
    experience: [
      {
        company: "NextGen Products",
        role: "Senior Product Manager",
        period: "2023 - Present",
        tech: [
          "Product Strategy",
          "Agile",
          "Analytics",
          "Stakeholder Management",
        ],
      },
      {
        company: "InnovateX Labs",
        role: "Product Manager",
        period: "2021 - 2023",
        tech: ["Roadmapping", "User Research", "Scrum", "A/B Testing"],
      },
    ],
  },
  skills: [
    {
      title: "Product Strategy",
      items: [
        "Roadmapping",
        "Vision Planning",
        "Market Research",
        "Competitive Analysis",
      ],
    },
    {
      title: "Execution",
      items: ["Agile", "Scrum", "Sprint Planning", "Backlog Grooming"],
    },
    {
      title: "Analytics",
      items: [
        "Data Analysis",
        "A/B Testing",
        "Funnel Optimization",
        "Mixpanel",
      ],
    },
    {
      title: "Collaboration",
      items: [
        "Stakeholder Management",
        "Cross-functional Leadership",
        "Communication",
        "Workshops",
      ],
    },
    {
      title: "Go-To-Market",
      items: [
        "GTM Strategy",
        "Product Launch",
        "Positioning",
        "Growth Strategy",
      ],
    },
  ],
  contact: {
    title: "Let’s Build Great Products",
    desc: "Open to collaborating on impactful product ideas and leadership opportunities.",
    email: "[rahul.builds@gmail.com](mailto:rahul.builds@gmail.com)",
    phone: "+91 98765 12345",
    social: [
      {
        name: "LinkedIn",
        link: "https://linkedin.com/in/rahul-builds",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/rahulbuilds",
      },
    ],
  },
  footer: {
    text: "© 2026 Rahul Builds. All rights reserved.",
    links: [
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
    ],
  },
};

const portfolioData5 = {
  type: PortfolioType.DEVELOPER,
  hero: {
    name: "Sara",
    highlight: "Codes",
    subtitle: "ML Engineer · Python · TensorFlow · LLMs",
    desc: "Building intelligent systems using machine learning and large language models for real-world impact.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "10+", label: "ML Projects Deployed" },
      { value: "5+", label: "Production Models" },
    ],
  },
  projects: [
    {
      title: "AI Chat Assistant",
      desc: "Built an LLM-powered chatbot for customer support with context-aware responses and memory.",
      link: "https://sarachat.ai",
      tech: ["Python", "LLMs", "LangChain", "OpenAI API"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Image Classification Pipeline",
      desc: "Developed a scalable deep learning pipeline for multi-class image classification with high accuracy.",
      link: "https://sara-vision.ai",
      tech: ["TensorFlow", "CNN", "Python", "Docker"],
      image:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Recommendation System",
      desc: "Designed a personalized recommendation engine using collaborative filtering and embeddings.",
      link: "https://sara-recommend.ai",
      tech: ["Python", "Scikit-learn", "Pandas", "ML Algorithms"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fraud Detection Model",
      desc: "Implemented a real-time fraud detection system using anomaly detection and streaming data.",
      link: "https://sara-fraud.ai",
      tech: ["Python", "XGBoost", "Kafka", "Data Pipelines"],
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
  ],
  about: {
    desc: [
      "Machine Learning Engineer with expertise in building and deploying scalable AI systems.",
      "Focused on leveraging data and models to solve complex problems and drive business value.",
    ],
    info: [
      { label: "Location", value: "Bengaluru, India" },
      { label: "Experience", value: "4+ Years" },
      { label: "Availability", value: "Open to AI/ML Opportunities" },
    ],
    experience: [
      {
        company: "AI Labs India",
        role: "Senior ML Engineer",
        period: "2023 - Present",
        tech: ["Python", "TensorFlow", "LLMs", "MLOps"],
      },
      {
        company: "DataMind Solutions",
        role: "ML Engineer",
        period: "2021 - 2023",
        tech: ["Scikit-learn", "Pandas", "Model Deployment", "APIs"],
      },
    ],
  },
  skills: [
    {
      title: "Machine Learning",
      items: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Evaluation",
        "Feature Engineering",
      ],
    },
    {
      title: "Deep Learning",
      items: ["TensorFlow", "Keras", "CNN", "RNN"],
    },
    {
      title: "LLM & NLP",
      items: [
        "Large Language Models",
        "LangChain",
        "Prompt Engineering",
        "Text Processing",
      ],
    },
    {
      title: "Data & Tools",
      items: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      title: "MLOps & Deployment",
      items: ["Docker", "CI/CD", "Model Serving", "APIs"],
    },
  ],
  contact: {
    title: "Let’s Build Intelligent Systems",
    desc: "Open to collaborating on AI-driven products and machine learning innovations.",
    email: "sara.codes.ml@gmail.com",
    phone: "+91 99887 77665",
    social: [
      {
        name: "GitHub",
        link: "https://github.com/sara-codes",
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com/in/sara-codes",
      },
    ],
  },
  footer: {
    text: "© 2026 Sara Codes. All rights reserved.",
    links: [
      { name: "Privacy Policy", link: "/privacy" },
      { name: "Terms of Service", link: "/terms" },
    ],
  },
};

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/context";
import { payloadTypes } from "../context/reducer";
import { PortfolioType } from "../utly/constants";

function usePortfolioData() {
  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_BASE_URL;
  const { dispatch } = useContext(AppContext);

  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Example usage (e.g., in an API file or API call)

    const getUser = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/api/portfolio/${id}`);
        if (res && res.data) {
          setData({
            ...res.data.data,
            type: res.data.type ?? PortfolioType.DEFAULT,
          });

          dispatch({
            type: payloadTypes.SET_PORTFOLIO_TYPE,
            payload: {
              portfolioType: res.data.type,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (
      id !== "alex-sharma" ||
      id !== "priya-design" ||
      id !== "rahul-builds" ||
      id !== "sara-codes"
    ) {
      getUser();
    }
  }, [apiBaseUrl, id]);

  const result =
    id === "alex-sharma"
      ? portfolioData2
      : id === "priya-design"
        ? portfolioData3
        : id === "rahul-builds"
          ? portfolioData4
          : id === "sara-codes"
            ? portfolioData5
            : data;

  if (result) return result;
}

export default usePortfolioData;
