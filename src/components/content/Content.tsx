import "styles/content.scss";
import Hero from "./Hero";
import About from "./about/About";

export default function Content() {
  return (
    <div className="content-container">
      <Hero />
      <About />
    </div>
  );
}
