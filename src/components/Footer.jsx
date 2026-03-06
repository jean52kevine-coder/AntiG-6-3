import React from 'react';
import { Link } from 'react-router-dom';

const AlteraLogo = () => (
    <div className="flex items-center gap-[10px]">
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <defs>
                <linearGradient id="lgFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B2FFF" />
                    <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
            </defs>
            <polygon points="32,4 14,56 22,56 32,28 42,56 50,56" fill="url(#lgFoot)" />
            <rect x="19" y="38" width="26" height="7" rx="1.5" fill="url(#lgFoot)" />
        </svg>
        <span className="font-display font-extrabold text-[22px] tracking-tight text-white">
            ALT<span style={{ background: 'linear-gradient(135deg,#7B2FFF,#00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>É</span>RA
        </span>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-[#040410] border-t border-violet/10 pt-20 relative z-10">
            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-[80px]">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand */}
                    <div className="col-span-1">
                        <Link to="/">
                            <AlteraLogo />
                        </Link>
                        <p className="text-[14px] text-text3 mt-4 leading-relaxed max-w-[280px]">
                            Agence web premium spécialisée dans la création de sites internet pour artisans, commerçants et PME.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {['IN', 'TW', 'IG', 'FB'].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-violet/20 text-text2 flex items-center justify-center text-xs font-bold hover:border-violet hover:text-white transition-colors duration-200"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-[13px] uppercase text-text3 tracking-[0.15em] mb-5">Navigation</h4>
                        <ul className="flex flex-col gap-2">
                            {[
                                { label: 'Accueil', path: '/' },
                                { label: 'Services', path: '/services' },
                                { label: 'Tarifs', path: '/tarifs' },
                                { label: 'Pourquoi un site ?', path: '/pourquoi-un-site' },
                                { label: 'Contact', path: '/contact' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-[15px] text-text2 block py-1 hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-[13px] uppercase text-text3 tracking-[0.15em] mb-5">Services</h4>
                        <ul className="flex flex-col gap-2">
                            {[
                                { label: 'Site Vitrine', path: '/site-vitrine' },
                                { label: 'Site E-commerce', path: '/site-ecommerce' },
                                { label: 'Maintenance & SEO', path: '/maintenance' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-[15px] text-text2 block py-1 hover:text-white transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-[13px] uppercase text-text3 tracking-[0.15em] mb-5">Contact</h4>
                        <ul className="flex flex-col gap-2">
                            <li className="text-[15px] text-text2 py-1">contact@altera.fr</li>
                            <li className="text-[15px] text-text2 py-1">+33 1 23 45 67 89</li>
                            <li className="text-[15px] text-text2 py-1">France — 100% en ligne</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 py-6 mt-[60px]">
                    <p className="text-[14px] text-text3">© 2026 ALTÉRA. Tous droits réservés.</p>
                    <p className="text-[14px] text-text3 mt-4 md:mt-0">Fait avec ❤️ en France</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
