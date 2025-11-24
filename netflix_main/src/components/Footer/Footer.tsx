import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-[#f2f2f2] py-10 px-[60px] border-2 border-red-600 mt-32">
      <div className="flex justify-between flex-wrap gap-10 mx-auto max-w-screen-xl mb-8">
        {/* Colonna 1: Logo */}
        <div className="flex flex-col min-w-[120px] text-left">
          <Link to="/home">
          {/* l'immagine è troppo grande */}
            <img src="../../src/assets/netflix.png" alt="Netflix Logo" className="w-16 h-auto"/>
          </Link>
        </div>

        {/* Colonna 2: Film */}
        <div className="flex flex-col min-w-[120px] text-left">
          <h4 className="text-base mb-[12px] text-center font-bold">FILM</h4>
          <Link to="/film" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Catalogo</Link>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
        </div>

        {/* Colonna 3: Catalogo Serie TV */}
        <div className="flex flex-col min-w-[120px] text-left">
          <h4 className="text-base mb-[10px] text-center font-bold">SERIE TV</h4>
          <Link to="/serie-tv" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Catalogo</Link>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
        </div>

        {/* Colonna 4: TITOLO */}
        <div className="flex flex-col min-w-[120px] text-left">
          <h4 className="text-base mb-[10px] text-center font-bold">TITOLO</h4>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
          <a href="#" className="text-[#d9d9d9] no-underline text-[0.9rem] my-1 transition-colors duration-200 hover:text-red-600 text-center">Link here</a>
        </div>
      </div>
      
      {/* Copyright  sotto */}
      <div className="text-center border-t border-gray-700 pt-6">    
        © {new Date().getFullYear()} Gualtiero e Rodrigo - Tutti i diritti riservati
      </div>
    </footer>
  );
};

export default Footer;







