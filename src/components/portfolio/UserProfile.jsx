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
      {data.hero && <Navbar hero={data.hero} />}
      {data.hero && <Hero hero={data.hero} />}
      {data.about && <About about={data.about} />}
      {data.skills && <Skills skills={data.skills} />}
      {data.projects && <Projects projects={data.projects} />}
      {data.contact && <Contact contact={data.contact} />}
      {data.footer && <Footer footer={data.footer} />}
    </>
  );
}
