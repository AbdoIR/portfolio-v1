import { motion } from "framer-motion";
import { contentHeader } from "utils/motions";

type ContentHeaderProps = {
  number: number;
  title: string;
};

export default function ContentHeader({ number, title }: ContentHeaderProps) {
  return (
    <motion.div variants={contentHeader} initial="hidden" whileInView="visible" className="ch-container">
      <div className="content-header">
        <span>0{number}. </span>
        {title}
      </div>
      <div className="horizental-line"></div>
    </motion.div>
  );
}
