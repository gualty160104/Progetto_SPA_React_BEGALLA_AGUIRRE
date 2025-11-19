import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { Button } from "../../components/Button/button";
import background from "../../assets/background.jpg";
import { fetchFromTmdb, ENDPOINTS } from "../../components/api/tmdb";
import { AiFillStar } from "react-icons/ai";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesData, tvData] = await Promise.all([
          fetchFromTmdb(ENDPOINTS.popularMovies),
          fetchFromTmdb(ENDPOINTS.popularTvShows)
        ]);

        setMovies(moviesData.results.slice(0, 5));
        setTvShows(tvData.results.slice(0, 5));
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen flex flex-col gap-20 bg-black pb-32">

      {/* Sezione Hero */}
      <section
        className="relative w-screen h-[80vh] flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-white drop-shadow-xl">
            NETFLIX
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 max-w-2xl drop-shadow-md">
            Film, serie TV e tanto altro, senza limiti
          </p>
        </div>
      </section>

      {/* Serie TV in evidenza */}
      <section className="w-screen text-center mt-16 px-4">
        <h2 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
          Le serie TV in evidenza
        </h2>
        {loading ? (
          <p className="text-white">Caricamento...</p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-6">
              {tvShows.map((show) => (
                <Card
                  key={show.id}
                  className="rounded-2xl shadow-lg overflow-hidden w-72 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer duration-300 bg-gray-900"
                  onClick={() => navigate(`/details/tv/${show.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={show.poster_path ? `${IMAGE_BASE_URL}${show.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                      alt={show.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-white">{show.name}</h3>
                      <p className="text-sm text-gray-400">{show.first_air_date?.split('-')[0] || 'N/A'}</p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <AiFillStar className="text-yellow-400 text-lg" />
                        <span className="text-sm text-gray-300">{show.vote_average?.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="contained" onClick={() => navigate("/serie-tv")}>
                Vedi tutte le serie TV
              </Button>
            </div>
          </>
        )}
      </section>

      {/* Film in evidenza */}
      <section className="w-screen text-center mt-16 px-4">
        <h2 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
          I film in evidenza
        </h2>
        {loading ? (
          <p className="text-white">Caricamento...</p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-6">
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  className="rounded-2xl shadow-lg overflow-hidden w-72 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer duration-300 bg-gray-900"
                  onClick={() => navigate(`/details/movie/${movie.id}`)}
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
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <AiFillStar className="text-yellow-400 text-lg" />
                        <span className="text-sm text-gray-300">{movie.vote_average?.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="contained" onClick={() => navigate("/movies")}>
                Vedi tutti i film
              </Button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
