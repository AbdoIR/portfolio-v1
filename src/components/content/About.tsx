import ContentHeader from "./ContentHeader";
import { motion } from "framer-motion";
import { showUpContainer, showUpItem } from "utils/motions";

export default function About() {
  return (
    <div className="about-section" id="about">
      <ContentHeader number={1} title="About Me" />
      <motion.div
        variants={showUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="about-content"
      >
        <motion.p variants={showUpItem}>
          Hello! I'm <span>Chakir Abderrahmane</span>, a passionate self-taught Full-Stack Developer based in
          Morocco. My journey into programming began in <span>2020</span> when I created my first project—a
          simple to-do app using <span>HTML</span> and <span>CSS</span>.
        </motion.p>
        <motion.p variants={showUpItem}>
          What started as a hobby quickly turned into a deep fascination with <span>web development</span> and
          the endless creative possibilities it offers. Over the years, I have honed my skills and expanded my
          expertise in building visually appealing, user-centric websites. I love transforming ideas into
          functional, interactive applications that live on the internet. Whether it's
          <span> crafting sleek frontends</span> or <span>developing powerful backend systems</span>, I'm
          committed to delivering high-quality work that solves real-world problems.
        </motion.p>
        <motion.p variants={showUpItem}>
          I'm constantly exploring new technologies and am eager to take on new challenges to further enhance
          my skills.
        </motion.p>
      </motion.div>
    </div>
  );
}
