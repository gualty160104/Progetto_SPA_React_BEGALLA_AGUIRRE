import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-[#f2f2f2] py-10 px-6">

      {/* Contenitore centrato, con allineamento verticale al centro */}
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center gap-16 mb-10 text-center">

        {/* Logo */}
        <div className="flex flex-col items-center min-w-[40px]">
          <Link to="/">
            <img
              src="../../src/assets/netflix.png"
              alt="Netflix Logo"
              className="w-10 h-auto"  
            />
          </Link>
        </div>

        {/* Serie TV */}
        <div className="flex flex-col items-center min-w-[120px]">
          <Link
            to="/serie-tv"
            className="text-[#d9d9d9] hover:text-red-600 no-underline"
          >
            <h4 className="text-base font-bold mb-2">Serie TV</h4>
          </Link>
        </div>

        {/* Film */}
        <div className="flex flex-col items-center min-w-[120px]">
          <Link
            to="/movies"
            className="text-[#d9d9d9] hover:text-red-600 no-underline"
          >
            <h4 className="text-base font-bold mb-2">Film</h4>
          </Link>
        </div>

        {/* Preferiti */}
        <div className="flex flex-col items-center min-w-[120px]">
          <Link
            to="/preferiti"
            className="text-[#d9d9d9] hover:text-red-600 no-underline"
          >
            <h4 className="text-base font-bold mb-2">Preferiti</h4>
          </Link>
        </div>

      </div>

      {/* Divider + info finali */}
      <div className="text-center border-t border-gray-700 pt-6">
        <p>© {new Date().getFullYear()} Gualtiero e Rodrigo - Tutti i diritti riservati</p>

        <p className="text-sm mt-1 flex items-center justify-center gap-1 text-gray-400">
          Made with <AiFillHeart className="text-red-600" /> using React & TailwindCSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;







