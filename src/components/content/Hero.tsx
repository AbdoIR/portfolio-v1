import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import { showUpContainer, showUpItem } from "utils/motions";
import { TextEffect } from "utils/TextEffect";

export default function Hero() {
  return (
    <motion.div variants={showUpContainer} initial="hidden" animate="visible" className="hero">
      <motion.div variants={showUpItem} className="hero-intro">
        Hi, my name is
      </motion.div>
      <div className="hero-headers">
        <motion.p variants={showUpItem}>Chakir Abderrahmane</motion.p>
        <motion.span variants={showUpItem}>Full-Stack Developer</motion.span>
      </div>
      <TextEffect preset="blur" delay={0.9} className="hero-description">
        I'm a passionate self-taught Full-Stack Developer based in Morocco, constantly expanding my knowledge
        in software engineering. I'm dedicated to building visually appealing and user-centric websites, and
        I'm eager to explore new opportunities to further enhance my skills.
      </TextEffect>
      <motion.div variants={showUpItem} className="hero-resume">
        <a href="assets/files/cv_eng.pdf" target="_blank" className="primary-btn">
          Get my resume
        </a>
      </motion.div>
      <motion.a href="#about" className="scroll-arrows">
        <RxDoubleArrowDown />
      </motion.a>
    </motion.div>
  );
}
