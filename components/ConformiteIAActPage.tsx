// src/pages/ConformiteIAActPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ConformiteIAActPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Conformité au Règlement Européen sur l’IA (IA Act)
        </h1>

        <div className="space-y-10 text-gray-300">
          <p>
            Dernière mise à jour : 4 novembre 2025<br />
            Éditeur : AlicIA-GPT — Agence IA & Consulting, auto-entrepreneur, SIRET 123 456 789 00010, 12 rue de la Paix, 02200 Soissons
          </p>

          {/* Introduction */}
          <section>
            <p>
              Le Règlement (UE) 2024/XXX sur l’intelligence artificielle (« IA Act »), applicable depuis août 2025, instaure un cadre juridique harmonisé en Europe pour garantir la sécurité, la transparence et le respect des droits fondamentaux.
              <br /><br />
              AlicIA-GPT adhère pleinement à ce cadre. Ce document explique notre position, nos obligations et les mesures que nous mettons en œuvre.
            </p>
          </section>

          {/* 1. Notre statut au regard de l’IA Act */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Notre rôle : fournisseur, utilisateur ou intégrateur ?</h2>
            <p>
              AlicIA-GPT **n’est pas un fournisseur de systèmes d’IA** au sens de l’article 3 du IA Act. Nous n’entraînons ni ne déployons nos propres modèles d’IA.
            </p>
            <p className="mt-3">
              Nous sommes :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Utilisateur professionnel</strong> d’IA génératives (ChatGPT, Gemini, Claude, etc.) pour nos propres tâches (rédaction, analyse, automatisation)</li>
              <li><strong>Intégrateur-conseil</strong> : nous accompagnons nos clients dans l’usage responsable de systèmes d’IA tiers</li>
            </ul>
            <p className="mt-3">
              Aucune de nos prestations ne repose sur un **système d’IA à haut risque** tel que défini par le IA Act (ex: recrutement automatisé, systèmes biométriques, etc.).
            </p>
          </section>

          {/* 2. Transparence sur l’usage de l’IA */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information des utilisateurs</h2>
            <p>
              Conformément à l’article 50 du IA Act, nous informons clairement lorsque du contenu est généré ou modifié par une IA :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Le **chatbot** intégré à notre site affiche un bandeau : « Ce service utilise une IA générative. Les réponses sont indicatives. »</li>
              <li>Nos **documents livrés** (devis, rapports, templates) incluent une mention : « Élaboré avec l’aide d’outils d’IA générative, vérifié et validé par un humain. »</li>
              <li>Aucune décision automatisée **juridiquement contraignante** (licenciement, refus de crédit, etc.) n’est prise par une IA dans le cadre de nos services.</li>
            </ul>
          </section>

          {/* 3. Risques et atténuation */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Gestion des risques</h2>
            <p>
              Bien que nos usages relèvent de l’**IA à risque minimal**, nous appliquons des mesures de vigilance :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Vérification humaine systématique</strong> : tout contenu généré par IA est relu, corrigé et validé par un consultant</li>
              <li><strong>Refus des usages interdits</strong> : nous n’utilisons jamais l’IA pour du profilage social, de la reconnaissance émotionnelle ou de la manipulation subliminale</li>
              <li><strong>Respect du droit d’auteur</strong> : nous évitons la reproduction de contenus protégés ; nous favorisons les outils open source ou licenciés</li>
            </ul>
          </section>

          {/* 4. Formation et veille */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Compétence et formation</h2>
            <p>
              Conformément à l’esprit du IA Act, notre consultant :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Suit une **veille juridique mensuelle** sur l’IA (CNIL, Commission européenne, ANSSI)</li>
              <li>A suivi une **formation certifiante** sur l’éthique et la conformité IA en 2025</li>
              <li>Partage régulièrement des bonnes pratiques avec les clients (ex: « Comment éviter les biais en IA »)</li>
            </ul>
          </section>

          {/* 5. Collaboration avec les fournisseurs */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Fournisseurs d’IA utilisés</h2>
            <p>
              Nous utilisons exclusivement des systèmes d’IA conformes au IA Act, hébergés en UE ou dans des pays reconnus comme « adéquats » :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>OpenRouter + modèles open source</strong> (Mistral, Llama 3) → hébergés en France</li>
              <li><strong>Google Gemini</strong> → conforme au cadre européen via l’accord EU-U.S. Data Privacy Framework</li>
              <li><strong>Anthropic Claude</strong> → engagement public de conformité IA Act</li>
            </ul>
            <p className="mt-3">
              Nous ne recourons pas à des fournisseurs situés dans des juridictions non conformes (ex: Chine, Russie) pour le traitement de données européennes.
            </p>
          </section>

          {/* 6. Droits des utilisateurs */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Vos droits</h2>
            <p>
              En tant qu’utilisateur du Site ou client de nos prestations, vous avez le droit de :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Savoir si une IA a été utilisée dans la production d’un contenu vous concernant</li>
              <li>Demander une explication humaine si une recommandation d’IA vous semble erronée</li>
              <li>Signaler un contenu potentiellement non conforme via : <span className="text-white">contact@alicia-gpt.fr</span></li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Engagement éthique</h2>
            <p>
              L’IA est un outil au service de l’humain, pas l’inverse. Chez AlicIA-GPT, chaque usage est encadré, transparent et validé par un expert local basé à Soissons.
              <br /><br />
              Nous croyons en une IA **utile, accessible, fiable et humaine**.
            </p>
          </section>
        </div>

        {/* Retour utile */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Vous souhaitez en savoir plus sur notre conformité IA ?
          </p>
          <p className="text-gray-300 mt-2">
            Contactez-nous — nous répondons en humain, pas en IA.
          </p>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default ConformiteIAActPage;