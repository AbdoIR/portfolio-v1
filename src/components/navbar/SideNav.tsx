import { navbarLinks } from "./NavBar";
import NavLink from "./NavLink";
import { IoMdClose } from "react-icons/io";

type SideNavProps = { visible: true | false; setShowSidenav: any };

export default function SideNav({ visible, setShowSidenav }: SideNavProps) {
  const handleExit = () => {
    const burgerInput = document.querySelector<HTMLInputElement>("input#burger[type='checkbox']") ?? null;
    if (burgerInput) {
      burgerInput.checked = false;
    }

    setShowSidenav(false);
  };

  return (
    <>
      {visible && <div className="sidenav-blur" onClick={handleExit}></div>}
      <div className={`sidenav${visible ? " active" : ""}`}>
        <div className="sidenav-control">
          <IoMdClose className="sidenav-close" onClick={handleExit} />
        </div>
        <div className="sidenav-links">
          {navbarLinks.map((l, i) => (
            <NavLink key={i} title={l} onClick={handleExit} />
          ))}

          <a href="assets/files/cv_eng.pdf" target="_blank" className="primary-btn">
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
