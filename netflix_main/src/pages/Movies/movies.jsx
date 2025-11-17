import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { fetchFromTmdb, ENDPOINTS } from "../../components/api/tmdb";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // <-- hook per navigazione

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromTmdb(ENDPOINTS.popularMovies);
        setMovies(data.results);
      } catch (error) {
        console.error("Errore nel caricamento dei film:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-screen text-center mt-20 px-4 bg-black min-h-screen">
      <h2 className="text-5xl font-semibold mb-10 text-red-600">I film in evidenza</h2>
      {loading ? (
        <p className="text-white text-xl">Caricamento...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              className="rounded-2xl shadow-md overflow-hidden w-72"
              onClick={() => navigate(`/details/movie/${movie.id}`)} // <-- naviga al dettaglio
            >
              <CardContent className="p-0">
                <img
                  src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                  alt={movie.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.release_date?.split('-')[0] || 'N/A'}</p>
                  <p className="text-sm text-gray-500 mt-2">{movie.vote_average?.toFixed(1)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default Movies;
