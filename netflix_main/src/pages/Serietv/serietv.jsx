import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card/card";
import { CardContent } from "../../components/CardContent/cardcontent";
import { fetchFromTmdb } from "../../components/api/tmdb";
import { AiFillStar } from "react-icons/ai";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Serietv = () => {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // per verificare se ci sono altre pagine
  const navigate = useNavigate();

  // Funzione per caricare una pagina di serie TV
  const loadShows = async () => {
    setLoading(true);
    try {
      const data = await fetchFromTmdb("discover/tv", { page });
      setTvShows((prev) => [...prev, ...data.results]);
      if (data.page >= data.total_pages) {
        setHasMore(false); // non ci sono altre pagine
      }
    } catch (error) {
      console.error("Errore nel caricamento serie TV:", error);
    } finally {
      setLoading(false);
    }
  };

  // Carica la prima pagina
  useEffect(() => {
    loadShows();
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="w-screen min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-16 pt-24 text-center">
      
      {/* Titolo */}
      <h2 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
        Serie TV
      </h2>

      {/* Griglia serie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {tvShows.map((show) => (
          <Card
            key={show.id}
            className="rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl cursor-pointer duration-300 bg-gray-900"
            onClick={() => navigate(`/details/tv/${show.id}`)}
          >
            <CardContent className="p-0">
              {/* Poster */}
              <img
                src={
                  show.poster_path
                    ? `${IMAGE_BASE_URL}${show.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={show.name}
                className="w-full h-96 object-cover"
              />

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white">{show.name}</h3>
                <p className="text-sm text-gray-400">
                  {show.first_air_date?.split("-")[0] || "N/A"}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <AiFillStar className="text-yellow-400 text-lg" />
                  <span className="text-sm text-gray-300">
                    {show.vote_average?.toFixed(1)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottone Carica di più */}
      {hasMore && (
        <button
          onClick={handleLoadMore}
          className="mt-12 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
          disabled={loading}
        >
          {loading ? "Caricamento..." : "Carica di più"}
        </button>
      )}

    </section>
  );
};

export default Serietv;
