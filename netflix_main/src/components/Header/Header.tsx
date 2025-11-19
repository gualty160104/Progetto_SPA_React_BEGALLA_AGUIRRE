import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Netflix from "../../assets/netflix.png";
import "./Header.css";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Passiamo la query direttamente nell'URL
    navigate(`/search?query=${encodeURIComponent(query)}`);
    setQuery("");
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="header-logo cursor-pointer" onClick={() => navigate("/")}>
          <img src={Netflix} alt="Netflix Logo" className="logo-image" />
        </div>

        {/* NAV + SEARCH WRAPPER */}
        <div className="nav-search-wrapper">
          {/* NAV */}
          <nav className="header-nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/serie-tv" className="nav-link">Serie TV</NavLink>
            <NavLink to="/movies" className="nav-link">Film</NavLink>
          </nav>

          {/* SEARCH BAR */}
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              placeholder="Cerca film o serie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
          </form>
        </div>

      </div>
    </header>
  );
};

export default Header; 