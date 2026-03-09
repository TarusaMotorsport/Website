import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Sponsor from './pages/Sponsor';
import About from './pages/About';
import Media from './pages/Media';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
