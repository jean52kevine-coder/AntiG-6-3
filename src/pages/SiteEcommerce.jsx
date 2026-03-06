import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { ChevronDown, Check } from 'lucide-react';

const SiteEcommerce = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        { q: "Quels sont les délais de livraison ?", a: "Vitrine : 7-14 jours ouvrés. E-commerce : 14-21 jours ouvrés. Maintenance : activation sous 48h." },
        { q: "Quelles méthodes de paiement sont incluses ?", a: "Nous intégrons principalement Stripe (CB, Apple Pay) et PayPal, de manière parfaitement sécurisée." },
        { q: "Est-ce difficile d'ajouter un produit ?", a: "Non, nous utilisons un tableau de bord très intuitif et nous vous formons à son utilisation lors de la livraison du site." }
    ];

    const features = [
        "Pages système illimitées",
        "Design E-commerce optimisé conversion",
        "Paiement sécurisé complet",
        "Catalogue illimité et Gestion des stocks",
        "Gestion des commandes automatisée",
        "Tableau de bord administrateur intuitif",
        "Création de codes promo",
        "Hébergement & Domaine (1ère année offerte)"
    ];

    return (
        <div className="w-full">
            {/* HERO */}
            <section className="relative w-full pt-[160px] pb-[80px] px-6">
                <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-start text-left">
                    <div className="inline-flex items-center bg-violet/10 border border-violet/35 text-violetSoft rounded-full px-5 py-1.5 font-sans font-semibold text-[11px] tracking-[0.15em] uppercase mb-6 animate-[fadeIn_0.5s]">
                        • OFFRE DE LANCEMENT EXCLUSIVE •
                    </div>
                    <h1 className="font-display font-extrabold text-[42px] md:text-[68px] text-white leading-[1.05] mb-6 max-w-[800px] animate-[fadeIn_0.8s_0.2s_both]">
                        Propulsez votre <span className="text-transparent bg-gradient bg-clip-text">Business</span> en ligne.
                    </h1>
                    <p className="font-sans text-[18px] text-text2 max-w-[600px] leading-[1.8] animate-[fadeIn_0.8s_0.4s_both]">
                        La solution e-commerce complète pour vendre vos produits 24h/24h, 7j/7j avec une expérience utilisateur fluide et sécurisée.
                    </p>
                </div>
            </section>

            {/* CONTENT & PRICING */}
            <section className="w-full pb-[120px] px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column: Features */}
                    <div className="flex-1 w-full pt-4">
                        <RevealText>
                            <h2 className="font-display font-semibold text-[28px] text-white mb-8 border-b border-white/10 pb-4">
                                Inclus dans votre offre
                            </h2>
                        </RevealText>

                        <div className="flex flex-col">
                            {features.map((feat, i) => (
                                <RevealCard key={i} delay={i * 0.1} className="py-[14px] border-b border-white/5 flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-violet/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Check size={14} strokeWidth={3} className="text-violet" />
                                    </div>
                                    <span className="font-sans font-medium text-[15px] text-white">{feat}</span>
                                </RevealCard>
                            ))}
                        </div>

                        <RevealCard delay={0.8} className="mt-16 w-full">
                            <h3 className="font-display font-bold text-[24px] text-white mb-6">Votre boutique en 3 étapes</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-6 bg-card border border-border rounded-xl">
                                    <div className="font-display font-extrabold text-[32px] text-violet/40 mb-2 leading-none">1</div>
                                    <h4 className="font-display font-bold text-[16px] text-white mb-2">Brief & Design</h4>
                                    <p className="font-sans text-[13px] text-text2">Jours 1-8</p>
                                </div>
                                <div className="p-6 bg-card border border-border rounded-xl">
                                    <div className="font-display font-extrabold text-[32px] text-violet/40 mb-2 leading-none">2</div>
                                    <h4 className="font-display font-bold text-[16px] text-white mb-2">Développement</h4>
                                    <p className="font-sans text-[13px] text-text2">Jours 8-16</p>
                                </div>
                                <div className="p-6 bg-card border border-border rounded-xl">
                                    <div className="font-display font-extrabold text-[32px] text-violet/40 mb-2 leading-none">3</div>
                                    <h4 className="font-display font-bold text-[16px] text-white mb-2">Tests & En ligne</h4>
                                    <p className="font-sans text-[13px] text-text2">Jours 16-21</p>
                                </div>
                            </div>
                        </RevealCard>
                    </div>

                    {/* Right Column: Pricing Card */}
                    <div className="w-full lg:w-[45%] lg:sticky lg:top-[100px] self-start z-20">
                        <RevealCard delay={0.3} className="w-full bg-card border-2 border-violet rounded-3xl p-8 md:p-11 shadow-[0_0_60px_rgba(123,47,255,0.2)] relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient text-white font-sans font-bold text-[10px] tracking-widest uppercase px-6 py-1.5 rounded-b-xl">
                                LE CHOIX PRO
                            </div>

                            <div className="text-center mt-6">
                                <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4">INVESTISSEMENT UNIQUE</span>
                                <div className="flex items-start justify-center text-white mb-2">
                                    <span className="font-display font-extrabold text-[80px] leading-none">747</span>
                                    <div className="flex flex-col items-start ml-2 mt-2">
                                        <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[40px] leading-none">€</span>
                                        <span className="text-text2 font-sans text-[16px] mt-1 tracking-widest">HT</span>
                                    </div>
                                </div>
                                <p className="font-sans text-[14px] text-text2">Pas de commission sur vos ventes.</p>
                            </div>

                            <div className="mt-8 bg-bg2 border border-white/5 rounded-xl p-5 w-full text-left">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-lg">⚡</span>
                                    <span className="font-sans font-medium text-[14px] text-white">Livraison : 14 à 21 jours ouvrés</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🛡️</span>
                                    <span className="font-sans font-medium text-[14px] text-white">Formation admin incluse</span>
                                </div>
                            </div>

                            <Link
                                to="/contact?projet=ecommerce"
                                className="mt-8 w-full flex items-center justify-center h-[54px] bg-gradient text-white font-sans font-semibold text-[16px] rounded-xl hover:brightness-110 hover:-translate-y-1 transition-all duration-300 shadow-[0_12px_36px_rgba(123,47,255,0.35)]"
                            >
                                Démarrer mon projet
                            </Link>
                        </RevealCard>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="w-full py-[100px] px-6 bg-card2 border-t border-border">
                <div className="max-w-[720px] mx-auto">
                    <RevealText className="text-center mb-12">
                        <h2 className="font-display font-bold text-[36px] text-white">Questions fréquentes</h2>
                    </RevealText>

                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, i) => {
                            const isOpen = openFAQ === i;
                            return (
                                <RevealCard key={i} delay={i * 0.1} className={`border rounded-xl bg-card overflow-hidden transition-colors duration-300 ${isOpen ? 'border-border-h' : 'border-border'}`}>
                                    <button
                                        className="w-full px-7 py-6 flex items-center justify-between text-left focus:outline-none"
                                        onClick={() => setOpenFAQ(isOpen ? null : i)}
                                    >
                                        <span className="font-sans font-semibold text-[16px] text-white pr-4">{faq.q}</span>
                                        <ChevronDown size={20} className={`text-violet shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div
                                        className="px-7 overflow-hidden transition-all duration-400 ease-out"
                                        style={{ maxHeight: isOpen ? '200px' : '0', paddingBottom: isOpen ? '24px' : '0', opacity: isOpen ? 1 : 0 }}
                                    >
                                        <p className="font-sans text-[15px] text-text2 leading-[1.75]">{faq.a}</p>
                                    </div>
                                </RevealCard>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SiteEcommerce;
