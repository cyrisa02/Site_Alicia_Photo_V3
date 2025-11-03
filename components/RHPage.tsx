// src/pages/RHPage.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const RHPage: React.FC = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /rh#contact)
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
          Ressources Humaines Intelligentes — Agents IA pour l’Analyse de CV, Onboarding & Gestion Simplifiée
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-8v-2a6 6 0 0112 0v2zM5 8h14v4H5V8z" />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “Recruter n’est plus une corvée — c’est une opportunité. Laissez l’IA faire le tri, vous faites la différence.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou petite entreprise locale, et vous avez besoin d’embaucher, mais vous ne savez pas par où commencer ?
          <br />
          Vos CV s’accumulent ? Vous perdez du temps à les lire ? Vous n’avez pas de processus d’onboarding ? Vous ne savez pas gérer les contrats ou les congés ?
          <br />
          <strong>Nous vous accompagnons pour automatiser votre gestion RH — simplement, efficacement, avec des agents IA qui travaillent pour vous.</strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nos accompagnements RH pour entrepreneurs locaux</h2>
          <div className="space-y-4 text-gray-400">
            <p>✅ <strong>Analyse de CV par IA</strong> : tri automatique, score de pertinence, comparaison avec le poste — en quelques secondes.</p>
            <p>✅ <strong>Onboarding intelligent</strong> : checklist personnalisée, documents automatisés, accueil digital, formation rapide — pour que votre nouveau collaborateur soit opérationnel dès J+1.</p>
            <p>✅ <strong>Gestion des contrats & congés</strong> : modèles personnalisés, suivi des dates, alertes — tout est géré pour vous.</p>
            <p>✅ <strong>Reporting RH mensuel</strong> : absences, formations, salaires, indicateurs clés — sans effort, export PDF/Excel.</p>
            <p>✅ <strong>Intégration outils RH</strong> : connexion entre vos outils (Google Workspace, Trello, Notion, etc.) pour fluidifier votre gestion des équipes.</p>
            <p>✅ <strong>Formation rapide</strong> : apprenez à utiliser vos nouveaux outils en 1h — sans jargon, avec des exemples concrets de votre activité.</p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Nos formules simples et transparentes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Audit RH initial</strong> : 150 € (analyse de votre process actuel + plan d’automatisation).</li>
            <li><strong>Setup analyse CV IA</strong> : 250 € (configuration + premier mois gratuit).</li>
            <li><strong>Formule « RH Serein »</strong> : 150 €/mois (analyse CV + onboarding + gestion contrats + reporting + 1h de support/mois).</li>
            <li><strong>Onboarding ponctuel</strong> : 120 €/collaborateur (checklist + documents + accueil digital — pour un nouveau salarié).</li>
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
            “En 10min, j’ai analysé 20 CV grâce à leur IA. J’ai embauché la bonne personne en 3 jours — sans stress.”
          </blockquote>
          <p className="text-gray-400 mt-2">— Claire, restauratrice, Soissons</p>
        </section>*/}

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et ses environs</h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et associations locales dans leur gestion des ressources humaines.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">Vous voulez savoir combien de temps vous perdez chaque mois sur la gestion RH ?</p>
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

export default RHPage;