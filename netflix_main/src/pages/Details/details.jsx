import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTmdb } from "../../components/api/tmdb";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

const Details = () => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const endpoint = type === "movie" ? `movie/${id}` : `tv/${id}`;
        const result = await fetchFromTmdb(endpoint);
        setData(result);
      } catch (error) {
        console.error("Errore nel caricamento dei dettagli:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [type, id]);

  if (loading)
    return <p className="text-white text-center mt-20 text-xl">Caricamento...</p>;
  if (!data)
    return <p className="text-white text-center mt-20 text-xl">Dettagli non disponibili</p>;

  return (
    <div
      className="w-screen min-h-screen text-white p-8 pt-28 relative"
      style={{
        backgroundImage: data.backdrop_path
          ? `url(${BACKDROP_BASE_URL}${data.backdrop_path})`
          : "linear-gradient(to right, #000000, #1a1a1a)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-8">
        
        {/* Poster */}
        <img
          src={
            data.poster_path
              ? `${IMAGE_BASE_URL}${data.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={data.title || data.name}
          className="w-64 md:w-80 rounded-xl shadow-2xl flex-shrink-0"
        />

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.title || data.name}
          </h1>

          <p className="text-gray-300 mb-4 text-lg flex items-center justify-center md:justify-start gap-1">
            {data.release_date?.split("-")[0] ||
              data.first_air_date?.split("-")[0] ||
              "N/A"}
            <span className="flex items-center gap-1">
              <AiFillStar className="text-yellow-400" />
              {data.vote_average?.toFixed(1)}
            </span>
          </p>

          <p className="mb-4 text-gray-200 leading-relaxed">
            {data.overview || "Nessuna descrizione disponibile."}
          </p>

          {/* Extra info */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            {data.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {genre.name}
              </span>
            ))}
            {data.runtime && (
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {data.runtime} min
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
