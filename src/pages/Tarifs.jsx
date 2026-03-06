import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { Check, ChevronDown } from 'lucide-react';

const Tarifs = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        { q: "Quels sont les délais de livraison ?", a: "Vitrine : 7-14 jours ouvrés. E-commerce : 14-21 jours ouvrés. Maintenance : activation sous 48h." },
        { q: "Le nom de domaine est-il inclus ?", a: "Oui, le nom de domaine et l'hébergement sont inclus la première année pour les offres Vitrine et E-commerce." },
        { q: "Puis-je modifier mon pack plus tard ?", a: "Absolument. Vous pouvez évoluer vers un pack supérieur à tout moment. Nous vous accompagnons dans cette transition." }
    ];

    return (
        <div className="w-full">
            {/* HERO */}
            <section className="relative w-full pt-[160px] pb-[80px] px-6 text-center">
                <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
                    <h1 className="font-display font-extrabold text-[40px] md:text-[72px] text-white leading-[1.05] mb-6 animate-[fadeIn_0.8s_0.2s_both]">
                        Des Tarifs <span className="text-transparent bg-gradient bg-clip-text">Clairs</span>.<br /> Zéro Surprise.
                    </h1>
                    <p className="font-sans text-[18px] text-text2 max-w-[560px] mx-auto leading-[1.8] animate-[fadeIn_0.8s_0.4s_both]">
                        Pas de frais cachés. Des prix fixes pour des résultats concrets.
                    </p>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="w-full pb-[120px] px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-stretch">

                    {/* VITRINE */}
                    <RevealCard delay={0.1} className="w-full bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col self-center min-h-[540px]">
                        <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4">SITE VITRINE</span>
                        <div className="flex items-start mb-2 text-white">
                            <span className="font-display font-extrabold text-[80px] leading-none">497</span>
                            <div className="flex flex-col ml-1">
                                <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[40px] leading-none">€</span>
                                <span className="text-text2 font-sans text-[14px] mt-1">Unique</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-border my-8" />

                        <ul className="flex flex-col gap-5 mb-10 text-left">
                            {['1 à 5 pages', 'Responsive mobile', 'SEO optimisé', 'Livraison 7-14 jours'].map((feat, i) => (
                                <li key={i} className="flex items-start gap-4 w-full">
                                    <Check size={18} className="text-violet shrink-0 mt-0.5" strokeWidth={2.5} />
                                    <span className="font-sans text-[15px] text-text2 whitespace-nowrap">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact?projet=vitrine" className="mt-auto w-full flex items-center justify-center h-[52px] bg-transparent border border-border-h text-white font-sans font-semibold text-[15px] rounded-xl hover:bg-gradient hover:border-transparent transition-all duration-300">
                            Démarrer mon projet
                        </Link>
                    </RevealCard>

                    {/* E-COMMERCE (CENTER, HIGHLIGHTED) */}
                    <RevealCard delay={0.3} className="w-full bg-card border-2 border-violet rounded-3xl p-8 lg:p-10 shadow-[0_0_60px_rgba(123,47,255,0.25)] relative overflow-hidden flex flex-col min-h-[580px] transform scale-100 lg:scale-104 z-10 animate-[priceGlow_3s_ease-in-out_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient text-white font-sans font-bold text-[11px] tracking-[0.15em] uppercase px-6 py-2 rounded-b-full">
                            BEST SELLER
                        </div>

                        <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4 mt-6 text-left">SITE E-COMMERCE</span>
                        <div className="flex items-start mb-2 text-white text-left">
                            <span className="font-display font-extrabold text-[80px] leading-none">747</span>
                            <div className="flex flex-col ml-1">
                                <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[40px] leading-none">€</span>
                                <span className="text-text2 font-sans text-[14px] mt-1">Unique</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-border my-8" />

                        <ul className="flex flex-col gap-5 mb-10 text-left">
                            {['Pages illimitées', 'Paiement sécurisé', 'Gestion des stocks', 'Livraison 14-21 jours'].map((feat, i) => (
                                <li key={i} className="flex items-start gap-4 w-full">
                                    <Check size={18} className="text-violet shrink-0 mt-0.5" strokeWidth={2.5} />
                                    <span className="font-sans text-[15px] text-white font-medium whitespace-nowrap">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/contact?projet=ecommerce" className="mt-auto w-full flex items-center justify-center h-[54px] bg-gradient text-white font-sans font-semibold text-[16px] rounded-xl hover:brightness-110 shadow-[0_12px_36px_rgba(123,47,255,0.35)] transition-all duration-300">
                            Démarrer mon projet
                        </Link>
                    </RevealCard>

                    {/* MAINTENANCE */}
                    <RevealCard delay={0.5} className="w-full bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col self-center min-h-[540px]">
                        <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4">MAINTENANCE</span>
                        <div className="flex items-start mb-2 text-white">
                            <span className="font-display font-extrabold text-[80px] leading-none">39</span>
                            <div className="flex flex-col ml-1">
                                <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[32px] leading-none">€</span>
                                <span className="text-text2 font-sans text-[14px] mt-1 block h-4 overflow-visible whitespace-nowrap">/mois</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-border my-8" />

                        <ul className="flex flex-col gap-5 mb-10 text-left">
                            {['Sécurité & sauvegardes', 'Monitoring continu', 'Optimisation SEO', 'Support réactif'].map((feat, i) => (
                                <li key={i} className="flex items-start gap-4 w-full">
                                    <Check size={18} className="text-violet shrink-0 mt-0.5" strokeWidth={2.5} />
                                    <span className="font-sans text-[15px] text-text2 whitespace-nowrap">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/maintenance" className="mt-auto w-full flex items-center justify-center h-[52px] bg-transparent border border-border-h text-white font-sans font-semibold text-[15px] rounded-xl hover:bg-gradient hover:border-transparent transition-all duration-300">
                            Voir les formules
                        </Link>
                    </RevealCard>

                </div>
            </section>

            {/* DETAILED COMPARISON TABLE */}
            <section className="w-full pb-[120px] px-6">
                <div className="max-w-[1000px] mx-auto text-center">
                    <RevealText>
                        <h2 className="font-display font-bold text-[40px] text-white mb-3">Comparatif Détaillé</h2>
                        <p className="font-sans text-[16px] text-text2 mb-12">Pour ceux qui veulent entrer dans les détails techniques.</p>
                    </RevealText>

                    <RevealCard delay={0.2} className="w-full overflow-x-auto rounded-[20px] border border-border bg-card">
                        <table className="w-full min-w-[700px] border-collapse bg-transparent text-left">
                            <thead>
                                <tr className="bg-violet/10 border-b border-border">
                                    <th className="py-5 px-6 font-sans font-semibold text-[13px] text-text2 uppercase tracking-wide">Caractéristique</th>
                                    <th className="py-5 px-6 font-sans font-bold text-[15px] text-cyan text-center">Site Vitrine</th>
                                    <th className="py-5 px-6 font-sans font-bold text-[15px] text-violet text-center">Site E-commerce</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Nom de domaine offert", v: true, e: true },
                                    { label: "Hébergement inclus (1 an)", v: true, e: true },
                                    { label: "Adresses e-mail pro", v: true, e: true },
                                    { label: "Catalogue produits", v: false, e: true },
                                    { label: "Module paiement sécurisé", v: false, e: true },
                                    { label: "Formation administration", v: false, e: true },
                                    { label: "Suivi et support dédié", v: true, e: true },
                                ].map((row, i) => (
                                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-[#05050F]' : 'bg-[#08081A]'}`}>
                                        <td className="py-4 px-6 font-sans text-[15px] text-white">{row.label}</td>
                                        <td className="py-4 px-6 text-center">
                                            {row.v ? <Check size={18} className="text-violet mx-auto" /> : <span className="text-[#3A3A5A] text-[18px]">×</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {row.e ? <Check size={18} className="text-violet mx-auto" /> : <span className="text-[#3A3A5A] text-[18px]">×</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </RevealCard>
                </div>
            </section>

            {/* FAQ */}
            <section className="w-full pb-[120px] px-6">
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

            <style>{`
        @keyframes priceGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(123,47,255,0.25), 0 40px 100px rgba(123,47,255,0.2); }
          50% { box-shadow: 0 0 80px rgba(123,47,255,0.45), 0 40px 120px rgba(123,47,255,0.35); }
        }
      `}</style>
        </div>
    );
};

export default Tarifs;
