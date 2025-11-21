import { Link } from "react-router-dom";

export function Button({ children, className = "", linkTo, ...props }) {
    const buttonClass = `
        bg-red-600 text-white 
        px-4 py-2 rounded-xl shadow font-medium 
        hover:bg-white hover:text-black 
        transition-colors duration-300
        ${className}
    `;

    if (linkTo) {
        return (
            <Link to={linkTo} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
}
