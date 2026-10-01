import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img
          src="src\assets\logo.png"
          alt="Digital Project"
          width={72}
          height={43}
        />
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end className="link">
          MAIN
        </NavLink>
        <NavLink to="/galeria" className="link">
          GALLERY
        </NavLink>
        <NavLink to="/projetos" className="link">
          PROJECTS
        </NavLink>
        <NavLink to="/certificacoes" className="link">
          CERTIFICATIONS
        </NavLink>
        <NavLink to="/contato" className="link">
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
