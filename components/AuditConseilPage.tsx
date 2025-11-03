// src/pages/AuditConseilPage.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const AuditConseilPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compense le header fixe
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (id: string) => {
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  };

  // Gère le cas où on arrive directement avec une ancre (ex: /audit#contact)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 150);
    }
  }, [location]);

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Audit & Conseil IA — Analyse de Vos Processus & Feuille de Route Personnalisée
        </h1>

        {/* Icône symbolique (pas d'image) */}
        <div className="mb-8 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <svg
            className="w-12 h-12 mx-auto text-blue-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8a2 2 0 00-2-2h-2a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2v-8z" />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “Un audit IA n’est pas un diagnostic — c’est votre plan d’action. Découvrez où l’IA peut vous faire gagner du temps, de l’argent et de la sérénité.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou petite entreprise locale, et vous voulez savoir comment l’IA peut transformer votre activité — mais vous ne savez pas par où commencer ?
          <br />
          Vos processus sont manuels, inefficaces, ou vous perdez du temps sur des tâches répétitives ?
          <br />
          <strong>Nous vous accompagnons pour auditer vos processus, identifier les leviers d’automatisation, et vous livrer une feuille de route IA personnalisée — sans jargon, sans stress, avec des résultats concrets.</strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nos audits & conseils IA pour entrepreneurs locaux</h2>
          <div className="space-y-4 text-gray-400">
            <p>✅ <strong>Audit de processus</strong> : analyse de vos tâches quotidiennes (comptabilité, marketing, RH, administration, commercial) — pour repérer les gains d’efficacité possibles.</p>
            <p>✅ <strong>Feuille de route IA personnalisée</strong> : plan d’action en 3 étapes (court/moyen/long terme) avec priorités, outils recommandés, ROI estimé.</p>
            <p>✅ <strong>Recommandations d’outils & IA</strong> : sélection des solutions adaptées à votre budget, votre secteur et votre niveau technique.</p>
            <p>✅ <strong>Accompagnement post-audit</strong> : mise en œuvre des premières actions, suivi des résultats, ajustements — pendant 1 mois.</p>
            <p>✅ <strong>Présentation visuelle & synthèse</strong> : rapport clair, infographies, tableaux de bord — facile à partager avec votre équipe ou votre expert-comptable.</p>
            <p>✅ <strong>Conseil stratégique</strong> : comment intégrer l’IA dans votre stratégie globale — pour gagner en compétitivité, en productivité et en sérénité.</p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Nos formules simples et transparentes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Audit complet (1 journée)</strong> : 450 € (analyse de 3 à 5 processus + feuille de route + présentation).</li>
            <li><strong>Audit express (demi-journée)</strong> : 250 € (analyse de 1 à 2 processus prioritaires + plan d’action rapide).</li>
            <li><strong>Formule « Transformation Sereine »</strong> : 800 € (audit + accompagnement 1 mois + 2h de coaching + accès à la plateforme d’outils IA).</li>
            <li><strong>Conseil ponctuel</strong> : 120 €/heure (pour un point spécifique : choix d’un outil, optimisation d’un workflow, etc.).</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
          </p>
        </section>

        {/* Témoignage Google (adapté) */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg">
            “En 1 journée, ils ont identifié 5 tâches que je faisais moi-même — maintenant, elles sont automatisées. J’ai gagné 4h/semaine !”
          </blockquote>
          <p className="text-gray-400 mt-2">— Colette, Consultante RH indépendante, Soissons</p>
        </section>

        {/* Témoignage Google (adapté) */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg">
            “Analyse de textes, synthèse de documents: avec Manus et NoteBookLM j'automatise mes travaux. Je gagne 10h toutes les semaines !”
          </blockquote>
          <p className="text-gray-400 mt-2">— Isabelle, Professeure de Littérature, Soissons</p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et ses environs</h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et associations locales dans leur transformation numérique via l’IA.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">Vous voulez savoir combien de temps vous perdez chaque semaine sur des tâches répétitives ?</p>
          <button
            onClick={() => handleNavClick('contact')}
            className="mt-4 bg-[#6366F1] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#4f52c4] transition-colors duration-300"
          >
            Demandez un audit gratuit
          </button>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default AuditConseilPage;