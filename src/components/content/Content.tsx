import "styles/content.scss";
import Hero from "./Hero";
import About from "./About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

export default function Content() {
  return (
    <div className="content-container">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
