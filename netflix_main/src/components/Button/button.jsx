export function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`bg-red-600 px-4 py-2 rounded-xl shadow font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}