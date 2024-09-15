type NavLinkProps = { number?: number; title: string; onClick?: any };

export default function NavLink({ number, title, onClick }: NavLinkProps) {
  return (
    <a href={`#${title.toLowerCase()}`} className="nav-link" onClick={onClick}>
      {number && (
        <>
          <p>0{number}</p>.{" "}
        </>
      )}
      {title}
    </a>
  );
}
