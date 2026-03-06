import React from 'react';
import { Link } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { Shield, Lock, Search, Zap } from 'lucide-react';

const Maintenance = () => {
    return (
        <div className="w-full">
            {/* HERO */}
            <section className="relative w-full pt-[160px] pb-[80px] px-6 text-center">
                <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center bg-violet/10 border border-violet/35 text-violetSoft rounded-full px-5 py-1.5 font-sans font-semibold text-[11px] tracking-[0.15em] uppercase mb-6 animate-[fadeIn_0.5s]">
                        SÉRÉNITÉ ABSOLUE
                    </div>
                    <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-white leading-[1.1] mb-6 animate-[fadeIn_0.8s_0.2s_both]">
                        Optimisez votre <span className="text-transparent bg-gradient bg-clip-text">Présence Digitale</span>
                    </h1>
                    <p className="font-sans text-[18px] text-text2 max-w-[600px] mx-auto leading-[1.8] animate-[fadeIn_0.8s_0.4s_both]">
                        Ne laissez pas votre site se détériorer. Protégez-le, mettez-le à jour et consolidez votre référencement Google.
                    </p>
                </div>
            </section>

            {/* PRICING TABLE SECTION */}
            <section className="w-full pb-[120px] px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-stretch">

                        {/* ESSENTIELLE */}
                        <RevealCard delay={0.1} className="w-full bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between self-center min-h-[480px]">
                            <div>
                                <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4">ESSENTIELLE</span>
                                <div className="flex items-start mb-8 text-white">
                                    <span className="font-display font-extrabold text-[64px] leading-none">39</span>
                                    <div className="flex flex-col ml-1">
                                        <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[32px] leading-none">€</span>
                                        <span className="text-text2 font-sans text-[14px]">/mois</span>
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-4 mb-10">
                                    {['Mesures de sécurité', 'Sauvegardes hebdomadaires', 'Monitoring natif', 'Temps de réponse 72h', 'Optimisation SEO basique', '1 modification incluse/mois'].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 w-full pb-3 border-b border-border">
                                            <span className="text-violet font-bold select-none text-[16px] leading-tight">✓</span>
                                            <span className="font-sans text-[15px] text-text2 leading-snug">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact?projet=maint-essentielle" className="w-full flex items-center justify-center h-[52px] bg-transparent border border-white/20 text-white font-sans font-semibold text-[15px] rounded-xl hover:border-violet hover:bg-violet/5 transition-all w-full mt-auto">
                                Choisir cette offre
                            </Link>
                        </RevealCard>

                        {/* PROFESSIONNELLE (RECOMMANDÉ) */}
                        <RevealCard delay={0.3} className="w-full bg-card border-2 border-violet rounded-3xl p-8 lg:p-12 shadow-[0_0_60px_rgba(123,47,255,0.25)] relative overflow-hidden flex flex-col justify-between min-h-[520px] transform scale-100 lg:scale-104 z-10 animate-[priceGlow_3s_ease-in-out_infinite]">
                            <div className="absolute top-0 right-0 bg-gradient text-white font-sans font-bold text-[10px] tracking-widest uppercase px-6 py-2 rounded-bl-xl">
                                RECOMMANDÉ
                            </div>

                            <div>
                                <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4 mt-2">PROFESSIONNELLE</span>
                                <div className="flex items-start mb-8 text-white">
                                    <span className="font-display font-extrabold text-[64px] leading-none">44</span>
                                    <div className="flex flex-col ml-1">
                                        <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[32px] leading-none">€</span>
                                        <span className="text-text2 font-sans text-[14px]">/mois</span>
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-4 mb-10">
                                    {['Mesures de sécurité avancées', 'Sauvegardes quotidiennes', 'Monitoring approfondi', 'Temps de réponse 48h', 'Rapport mensuel détaillé', 'Optimisation SEO avancée', '3 modifications incluses/mois'].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 w-full pb-3 border-b border-border">
                                            <span className="text-violet font-bold select-none text-[16px] leading-tight">✓</span>
                                            <span className="font-sans text-[15px] text-white font-medium leading-snug">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact?projet=maint-pro" className="w-full flex items-center justify-center h-[54px] bg-gradient text-white font-sans font-semibold text-[16px] rounded-xl hover:brightness-110 shadow-[0_12px_36px_rgba(123,47,255,0.35)] transition-all w-full mt-auto">
                                Choisir cette offre
                            </Link>
                        </RevealCard>

                        {/* PREMIUM */}
                        <RevealCard delay={0.5} className="w-full bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between self-center min-h-[480px]">
                            <div>
                                <span className="font-sans font-semibold text-[11px] text-text2 tracking-[0.18em] uppercase block mb-4">PREMIUM</span>
                                <div className="flex items-start mb-8 text-white">
                                    <span className="font-display font-extrabold text-[64px] leading-none">49</span>
                                    <div className="flex flex-col ml-1">
                                        <span className="text-transparent bg-gradient bg-clip-text font-display font-bold text-[32px] leading-none">€</span>
                                        <span className="text-text2 font-sans text-[14px]">/mois</span>
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-4 mb-10">
                                    {['Mesures de sécurité strictes', 'Sauvegardes temps réel', 'Monitoring prédictif', 'Temps de réponse 24h', 'Optimisation SEO complète', 'Modifications illimitées', 'Support téléphonique'].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 w-full pb-3 border-b border-border">
                                            <span className="text-violet font-bold select-none text-[16px] leading-tight">✓</span>
                                            <span className="font-sans text-[15px] text-text2 leading-snug">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact?projet=maint-premium" className="w-full flex items-center justify-center h-[52px] bg-transparent border border-white/20 text-white font-sans font-semibold text-[15px] rounded-xl hover:border-violet hover:bg-violet/5 transition-all w-full mt-auto">
                                Choisir cette offre
                            </Link>
                        </RevealCard>

                    </div>
                </div>
            </section>

            {/* FEATURE BLOCKS */}
            <section className="w-full py-[80px] px-6 bg-[#060613] border-t border-border">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { tag: "Sécurité", title: "Sécurité Maximale", icon: <Lock />, desc: "Pare-feu actif, protection contre le spam et les tentatives d'intrusion." },
                        { tag: "Sauvegarde", title: "Cloud Backup", icon: <Shield />, desc: "Sauvegardes chiffrées hors-site pour garantir zéro perte de données." },
                        { tag: "Trafic", title: "SEO Prédictif", icon: <Search />, desc: "Surveillance de votre courbe de positionnement sur vos mots-clés." },
                        { tag: "Vitalité", title: "Core Web Vitals", icon: <Zap />, desc: "Surveillance des performances pour un temps de chargement éclair." },
                    ].map((block, i) => (
                        <RevealCard key={i} delay={i * 0.15} className="flex flex-col items-start bg-card p-8 rounded-2xl border border-border hover:shadow-[0_0_20px_rgba(123,47,255,0.1)] transition-all">
                            <div className="w-12 h-12 rounded-xl bg-gradient flex items-center justify-center text-white mb-6">
                                {block.icon}
                            </div>
                            <h4 className="font-display font-bold text-[18px] text-white mb-3">{block.title}</h4>
                            <p className="font-sans text-[14px] text-text2 leading-relaxed">{block.desc}</p>
                        </RevealCard>
                    ))}
                </div>
            </section>

            {/* Global Style for the middle card animation */}
            <style>{`
        @keyframes priceGlow {
          0%, 100% { box-shadow: 0 0 40px rgba(123,47,255,0.25), 0 40px 100px rgba(123,47,255,0.2); }
          50% { box-shadow: 0 0 80px rgba(123,47,255,0.45), 0 40px 120px rgba(123,47,255,0.35); }
        }
      `}</style>
        </div>
    );
};

export default Maintenance;
