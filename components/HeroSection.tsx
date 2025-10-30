
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#6366F1]/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#00FFB3]/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
                    Transformez Votre Entreprise avec l'
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#00FFB3]">
                        IA Générative
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-8 animate-fade-in-up animation-delay-300">
                    Votre agence experte à Soissons pour des solutions IA sur-mesure. Audit, formation, et développement pour booster votre productivité.
                </p>
                <div className="flex justify-center items-center space-x-4 animate-fade-in-up animation-delay-600">
                    <a href="#contact" className="bg-[#6366F1] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.5)] transform hover:scale-105">
                        Demander un devis gratuit
                    </a>
                    <a href="#services" className="border-2 border-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105">
                        Découvrir nos services
                    </a>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; animation-fill-mode: both; opacity: 0; }
                .animation-delay-300 { animation-delay: 0.3s; }
                .animation-delay-600 { animation-delay: 0.6s; }
                
                .bg-grid-gray-800\\/20 {
                    background-image: linear-gradient(to right, rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(156, 163, 175, 0.1) 1px, transparent 1px);
                    background-size: 3rem 3rem;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
