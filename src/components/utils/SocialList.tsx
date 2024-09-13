import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import { showUpContainerFast, showUpItem } from "utils/motions";
import SocialLayout from "./SocialLayout";

export default function SocialList() {
  const socialList = [
    { icon: FaGithub, url: "https://github.com/AbdoIR" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/chakir-abderrahmane-31100b276/" },
    { icon: VscMail, url: "mailto:abdoir192@gmail.com" },
  ];

  return (
    <motion.div variants={showUpContainerFast} initial="hidden" animate="visible" className="social-list">
      {socialList.map((s, i) => (
        <SocialLayout key={i} url={s.url} Icon={s.icon} />
      ))}
      <motion.div variants={showUpItem} className="social-list-bar"></motion.div>
    </motion.div>
  );
}
