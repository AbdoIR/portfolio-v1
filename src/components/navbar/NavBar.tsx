import { motion } from "framer-motion";
import "styles/navbar.scss";
import { showDownNav } from "utils/motions";
import NavLink from "./NavLink";

export const navbarLinks = ["About", "Skills", "Projects", "Contact"];

export default function NavBar() {
  return (
    <motion.nav variants={showDownNav} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
      <a href="" className="nav-logo">
        Chakir Abderrahmane
      </a>
      <div className="nav-links">
        {navbarLinks.map((l, i) => (
          <NavLink key={i} number={i + 1} title={l} />
        ))}

        <a href="assets/files/cv_eng.pdf" target="_blank" className="primary-btn">
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
