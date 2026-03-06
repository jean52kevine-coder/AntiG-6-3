import React from 'react';
import { Link } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { Globe, ShoppingCart, Shield } from 'lucide-react';

const Services = () => {
    return (
        <div className="w-full">
            {/* HERO */}
            <section className="relative w-full pt-[160px] pb-[80px] px-6 text-center">
                <div className="max-w-[800px] mx-auto relative z-10">
                    <div className="inline-flex items-center bg-violet/10 border border-violet/35 text-violetSoft rounded-full px-5 py-1.5 font-sans font-semibold text-[11px] tracking-[0.15em] uppercase mb-6 animate-[fadeIn_0.5s]">
                        NOS SAVOIR-FAIRE
                    </div>
                    <h1 className="font-display font-extrabold text-[40px] md:text-[64px] text-white leading-[1.1] mb-6 animate-[fadeIn_0.8s_0.2s_both]">
                        Propulsez votre présence digitale vers de <span className="text-transparent bg-gradient bg-clip-text">nouveaux sommets</span>
                    </h1>
                    <p className="font-sans text-[18px] text-text2 max-w-[600px] mx-auto leading-[1.8] animate-[fadeIn_0.8s_0.4s_both]">
                        Nous concevons des écosystèmes web intelligents, optimisés pour la conversion et conçus pour durer.
                    </p>
                </div>
            </section>

            {/* SERVICE ROWS */}
            <section className="w-full relative z-10 pb-[100px]">

                {/* Row 1: Vitrine */}
                <div className="w-full py-[80px] px-6 border-t border-white/5">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[60px]">
                        <RevealCard className="w-full md:w-[55%] flex flex-col items-start pr-0 md:pr-10">
                            <div className="w-[64px] h-[64px] rounded-2xl bg-violet/10 flex items-center justify-center mb-6 border border-violet/20">
                                <Globe size={32} className="text-violet" />
                            </div>
                            <h3 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-5 line-height-[1.2]">
                                Site Vitrine Premium
                            </h3>
                            <p className="font-sans text-[16px] text-text2 leading-[1.7] mb-6">
                                Le socle digital indispensable pour présenter votre activité avec élégance.
                                Ce n'est pas qu'une simple vitrine, c'est votre atout majeur pour convaincre
                                et acquérir de nouveaux clients de manière organique.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 font-sans text-[15px] text-white">
                                    <span className="text-violet">✓</span> Design sur-mesure & Mobile-First
                                </li>
                                <li className="flex items-center gap-3 font-sans text-[15px] text-white">
                                    <span className="text-violet">✓</span> Intégration SEO native & Formulaires de contact
                                </li>
                            </ul>
                            <div className="flex items-center gap-6">
                                <Link to="/site-vitrine" className="bg-gradient text-white font-sans font-semibold text-[15px] px-7 py-3 rounded-lg hover:shadow-[0_8px_25px_rgba(123,47,255,0.4)] transition-all">
                                    Découvrir l'offre
                                </Link>
                                <div className="font-sans font-bold text-[20px] text-white border-b border-violet pb-0.5">497€</div>
                            </div>
                        </RevealCard>

                        <RevealCard delay={0.2} className="w-full md:w-[45%] h-[340px] rounded-[30px] bg-card border border-border relative overflow-hidden flex items-center justify-center">
                            {/* Abstract Visual */}
                            <div className="absolute w-[200px] h-[200px] rounded-full border border-violet/30 top-10 left-10 animation-spin-slow"></div>
                            <div className="absolute w-[260px] h-[260px] rounded-full border border-cyan/20 bottom-10 right-10 animation-spin-reverse-slow"></div>
                            <div className="w-full h-full bg-grid-pattern opacity-[0.03]"></div>
                            <Globe size={100} className="text-violet opacity-80" strokeWidth={1} />
                        </RevealCard>
                    </div>
                </div>

                {/* Row 2: E-commerce */}
                <div className="w-full py-[80px] px-6 bg-[#060613] border-t border-white/5">
                    <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center gap-[60px]">

                        <RevealCard delay={0.2} className="w-full md:w-[45%] h-[340px] rounded-[30px] bg-card border border-border relative overflow-hidden flex items-center justify-center">
                            {/* Abstract Visual */}
                            <div className="absolute w-[80%] h-[80%] bg-[radial-gradient(ellipse,rgba(123,47,255,0.15)_0%,transparent_70%)]"></div>
                            <div className="flex flex-col gap-4 items-center">
                                <div className="w-[120px] h-3 bg-white/5 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full w-[60%] bg-violet rounded-full"></div>
                                </div>
                                <ShoppingCart size={80} className="text-white relative z-10 mix-blend-overlay" strokeWidth={1.5} />
                            </div>
                        </RevealCard>

                        <RevealCard className="w-full md:w-[55%] flex flex-col items-start pl-0 md:pl-10">
                            <div className="w-[64px] h-[64px] rounded-2xl bg-cyan/10 flex items-center justify-center mb-6 border border-cyan/20">
                                <ShoppingCart size={32} className="text-cyan" />
                            </div>
                            <h3 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-5 line-height-[1.2]">
                                Boutique E-commerce
                            </h3>
                            <p className="font-sans text-[16px] text-text2 leading-[1.7] mb-6">
                                Vendez vos produits 24h/24h et 7j/7j de manière totalement sécurisée.
                                Gérez efficacement vos stocks, vos commandes, et offrez une expérience d'achat fluide.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 font-sans text-[15px] text-white">
                                    <span className="text-cyan">✓</span> Paiement sécurisé (Stripe/PayPal)
                                </li>
                                <li className="flex items-center gap-3 font-sans text-[15px] text-white">
                                    <span className="text-cyan">✓</span> Back-office complet : Catalogue et Commandes
                                </li>
                            </ul>
                            <div className="flex items-center gap-6">
                                <Link to="/site-ecommerce" className="bg-gradient text-white font-sans font-semibold text-[15px] px-7 py-3 rounded-lg hover:shadow-[0_8px_25px_rgba(123,47,255,0.4)] transition-all">
                                    Découvrir l'offre
                                </Link>
                                <div className="font-sans font-bold text-[20px] text-white border-b border-cyan pb-0.5">747€</div>
                            </div>
                        </RevealCard>

                    </div>
                </div>

                {/* Row 3: Maintenance */}
                <div className="w-full py-[80px] px-6 border-t border-white/5">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[60px]">
                        <RevealCard className="w-full md:w-[55%] flex flex-col items-start pr-0 md:pr-10">
                            <div className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center mb-6 border border-violet bg-[linear-gradient(135deg,rgba(123,47,255,0.2)_0%,rgba(0,194,255,0.1)_100%)]">
                                <Shield size={32} className="text-white" />
                            </div>
                            <h3 className="font-display font-bold text-[32px] md:text-[40px] text-white mb-5 line-height-[1.2]">
                                Maintenance & SEO Expert
                            </h3>
                            <p className="font-sans text-[16px] text-text2 leading-[1.7] mb-6">
                                Pour qu'un site soit performant, il ne doit pas être abandonné après sa création.
                                Nos packs sécurisent vos données, protègent votre site et améliorent sa position sur Google en continu.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 font-sans text-[15px] text-white">
                                    <span className="text-violet">✓</span> Sauvegardes automatisées & monitoring
                                </li>
                                <li className="flex items-center gap-3 font-sans text-[15px] text-white">
                                    <span className="text-violet">✓</span> Optimisation sémantique et Google Business Core
                                </li>
                            </ul>
                            <div className="flex items-center gap-6">
                                <Link to="/maintenance" className="bg-transparent border border-white/20 text-white font-sans font-semibold text-[15px] px-7 py-3 rounded-lg hover:border-violet hover:bg-violet/5 transition-all">
                                    Voir les packs
                                </Link>
                                <div className="font-sans font-bold text-[18px] text-white">Dès 39€/mois</div>
                            </div>
                        </RevealCard>

                        <RevealCard delay={0.2} className="w-full md:w-[45%] h-[340px] rounded-[30px] bg-card border border-border relative overflow-hidden flex items-center justify-center">
                            {/* Abstract visual shield */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.1)_0%,transparent_60%)]"></div>
                            <div className="w-[120px] h-[140px] border-[2px] border-cyan/40 rounded-t-full rounded-b-3xl relative flex items-center justify-center shadow-[0_0_50px_rgba(0,194,255,0.2)]">
                                <div className="absolute w-[60px] h-[80px] border border-violet/50 rounded-t-full rounded-b-2xl"></div>
                            </div>
                        </RevealCard>
                    </div>
                </div>

            </section>

            {/* PROCESS TIMELINE */}
            <section className="w-full py-[120px] px-6 bg-bg2 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto">
                    <RevealText className="text-center mb-20">
                        <h2 className="font-display font-bold text-[36px] md:text-[44px] text-white mb-4">Notre Processus de Travail</h2>
                        <p className="font-sans text-[16px] text-text2 max-w-[500px] mx-auto">Une méthodologie éprouvée et transparente pour un lancement sans stress.</p>
                    </RevealText>

                    {/* Desktop Timeline */}
                    <div className="hidden md:flex relative items-start justify-between">
                        {/* The dashed line connector */}
                        <div className="absolute top-[40px] left-[60px] right-[60px] h-[2px] border-t-2 border-dashed border-violet/25 z-0"></div>

                        {[
                            { num: '01', title: 'Échange', desc: 'Compréhension profonde de votre business, vos cibles et objectifs commerciaux.' },
                            { num: '02', title: 'Conception', desc: 'Création de la maquette structurelle et validation du design.' },
                            { num: '03', title: 'Développement', desc: 'Intégration propre et performante de tout le code du site.' },
                            { num: '04', title: 'Livraison', desc: 'Tests finaux, mise en production et formation pour la prise en main.' }
                        ].map((step, i) => (
                            <RevealCard key={i} delay={i * 0.15} className="flex flex-col items-center text-center relative z-10 w-[220px]">
                                <div className="w-[80px] h-[80px] bg-card border-2 border-violet rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(123,47,255,0.3)] mb-6 transition-transform hover:scale-110">
                                    <span className="font-display font-extrabold text-[28px] text-transparent bg-gradient bg-clip-text">{step.num}</span>
                                </div>
                                <h4 className="font-display font-bold text-[20px] text-white mb-3">{step.title}</h4>
                                <p className="font-sans text-[14px] text-text2 leading-[1.6]">{step.desc}</p>
                            </RevealCard>
                        ))}
                    </div>

                    {/* Mobile Timeline */}
                    <div className="flex md:hidden flex-col gap-10 relative">
                        <div className="absolute top-0 bottom-0 left-[39px] w-[2px] border-l-2 border-dashed border-violet/25 z-0"></div>
                        {[
                            { num: '01', title: 'Échange', desc: 'Compréhension profonde de votre business, cibles et objectifs.' },
                            { num: '02', title: 'Conception', desc: 'Création de la structure et validation du design.' },
                            { num: '03', title: 'Développement', desc: 'Intégration propre et performante des pages.' },
                            { num: '04', title: 'Livraison', desc: 'Tests finaux, mise en production et prise en main.' }
                        ].map((step, i) => (
                            <RevealCard key={i} delay={i * 0.15} className="flex gap-6 relative z-10 align-start">
                                <div className="w-[80px] h-[80px] shrink-0 bg-card border-2 border-violet rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(123,47,255,0.2)]">
                                    <span className="font-display font-extrabold text-[28px] text-transparent bg-gradient bg-clip-text">{step.num}</span>
                                </div>
                                <div className="pt-2">
                                    <h4 className="font-display font-bold text-[20px] text-white mb-2">{step.title}</h4>
                                    <p className="font-sans text-[14px] text-text2 leading-[1.6]">{step.desc}</p>
                                </div>
                            </RevealCard>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
