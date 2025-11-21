import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons/UiIcons";

const projects = [
  {
    image: "/images/reunion.png",
    year: 2025,
    name: "Compte rendu de réunion automatisé",
    type: "Automatisation & IA",
  },
  {
    image: "/images/devis.png",
    year: 2025,
    name: "Générateur de devis - Agent IA",
    type: "Développement sur-mesure",
  },
  {
    image: "/images/scraping.png",
    year: 2025,
    name: "Web Scraping pour PME",
    type: "Stratégie Marketing",
  },
  {
    image: "/images/formation2.png",
    year: 2025,
    name: "Consulting & Formation pour PME",
    type: "Stratégie & Formation",
  },
  {
    image: "/images/seo.png",
    year: 2025,
    name: "Optimisation SEO Local",
    type: "Marketing Digital",
  },
  {
    image: "/images/vapi.png",
    year: 2025,
    name: "Chatbot de Support Client",
    type: "Développement sur-mesure",
  },
];

const PortfolioSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // État : visibilité du texte pour chaque slide (true = visible, false = caché)
  const [textVisibility, setTextVisibility] = useState<boolean[]>(
    Array(projects.length).fill(true)
  );

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  // Effet : gère l’animation de visibilité du texte sur la slide active
  useEffect(() => {
    // Réinitialise la visibilité à `true` dès qu’on arrive sur une nouvelle slide
    setTextVisibility((prev) => {
      const updated = [...prev];
      updated[currentIndex] = true;
      return updated;
    });

    // Démarrer un intervalle pour basculer visibilité toutes les 5s
    const intervalId = setInterval(() => {
      setTextVisibility((prev) => {
        const updated = [...prev];
        // Basculer uniquement la slide active
        updated[currentIndex] = !updated[currentIndex];
        return updated;
      });
    }, 5000); // 5 secondes

    // Nettoyage de l’intervalle quand on quitte la slide ou démonte le composant
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Nos Réalisations
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Quelques exemples de projets qui illustrent notre expertise.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative h-110 rounded-lg">
            <div
              className="flex transition-transform ease-out duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full relative"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-black/20 flex flex-col justify-end p-8 transition-opacity duration-500 ${
                      textVisibility[index] ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-sm text-[#00FFB3] font-semibold">
                      {project.year} - {project.type}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Slide précédente"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
            aria-label="Slide suivante"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-[#6366F1]" : "bg-gray-700"
                }`}
                aria-label={`Aller au projet ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
