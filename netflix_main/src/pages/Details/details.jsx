import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useFavorites } from "../../context/FavoriteContext";
import { useFetchTmdb } from "../../hooks/useFetchTmdb";
import { IMAGE_BASE_URL, BACKDROP_BASE_URL } from "../../components/api/tmdb";

const Details = () => {
  const { type, id } = useParams();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // Fetch dettagli e cast tramite custom hook
  const { data, loading } = useFetchTmdb(type && id ? `${type}/${id}` : null);
  const { data: creditsData } = useFetchTmdb(type && id ? `${type}/${id}/credits` : null);

  const cast = creditsData?.cast?.slice(0, 6) || [];
  const isFavorite = data && favorites.some(f => f.id === data.id && f.type === type);

  const handleFavoriteClick = () => {
    if (!data) return;

    if (isFavorite) {
      removeFavorite(data.id, type);
    } else {
      addFavorite({
        id: data.id,
        type,
        title: data.title,
        name: data.name,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
        release_date: data.release_date,
        first_air_date: data.first_air_date,
      });
    }
  };

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
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-8">
        {/* Poster */}
        <img
          src={data.poster_path ? `${IMAGE_BASE_URL}${data.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
          alt={data.title || data.name}
          className="w-64 md:w-80 rounded-xl shadow-2xl flex-shrink-0"
        />

        {/* Info principali */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title || data.name}</h1>

          <p className="text-gray-300 mb-4 text-lg flex items-center justify-center md:justify-start gap-2">
            {data.release_date?.split("-")[0] || data.first_air_date?.split("-")[0] || "N/A"}
            <span className="flex items-center gap-1">
              <AiFillStar className="text-yellow-400" />
              {data.vote_average?.toFixed(1)}
            </span>
          </p>

          <p className="mb-4 text-gray-200 leading-relaxed">{data.overview || "Nessuna descrizione disponibile."}</p>

          <button
            onClick={handleFavoriteClick}
            className={`px-6 py-2 rounded-lg font-semibold mt-4 ${
              isFavorite ? "bg-red-600 hover:bg-red-700" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {isFavorite ? "Rimuovi dai Preferiti" : "Aggiungi ai Preferiti"}
          </button>

          {/* Generi e durata */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            {data.genres?.map(genre => (
              <span key={genre.id} className="bg-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {genre.name}
              </span>
            ))}
            {data.runtime && (
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {data.runtime} min
              </span>
            )}
          </div>

          {/* Cast principale */}
          {cast.length > 0 && (
            <div className="mt-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cast principale</h2>
              <div className="flex overflow-x-auto gap-4 py-2">
                {cast.map(actor => (
                  <div
                    key={actor.id}
                    className="flex-shrink-0 w-24 text-center bg-gray-900 rounded-lg shadow-lg p-2 hover:scale-105 transform transition-transform duration-200"
                  >
                    <img
                      src={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : "https://via.placeholder.com/100x150?text=No+Image"}
                      alt={actor.name}
                      className="w-24 h-32 object-cover rounded-lg mb-2"
                    />
                    <span className="text-sm text-gray-200">{actor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
