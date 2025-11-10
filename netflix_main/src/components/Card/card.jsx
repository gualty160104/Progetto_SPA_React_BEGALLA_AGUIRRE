export function Card({ children, className = "" }) {
    return (
        //vorrei mettere l'hover che ingrandisce l'immagine
        <div className={`bg-red rounded-2xl shadow ${className} hover:scale-105 transition-transform duration-300`}>{children}</div>
        // <div className={`bg-red rounded-2xl shadow ${className}`}>{children}</div>
    );
}