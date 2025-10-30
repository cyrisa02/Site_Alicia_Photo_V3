
import React from 'react';

const processSteps = [
    { num: '01', title: 'Contact & Découverte', description: "Premier échange pour comprendre vos objectifs, vos défis et explorer le potentiel de l'IA pour votre entreprise." },
    { num: '02', title: 'Consulting Stratégique', description: "Audit approfondi de vos processus actuels pour identifier les opportunités d'automatisation et de croissance." },
    { num: '03', title: 'Formation des Équipes', description: "Nous montons vos collaborateurs en compétence pour une adoption fluide et efficace des nouveaux outils IA." },
    { num: '04', title: 'Intégration & Développement', description: "Déploiement de solutions IA sur-mesure, des agents intelligents aux applications personnalisées, parfaitement intégrées à votre écosystème." },
    { num: '05', title: 'Leadership & Autonomie', description: "Nous vous donnons les clés pour devenir leader dans votre secteur grâce à l'IA, en assurant votre autonomie à long terme." }
];

const ProcessSection: React.FC = () => {
    return (
        <section id="processus" className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Notre Procédé en 5 Étapes</h2>
                    <p className="mt-4 text-lg text-gray-400">Un parcours clair et structuré vers votre transformation digitale.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700/50 hidden md:block" aria-hidden="true"></div>
                    <div className="space-y-16">
                        {processSteps.map((step, index) => (
                            <div key={step.num} className="relative flex flex-col md:flex-row items-center">
                                <div className={`flex-1 md:pr-8 text-center md:text-left ${index % 2 === 1 ? 'md:order-2 md:pl-8 md:text-right' : ''}`}>
                                    <h3 className="text-2xl font-bold text-[#6366F1] mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-[#0A0A0A] border-2 border-[#6366F1] flex items-center justify-center my-4 md:my-0 z-10 shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                                    <span className="text-4xl font-bold text-white">{step.num}</span>
                                </div>
                                <div className="flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
