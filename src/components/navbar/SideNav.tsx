import { navbarLinks } from "./NavBar";
import NavLink from "./NavLink";

type SideNavProps = { visible: true | false };

export default function SideNav({ visible }: SideNavProps) {
  return (
    <div className={`sidenav${visible ? " active" : ""}`}>
      <div className="sidenav-links">
        {navbarLinks.map((l, i) => (
          <NavLink key={i} title={l} />
        ))}

        <a href="#" className="primary-btn">
          Resume
        </a>
      </div>
    </div>
  );
}
