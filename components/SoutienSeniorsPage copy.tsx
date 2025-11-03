// src/pages/SoutienSeniorsPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const SoutienSeniorsPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Soutien Numérique pour les Seniors et Débutants sur Soissons
        </h1>

        {/* Image impactante */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/senior.png"
            alt="Un technicien accompagne une senior avec un sourire devant un ordinateur — Support informatique de confiance"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px] hover:scale-102 transition-transform duration-300"
          />
          <div className="bg-black/70 p-4 text-center">
            <p className="text-white text-sm italic">
              “Support Informatique — Votre aide de confiance”
            </p>
          </div>
        </div>

        {/* Introduction rassurante */}
        <p className="text-gray-300 text-lg mb-8">
          Vous débutez dans l'informatique et vous aimeriez utiliser votre ordinateur, tablette ou smartphone en toute sérénité ?
          <br />
          Vous n'arrivez pas à connecter votre imprimante ou votre scanner à votre ordinateur ?
          <br />
          Vous avez des problèmes de connexion internet ?
          <br />
          Votre ordinateur tourne au ralenti ?
          <br />
          <strong>Nous sommes là pour vous accompagner, pas à pas, sans jargon, avec patience et bienveillance.</strong>
        </p>

        {/* Services proposés */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Nos accompagnements sur mesure</h2>
          <div className="space-y-4 text-gray-400">
            <p>✅ <strong>Initiation à l’ordinateur</strong> : allumer, utiliser la souris, taper au clavier, gérer vos fichiers.</p>
            <p>✅ <strong>Navigation internet</strong> : rechercher, reconnaître les sites fiables, éviter les arnaques en ligne.</p>
            <p>✅ <strong>Courrier électronique</strong> : créer une adresse, envoyer/recevoir des messages, joindre des photos.</p>
            <p>✅ <strong>Smartphone & tablette</strong> : appels, messages, photos, applications utiles (Santé, banque, transports…).</p>
            <p>✅ <strong>Sécurité numérique</strong> : antivirus, mots de passe robustes, mises à jour, protection contre les escroqueries.</p>
            <p>✅ <strong>Dépannage express</strong> : virus, logiciels bloqués, connexion internet, imprimante, etc.</p>
          </div>
        </section>

        {/* Offres & formules */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">Nos formules simples et transparentes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li><strong>À la séance</strong> : 45 € / heure, sans engagement.</li>
            <li><strong>Formule « Tranquillité »</strong> : 3 heures par mois à 120 € (soit 40 €/h), avec priorité d’intervention.</li>
            {/* 
    <li><strong>Ateliers collectifs</strong> : initiation gratuite en partenariat avec les associations locales 
    (Soissons, Fère-en-Tardenois, etc.).</li>
  */}
          </ul>
          <p className="mt-3 text-sm text-gray-400 italic">
            Première heure satisfait ou remboursé  
          </p>
        </section>

        {/* Témoignage Google */}
        <section className="mb-12 p-6 bg-gray-900/50 border border-gray-700 rounded-xl text-center">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.736c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-gray-200 italic text-lg">
            « Le conseiller m'a super bien aidé, maintenant j'ai tous mes mots de passe centralisés et mes favoris accessibles. »
          </blockquote>
          <p className="text-gray-400 mt-2">— Jean-Louis, Soissons</p>
        </section>

        {/* Proximité géographique */}
        <section className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et ses environs</h2>
          <p className="text-gray-300">
            Nous intervenons à votre domicile ou en visioconférence, selon vos préférences.
            <br />
            <strong>Confiance, discrétion et respect</strong> sont au cœur de notre accompagnement.
          </p>
        </section>

        {/* CTA implicite */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Une question ? Besoin d’un diagnostic rapide ?
          </p>
          <p className="text-gray-300 mt-2">
            Notre chatbot est là pour vous guider en quelques clics.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default SoutienSeniorsPage;