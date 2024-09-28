import { skillsDiv } from "utils/motions";
import Skill from "./Skill";
import { motion } from "framer-motion";

type SkillsDivProps = {
  title: string;
  children: React.ReactNode[];
};

export default function SkillsDiv({ title, children }: SkillsDivProps) {
  return (
    <motion.div variants={skillsDiv} className="skills-div">
      <div className="div-title">{title}</div>
      <div className="div-skills">
        {children.map((child, i) => (
          <Skill key={i}>{child}</Skill>
        ))}
      </div>
    </motion.div>
  );
}
