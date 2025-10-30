// src/pages/HomePage.tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProcessSection from '../components/ProcessSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <WhyUsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default HomePage;