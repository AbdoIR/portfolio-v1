import "styles/navbar.scss";
import NavLink from "./NavLink";

export const navbarLinks = ["About", "Skills", "Projects", "Contact"];

export default function NavBar() {
  return (
    <nav>
      <a href="" className="nav-logo">
        Chakir Abderrahmane
      </a>
      <div className="nav-links">
        {navbarLinks.map((l, i) => (
          <NavLink key={i} number={i + 1} title={l} />
        ))}

        <a href="#" className="primary-btn">
          Resume
        </a>
      </div>
    </nav>
  );
}
