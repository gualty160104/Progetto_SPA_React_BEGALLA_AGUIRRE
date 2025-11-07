import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">NETFLIX LOGO</div>

        <nav className="header-nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/serie-tv" className="nav-link">
            Serie TV
          </NavLink>
          <NavLink to="/movies" className="nav-link">
            Film
          </NavLink>
          <NavLink to="/search" className="nav-link">
            Ricerca
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
