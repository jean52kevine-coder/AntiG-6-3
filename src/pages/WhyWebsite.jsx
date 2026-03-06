import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RevealCard, RevealText } from '../components/RevealCard';
import { Globe, ShieldCheck, TrendingUp, Smartphone } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2500, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // easeOutExpo
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    setCount(Math.floor(easeProgress * end));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });

        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <span ref={nodeRef}>
            {count}{suffix}
        </span>
    );
}

const WhyWebsite = () => {
    return (
        <div className="w-full">
            {/* HERO */}
            <section className="relative w-full pt-[160px] pb-[80px] px-6 text-center">
                <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center bg-violet/10 border border-violet/35 text-violetSoft rounded-full px-5 py-1.5 font-sans font-semibold text-[11px] tracking-[0.15em] uppercase mb-6 animate-[fadeIn_0.5s]">
                        L'ENJEU CRUCIAL
                    </div>
                    <h1 className="font-display font-extrabold text-[40px] md:text-[68px] text-white leading-[1.05] mb-6 animate-[fadeIn_0.8s_0.2s_both]">
                        Votre <span className="text-transparent bg-gradient bg-clip-text">entreprise</span> doit exister.
                    </h1>
                    <p className="font-sans text-[18px] text-text2 max-w-[560px] mx-auto leading-[1.8] animate-[fadeIn_0.8s_0.4s_both]">
                        Aujourd'hui, le bouche-à-oreille ne suffit plus. Un site web est le cœur stratégique de votre développement.
                    </p>
                </div>
            </section>

            {/* STATS BARS */}
            <section className="w-full py-[80px] bg-bg2 border-y border-white/5 my-10">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    <RevealCard delay={0.1}>
                        <div className="font-display font-extrabold text-[60px] md:text-[88px] text-transparent bg-gradient bg-clip-text leading-none mb-3">
                            <AnimatedCounter end={81} suffix="%" />
                        </div>
                        <p className="font-sans text-[14px] text-text2 max-w-[180px] mx-auto leading-relaxed">
                            des consommateurs recherchent en ligne avant d'acheter.
                        </p>
                    </RevealCard>

                    <RevealCard delay={0.3}>
                        <div className="font-display font-extrabold text-[60px] md:text-[88px] text-transparent bg-gradient bg-clip-text leading-none mb-3">
                            <AnimatedCounter end={46} suffix="%" />
                        </div>
                        <p className="font-sans text-[14px] text-text2 max-w-[180px] mx-auto leading-relaxed">
                            des recherches Google ont une intention strictement locale.
                        </p>
                    </RevealCard>

                    <RevealCard delay={0.5}>
                        <div className="font-display font-extrabold text-[60px] md:text-[88px] text-transparent bg-gradient bg-clip-text leading-none mb-3">
                            <AnimatedCounter end={92} suffix="%" />
                        </div>
                        <p className="font-sans text-[14px] text-text2 max-w-[180px] mx-auto leading-relaxed">
                            des internautes visitent la 1ère page de recherche sur Google.
                        </p>
                    </RevealCard>

                </div>
            </section>

            {/* 4 PILLARS GRID */}
            <section className="w-full py-[100px] px-6">
                <div className="max-w-[1200px] mx-auto">
                    <RevealText className="text-center mb-16">
                        <h2 className="font-display font-bold text-[36px] md:text-[44px] text-white">4 Piliers Incontournables</h2>
                    </RevealText>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <RevealCard delay={0.1} className="bg-card border border-border rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-[52px] h-[52px] rounded-xl bg-gradient flex items-center justify-center mb-6">
                                <Globe size={26} className="text-white" />
                            </div>
                            <h3 className="font-display font-bold text-[22px] text-white mb-4">Visibilité Absolue</h3>
                            <p className="font-sans text-[15px] text-text2 leading-relaxed">
                                Sans site, vous êtes invisible pour tous ceux qui ne passent pas devant votre porte.
                                Avec un site, vous êtes ouvert en permanence, accessible depuis n'importe où.
                            </p>
                        </RevealCard>

                        <RevealCard delay={0.2} className="bg-card border border-border rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-[52px] h-[52px] rounded-xl bg-gradient flex items-center justify-center mb-6">
                                <ShieldCheck size={26} className="text-white" />
                            </div>
                            <h3 className="font-display font-bold text-[22px] text-white mb-4">Crédibilité Instantanée</h3>
                            <p className="font-sans text-[15px] text-text2 leading-relaxed">
                                Vos prospects jugent votre fiabilité en quelques secondes sur la base de votre design.
                                Une présence web de très haute qualité inspire immédiatement confiance.
                            </p>
                        </RevealCard>

                        <RevealCard delay={0.3} className="bg-card border border-border rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-[52px] h-[52px] rounded-xl bg-gradient flex items-center justify-center mb-6">
                                <TrendingUp size={26} className="text-white" />
                            </div>
                            <h3 className="font-display font-bold text-[22px] text-white mb-4">Croissance Organique</h3>
                            <p className="font-sans text-[15px] text-text2 leading-relaxed">
                                Le référencement Google centralise le trafic qualifié vers vos offres sans que vous
                                ayez à payer sans cesse pour de la publicité. C'est un actif durable.
                            </p>
                        </RevealCard>

                        <RevealCard delay={0.4} className="bg-card border border-border rounded-3xl p-10 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-[52px] h-[52px] rounded-xl bg-gradient flex items-center justify-center mb-6">
                                <Smartphone size={26} className="text-white" />
                            </div>
                            <h3 className="font-display font-bold text-[22px] text-white mb-4">Expérience Mobile-First</h3>
                            <p className="font-sans text-[15px] text-text2 leading-relaxed">
                                La majorité des recherches se fait aujourd'hui sur mobile. Votre site web est votre commercial digital
                                qui se glisse parfaitement dans la poche de vos futurs clients.
                            </p>
                        </RevealCard>
                    </div>
                </div>
            </section>

            {/* CLOSING / CTA */}
            <section className="w-full py-[120px] px-6 text-center">
                <RevealCard delay={0.1} className="max-w-[800px] mx-auto">
                    <h2 className="font-display italic font-bold text-[28px] md:text-[32px] text-white mb-6 leading-relaxed">
                        "Sans site web, vous perdez des <span className="text-transparent bg-gradient bg-clip-text">clients qualifiés</span> chaque jour."
                    </h2>
                    <p className="font-sans text-[16px] text-text2 mb-12">
                        Il est temps de reprendre le contrôle de votre canal d'acquisition.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex flex items-center justify-center h-[54px] px-10 bg-gradient text-white font-sans font-semibold text-[16px] rounded-xl hover:brightness-110 shadow-[0_12px_36px_rgba(123,47,255,0.4)] transition-all duration-300"
                    >
                        Créer mon site premium →
                    </Link>
                </RevealCard>
            </section>

        </div>
    );
};

export default WhyWebsite;
