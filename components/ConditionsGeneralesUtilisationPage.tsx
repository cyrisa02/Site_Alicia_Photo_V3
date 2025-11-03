// src/pages/ConditionsGeneralesUtilisationPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ConditionsGeneralesUtilisationPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Conditions Générales d’Utilisation (CGU)
        </h1>

        <div className="space-y-10 text-gray-300">
          <p>
            Dernière mise à jour : 4 novembre 2025<br />
            Éditeur : AlicIA-GPT — Agence IA & Consulting, auto-entrepreneur, SIRET 123 456 789 00010, 12 rue de la Paix, 02200 Soissons
          </p>

          {/* 1. Objet */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d’Utilisation (CGU) définissent les modalités d’accès et d’utilisation du site <a href="https://www.alicia-gpt.fr" className="text-blue-400 hover:underline">alicia-gpt.fr</a> (ci-après « le Site »).
            </p>
            <p className="mt-3">
              Toute utilisation du Site implique l’acceptation pleine et entière des présentes CGU. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser le Site.
            </p>
          </section>

          {/* 2. Accès au site */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Accès au Site</h2>
            <p>
              L’accès au Site est gratuit, ouvert à tous et accessible 24h/24, 7j/7, sous réserve de :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>La disponibilité du réseau internet</li>
              <li>Les opérations de maintenance (notifiées si possible 24h à l’avance)</li>
              <li>Les cas de force majeure (panne d’hébergement, cyberattaque, etc.)</li>
            </ul>
            <p className="mt-3">
              AlicIA-GPT se réserve le droit de suspendre, modifier ou interrompre tout ou partie du Site sans préavis.
            </p>
          </section>

          {/* 3. Utilisation du site */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Utilisation autorisée</h2>
            <p>
              Vous vous engagez à utiliser le Site de manière :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Loyale, licite et conforme à l’ordre public</li>
              <li>Non intrusive (pas de scrapers, bots malveillants, attaques)</li>
              <li>Respectueuse des droits de propriété intellectuelle de l’éditeur</li>
            </ul>
            <p className="mt-3">
              Il est strictement interdit de :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Reproduire, copier ou extraire du contenu sans autorisation</li>
              <li>Utiliser le Site à des fins commerciales non autorisées</li>
              <li>Tenter de compromettre la sécurité du Site ou de ses utilisateurs</li>
            </ul>
          </section>

          {/* 4. Chatbot et IA */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Utilisation du chatbot</h2>
            <p>
              Le chatbot intégré au Site utilise des technologies d’IA générative à des fins d’assistance.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Les échanges sont **anonymisés** et conservés **7 jours** maximum, puis supprimés.</li>
              <li>Le chatbot ne remplace pas un conseil professionnel personnalisé.</li>
              <li>Vous êtes seul responsable de l’usage que vous faites des réponses générées.</li>
            </ul>
            <p className="mt-3">
              AlicIA-GPT ne garantit pas l’exactitude des réponses du chatbot, qui sont fournies à titre indicatif.
            </p>
          </section>

          {/* 5. Liens hypertextes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Liens hypertextes</h2>
            <p>
              Le Site peut contenir des liens vers des sites tiers. Ces liens sont fournis pour votre commodité.
            </p>
            <p className="mt-3">
              AlicIA-GPT n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, politiques de confidentialité ou pratiques.
            </p>
          </section>

          {/* 6. Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Propriété intellectuelle</h2>
            <p>
              Tous les éléments du Site (textes, logos, icônes, code source, design, structure) sont protégés par le droit d’auteur et/ou la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation ou diffusion, même partielle, est strictement interdite sans l’accord écrit préalable de l’éditeur.
            </p>
          </section>

          {/* 7. Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Données personnelles</h2>
            <p>
              L’utilisation du Site peut impliquer la collecte de données personnelles. Cette collecte est encadrée par notre <a href="/politique-confidentialite" className="text-blue-400 hover:underline">Politique de Confidentialité</a>, que vous êtes invité à consulter.
            </p>
          </section>

          {/* 8. Limitation de responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation de responsabilité</h2>
            <p>
              AlicIA-GPT met tout en œuvre pour assurer la qualité et la sécurité du Site, mais ne peut garantir :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>L’absence totale d’erreurs ou d’interruptions</li>
              <li>La compatibilité avec tout matériel ou logiciel</li>
              <li>L’exactitude des informations fournies (notamment par le chatbot)</li>
            </ul>
            <p className="mt-3">
              En aucun cas AlicIA-GPT ne pourra être tenu responsable de dommages directs ou indirects découlant de l’utilisation du Site.
            </p>
          </section>

          {/* 9. Modification des CGU */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Modification des CGU</h2>
            <p>
              AlicIA-GPT se réserve le droit de modifier les présentes CGU à tout moment. Les modifications seront publiées en ligne avec la date de mise à jour.
            </p>
            <p className="mt-3">
              Votre utilisation continue du Site vaut acceptation des nouvelles conditions.
            </p>
          </section>

          {/* 10. Loi applicable */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Loi applicable</h2>
            <p>
              Les présentes CGU sont régies par la loi française. En cas de litige relatif à l’utilisation du Site, les tribunaux de **Soissons (Aisne)** seront seuls compétents.
            </p>
          </section>
        </div>

        {/* Retour utile */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Vous avez des questions sur l’utilisation de notre site ?
          </p>
          <p className="text-gray-300 mt-2">
            Notre chatbot ou notre formulaire de contact sont à votre disposition.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default ConditionsGeneralesUtilisationPage;