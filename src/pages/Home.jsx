import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { MapPin, Zap, Diamond, Headphones, Globe, ShoppingCart, Shield } from 'lucide-react';

const Home = () => {
    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
                {/* Central Orb behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(123,47,255,0.18)_0%,transparent_65%)] z-0 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-[1200px] w-full mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-violet/10 border border-violet/35 text-violetSoft rounded-full px-5 py-[7px] font-sans font-semibold text-[11px] tracking-[0.18em] uppercase mb-8 animate-[fadeIn_0.5s_ease-out,_slideDown_0.5s_ease-out]">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
                        AGENCE WEB PREMIUM
                    </div>

                    {/* H1 Headline */}
                    <h1 className="font-display font-extrabold text-[42px] md:text-[80px] leading-[1.05] tracking-tight mb-6">
                        <span className="text-white block bg-clip-text">Votre présence en ligne,</span>
                        <span
                            className="block text-transparent bg-gradient bg-clip-text bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]"
                        >
                            repensée.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="font-sans text-[18px] text-text2 max-w-[560px] leading-[1.8] mb-10 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
                        Nous créons des sites internet performants pour artisans, commerces et PME. Design sur-mesure, résultats concrets.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_0.8s_ease-out_0.9s_both,translateY_0.8s_ease-out_0.9s_both]">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center h-[54px] px-9 bg-gradient text-white font-sans font-semibold text-[16px] rounded-xl transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_36px_rgba(123,47,255,0.45)]"
                        >
                            Démarrer mon projet →
                        </Link>
                        <Link
                            to="/services"
                            className="flex items-center justify-center h-[54px] px-8 bg-transparent border border-white/10 text-white font-sans font-medium text-[16px] rounded-xl transition-all duration-300 hover:border-violet/50"
                        >
                            Découvrir nos services
                        </Link>
                    </div>
                </div>

                {/* Infinite Marquee Ticker */}
                <div className="absolute bottom-10 left-0 w-full overflow-hidden mt-20 z-10 flex">
                    <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
                        {[...Array(2)].map((_, i) => (
                            <span key={i} className="text-[13px] font-sans text-text3 tracking-[0.05em] mx-4 uppercase">
                                • Maintenance & SEO • Référencement Local • Design Premium • Site Vitrine • Site E-commerce • Livraison Rapide
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="w-full py-[130px] px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                    <span className="font-sans font-semibold text-[11px] text-violet tracking-[0.2em] uppercase mb-6">POURQUOI ALTÉRA ?</span>
                    <h2 className="font-display font-bold text-[32px] md:text-[50px] text-white mb-4">
                        Pourquoi choisir <span className="text-transparent bg-gradient bg-clip-text">ALTÉRA</span> ?
                    </h2>
                    <p className="font-sans text-[16px] text-text2 max-w-[560px] mb-16">
                        Des solutions web pensées pour votre rentabilité et votre image de marque.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] w-full">
                        {[
                            { num: '01', title: 'Expertise locale', icon: <MapPin size={24} className="text-violet" />, desc: 'Nous comprenons les besoins des entreprises locales. Design sur-mesure, résultats concrets.' },
                            { num: '02', title: 'Livraison rapide', icon: <Zap size={24} className="text-violet" />, desc: 'Sites livrés en 7 à 21 jours ouvrés. Nous créons des sites internet performants sans délai inutile.' },
                            { num: '03', title: 'Design premium', icon: <Diamond size={24} className="text-violet" />, desc: 'Nous concevons des interfaces esthétiques et modernes qui valorisent instantanément votre image professionnelle.' },
                            { num: '04', title: 'Support dédié', icon: <Headphones size={24} className="text-violet" />, desc: 'Un accompagnement continu avant, pendant, et après la mise en ligne de votre projet web.' }
                        ].map((card, i) => (
                            <RevealCard key={i} delay={i * 0.1} className="relative overflow-hidden bg-card border border-border rounded-xl p-9 text-left group transition-all duration-350 hover:-translate-y-1.5 hover:border-border-h hover:shadow-[0_0_30px_rgba(123,47,255,0.2)]">
                                <span className="absolute -top-2 right-4 font-display font-extrabold text-[120px] text-violet/5 leading-none select-none z-0">
                                    {card.num}
                                </span>
                                <div className="relative z-10">
                                    <div className="w-[52px] h-[52px] rounded-xl bg-violet/10 flex items-center justify-center mb-5">
                                        {card.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-[20px] text-white mb-2">{card.title}</h3>
                                    <p className="font-sans text-[15px] text-text2 leading-[1.75]">{card.desc}</p>
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="w-full py-[120px] px-6 bg-bg2 relative">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-sans font-semibold text-[11px] text-violet tracking-[0.2em] uppercase mb-6 block">NOS SERVICES</span>
                        <h2 className="font-display font-bold text-[32px] md:text-[50px] text-white">
                            Des <span className="text-transparent bg-gradient bg-clip-text">solutions adaptées</span> à chaque besoin.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Site Vitrine', icon: <Globe size={28} className="text-violet" />, price: '497€', link: '/site-vitrine', desc: "Un site professionnel sur-mesure pour présenter votre activité, vos services et attirer vos premiers clients." },
                            { title: 'Site E-commerce', icon: <ShoppingCart size={28} className="text-violet" />, price: '747€', link: '/site-ecommerce', desc: "Une boutique en ligne performante pour vendre vos produits 24h/24h avec paiement sécurisé complet." },
                            { title: 'Maintenance & SEO', icon: <Shield size={28} className="text-violet" />, price: 'Dès 39€/mois', link: '/maintenance', desc: "Sécurisation, mises à jour, sauvegardes et optimisation continue de votre référencement Google." }
                        ].map((srv, i) => (
                            <RevealCard key={i} delay={i * 0.15} className="bg-card border border-border rounded-[20px] p-8 relative overflow-hidden group transition-all duration-350 hover:-translate-y-2 hover:border-violet hover:shadow-[0_20px_60px_rgba(123,47,255,0.2)]">
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="mb-6">{srv.icon}</div>
                                <h3 className="font-display font-bold text-[22px] text-white mb-4">{srv.title}</h3>
                                <p className="font-sans text-[15px] text-text2 leading-[1.7] mb-6">{srv.desc}</p>
                                <div className="inline-block bg-gradient text-white font-sans font-bold text-[14px] px-[14px] py-1 rounded-full mb-6 relative">
                                    {srv.price}
                                </div>
                                <div className="w-full h-px bg-white/5 mb-4" />
                                <Link to={srv.link} className="font-sans font-medium text-[14px] text-violet hover:underline">
                                    En savoir plus →
                                </Link>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUICK COMPARISON TABLE (Vitrine vs E-commerce) */}
            <section className="w-full py-[120px] px-6">
                <div className="max-w-[1200px] mx-auto text-center">
                    <RevealText>
                        <h2 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-4">Le bon site pour votre activité</h2>
                        <p className="font-sans text-[16px] text-text2 mb-12">Comparez rapidement nos deux d'offres principales.</p>
                    </RevealText>

                    <RevealCard delay={0.2} className="w-full overflow-hidden border border-border rounded-2xl bg-card">
                        <div className="grid grid-cols-3">
                            {/* Header */}
                            <div className="col-span-1 p-6 bg-violet/5 flex items-center justify-start text-left border-b border-border">
                                <span className="font-sans font-semibold text-[13px] text-text2">Caractéristique</span>
                            </div>
                            <div className="col-span-1 p-6 bg-violet/5 flex justify-center items-center text-center border-b border-border">
                                <span className="font-sans font-bold text-[16px] text-cyan">Site Vitrine</span>
                            </div>
                            <div className="col-span-1 p-6 bg-violet/5 flex justify-center items-center text-center border-b border-border">
                                <span className="font-sans font-bold text-[16px] text-violet">Site E-commerce</span>
                            </div>

                            {/* Rows */}
                            {[
                                { label: 'Objectif principal', vitrine: 'Présence, contacts', ecom: 'Ventes en ligne' },
                                { label: 'Nombre de pages', vitrine: '1 à 5 pages', ecom: 'Illimité' },
                                { label: 'Catalogue & Panier', vitrine: '✗', ecom: '✓' },
                                { label: 'Paiement sécurisé', vitrine: '✗', ecom: '✓' },
                                { label: 'Livraison estimée', vitrine: '7 à 14 jours', ecom: '14 à 21 jours' },
                            ].map((row, i) => (
                                <React.Fragment key={i}>
                                    <div className={`col-span-1 p-4 md:p-6 text-left flex items-center border-b border-white/5 ${i % 2 === 0 ? 'bg-[#05050F]' : 'bg-[#08081A]'}`}>
                                        <span className="font-sans text-[14px] text-white">{row.label}</span>
                                    </div>
                                    <div className={`col-span-1 p-4 md:p-6 text-center flex items-center justify-center border-b border-white/5 ${i % 2 === 0 ? 'bg-[#05050F]' : 'bg-[#08081A]'}`}>
                                        <span className={`font-sans font-medium text-[15px] ${row.vitrine === '✓' ? 'text-violet' : row.vitrine === '✗' ? 'text-text3' : 'text-text2'}`}>{row.vitrine}</span>
                                    </div>
                                    <div className={`col-span-1 p-4 md:p-6 text-center flex items-center justify-center border-b border-white/5 ${i % 2 === 0 ? 'bg-[#05050F]' : 'bg-[#08081A]'}`}>
                                        <span className={`font-sans font-medium text-[15px] ${row.ecom === '✓' ? 'text-violet' : row.ecom === '✗' ? 'text-text3' : 'text-text2'}`}>{row.ecom}</span>
                                    </div>
                                </React.Fragment>
                            ))}

                            {/* Price row */}
                            <div className="col-span-1 p-6 bg-card flex items-center">
                                <span className="font-sans font-semibold text-[14px] text-white uppercase tracking-wider">Investissement</span>
                            </div>
                            <div className="col-span-1 p-6 bg-card text-center text-cyan font-display font-bold text-[24px]">497€</div>
                            <div className="col-span-1 p-6 bg-card text-center text-violet font-display font-bold text-[24px]">747€</div>
                        </div>
                    </RevealCard>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="w-full py-[120px] px-6">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="font-display font-bold text-[32px] md:text-[50px] text-white mb-16">
                        Ce que disent nos <span className="text-transparent bg-gradient bg-clip-text">clients</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                        {[
                            { name: "Justine Parios", role: "Gérante / Commerçante", quote: "Depuis que nous avons refait notre site avec ALTÉRA, les appels clients ont doublé. Un site magnifique et une équipe toujours réactive." },
                            { name: "Aarnant Maroon", role: "Fondateur de Start-up", quote: "Leur approche orientée conversion et leur design premium ont complètement transformé notre image de marque dès le lancement." }
                        ].map((testi, i) => (
                            <RevealCard key={i} delay={i * 0.2} className="bg-card2 border border-border rounded-2xl p-9 text-left shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                                <div className="flex text-[#F59E0B] text-[18px] gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                </div>
                                <p className="font-sans italic text-[17px] text-text2 leading-[1.8] mb-6 block before:content-['\201C'] after:content-['\201D']">
                                    {testi.quote}
                                </p>
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="w-[44px] h-[44px] rounded-full bg-gradient flex items-center justify-center font-display font-bold text-[16px] text-white shrink-0">
                                        {testi.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-semibold text-[16px] text-white">{testi.name}</h4>
                                        <p className="font-sans text-[14px] text-text2">{testi.role}</p>
                                    </div>
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="w-full py-[100px] px-6">
                <RevealCard delay={0.1} className="max-w-[800px] mx-auto bg-gradient-to-br from-violet/10 to-cyan/5 border border-violet/30 rounded-[28px] p-10 md:p-[80px] text-center shadow-[0_30px_80px_rgba(123,47,255,0.15)] relative overflow-hidden backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                    <h2 className="relative z-10 font-display font-extrabold text-[36px] md:text-[52px] text-white leading-tight mb-5">
                        Prêt à transformer votre présence en ligne ?
                    </h2>
                    <p className="relative z-10 font-sans text-[17px] text-text2 max-w-[500px] mx-auto line-height-[1.6] mb-9">
                        Discutons de votre projet lors d'une consultation gratuite de 30 minutes. Pas de pression, juste des conseils d'experts.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 inline-flex items-center justify-center h-[56px] px-8 bg-gradient text-white font-sans font-semibold text-[17px] rounded-xl transition-all duration-300 hover:brightness-110 hover:-translate-y-1 shadow-[0_12px_36px_rgba(123,47,255,0.4)]"
                    >
                        Démarrer mon projet →
                    </Link>
                </RevealCard>
            </section>

            {/* Global CSS for Animations */}
            <style>{`
        @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideDown { from{opacity:0; transform:translateY(-10px)} to{opacity:1; transform:translateY(0)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
        </div>
    );
};

export default Home;
