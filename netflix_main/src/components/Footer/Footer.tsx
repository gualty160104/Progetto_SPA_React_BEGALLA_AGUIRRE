import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    // Ho rimosso 'mt-10' (margin-top: 2.5rem)
    <footer className="w-full bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Gualtiero e Rodrigo - Tutti i diritti riservati
        </p>
        <p className="text-sm mt-1 flex items-center justify-center gap-1">
          Made with <AiFillHeart className="text-red-600" /> using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;