// src/pages/MentionsLegalesPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Mentions Légales
        </h1>

        <div className="space-y-10 text-gray-300">
          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Éditeur du site</h2>
            <p>
              <strong>Nom de l’entreprise :</strong> AlicIA-GPT — Agence IA & Consulting<br />
              <strong>Forme juridique :</strong> Auto-entrepreneur (EI)<br />
              <strong>SIRET :</strong> 123 456 789 00010<br />
              <strong>TVA intracommunautaire :</strong> FR12 123456789<br />
              <strong>Siège social :</strong> 12 rue de la Paix, 02200 Soissons, France<br />
              <strong>Téléphone :</strong> +33 6 12 34 56 78<br />
              <strong>Email :</strong> contact@alicia-gpt.fr<br />
              <strong>Directeur de la publication :</strong> [Votre Prénom Nom]
            </p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>OVHcloud</strong><br />
              SAS au capital de 10 059 500 €<br />
              RCS Lille Métropole 424 761 419 00045<br />
              Siège social : 2 rue Kellermann, 59100 Roubaix, France<br />
              Site web : <a href="https://www.ovhcloud.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ovhcloud.com</a>
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriété intellectuelle</h2>
            <p>
              Tous les contenus présents sur ce site (textes, images, logos, graphismes, vidéos, outils IA, code source, etc.) sont la propriété exclusive de AlicIA-GPT ou font l’objet d’une licence d’utilisation.
              <br /><br />
              Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l’autorisation écrite préalable de l’éditeur.
            </p>
          </section>

          {/* Données personnelles & RGPD */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Données personnelles (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, de portabilité et d’opposition concernant vos données personnelles.
              <br /><br />
              Ces données sont collectées uniquement pour :
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Répondre à vos demandes via le formulaire de contact</li>
                <li>Vous envoyer des informations si vous y avez consenti</li>
                <li>Améliorer l’expérience utilisateur via des outils anonymisés (ex: Matomo)</li>
              </ul>
              <br />
              Aucune donnée n’est revendue à des tiers. Vos données sont stockées sur des serveurs situés en France ou dans l’Union Européenne.
              <br /><br />
              Pour exercer vos droits, contactez-nous à : <span className="text-white">contact@alicia-gpt.fr</span>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies</h2>
            <p>
              Ce site utilise des cookies à des fins statistiques anonymisées (via Matomo) et fonctionnelles (préférences utilisateur).
              <br /><br />
              Vous pouvez refuser ces cookies à tout moment via le bandeau de consentement ou en configurant votre navigateur. Cela n’empêchera pas le bon fonctionnement du site.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation de responsabilité</h2>
            <p>
              AlicIA-GPT s’efforce de fournir des informations fiables, mais ne peut garantir l’exactitude, la complétude ou l’actualité des contenus.
              <br /><br />
              L’utilisation des outils, conseils ou documents mis à disposition sur ce site se fait sous la seule responsabilité de l’utilisateur.
              <br /><br />
              AlicIA-GPT décline toute responsabilité en cas de préjudice direct ou indirect lié à l’utilisation du site ou des services proposés.
            </p>
          </section>

          {/* Loi applicable */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Loi applicable</h2>
            <p>
              Les présentes mentions légales sont régies par la loi française. En cas de litige, les parties s’engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, les tribunaux de Soissons (Aisne) seront seuls compétents.
            </p>
          </section>
        </div>

        {/* Retour utile */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Des questions sur nos mentions légales ?
          </p>
          <p className="text-gray-300 mt-2">
            Notre chatbot est là pour vous éclairer en quelques clics.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default MentionsLegalesPage;