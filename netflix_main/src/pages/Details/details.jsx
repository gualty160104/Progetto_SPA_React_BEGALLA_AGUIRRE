import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTmdb } from "../../components/api/tmdb";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Details = () => {
  const { type, id } = useParams(); // 'movie' o 'tv' e l'id
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

  if (loading) return <p className="text-white text-center mt-20">Caricamento...</p>;
  if (!data) return <p className="text-white text-center mt-20">Dettagli non disponibili</p>;

  return (
    <div className="w-screen min-h-screen text-white bg-black p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4">{data.title || data.name}</h1>
      <p className="text-gray-400 mb-6">
        {data.release_date?.split("-")[0] || data.first_air_date?.split("-")[0] || "N/A"} | ⭐ {data.vote_average?.toFixed(1)}
      </p>
      <img
        src={data.poster_path ? `${IMAGE_BASE_URL}${data.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
        alt={data.title || data.name}
        className="w-72 rounded-xl mb-6"
      />
      <p className="max-w-3xl text-center">{data.overview || "Nessuna descrizione disponibile."}</p>
    </div>
  );
};

export default Details;
