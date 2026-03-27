import { useEffect, useState } from "react";
import usePortfolioData from "../../data/portfolioData";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const { hero } = usePortfolioData();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav>
      <div className="nav-logo">{`${hero.name && hero.name.charAt(0)}${hero.highlight && hero.highlight.charAt(0)}`}</div>

      <div className="nav-right">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="toggle-thumb">{theme === "dark" ? "🌙" : "☀️"}</div>
        </button>
      </div>
    </nav>
  );
}
