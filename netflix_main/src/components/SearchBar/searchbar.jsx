import {useState} from "react";

export default function SearchBar ({onSearch}) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Cerca film, serie TV..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
    );
}