import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { fetchFromTmdb, ENDPOINTS } from "../../components/api/tmdb";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Serietv = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromTmdb(ENDPOINTS.popularTvShows);
        setTvShows(data.results);
      } catch (error) {
        console.error("Errore nel caricamento delle serie TV:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-screen text-center mt-20 px-4 bg-black min-h-screen">
      <h2 className="text-5xl font-semibold mb-10 text-red-600">Le serie TV in evidenza</h2>

      {loading ? (
        <p className="text-white text-xl">Caricamento...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {tvShows.map((show) => (
            <Link 
              key={show.id} 
              to={`/details/${show.id}`} 
              state={{ type: "tv" }}
            >
              <Card className="rounded-2xl shadow-md overflow-hidden w-72">
                <CardContent className="p-0">
                  <img 
                    src={show.poster_path ? `${IMAGE_BASE_URL}${show.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
                    alt={show.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white">{show.name}</h3>
                    <p className="text-sm text-white">{show.first_air_date?.split('-')[0] || 'N/A'}</p>
                    <p className="text-sm text-white mt-2">⭐ {show.vote_average?.toFixed(1)}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Serietv;
