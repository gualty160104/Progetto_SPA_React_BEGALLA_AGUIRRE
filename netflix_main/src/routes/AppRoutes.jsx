// src/routes/AppRoutes.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.js";

import Home from "../pages/Home/home.jsx";
import Movies from "../pages/Movies/movies.jsx";
import Serietv from "../pages/Serietv/serietv.jsx";
import Search from "../pages/Search/search.jsx";
import Details from "../pages/Details/details.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import NotFound from "../pages/NotFound/notfound.jsx";

// Import corretto del FavoritesProvider
import FavoritesProvider from "../context/FavoriteContext.jsx"

// ScrollToTop per resettare lo scroll ad ogni route
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AppRoutes = () => {
  return (
    <FavoritesProvider>
      <div className="bg-black min-h-screen">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/serie-tv" element={<Serietv />} />
              <Route path="/search" element={<Search />} />
              <Route path="/details/:type/:id" element={<Details />} />
              <Route path="/preferiti" element={<Favorites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </FavoritesProvider>
  );
};

export default AppRoutes;
