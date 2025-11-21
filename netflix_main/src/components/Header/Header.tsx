import { NavLink, useNavigate } from "react-router-dom";
import Netflix from "../../assets/netflix.png";
import SearchBar from "../SearchBar/searchbar";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black border-b border-[#ddd] shadow-sm z-[1000]">
      <div className="max-w-[1200px] mx-auto py-[14px] px-5 flex justify-between items-center gap-5">
        <div className="w-[30px]">
          <img src={Netflix} alt="Netflix Logo" className="w-full" />
        </div>

        <div className="flex items-center gap-5">
          <nav className="flex gap-5">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `no-underline text-white text-base py-1.5 px-2.5 rounded transition-colors duration-200 hover:bg-red-600 hover:text-white ${
                isActive ? 'bg-red-600 text-white' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/serie-tv" 
            className={({ isActive }) => 
              `no-underline text-white text-base py-1.5 px-2.5 rounded transition-colors duration-200 hover:bg-red-600 hover:text-white ${
                isActive ? 'bg-red-600 text-white' : ''
              }`
            }
          >
            Serie TV
          </NavLink>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => 
              `no-underline text-white text-base py-1.5 px-2.5 rounded transition-colors duration-200 hover:bg-red-600 hover:text-white ${
                isActive ? 'bg-red-600 text-white' : ''
              }`
            }
          >
            Film
          </NavLink>
        </nav>

        <div className="w-[270px]">
          <SearchBar onSearch={handleSearch} />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
