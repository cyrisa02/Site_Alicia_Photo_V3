// src/pages/PolitiqueConfidentialitePage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Politique de Confidentialité
        </h1>

        <div className="space-y-10 text-gray-300">
          <p>
            Dernière mise à jour : 4 novembre 2025
          </p>

          {/* Introduction */}
          <section>
            <p>
              La confidentialité de vos données personnelles est une priorité absolue pour AlicIA-GPT. Cette politique explique de manière claire et transparente comment nous collectons, utilisons, protégeons et partageons vos informations lorsque vous visitez notre site <a href="https://www.alicia-gpt.fr" className="text-blue-400 hover:underline">alicia-gpt.fr</a>, utilisez notre chatbot, ou remplissez notre formulaire de contact.
              <br /><br />
              En poursuivant votre navigation, vous acceptez les pratiques décrites ci-dessous.
            </p>
          </section>

          {/* 1. Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Quelles données collectons-nous ?</h2>
            <p>
              Nous ne collectons que les données strictement nécessaires à la fourniture de nos services :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Données d’identité</strong> : nom, prénom, email, téléphone, entreprise (fournis via le formulaire de contact)</li>
              <li><strong>Données de navigation</strong> : adresse IP (anonymisée), pages visitées, durée de visite (via Matomo, outil de statistiques open source)</li>
              <li><strong>Messages échangés avec le chatbot</strong> : sauvegardés temporairement (7 jours) pour améliorer la qualité de nos réponses, puis supprimés automatiquement</li>
              <li><strong>Cookies de préférence</strong> : pour retenir votre consentement ou vos choix d’affichage</li>
            </ul>
            <p className="mt-3">
              Aucune donnée sensible (religion, santé, opinions politiques, etc.) n’est collectée.
            </p>
          </section>

          {/* 2. Finalités */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Pourquoi utilisons-nous vos données ?</h2>
            <p>
              Vos données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Vous accompagner dans vos projets (conseil en IA, audit, formation, etc.)</li>
              <li>Améliorer notre site web et l’expérience utilisateur (statistiques anonymisées)</li>
              <li>Respecter nos obligations légales (facturation, comptabilité, déclarations)</li>
            </ul>
            <p className="mt-3">
              Nous ne vendons ni ne commercialisons vos données à des tiers.
            </p>
          </section>

          {/* 3. Bases légales */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Sur quelle base légale ?</h2>
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Votre consentement</strong> (ex: case « J’accepte la politique de confidentialité »)</li>
              <li><strong>L’exécution d’une mission de conseil</strong> (si vous devenez client)</li>
              <li><strong>L’intérêt légitime</strong> pour améliorer notre site (statistiques anonymisées)</li>
            </ul>
          </section>

          {/* 4. Durée de conservation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Combien de temps conservons-nous vos données ?</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Formulaire de contact : 3 ans à compter de la dernière interaction</li>
              <li>Données clients (facturation, prestations) : 10 ans conformément au code de commerce</li>
              <li>Logs de navigation anonymisés : 25 mois</li>
              <li>Messages du chatbot : 7 jours, puis suppression automatique</li>
            </ul>
          </section>

          {/* 5. Vos droits */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Quels sont vos droits ?</h2>
            <p>
              Vous disposez à tout moment des droits suivants, conformément au RGPD :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Droit d’accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l’effacement (« droit à l’oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d’opposition</li>
              <li>Droit de retirer votre consentement</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : <span className="text-white">contact@alicia-gpt.fr</span><br />
              Vous pouvez également déposer une réclamation auprès de la <a href="https://www.cnil.fr" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">CNIL</a>.
            </p>
          </section>

          {/* 6. Sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Comment protégeons-nous vos données ?</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles strictes :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Chiffrement HTTPS (SSL/TLS)</li>
              <li>Hébergement en France (OVHcloud)</li>
              <li>Accès restreint aux données (seul le consultant y a accès)</li>
              <li>Mises à jour régulières des outils et des dépendances (React, TypeScript, etc.)</li>
            </ul>
          </section>

          {/* 7. Mise à jour */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications de cette politique</h2>
            <p>
              Cette politique peut être mise à jour en cas de changement législatif ou d’évolution de nos services. La date de dernière mise à jour sera toujours indiquée en haut de cette page.
            </p>
          </section>
        </div>

        {/* Retour utile */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Vous avez des questions sur la protection de vos données ?
          </p>
          <p className="text-gray-300 mt-2">
            Notre chatbot est là pour vous répondre en toute transparence.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PolitiqueConfidentialitePage;