import { useState, useEffect } from "react";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { Button } from "../../components/Button/button";
import background from "../../assets/background.jpg";
import { fetchFromTmdb, ENDPOINTS } from "../../components/api/tmdb";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className=" w-screen flex flex-col gap-20 bg-black">

      {/* Sezione Hero */}
      <div className="w-screen flex items-center justify-center bg-gray-200">
        <section className="flex flex-col items-center justify-center w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
          <h1 className="text-9xl font-bold text-white text-center"> NETFLIX </h1>
          <p className="text-xl text-white mt-2 text-center">Film, serie TV e tanto altro, senza limiti</p>
        </section>
      </div>


      {/* Film in evidenza */}
      <section className="w-screen text-center mt-16 px-4">
        <h2 className="text-5xl font-semibold mb-10 text-red-600">I film in evidenza</h2>
        {loading ? (
          <p className="text-white">Caricamento...</p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-6">
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  className="rounded-2xl shadow w-72"
                  onClick={() => window.location.href = `/movies/${movie.id}`}
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
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>
            <div className="mt-8">
              <Button variant="contained" linkto="/movies">Vedi tutti i film</Button>
            </div>
          </>
        )}
      </section>

      {/* Serie TV in evidenza */}
      <section className="w-screen text-center mt-16 px-4">
        <h2 className="text-5xl font-semibold mb-10 text-red-600">Le serie TV in evidenza</h2>
        {loading ? (
          <p className="text-white">Caricamento...</p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-6">
              {tvShows.map((show) => (
                <Card key={show.id} className="rounded-2xl shadow-md overflow-hidden w-72">
                  <CardContent className="p-0">
                    <img
                      src={show.poster_path ? `${IMAGE_BASE_URL}${show.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                      alt={show.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-white">{show.name}</h3>
                      <p className="text-sm text-gray-400">{show.first_air_date?.split('-')[0] || 'N/A'}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="contained" onClick={() => window.location.href = "/serie-tv"}>Vedi tutte le serie TV</Button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
