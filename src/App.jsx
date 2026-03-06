import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import SiteVitrine from './pages/SiteVitrine';
import SiteEcommerce from './pages/SiteEcommerce';
import Maintenance from './pages/Maintenance';
import Tarifs from './pages/Tarifs';
import WhyWebsite from './pages/WhyWebsite';
import Contact from './pages/Contact';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <>
            <ScrollToTop />
            <StarField />

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/site-vitrine" element={<SiteVitrine />} />
                        <Route path="/site-ecommerce" element={<SiteEcommerce />} />
                        <Route path="/maintenance" element={<Maintenance />} />
                        <Route path="/tarifs" element={<Tarifs />} />
                        <Route path="/pourquoi-un-site" element={<WhyWebsite />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default App;
