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
import { FaBootstrap, FaJira, FaLaravel, FaPhp, FaReact, FaSass } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import ContentHeader from "../ContentHeader";
import SkillsDiv from "./SkillsDiv";

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <ContentHeader number={2} title="Skills" />
      <div className="skills-content">
        <SkillsDiv title="Front-End">
          <FaReact color="#61DBFB" />
          <SiRedux color="#774cbc" />
          <BiLogoTypescript color="#3178c6" />
          <BiLogoJavascript color="#F0DB4F" />
          <BiLogoHtml5 color="#F06529" />
        </SkillsDiv>
        <SkillsDiv title="Back-End">
          <FaLaravel color="#fd5542" />
          <BiLogoNodejs color="#58a149" />
          <FaPhp color="#556096" />
          <BiLogoMongodb color="#11aa50" />
          <DiMysql color="#00566a" />
        </SkillsDiv>
        <SkillsDiv title="Styling">
          <BiLogoCss3 color="#2965f1" />
          <FaSass color="#cd5d96" />
          <FaBootstrap color="#7d57b5" />
          <BiLogoTailwindCss color="#1fb9bb" />
        </SkillsDiv>
        <SkillsDiv title="Miscellaneous">
          <BiLogoGit color="#ef5132" />
          <FaJira color="#0052cc" />
        </SkillsDiv>
      </div>
    </div>
  );
}
