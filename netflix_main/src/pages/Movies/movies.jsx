import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { fetchFromTmdb } from "../../components/api/tmdb";
import { AiFillStar } from "react-icons/ai";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loaderRef = useRef(null);

  // Funzione per caricare una pagina di film
  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchFromTmdb("discover/movie", { page });
      setMovies((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error("Errore nel caricamento dei film:", error);
    } finally {
      setLoading(false);
    }
  };

  // Carica la prima pagina e le successive quando page cambia
  useEffect(() => {
    loadMovies();
  }, [page]);

  // Infinite scroll con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <section className="w-screen min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-16 pt-24 text-center">
      
      {/* Titolo */}
      <h2 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
        Film
      </h2>

      {/* Griglia film */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            className="rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl cursor-pointer duration-300 bg-gray-900"
            onClick={() => navigate(`/details/movie/${movie.id}`)}
          >
            <CardContent className="p-0">
              
              {/* Poster */}
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-96 object-cover"
              />

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                <p className="text-sm text-gray-400">
                  {movie.release_date?.split("-")[0] || "N/A"}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <AiFillStar className="text-yellow-400 text-lg" />
                  <span className="text-sm text-gray-300">
                    {movie.vote_average?.toFixed(1)}
                  </span>
                </div>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

      {/* Loader / trigger per infinite scroll */}
      <div ref={loaderRef} className="text-white text-lg mt-10 mb-20">
        {loading ? "Caricamento..." : "Scorri per caricare di più"}
      </div>

    </section>
  );
};

export default Movies;
