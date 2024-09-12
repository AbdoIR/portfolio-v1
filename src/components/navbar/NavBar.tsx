import "styles/navbar.scss";
import NavLink from "./NavLink";

export default function NavBar() {
  const navbarLinks = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav>
      <a href="" className="nav-logo">
        Chakir Abderrahmane
      </a>
      <div className="nav-links">
        {navbarLinks.map((l, i) => (
          <NavLink number={i + 1} title={l} />
        ))}

        <a href="#" className="primary-btn">
          Resume
        </a>
      </div>
    </nav>
  );
}
