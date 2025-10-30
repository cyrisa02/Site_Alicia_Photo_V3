import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const SoutienSeniorsPage = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Soutien Numérique Seniors</h1>
        <p className="text-gray-300 text-lg mb-6">
          Vous êtes senior et vous souhaitez vous familiariser avec l’ordinateur, internet, les smartphones ou les tablettes ?
          Nous vous accompagnons pas à pas, à votre rythme, avec bienveillance.
        </p>
        <div className="space-y-4 text-gray-400">
          <p>✅ <strong>Initiation à l’ordinateur</strong> : allumer, utiliser la souris, taper au clavier, gérer vos fichiers.</p>
          <p>✅ <strong>Navigation internet</strong> : rechercher, reconnaître les sites fiables, éviter les arnaques.</p>
          <p>✅ <strong>Courrier électronique</strong> : créer une adresse, envoyer/recevoir des messages, joindre des photos.</p>
          <p>✅ <strong>Smartphone & tablette</strong> : appels, messages, photos, applications utiles (Santé, banque, transports…).</p>
          <p>✅ <strong>Sécurité</strong> : antivirus, mots de passe, mise à jour, protection contre les escroqueries.</p>
          <p>✅ <strong>Dépannage</strong> : virus, logiciels bloqués, connexion internet, imprimante, etc.</p>
        </div>
        <div className="mt-10 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3">📍 À Soissons et dans les Hauts-de-France</h2>
          <p className="text-gray-300">
            En présentiel ou à distance, selon vos préférences. Sessions individuelles ou en petit groupe.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default SoutienSeniorsPage;