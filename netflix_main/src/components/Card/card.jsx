export function Card({ children, className = "" }) {
    return (
        <div className={`bg-red rounded-2xl shadow ${className}`}>{children}</div>
    );
}