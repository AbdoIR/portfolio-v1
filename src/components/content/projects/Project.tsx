import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { showUpItem } from "utils/motions";

type ProjectProp = {
  url: string;
  name: string;
  description: string;
  thumbnail: string;
  github?: string;
  children?: React.ReactNode[];
};

export default function Project({ url, name, description, thumbnail, github, children }: ProjectProp) {
  return (
    <motion.div variants={showUpItem} className="project-div">
      <a href={url}>
        <img src={thumbnail} />
      </a>
      <div className="project-details">
        <div className="project-name-git">
          <a className="project-name" href={url}>
            {name}
          </a>
          {github && (
            <a href={github}>
              <FaGithub />
            </a>
          )}
        </div>
        <div className="project-description">{description}</div>
        <div className="project-skills">{children}</div>
      </div>
    </motion.div>
  );
}
