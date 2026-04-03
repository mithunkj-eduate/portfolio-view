import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import "./styles.css";
import Hero from "./Hero";
import usePortfolioData from "../../data/portfolioData";
import NotFound from "../../NotFound";

export default function UserProfile() {
  const data = usePortfolioData();
  if (!data) return <NotFound />;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
