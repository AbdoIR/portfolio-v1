import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { showUpItem } from "utils/motions";

type SocialProps = { url: string; Icon: IconType };

export default function SocialLayout({ url, Icon }: SocialProps) {
  return (
    <motion.a variants={showUpItem} href={url} className="social-layout">
      <Icon />
    </motion.a>
  );
}
