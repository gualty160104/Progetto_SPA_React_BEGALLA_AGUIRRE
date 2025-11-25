import { useFavorites } from "../../context/FavoriteContext";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="pt-32 text-center text-white min-h-screen">
        <h2 className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
          I tuoi Preferiti
        </h2>
        <p>Non hai ancora aggiunto nulla ai preferiti.</p>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 min-h-screen bg-black text-white text-center px-4">
      <h2 className="text-3xl font-bold mb-8">I tuoi Preferiti</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {favorites.map((item) => {
          const title = item.title || item.name || "Titolo non disponibile";

          return (
            <div
              key={item.id + "-" + item.type}
              className="bg-gray-900 rounded-xl overflow-hidden w-64 cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={
                  item.poster_path
                    ? `${IMAGE_BASE_URL}${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={title}
                className="w-full h-96 object-cover"
                onClick={() => navigate(`/details/${item.type}/${item.id}`)}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400">
                  {item.release_date?.split("-")[0] ||
                    item.first_air_date?.split("-")[0] ||
                    "N/A"}
                </p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <AiFillStar className="text-yellow-400 text-lg" />
                  <span className="text-sm text-gray-300">
                    {item.vote_average?.toFixed(1) || "N/A"}
                  </span>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 text-white font-semibold transition-colors"
                  onClick={() => removeFavorite(item.id, item.type)}
                >
                  Rimuovi dai Preferiti
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
