import React from "react";
import {
  ChartBarIcon,
  AcademicCapIcon,
  UsersIcon,
  OfficeBuildingIcon,
  MegaphoneIcon,
  CalculatorIcon,
  BriefcaseIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  LightBulbIcon,
  UserGroupIcon,
  LifebuoyIcon,
} from "./icons/ServiceIcons";
import { Link, useNavigate } from "react-router-dom";

const services = [
  {
    icon: <ChartBarIcon />,
    title: "Audit & Conseil",
    description:
      "Analyse de vos processus et feuille de route IA personnalisée.",
    href: "/audit-conseil",
  },
  {
    icon: <AcademicCapIcon />,
    title: "Formations",
    description: "Rendez vos équipes opérationnelles sur les IA génératives.",
    href: "/formations",
  },
  {
    icon: <UsersIcon />,
    title: "Ressources Humaines",
    description: "Agents IA pour l'analyse de CV, onboarding, et plus.",
    href: "/rh",
  },
  {
    icon: <OfficeBuildingIcon />,
    title: "Administration",
    description: "Automatisation de newsletters, reportings et devis.",
    href: "/administration",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Marketing Digital",
    description:
      "Stratégie, veille concurrentielle, création de contenu automatisée et web scraping.",
    href: "/marketing-digital",
  },
  {
    icon: <CalculatorIcon />,
    title: "Comptabilité",
    description:
      "Agents intelligents pour la TVA et l'automatisation comptable.",
    href: "/comptabilite",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Support Commercial",
    description: "Qualification de leads, relances clients et CRM intelligent.",
    href: "/support-commercial",
  },
  {
    icon: <ScaleIcon />,
    title: "Juridique",
    description: "Veille juridique, conformité RGPD et IA Act.",
    href: "/juridique",
  },
  {
    icon: <ComputerDesktopIcon />,
    title: "Sites & SEO Local",
    description:
      "Création de sites vitrines, e-commerce et référencement local.",
    href: "/sites-seo-local",
  },
  {
    icon: <LightBulbIcon />,
    title: "Créateurs d'Entreprises",
    description: "Conseil, organisation et bac à sable pour vos idées.",
    href: "/soutien-createurs",
  },
  {
    icon: <UserGroupIcon />,
    title: "Étudiants",
    description:
      "Outils et applications IA pour l'apprentissage et la recherche.",
    href: "/soutien-etudiants",
  },
  {
    icon: <LifebuoyIcon />,
    title: "Soutien Numérique Seniors/Débutants",
    description: "Assistance informatique, antivirus et dépannage.",
    href: "/soutien-seniors",
  },
];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}> = ({ icon, title, description, href }) => {
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche le comportement par défaut de <Link> ou <a>
    if (!href) return;

    // 1. Navigue vers la nouvelle page
    navigate(href);

    // 2. Scroll en haut (après un petit délai pour attendre le rendu)
    // Utilisation de setTimeout pour attendre la fin de la transition/routage
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // 100ms suffisent dans la plupart des cas
  };

  const content = (
    <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-300 hover:border-[#6366F1] hover:-translate-y-1">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-[#6366F1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="mb-4 text-[#6366F1] group-hover:text-[#00FFB3] transition-colors duration-300">
          {React.cloneElement(icon as React.ReactElement, {
            className: "h-10 w-10",
          })}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Bouton "En savoir plus" avec gestion du scroll */}
        <button
          onClick={handleButtonClick}
          className="inline-flex items-center px-4 py-2 bg-[#6366F1] text-white font-medium rounded-lg transition-colors duration-300 hover:bg-[#00FFB3] hover:text-gray-900"
          aria-label={`En savoir plus sur ${title}`}
        >
          En savoir plus
        </button>
      </div>
    </div>
  );

  // On supprime le wrapper <Link> autour de la carte : on gère tout via le bouton
  return content;
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Nos Services
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Des solutions complètes pour intégrer l'intelligence artificielle au
            cœur de votre métier.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
