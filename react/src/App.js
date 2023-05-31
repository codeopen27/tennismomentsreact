import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import About from "./pages/About";
import Tournaments from "./pages/Tournaments";
import Upload from "./pages/Upload";
import ContactPage from './pages/ContactPage';
import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='content' element={<Content />} />
          <Route path='about' element={<About />} />
          <Route path='tournaments' element={<Tournaments />} />
          <Route path='upload' element={<Upload />} />
          <Route path='contactpage' element={<ContactPage />} />
        </Route>

        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
