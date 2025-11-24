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
  const [randomMovie, setRandomMovie] = useState(null);
  const [randomTvShow, setRandomTvShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesData, tvData] = await Promise.all([
          fetchFromTmdb(ENDPOINTS.popularMovies),
          fetchFromTmdb(ENDPOINTS.popularTvShows)
        ]);

        const moviesList = moviesData.results.slice(0, 5);
        const tvList = tvData.results.slice(0, 5);
        setMovies(moviesList);
        setTvShows(tvList);
        
        // Seleziona un film random dalla lista
        if (moviesList.length > 0) {
          const randomMovieIndex = Math.floor(Math.random() * moviesList.length);
          setRandomMovie(moviesList[randomMovieIndex]);
        }

        // Seleziona una serie TV random dalla lista
        if (tvList.length > 0) {
          const randomTvIndex = Math.floor(Math.random() * tvList.length);
          setRandomTvShow(tvList[randomTvIndex]);
        }
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen flex flex-col bg-black pb-32">

      {/* Sezione Hero */}
      <div className="w-screen flex items-center justify-center bg-gray-200">
        <section className="flex flex-col items-center justify-center w-full h-[70vh] bg-cover bg-center px-4" style={{ backgroundImage: `url(${background})` }}>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white text-center"> NETFLIX </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mt-2 text-center px-4">Film, serie TV e tanto altro, senza limiti</p>
        </section>
      </div>

      {/* FILM e SERIE TV del momento */}
      <section className="w-screen text-center px-4 bg-gradient-to-b from-red-900/100 to-black py-16">
        <h2 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
          Film e Serie TV del momento
        </h2>
        {loading ? (
          <p className="text-white">Caricamento...</p>
        ) : randomMovie && randomTvShow && (
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Film - Card a sinistra, Descrizione a destra (desktop) | Card sopra, descrizione sotto (mobile/tablet) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Card Film */}
              <div className="flex justify-center">
                <Card
                  className="rounded-2xl shadow-lg overflow-hidden w-80 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer duration-300 bg-gray-900"
                  onClick={() => navigate(`/details/movie/${randomMovie.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={randomMovie.poster_path ? `${IMAGE_BASE_URL}${randomMovie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                      alt={randomMovie.title}
                      className="w-full h-[450px] object-cover"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Descrizione Film */}
              <div className="text-left text-white space-y-4">
                <h3 className="text-3xl font-bold">{randomMovie.title}</h3>
                <p className="text-gray-400 text-sm">
                  Anno: {randomMovie.release_date?.split('-')[0] || 'N/A'}
                </p>
                <div className="flex items-center gap-2">
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <span className="text-lg">{randomMovie.vote_average?.toFixed(1)}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {randomMovie.overview || 'Nessuna descrizione disponibile.'}
                </p>
                <Button 
                  variant="contained" 
                  onClick={() => navigate(`/details/movie/${randomMovie.id}`)}
                >
                  Dettagli Film
                </Button>
              </div>
            </div>

            {/* Serie TV - Card sopra, descrizione sotto (mobile/tablet) | Descrizione a sinistra, Card a destra (desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Card Serie TV */}
              <div className="flex justify-center order-1 md:order-2">
                <Card
                  className="rounded-2xl shadow-lg overflow-hidden w-80 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer duration-300 bg-gray-900"
                  onClick={() => navigate(`/details/tv/${randomTvShow.id}`)}
                >
                  <CardContent className="p-0">
                    <img
                      src={randomTvShow.poster_path ? `${IMAGE_BASE_URL}${randomTvShow.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                      alt={randomTvShow.name}
                      className="w-full h-[450px] object-cover"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Descrizione Serie TV */}
              <div className="text-left text-white space-y-4 order-2 md:order-1">
                <h3 className="text-3xl font-bold">{randomTvShow.name}</h3>
                <p className="text-gray-400 text-sm">
                  Anno: {randomTvShow.first_air_date?.split('-')[0] || 'N/A'}
                </p>
                <div className="flex items-center gap-2">
                  <AiFillStar className="text-yellow-400 text-xl" />
                  <span className="text-lg">{randomTvShow.vote_average?.toFixed(1)}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {randomTvShow.overview || 'Nessuna descrizione disponibile.'}
                </p>
                <Button 
                  variant="contained" 
                  onClick={() => navigate(`/details/tv/${randomTvShow.id}`)}
                >
                  Dettagli Serie TV
                </Button>
              </div>
            </div>
          </div>
        )}
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
              <Button variant="contained" linkto="/serie-tv"> Vedi tutti i film</Button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
