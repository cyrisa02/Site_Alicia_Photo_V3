// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page d'accueil (ton App actuel, mais extrait en composant)
import HomePage from './components/HomePage';
// Nouvelle page

import SoutienSeniorsPage from './components/SoutienSeniorsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soutien-seniors" element={<SoutienSeniorsPage />} />
      </Routes>
    </Router>
  );
};

export default App;