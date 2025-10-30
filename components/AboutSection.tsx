import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="a-propos" className="py-20 sm:py-32 bg-[#0A0A0A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Qui suis-je ?</h2>
                        <p className="text-lg text-gray-400 mb-6">
                            Passionné par la technologie et l'innovation, j'ai fondé AlicIA-GPT pour rendre l'intelligence artificielle accessible aux entreprises locales. Mon parcours m'a convaincu que l'IA est un levier de croissance puissant pour les TPE, PME et artisans.
                        </p>
                        <blockquote className="border-l-4 border-[#6366F1] pl-4 italic text-gray-300 mb-6">
                            "Ma mission est d'humaniser l'IA, de la transformer en un partenaire stratégique pour votre activité, en vous offrant un accompagnement de proximité à Soissons et ses environs."
                        </blockquote>
                        <p className="text-gray-400">
                            Avec une expertise technique pointue et une approche personnalisée, je m'engage à vos côtés pour analyser vos besoins, former vos équipes et intégrer des solutions IA qui ont un impact réel et mesurable sur votre business.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#00FFB3] rounded-full filter blur-2xl"></div>
                            <img 
                                src="/images/photo.png"
                                alt="Fondateur de AlicIA-GPT" 
                                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;