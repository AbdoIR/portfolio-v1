import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscMail } from "react-icons/vsc";
import SocialLayout from "./SocialLayout";

export default function SocialList() {
  const socialList = [
    { icon: FaGithub, url: "https://github.com/AbdoIR" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/chakir-abderrahmane-31100b276/" },
    { icon: VscMail, url: "mailto:abdoir192@gmail.com" },
  ];

  return (
    <div className="social-list">
      {socialList.map((s) => (
        <SocialLayout url={s.url} Icon={s.icon} />
      ))}
      <div className="social-list-bar"></div>
    </div>
  );
}
