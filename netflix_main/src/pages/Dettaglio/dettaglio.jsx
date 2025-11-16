import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchFromTmdb } from "../../components/api/tmdb";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Dettaglio() {
  const { id } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Determiniamo il tipo (film o serie) tramite query param o stato passato dal Link
  const type = location.state?.type || "movie"; // default a movie

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await fetchFromTmdb(`${type}/${id}`);
        setItem(data);
      } catch (error) {
        console.error("Errore nel caricamento:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, type]);

  if (loading) return <p className="text-white">Caricamento...</p>;
  if (!item) return <p className="text-white">{type === "movie" ? "Film non trovato" : "Serie TV non trovata"}</p>;

  return (
    <div className="text-white p-8 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{item.title || item.name}</h1>
      <img 
        src={item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
        alt={item.title || item.name}
        className="w-80 mb-4"
      />
      <p className="mb-2">{type === "movie" ? `Data di uscita: ${item.release_date}` : `Prima trasmissione: ${item.first_air_date}`}</p>
      <p className="mb-2">Voto: {item.vote_average}</p>
      <p className="mt-4">{item.overview}</p>
    </div>
  );
}
