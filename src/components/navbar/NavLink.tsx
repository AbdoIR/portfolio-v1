type NavLinkProps = { number: number; title: string };

export default function NavLink({ number, title }: NavLinkProps) {
  return (
    <a href={`/${title.toLowerCase()}`} className="nav-link">
      <p>0{number}</p>. {title}
    </a>
  );
}
