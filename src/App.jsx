import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
