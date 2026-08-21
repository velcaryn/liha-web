import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import StatsStrip from './components/StatsStrip';
import Products from './components/Products';
import CarouselGallery from './components/CarouselGallery';
import HealthBenefits from './components/HealthBenefits';
import HeritageStory from './components/HeritageStory';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import PolicyModal from './components/PolicyModal';
import NotFound from './components/NotFound';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [activePolicy, setActivePolicy] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const validPaths = ['/', '', '/index.html'];
    if (!validPaths.includes(path)) {
      setIsNotFound(true);
    }
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="app-shell" style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-surface)' }}>
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <TrustBadges />
        <StatsStrip />
        <Products />
        <CarouselGallery />
        <HealthBenefits />
        <HeritageStory />
        <FAQ />
        <ContactSection />
      </main>

      {/* Footer with Policy Modal Triggers */}
      <Footer onOpenPolicy={(key) => setActivePolicy(key)} />

      {/* Policy Modal Dialog */}
      <PolicyModal
        policyKey={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Mobile Sticky Navigation */}
      <MobileNav />

      {/* Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/919597959549?text=Hi%20Liha's%20Karuppati%20team%2C%20I%20would%20like%20to%20enquire%20about%20ordering%20pure%20palm%20jaggery"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>Order on WhatsApp</span>
      </a>
    </div>
  );
}
