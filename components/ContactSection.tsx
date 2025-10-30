
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        rgpd: false
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.rgpd) {
            setStatus('Veuillez accepter la politique de confidentialité.');
            return;
        }
        setStatus('Envoi en cours...');
        // Simulate form submission
        setTimeout(() => {
            setStatus('Merci ! Votre message a été envoyé avec succès.');
            setFormData({ name: '', email: '', company: '', phone: '', message: '', rgpd: false });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Contactez-nous</h2>
                    <p className="mt-4 text-lg text-gray-400">Prêt à démarrer votre projet IA ? Remplissez le formulaire ci-dessous ou contactez-nous directement.</p>
                </div>

                <div className="mt-16 max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Nom complet*" required value={formData.name} onChange={handleChange} className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
                            <input type="email" name="email" placeholder="Email professionnel*" required value={formData.email} onChange={handleChange} className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input type="text" name="company" placeholder="Entreprise*" required value={formData.company} onChange={handleChange} className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
                            <input type="tel" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleChange} className="bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none" />
                        </div>
                        <div>
                            <textarea name="message" placeholder="Votre message / Vos besoins*" required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-[#6366F1] focus:border-[#6366F1] outline-none"></textarea>
                        </div>
                        <div className="flex items-start">
                            <input id="rgpd" name="rgpd" type="checkbox" required checked={formData.rgpd} onChange={handleChange} className="h-4 w-4 text-[#6366F1] bg-gray-800 border-gray-600 rounded focus:ring-[#6366F1]" />
                            <label htmlFor="rgpd" className="ml-3 block text-sm text-gray-400">
                                J'accepte que mes données soient utilisées pour me recontacter. <a href="#" className="text-[#6366F1] hover:underline">Politique de confidentialité</a>*
                            </label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-[#6366F1] text-white font-bold py-3 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.5)] transform hover:scale-105">
                                Envoyer
                            </button>
                        </div>
                    </form>
                    {status && <p className="mt-4 text-center text-sm text-gray-400">{status}</p>}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
