import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Auto-select project type based on URL query
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const projet = params.get('projet');

        if (projet === 'vitrine') setFormData(prev => ({ ...prev, projectType: 'Site Vitrine' }));
        else if (projet === 'ecommerce') setFormData(prev => ({ ...prev, projectType: 'Site E-commerce' }));
        else if (projet?.startsWith('maint')) setFormData(prev => ({ ...prev, projectType: 'Maintenance & SEO' }));
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request (no backend required per instructions)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <div className="w-full min-h-screen flex items-center pt-[100px] md:pt-[120px] pb-20 px-6">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                {/* LEFT COLUMN: INFO */}
                <div className="w-full lg:w-[45%] flex flex-col">
                    <RevealText delay={0.2} className="w-full">
                        <h1 className="font-display font-extrabold text-[48px] md:text-[64px] text-white leading-[1.1] mb-6">
                            Transformons vos <br />
                            <span className="text-transparent bg-gradient bg-clip-text">visions</span> en réalité.
                        </h1>
                        <p className="font-sans text-[17px] text-text2 max-w-[420px] leading-[1.75]">
                            Une question, un projet ou simplement envie d'échanger ? Notre équipe d'experts est à votre écoute pour concrétiser vos ambitions digitales.
                        </p>
                    </RevealText>

                    <RevealCard delay={0.4} className="mt-9 bg-[linear-gradient(135deg,rgba(123,47,255,0.1)_0%,rgba(0,194,255,0.06)_100%)] border border-violet/25 rounded-2xl p-7 md:p-8 shrink-0">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-4 text-white">
                                <Mail size={20} className="text-violet shrink-0" />
                                <span className="font-sans font-medium text-[15px]">contact@altera.fr</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <Phone size={20} className="text-violet shrink-0" />
                                <span className="font-sans font-medium text-[15px]">+33 1 23 45 67 89</span>
                            </div>
                            <div className="flex items-center gap-4 text-white">
                                <MapPin size={20} className="text-violet shrink-0" />
                                <span className="font-sans font-medium text-[15px]">France — 100% en ligne</span>
                            </div>
                        </div>
                    </RevealCard>

                    <RevealText delay={0.6} className="mt-8">
                        <ul className="flex flex-col gap-[14px]">
                            <li className="flex items-center gap-3">
                                <span className="text-violet font-bold text-[18px]">✓</span>
                                <span className="font-sans font-medium text-[15px] text-white">Réponse garantie sous 24h</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-violet font-bold text-[18px]">✓</span>
                                <span className="font-sans font-medium text-[15px] text-white">Devis gratuit et sans engagement</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-violet font-bold text-[18px]">✓</span>
                                <span className="font-sans font-medium text-[15px] text-white">Échange personnalisé avec un expert</span>
                            </li>
                        </ul>
                    </RevealText>
                </div>

                {/* RIGHT COLUMN: FORM */}
                <div className="w-full lg:w-[55%]">
                    <RevealCard delay={0.4} className="bg-card border border-border rounded-[24px] p-8 md:p-12 w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center animate-[fadeIn_0.5s]">
                                <div className="w-20 h-20 rounded-full bg-violet/20 flex items-center justify-center border-2 border-violet mb-6 relative">
                                    <div className="absolute inset-0 rounded-full bg-violet animate-ping opacity-20"></div>
                                    <span className="text-violet text-4xl">✓</span>
                                </div>
                                <h3 className="font-display font-bold text-[32px] text-transparent bg-gradient bg-clip-text mb-4">Message envoyé !</h3>
                                <p className="font-sans text-[16px] text-text2 max-w-[300px]">Nous avons bien reçu votre demande. Un expert ALTÉRA vous recontactera sous 24 heures.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col w-full">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-sans">
                                    {/* Prénom */}
                                    <div className="flex flex-col animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]" style={{ animationDelay: '0.46s' }}>
                                        <label className="font-sans font-semibold text-[12px] uppercase text-text2 tracking-[0.1em] mb-2">Prénom</label>
                                        <input
                                            required type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                                            className="bg-bg2 border border-violet/15 rounded-[10px] h-[52px] px-[18px] text-white text-[15px] focus:outline-none focus:border-violet focus:shadow-[0_0_0_3px_rgba(123,47,255,0.15)] transition-all"
                                        />
                                    </div>

                                    {/* Nom */}
                                    <div className="flex flex-col animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]" style={{ animationDelay: '0.52s' }}>
                                        <label className="font-sans font-semibold text-[12px] uppercase text-text2 tracking-[0.1em] mb-2">Nom</label>
                                        <input
                                            required type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                                            className="bg-bg2 border border-violet/15 rounded-[10px] h-[52px] px-[18px] text-white text-[15px] focus:outline-none focus:border-violet focus:shadow-[0_0_0_3px_rgba(123,47,255,0.15)] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col mb-4 font-sans animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]" style={{ animationDelay: '0.58s' }}>
                                    <label className="font-sans font-semibold text-[12px] uppercase text-text2 tracking-[0.1em] mb-2">Email</label>
                                    <input
                                        required type="email" name="email" value={formData.email} onChange={handleChange}
                                        className="bg-bg2 border border-violet/15 rounded-[10px] h-[52px] px-[18px] text-white text-[15px] focus:outline-none focus:border-violet focus:shadow-[0_0_0_3px_rgba(123,47,255,0.15)] transition-all"
                                    />
                                </div>

                                {/* Téléphone */}
                                <div className="flex flex-col mb-4 font-sans animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]" style={{ animationDelay: '0.64s' }}>
                                    <label className="font-sans font-semibold text-[12px] uppercase text-text2 tracking-[0.1em] mb-2">Téléphone</label>
                                    <input
                                        required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                        className="bg-bg2 border border-violet/15 rounded-[10px] h-[52px] px-[18px] text-white text-[15px] focus:outline-none focus:border-violet focus:shadow-[0_0_0_3px_rgba(123,47,255,0.15)] transition-all"
                                    />
                                </div>

                                {/* Type de projet */}
                                <div className="flex flex-col mb-4 font-sans animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]" style={{ animationDelay: '0.70s' }}>
                                    <label className="font-sans font-semibold text-[12px] uppercase text-text2 tracking-[0.1em] mb-2">Type de projet</label>
                                    <div className="relative">
                                        <select
                                            name="projectType" required value={formData.projectType} onChange={handleChange}
                                            className="bg-bg2 border border-violet/15 rounded-[10px] h-[52px] px-[18px] text-white text-[15px] focus:outline-none focus:border-violet focus:shadow-[0_0_0_3px_rgba(123,47,255,0.15)] transition-all w-full appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Sélectionnez...</option>
                                            <option value="Site Vitrine">Site Vitrine</option>
                                            <option value="Site E-commerce">Site E-commerce</option>
                                            <option value="Maintenance & SEO">Maintenance & SEO</option>
                                            <option value="Autre">Autre projet</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-text2 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col mb-8 font-sans animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]" style={{ animationDelay: '0.76s' }}>
                                    <label className="font-sans font-semibold text-[12px] uppercase text-text2 tracking-[0.1em] mb-2">Message</label>
                                    <textarea
                                        required name="message" value={formData.message} onChange={handleChange}
                                        className="bg-bg2 border border-violet/15 rounded-[10px] min-h-[150px] py-4 px-[18px] text-white text-[15px] focus:outline-none focus:border-violet focus:shadow-[0_0_0_3px_rgba(123,47,255,0.15)] transition-all resize-y"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-[56px] flex items-center justify-center gap-2 bg-gradient text-white font-sans font-bold text-[16px] rounded-xl hover:brightness-110 hover:-translate-y-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_36px_rgba(123,47,255,0.4)] transition-all duration-250 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed animate-[fadeIn_0.7s_both,translateY_10px_0_0.7s_both]"
                                    style={{ animationDelay: '0.82s' }}
                                >
                                    {isSubmitting ? 'Envoi en cours...' : (
                                        <>
                                            Envoyer ma demande
                                            <Send size={18} className="ml-1" />
                                        </>
                                    )}
                                </button>

                            </form>
                        )}
                    </RevealCard>
                </div>
            </div>
        </div>
    );
};

export default Contact;
