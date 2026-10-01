import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/assets/logo.png" alt="Digital Project" />
      </Link>
      <nav>
        <NavLink to="/" end>
          MAIN
        </NavLink>
        <NavLink to="/galeria">GALLERY</NavLink>
        <NavLink to="/projetos">PROJECTS</NavLink>
        <NavLink to="/certificacoes">CERTIFICATIONS</NavLink>
        <NavLink to="/contato">CONTACT</NavLink>
      </nav>
    </header>
  );
}

export default Header;
