// src/pages/ConditionsGeneralesVentePage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ConditionsGeneralesVentePage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Conditions Générales de Vente (CGV)
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
              Les présentes Conditions Générales de Vente (CGV) régissent l’ensemble des prestations proposées par AlicIA-GPT, notamment :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Conseil en stratégie IA</li>
              <li>Audit de processus et transformation numérique</li>
              <li>Formation aux IA génératives (ChatGPT, Gemini, etc.)</li>
              <li>Accompagnement RH, commercial, comptable, administratif et marketing via l’IA</li>
              <li>Création de sites web, automatisation de workflows, mise en conformité RGPD/IA Act</li>
            </ul>
            <p className="mt-3">
              Toute commande implique l’acceptation pleine et entière des présentes CGV.
            </p>
          </section>

          {/* 2. Commande */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Commande</h2>
            <p>
              La commande s’effectue via :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Le formulaire de contact du site</li>
              <li>Un échange par email ou téléphone</li>
              <li>La signature d’un devis (obligatoire pour toute prestation)</li>
            </ul>
            <p className="mt-3">
              Le devis, une fois signé électroniquement ou validé par email, constitue un bon de commande ferme et engage la responsabilité du client.
            </p>
          </section>

          {/* 3. Prix et paiement */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Prix et modalités de paiement</h2>
            <p>
              Les prix sont indiqués en euros TTC et sont valables au moment de la validation du devis.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Prestations ponctuelles</strong> : règlement en totalité à la signature du devis</li>
              <li><strong>Formules mensuelles</strong> : prélèvement mensuel le 1er du mois (ex: « Compta Sereine », « Marketing Serein »)</li>
              <li><strong>Moyens de paiement acceptés</strong> : virement bancaire, chèque, virement instantané, carte bancaire (via plateforme sécurisée)</li>
            </ul>
            <p className="mt-3">
              Aucun frais supplémentaire ne sera appliqué sans accord préalable écrit.
            </p>
          </section>

          {/* 4. Prestation et délais */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Exécution de la prestation</h2>
            <p>
              Les prestations sont réalisées :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>En présentiel (à Soissons ou environs) ou en visioconférence</li>
              <li>Aux dates convenues dans le devis ou planning partagé</li>
              <li>Sous réserve de la fourniture par le client des éléments nécessaires (accès, documents, etc.)</li>
            </ul>
            <p className="mt-3">
              En cas de retard imputable au client, les délais seront prolongés sans pénalité pour AlicIA-GPT.
            </p>
          </section>

          {/* 5. Droit de rétractation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Droit de rétractation</h2>
            <p>
              Conformément à l’article L.221-28 du Code de la consommation, les particuliers (non professionnels) bénéficient d’un délai de **14 jours** à compter de la signature du devis pour se rétracter, sans justification.
            </p>
            <p className="mt-3">
              Cependant, ce droit ne s’applique **pas** si la prestation a déjà commencé à la demande expresse du client.
            </p>
            <p>
              Pour les professionnels (entreprises, artisans, commerçants), aucune rétractation n’est possible après validation du devis.
            </p>
          </section>

          {/* 6. Garantie et Satisfait ou remboursé */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Garantie « Satisfait ou remboursé »</h2>
            <p>
              AlicIA-GPT s’engage à fournir des prestations de qualité professionnelle. Pour toute première prestation, une garantie **« satisfait ou remboursé »** s’applique :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Valable sur la première heure de prestation (consulting, audit, formation)</li>
              <li>Remboursement intégral si vous n’êtes pas satisfait, sans condition</li>
              <li>À demander par email dans les 48h suivant la prestation</li>
            </ul>
          </section>

          {/* 7. Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation de responsabilité</h2>
            <p>
              AlicIA-GPT s’engage à fournir des conseils et outils fiables, mais décline toute responsabilité :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>En cas de mauvaise utilisation des outils ou recommandations par le client</li>
              <li>Pour les dommages indirects, pertes de données, ou manque à gagner</li>
              <li>En cas de force majeure (panne réseau, indisponibilité d’un tiers, etc.)</li>
            </ul>
          </section>

          {/* 8. Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Propriété intellectuelle</h2>
            <p>
              Tous les documents, modèles, scripts, workflows, rapports et outils fournis dans le cadre d’une prestation restent la propriété intellectuelle de AlicIA-GPT, sauf mention contraire expresse dans le devis.
            </p>
            <p className="mt-3">
              Le client reçoit une **licence d’utilisation à usage interne** non exclusive, non transférable, pour les livrables. Toute reproduction, cession ou diffusion à des tiers est strictement interdite sans autorisation écrite.
            </p>
          </section>

          {/* 9. Loi applicable et litiges */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Loi applicable et règlement des litiges</h2>
            <p>
              Les présentes CGV sont régies par la loi française. En cas de litige, les parties s’engagent à rechercher une solution amiable.
            </p>
            <p className="mt-3">
              À défaut, seuls les tribunaux de **Soissons (Aisne)** seront compétents, nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
          </section>
        </div>

        {/* Retour utile */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Vous souhaitez valider un devis ou poser une question sur nos CGV ?
          </p>
          <p className="text-gray-300 mt-2">
            Contactez-nous directement via le formulaire ou notre chatbot.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default ConditionsGeneralesVentePage;