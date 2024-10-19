import { motion } from "framer-motion";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FaBootstrap, FaDatabase, FaJira, FaLaravel, FaPhp, FaReact, FaSass } from "react-icons/fa";
import { SiRedux, SiUml } from "react-icons/si";

import ContentHeader from "../ContentHeader";
import SkillsDiv from "./SkillsDiv";
import { skillsContent } from "utils/motions";

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <ContentHeader number={2} title="Skills" />
      <motion.div
        variants={skillsContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="skills-content"
      >
        <SkillsDiv title="Front-End">
          <FaReact color="#61DBFB" name="React" />
          <SiRedux color="#774cbc" name="Redux" />
          <BiLogoTypescript color="#3178c6" name="TypeScript" />
          <BiLogoJavascript color="#F0DB4F" name="JavaScript" />
          <BiLogoHtml5 color="#F06529" name="HTML5" />
        </SkillsDiv>
        <SkillsDiv title="Back-End">
          <FaLaravel color="#fd5542" name="Laravel" />
          <BiLogoNodejs color="#58a149" name="Node.js" />
          <FaPhp color="#556096" name="PHP" />
          <BiLogoMongodb color="#11aa50" name="MongoDB" />
          <DiMysql color="#007089" name="MySQL" />
          <FaDatabase size={24} color="#3178c6" name="SQL" />
        </SkillsDiv>
        <SkillsDiv title="Styling">
          <BiLogoCss3 color="#2965f1" name="CSS3" />
          <FaSass color="#cd5d96" name="SASS" />
          <FaBootstrap color="#7d57b5" name="Bootstrap" />
          <BiLogoTailwindCss color="#1fb9bb" name="Tailwind CSS" />
        </SkillsDiv>
        <SkillsDiv title="Miscellaneous">
          <BiLogoGit color="#ef5132" name="Git" />
          <FaJira color="#0052cc" name="Jira" />
          <SiUml color="#F0DB4F" name="UML" />
        </SkillsDiv>
      </motion.div>
    </div>
  );
}
