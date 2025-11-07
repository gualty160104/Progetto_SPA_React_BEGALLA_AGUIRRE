import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.js";

import Home from "../pages/Home/home.jsx";
import Film from "../pages/Film/film.jsx";
import Ricerca from "../pages/Ricerca/ricerca.jsx"; 
import Serietv from "../pages/Serietv/serietv.jsx";
import NotFound from "../pages/NotFound/notfound.jsx";

const AppRoutes = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<Film />} />
            <Route path="/serie-tv" element={<Serietv />} />
            <Route path="/ricerca" element={<Ricerca />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;