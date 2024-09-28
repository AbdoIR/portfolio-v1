import React from "react";
import { motion } from "framer-motion";
import { divSkills } from "utils/motions";

export default function Skill({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={divSkills} className="div-skill">
      {children}
    </motion.div>
  );
}
