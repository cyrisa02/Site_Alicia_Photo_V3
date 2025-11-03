import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-white">
              Alic<span className="text-[#6366F1]">IA</span>-GPT
            </a>
            <p className="text-gray-500 mt-2">© 2025 AlicIA-GPT. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/cyril-gourdon/" className="text-gray-400 hover:text-white transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href="https://github.com/cyrisa02" className="text-gray-400 hover:text-white transition-colors">
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-400">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="/conditions-generales-de-vente" className="hover:text-white transition-colors">CGV</a>
            <a href="/conditions-generales-d-utilisation" className="hover:text-white transition-colors">CGU</a>
            <a href="/conformite-ia-act" className="hover:text-white transition-colors">Conformité IA Act</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;