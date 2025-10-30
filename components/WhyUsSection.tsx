
import React from 'react';
import { SparklesIcon, LocationMarkerIcon, BeakerIcon, UserCircleIcon, ShieldCheckIcon } from './icons/UiIcons';

const reasons = [
    { icon: <SparklesIcon />, title: "Expertise Technique", description: "Nous maîtrisons les dernières technologies IA pour vous offrir des solutions performantes et innovantes." },
    { icon: <LocationMarkerIcon />, title: "Proximité Locale", description: "Basés à Soissons, nous offrons un service réactif et un accompagnement personnalisé aux entreprises de la région." },
    { icon: <BeakerIcon />, title: "Méthodologie Éprouvée", description: "Notre processus en 5 étapes garantit une intégration réussie, de l'audit initial à votre autonomie complète." },
    { icon: <UserCircleIcon />, title: "Accompagnement Personnalisé", description: "Chaque entreprise est unique. Nous créons des stratégies sur-mesure adaptées à vos objectifs spécifiques." },
    { icon: <ShieldCheckIcon />, title: "Qualité & Sécurité", description: "Nous développons des solutions fiables, sécurisées et conformes au RGPD pour protéger vos données et celles de vos clients." }
];

const WhyUsSection: React.FC = () => {
    return (
        <section id="pourquoi-nous" className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Pourquoi nous choisir ?</h2>
                    <p className="mt-4 text-lg text-gray-400">5 raisons de nous faire confiance pour votre transformation IA.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="text-center p-6 bg-[#0A0A0A] rounded-lg border border-gray-800">
                             <div className="flex justify-center mb-4 text-[#00FFB3]">
                                {React.cloneElement(reason.icon as React.ReactElement, { className: 'h-10 w-10' })}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                            <p className="text-gray-400">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
