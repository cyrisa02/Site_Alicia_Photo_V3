// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page d'accueil (ton App actuel, mais extrait en composant)
import HomePage from './components/HomePage';
// Nouvelle page

import SoutienSeniorsPage from './components/SoutienSeniorsPage';
import SoutienEtudiantsPage from './components/SoutienEtudiantsPage';
import SoutienCreateursPage from './components/SoutienCreateursPage';
import SitesSeoLocalPage from './components/SitesSeoLocalPage';
import JuridiquePage from './components/JuridiquePage';
import SupportCommercialPage from './components/SupportCommercialPage';
import ComptabilitePage from './components/ComptabilitePage';
import MarketingDigitalPage from './components/MarketingDigitalPage';
import AdministrationPage from './components/AdministrationPage';
import RHPage from './components/RHPage';
import FormationsPage from './components/FormationsPage';
import AuditConseilPage from './components/AuditConseilPage';
import MentionsLegalesPage from './components/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './components/PolitiqueConfidentialitePage';
import ConditionsGeneralesVentePage from './components/ConditionsGeneralesPage';
import ConditionsGeneralesUtilisationPage from './components/ConditionsGeneralesUtilisationPage';
import ConformiteIAActPage from './components/ConformiteIAActPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soutien-seniors" element={<SoutienSeniorsPage />} />
        <Route path="/soutien-etudiants" element={<SoutienEtudiantsPage />} />
        <Route path="/soutien-createurs" element={<SoutienCreateursPage />} />
        <Route path="/sites-seo-local" element={<SitesSeoLocalPage />} />
        <Route path="/juridique" element={<JuridiquePage />} />
        <Route path="/support-commercial" element={<SupportCommercialPage />} />
        <Route path="/comptabilite" element={<ComptabilitePage />} />
        <Route path="/marketing-digital" element={<MarketingDigitalPage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/rh" element={<RHPage />} />
        <Route path="/formations" element={<FormationsPage />} />
        <Route path="/audit-conseil" element={<AuditConseilPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/conditions-generales-de-vente" element={<ConditionsGeneralesVentePage />} />
        <Route path="/conditions-generales-d-utilisation" element={<ConditionsGeneralesUtilisationPage />} />
        <Route path="/conformite-ia-act" element={<ConformiteIAActPage />} />
      </Routes>
    </Router>
  );
};

export default App;