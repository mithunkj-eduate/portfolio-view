import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer"
import "./styles.css";
import Hero from "./Hero";

export default function UserProfile() {
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