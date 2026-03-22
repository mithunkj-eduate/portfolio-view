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
      bg: "linear-gradient(135deg,#0f0f20,#161628)",
    },
    {
      title: "ShareMyInterest",
      desc: "Instagram clone...",
      link: "https://snap.shareurinterest.com/",
      tech: ["React", "Node"],
      bg: "linear-gradient(135deg,#18101e,#1e1228)",
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function usePortfolioData() {
  const apiBaseUrl = import.meta.env.VITE_PRODUCTION_BASE_URL;

  const [data, setData] = useState(portfolioData);
  const { id } = useParams();

  useEffect(() => {
    // Example usage (e.g., in an API file or API call)

    const getUser = async () => {
      try {
        const res = await axios.get(`${apiBaseUrl}/api/portfolio/${id}`);
        if (res && res.data) setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [apiBaseUrl, id]);

  return data;
}

export default usePortfolioData;
