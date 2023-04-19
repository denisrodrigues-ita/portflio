import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Skills from "./pages/Skills";
import ReactGA from "react-ga4";

const App = () => {
  ReactGA.initialize("G-4J2QGMC703");
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
