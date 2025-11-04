// src/pages/FormationsPage.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const FormationsPage: React.FC = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /formations#contact)
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
          Formations IA Génératives — Rendez Vos Équipes Opérationnelles en 1 à 3 Jours
        </h1>

        {/* Image impactante */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/formation.png"
            alt="Un formateur accompagne une assemblée avec un sourire devant un écran — Support informatique de confiance"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px] hover:scale-102 transition-transform duration-300"
          />
          <div className="bg-black/70 p-4 text-center">
            <p className="text-white text-sm italic">
              “Support Formation — Votre aide de confiance”
            </p>
          </div>
        </div>

        {/* Icône symbolique (pas d'image) */}
        <div className="mb-8 p-6 bg-gray-900/50 border border-gray-800 rounded-xl text-center">
          <svg
            className="w-12 h-12 mx-auto text-green-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.456 9.116 5 7.5 5S4.168 5.456 3 6.253v13C4.168 18.456 5.884 18 7.5 18s3.332.456 4.5 1.253m0-13C13.168 5.456 14.884 5 16.5 5c1.616 0 3.332.456 4.5 1.253v13C19.832 18.456 18.116 18 16.5 18c-1.616 0-3.332.456-4.5 1.253" />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “L’IA n’est pas un outil pour les experts — c’est un levier pour tous. Formez votre équipe, et gagnez du temps dès demain.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, prestataire ou petite entreprise locale, et vous avez besoin de former vos équipes aux IA génératives (ChatGPT, Gemini, Claude, etc.) ?
          <br />
          Vos collaborateurs sont perdus ? Ils ne savent pas comment utiliser l’IA pour rédiger, créer, automatiser, ou résoudre des problèmes ?
          <br />
          <strong>Nous vous accompagnons pour former vos équipes rapidement, simplement et efficacement — sans jargon, sans stress, avec des exercices pratiques adaptés à votre métier.</strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nos formations IA pour entrepreneurs locaux</h2>
          <div className="space-y-4 text-gray-400">
            <p>✅ <strong>Formation IA Générative (base)</strong> : comprendre les IA, poser des prompts efficaces, générer du texte, des images, des idées — en 1 journée.</p>
            <p>✅ <strong>Formation IA Métier Spécifique</strong> : adaptation à votre activité (comptabilité, marketing, RH, commercial, administration) — en 2 à 3 jours.</p>
            <p>✅ <strong>Ateliers pratiques & cas réels</strong> : exercices concrets, jeux de rôle, feedback personnalisé — pour que vos équipes soient opérationnelles dès la fin de la formation.</p>
            <p>✅ <strong>Support post-formation</strong> : accès à un espace ressources, questions/réponses, mise à jour des contenus — pendant 3 mois.</p>
            <p>✅ <strong>Formation en présentiel ou en visio</strong> : à votre bureau, chez vous, ou en ligne — selon vos besoins et votre rythme.</p>
            <p>✅ <strong>Personnalisation complète</strong> : nous adaptons le contenu à votre secteur, votre taille d’équipe, et vos objectifs.</p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Nos formules simples et transparentes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Formation IA Base (1 jour)</strong> : 450 €/équipe (jusqu’à 5 personnes) — en présentiel ou visio.</li>
            <li><strong>Formation IA Métier (2-3 jours)</strong> : 800 €/équipe (jusqu’à 5 personnes) — avec cas pratiques spécifiques à votre activité.</li>
            <li><strong>Formule « Équipe Sereine »</strong> : 1200 € (formation + support 3 mois + accès à la plateforme d’apprentissage + 1h de coaching/mois).</li>
            <li><strong>Session individuelle</strong> : 150 €/personne (pour un collaborateur isolé ou un dirigeant).</li>
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
            “En 2 jours, mon équipe a appris à utiliser l’IA pour rédiger des devis, des newsletters et des posts Instagram. On gagne 10h/semaine !”
          </blockquote>
          <p className="text-gray-400 mt-2">— Marie, gérante de boutique en ligne, Soissons</p>
        </section>*/}

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et ses environs</h2>
          <p className="text-gray-300">
            Nous formons les artisans, commerçants et associations locales à l’usage des IA génératives.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">Vous voulez savoir combien de temps vous perdez chaque semaine faute de maîtrise de l’IA ?</p>
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

export default FormationsPage;