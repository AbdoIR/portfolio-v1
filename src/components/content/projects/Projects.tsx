import ContentHeader from "../ContentHeader";
import Project from "./Project";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript, BiLogoHtml5 } from "react-icons/bi";
import { motion } from "framer-motion";
import { showUpContainer, showUpContainerFast } from "utils/motions";
const testImg = process.env.PUBLIC_URL + "/assets/images/thumbnail.png";

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <ContentHeader number={3} title="Projects" />
      <motion.div
        variants={showUpContainerFast}
        initial={"hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        className="projects-container"
      >
        <Project
          url="https://google.com"
          name="Test name"
          description="A lorem ipsum that lorem ipsum"
          thumbnail={testImg}
          github="https://github.com"
        >
          <FaReact color="#61DBFB" />
          <SiRedux color="#774cbc" />
          <BiLogoTypescript color="#3178c6" />
          <BiLogoJavascript color="#F0DB4F" />
          <BiLogoHtml5 color="#F06529" />
        </Project>
        <Project
          url="https://google.com"
          name="Test name"
          description="A lorem ipsum that lorem ipsum"
          thumbnail={testImg}
          github="https://github.com"
        >
          <FaReact color="#61DBFB" />
          <SiRedux color="#774cbc" />
          <BiLogoTypescript color="#3178c6" />
          <BiLogoJavascript color="#F0DB4F" />
          <BiLogoHtml5 color="#F06529" />
        </Project>
        <Project
          url="https://google.com"
          name="Test name"
          description="A lorem ipsum that lorem ipsum"
          thumbnail={testImg}
          github="https://github.com"
        >
          <FaReact color="#61DBFB" />
          <SiRedux color="#774cbc" />
          <BiLogoTypescript color="#3178c6" />
          <BiLogoJavascript color="#F0DB4F" />
          <BiLogoHtml5 color="#F06529" />
        </Project>
        <Project
          url="https://google.com"
          name="Test name"
          description="A lorem ipsum that lorem ipsum"
          thumbnail={testImg}
          github="https://github.com"
        >
          <FaReact color="#61DBFB" />
          <SiRedux color="#774cbc" />
          <BiLogoTypescript color="#3178c6" />
          <BiLogoJavascript color="#F0DB4F" />
          <BiLogoHtml5 color="#F06529" />
        </Project>
        <Project
          url="https://google.com"
          name="Test name"
          description="A lorem ipsum that lorem ipsum"
          thumbnail={testImg}
          github="https://github.com"
        >
          <FaReact color="#61DBFB" />
          <SiRedux color="#774cbc" />
          <BiLogoTypescript color="#3178c6" />
          <BiLogoJavascript color="#F0DB4F" />
          <BiLogoHtml5 color="#F06529" />
        </Project>
      </motion.div>
    </div>
  );
}
