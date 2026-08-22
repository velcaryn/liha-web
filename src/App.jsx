import React, { useState, useEffect } from 'react';
import { waLink } from './config/site';
import ErrorBoundary from './components/ErrorBoundary';
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
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import PolicyModal from './components/PolicyModal';
import NotFound from './components/NotFound';
import WhatsAppIcon from './components/WhatsAppIcon';

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
    <ErrorBoundary>
      <div className="app-shell" style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-surface)' }}>
        {/* Top Header: Desktop Full Navbar & Mobile Animated CardNav */}
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

        {/* Instagram Social Proof - above footer */}
        <InstagramFeed />

        {/* Footer with Policy Modal Triggers */}
        <Footer onOpenPolicy={(key) => setActivePolicy(key)} />

        {/* Policy Modal Dialog */}
        <PolicyModal
          policyKey={activePolicy}
          onClose={() => setActivePolicy(null)}
        />

        {/* Mobile Sticky Navigation with Center Projected WhatsApp Order Button */}
        <MobileNav />

        {/* Desktop Floating WhatsApp Quick Button */}
        <a
          href={waLink("Hi Liha's Karuppati team, I would like to enquire about ordering pure palm jaggery")}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon size={22} color="#ffffff" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </ErrorBoundary>
  );
}
