// src/pages/ComptabilitePage.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ComptabilitePage: React.FC = () => {
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

  // Gère le cas où on arrive directement avec une ancre (ex: /compta#contact)
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
          Comptabilité Automatisée — Agents Intelligents pour la TVA & la Gestion Financière
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M18 14h.01M15 11h3M12 11h.01M9 11h.01M7 21h10v-2a3 3 0 005.356-2.356l2-2a3 3 0 00-3.536-3.536l-2-2A3 3 0 0012 11V9m7 7h-7" />
          </svg>
          <p className="text-gray-300 text-lg italic">
            “La comptabilité n’est pas une corvée — c’est votre tableau de bord. Automatisez-la, et concentrez-vous sur votre business.”
          </p>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous êtes artisan, commerçant, auto-entrepreneur ou petite entreprise, et vous perdez du temps à gérer vos factures, votre TVA, vos dépenses ?
          <br />
          Vos documents sont dispersés ? Vous avez peur des erreurs ? Vous ne savez pas quand déclarer votre TVA ou comment automatiser votre suivi financier ?
          <br />
          <strong>Nous vous accompagnons pour mettre en place une comptabilité simple, automatisée et fiable — sans stress, sans jargon, avec des agents intelligents qui travaillent pour vous.</strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nos accompagnements comptables pour entrepreneurs locaux</h2>
          <div className="space-y-4 text-gray-400">
            <p>✅ <strong>Automatisation comptable</strong> : connexion bancaire, catégorisation automatique des dépenses, rapprochement bancaire.</p>
            <p>✅ <strong>Gestion de la TVA</strong> : calcul, déclaration, suivi des taux, alertes de paiement — tout est automatisé.</p>
            <p>✅ <strong>Agents intelligents</strong> : assistants virtuels qui vous aident à classer vos factures, générer vos relevés, et préparer vos déclarations.</p>
            <p>✅ <strong>Suivi des charges & trésorerie</strong> : tableaux de bord en temps réel, prévisions de trésorerie, alertes de seuil critique.</p>
            <p>✅ <strong>Préparation des déclarations fiscales</strong> : liens avec votre expert-comptable, export des données, conformité aux normes.</p>
            <p>✅ <strong>Formation rapide</strong> : apprenez à utiliser votre outil en 1h — sans jargon, avec des exemples concrets de votre activité.</p>
          </div>
        </section>

        {/* Offres & formules en attente de validation
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Nos formules simples et transparentes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>Audit comptable initial</strong> : 150 € (analyse de votre situation actuelle + plan d’automatisation).</li>
            <li><strong>Setup automatisé (base)</strong> : 250 € (connexion bancaire, configuration des catégories, premier mois gratuit).</li>
            <li><strong>Formule « Compta Sereine »</strong> : 99 €/mois (automatisation complète + agent intelligent + reporting mensuel + 1h de support/mois).</li>
            <li><strong>Assistance TVA ponctuelle</strong> : 80 €/heure (pour une déclaration, un ajustement, une correction).</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé — sans condition.
          </p>
        </section> */}

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Confidentialité, RGPD et Intelligence Artificielle : protégeons vos données comptables </h2>
          <p className="text-gray-300 text-lg mb-8">
          Dans le domaine de la comptabilité, la protection des données personnelles et professionnelles n’est pas une option : c’est une obligation légale (RGPD) et une exigence de confiance vis-à-vis de vos clients. Lorsqu’on intègre l’Intelligence Artificielle dans les processus comptables — pour automatiser des tâches, analyser des documents ou générer des rapports — il est essentiel de s’assurer que ces données sensibles ne quittent jamais votre périmètre de contrôle.
          <br />
          Les solutions d’IA basées sur le cloud, bien qu’efficaces, peuvent poser des risques importants en matière de confidentialité : transfert de données vers des serveurs tiers, absence de maîtrise sur le traitement, voire non-conformité avec le RGPD.
          <br />
          C’est pourquoi je recommande fortement aux PME de privilégier des modèles d’IA déployés localement, comme ceux proposés par Ollama. Ces solutions permettent d’exploiter toute la puissance de l’IA — analyse de factures, résumé de comptes, assistance à la rédaction — sans jamais transmettre vos données à l’extérieur. Vous gardez ainsi le contrôle total, tout en restant pleinement conforme au règlement européen.
          <br />
          L’IA locale, c’est l’innovation au service de la sécurité. Parlons-en ensemble pour adapter cette approche à vos besoins spécifiques — sans compromis sur la confidentialité.
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
            “J’ai passé 10h/mois sur ma compta… maintenant, je passe 1h. Et je suis enfin serein pour mes déclarations.”
          </blockquote>
          <p className="text-gray-400 mt-2">— Élodie, photographe indépendante, Soissons</p>
        </section>*/}

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et ses environs</h2>
          <p className="text-gray-300">
            Nous accompagnons les artisans, commerçants et prestataires locaux dans leur gestion financière.
            <br />
            <strong>Discrétion, rigueur et expertise locale</strong> sont nos engagements.
          </p>
        </section>

        {/* CTA avec bouton fonctionnel */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">Vous voulez savoir combien de temps vous perdez chaque mois sur votre comptabilité ?</p>
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

export default ComptabilitePage;