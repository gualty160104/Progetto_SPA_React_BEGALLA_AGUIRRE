import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.js";

import Home from "../pages/Home/home.jsx";
import Movies from "../pages/Movies/movies.jsx";
import Dettaglio from "../pages/Dettaglio/dettaglio.jsx";
import Preferiti from "../pages/Preferiti/preferiti.jsx";
import Serietv from "../pages/Serietv/serietv.jsx";
import Ricerca from "../pages/Ricerca/ricerca.jsx";
import NotFound from "../pages/NotFound/notfound.jsx";

const AppRoutes = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} /> {/* sarebbe lista nella FAD */}
            <Route path="/movie/:id" element={<Dettaglio />} />  {/* dettaglio del film */}
            <Route path="/serietv/:id" element={<Serietv />} />  {/* dettaglio della serie TV */}
            <Route path="/search" element={<Ricerca />} />
            <Route path="/preferiti" element={<Preferiti />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;