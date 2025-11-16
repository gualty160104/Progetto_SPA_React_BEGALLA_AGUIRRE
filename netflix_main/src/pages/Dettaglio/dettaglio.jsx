import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTmdb, ENDPOINTS } from "../../components/api/tmdb";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function Dettaglio() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchFromTmdb(`movie/${id}`);
        setMovie(data);
      } catch (error) {
        console.error("Errore nel caricamento del film:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-white">Caricamento...</p>;
  if (!movie) return <p className="text-white">Film non trovato</p>;

  return (
    <div className="text-white p-8 bg-black min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
      <img 
        src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
        alt={movie.title}
        className="w-80 mb-4"
      />
      <p className="mb-2">Data di uscita: {movie.release_date}</p>
      <p className="mb-2">Voto: {movie.vote_average}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
}
