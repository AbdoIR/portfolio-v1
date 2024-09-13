import { RxDoubleArrowDown } from "react-icons/rx";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-intro">Hi, my name is</div>
      <div className="hero-headers">
        <p>Chakir Abderrahmane</p>Full-Stack Developer
      </div>
      <div className="hero-description">
        I'm a passionate self-taught Full-Stack Developer based in Morocco, constantly expanding my knowledge
        in software engineering. I'm dedicated to building visually appealing and user-centric websites, and
        I'm eager to explore new opportunities to further enhance my skills.
      </div>
      <a href="#" className="primary-btn">
        Get my resume
      </a>
      <a href="#" className="scroll-arrows">
        <RxDoubleArrowDown />
      </a>
    </div>
  );
}
