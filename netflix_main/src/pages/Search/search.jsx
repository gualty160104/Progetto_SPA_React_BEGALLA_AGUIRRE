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

        const moviesWithType = dataMovies.results.map(item => ({ ...item, type: "movie" }));
        const tvWithType = dataTv.results.map(item => ({ ...item, type: "tv" }));

        const combined = [...moviesWithType, ...tvWithType];

        // Opzionale: filtra i risultati senza immagini
        const filtered = combined.filter(item => item.poster_path || item.backdrop_path);

        setResults(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (!query) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', color: 'white' }}>
        <p>Inserisci qualcosa nella ricerca...</p>
      </div>
    );
  }

  return (
    <section style={{ paddingTop: '120px', backgroundColor: 'black', minHeight: '100vh', color: 'white', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
        Risultati per "<span style={{ color: '#ff0000' }}>{query}</span>"
      </h2>

      {loading ? (
        <p style={{ fontSize: '1.3rem', marginTop: '20px' }}>Caricamento...</p>
      ) : results.length === 0 ? (
        <p style={{ fontSize: '1.3rem', marginTop: '20px' }}>Nessun risultato trovato.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
          {results.map((item) => {
            const image = item.poster_path
              ? `${IMAGE_BASE_URL}${item.poster_path}`
              : item.backdrop_path
              ? `${IMAGE_BASE_URL}${item.backdrop_path}`
              : "https://fakeimg.pl/500x750/000/fff/?text=Nessuna+Immagine"; // fallback

            const title = item.title || item.name || "Titolo non disponibile";

            return (
              <div
                key={item.id + "-" + item.type}
                onClick={() => navigate(`/details/${item.type}/${item.id}`)}
                style={{ cursor: 'pointer', width: '180px', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src={image}
                  alt={title}
                  style={{ width: '100%', height: '270px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <div style={{ marginTop: '8px', fontSize: '0.9rem', color: '#ccc' }}>{title}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>
                  {(item.type === "movie"
                    ? item.release_date?.split("-")[0]
                    : item.first_air_date?.split("-")[0]) || "N/A"}{" "}
                  • {item.type === "movie" ? "Film" : "Serie TV"}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
