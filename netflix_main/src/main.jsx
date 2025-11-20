import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 👇 importa il Provider
import { FavoritesProvider } from "./context/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 👇 Avvolgiamo App con il provider */}
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
