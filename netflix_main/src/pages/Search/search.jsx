import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchFromTmdb } from "../../components/api/tmdb";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    const fetchResults = async () => {
      try {
        const dataMovies = await fetchFromTmdb(`search/movie`, { query });
        const dataTv = await fetchFromTmdb(`search/tv`, { query });
        setResults([...dataMovies.results, ...dataTv.results]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  if (!query)
    return (
      <div className="search-page">
        <p className="search-loading">Inserisci qualcosa nella ricerca...</p>
      </div>
    );

  return (
    <section className="search-page">
      <h2 className="search-title">
        Risultati per "<span>{query}</span>"
      </h2>
      {loading ? (
        <p className="search-loading">Caricamento...</p>
      ) : results.length === 0 ? (
        <p className="search-empty">Nessun risultato trovato.</p>
      ) : (
        <div className="search-grid">
          {results.map((item) => (
            <div
              key={item.id}
              className="search-card"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <img
                src={item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                alt={item.title || item.name}
                className="search-img"
              />
              <div className="search-name">{item.title || item.name}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
