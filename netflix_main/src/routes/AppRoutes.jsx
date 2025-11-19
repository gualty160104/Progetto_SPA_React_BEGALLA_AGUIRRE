import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.js";

import Home from "../pages/Home/home.jsx";
import Movies from "../pages/Movies/movies.jsx";
import Serietv from "../pages/Serietv/serietv.jsx";
import Search from "../pages/Search/search.jsx";
import Details from "../pages/Details/details.jsx";
import NotFound from "../pages/NotFound/notfound.jsx";

const AppRoutes = () => {
  return (
    <div className="bg-black min-h-screen"> 
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/serie-tv" element={<Serietv />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details/:type/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
