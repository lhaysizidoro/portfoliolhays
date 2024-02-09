import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

import Home from './pages/home/index';
import About from './pages/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProjetosPage from './pages/projects/projects';



function App() {
  return (
    <Router>
        <Header />
        <div id="elemento">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjetosPage />} />
        </Routes>
        </div>
        
        <Footer/>
    </Router>
  );
}

export default App;
