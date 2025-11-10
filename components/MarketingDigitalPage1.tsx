// src/pages/MarketingDigitalPage.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const MarketingDigitalPage: React.FC = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /marketing#contact)
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
          Marketing Digital — Stratégie, Veille Concurrentielle & Création de Contenu Automatisée
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8v6a6 6 0 01-12 0V7m6 12a6 6 0 006-6H7a6 6 0 006 6z" />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “Le marketing digital n’est pas un luxe — c’est votre vitrine permanente. Créez du contenu qui vend, même quand vous dormez.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou association locale, et vous avez besoin d’une présence digitale efficace, mais vous ne savez pas par où commencer ?
          <br />
          Vos concurrents sont mieux référencés ? Vos réseaux sociaux sont inactifs ? Vous n’avez pas le temps de créer du contenu régulièrement ?
          <br />
          <strong>Nous vous accompagnons pour mettre en place une stratégie digitale simple, automatisée et performante — sans jargon, sans stress, avec des résultats mesurables.</strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nos accompagnements marketing pour entrepreneurs locaux</h2>
          <div className="space-y-4 text-gray-400">
            <p>✅ <strong>Stratégie digitale personnalisée</strong> : cible, canaux, calendrier, objectifs — adapté à votre activité et votre territoire (Soissons, Fère-en-Tardenois, etc.).</p>
            <p>✅ <strong>Veille concurrentielle</strong> : analyse de vos concurrents locaux, points forts/faibles, opportunités à saisir.</p>
            <p>✅ <strong>Création de contenu automatisée</strong> : posts, stories, newsletters, articles de blog — générés avec IA + personnalisation humaine.</p>
            <p>✅ <strong>Gestion des réseaux sociaux</strong> : planification, publication, engagement, réponse aux commentaires — tout est géré pour vous.</p>
            <p>✅ <strong>Campagnes Google & Meta Ads</strong> : création, optimisation, suivi des performances — pour attirer des clients locaux.</p>
            <p>✅ <strong>Reporting mensuel</strong> : suivi des impressions, clics, conversions, ROI — pour ajuster votre stratégie en temps réel.</p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Nos formules simples et transparentes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Audit marketing initial</strong> : 150 € (analyse de votre présence digitale + plan d’action).</li>
            <li><strong>Setup contenu automatisé</strong> : 250 € (configuration des outils, création des templates, premier mois gratuit).</li>
            <li><strong>Formule « Marketing Serein »</strong> : 199 €/mois (stratégie + contenu + veille + reporting + 1h de support/mois).</li>
            <li><strong>Campagne publicitaire ponctuelle</strong> : 300 € (création + gestion + suivi pendant 1 mois).</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
          </p>
        </section>

        {/* Témoignage Google (adapté) 
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg">
            “En 1 mois, j’ai doublé mes messages sur Instagram grâce à leur contenu automatisé. Je n’avais jamais vu ça !”
          </blockquote>
          <p className="text-gray-400 mt-2">— Léa, créatrice de bijoux, Soissons</p>
        </section>*/}

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et ses environs</h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et associations locales dans leur développement digital.
            <br />
            <strong>Discrétion, réactivité et expertise locale</strong> sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">Vous voulez savoir combien de prospects vous perdez faute de présence digitale ?</p>
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

export default MarketingDigitalPage;