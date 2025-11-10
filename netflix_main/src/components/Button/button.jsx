export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`
                bg-red-600 text-white 
                px-4 py-2 rounded-xl shadow font-medium 
                hover:bg-white hover:text-black 
                transition-colors duration-300
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
