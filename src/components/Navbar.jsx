import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AlteraLogo = () => (
    <div className="flex items-center gap-[10px]">
        <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <defs>
                <linearGradient id="lgNav" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B2FFF" />
                    <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
            </defs>
            <polygon points="32,4 14,56 22,56 32,28 42,56 50,56" fill="url(#lgNav)" />
            <rect x="19" y="38" width="26" height="7" rx="1.5" fill="url(#lgNav)" />
        </svg>
        <span className="font-display font-extrabold text-[22px] tracking-tight text-white">
            ALT<span style={{ background: 'linear-gradient(135deg,#7B2FFF,#00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>É</span>RA
        </span>
    </div>
);

const NAV_LINKS = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Tarifs', path: '/tarifs' },
    { label: 'Pourquoi un site ?', path: '/pourquoi-un-site' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full h-[72px] z-[100] transition-all duration-350 ease-in-out ${scrolled
                        ? 'bg-[#05050F]/80 backdrop-blur-2xl border-b border-violet/15'
                        : 'bg-transparent'
                    }`}
            >
                <div className="w-full max-w-[1200px] h-full mx-auto px-6 md:px-[80px] flex items-center justify-between">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                        <AlteraLogo />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {NAV_LINKS.map(link => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`relative text-[15px] font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-text2 hover:text-white'
                                            }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        <Link
                            to="/contact"
                            className="bg-gradient text-white font-semibold text-[15px] px-6 py-[10px] rounded-[10px] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(123,47,255,0.45)]"
                        >
                            Démarrer
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[110] bg-bg flex flex-col p-6 items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-white p-2"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <div className="flex flex-col items-center gap-8 w-full max-w-[300px]">
                        {NAV_LINKS.map(link => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-2xl font-display font-bold ${isActive ? 'text-transparent bg-gradient bg-clip-text' : 'text-white'}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 w-full text-center bg-gradient text-white font-bold text-lg py-4 rounded-xl"
                        >
                            Démarrer le projet
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
