import React, { useState, useEffect } from 'react';
import { waLink, products } from './config/site';
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
import ProductPage from './components/ProductPage';
import RouteLoader from './components/RouteLoader';
import WhatsAppIcon from './components/WhatsAppIcon';

export default function App() {
  const [activePolicy, setActivePolicy] = useState(null);

  // Route from the pathname. Deliberately not react-router: there are five
  // static routes and no nested or dynamic segments, so a lookup is enough
  // and it keeps the bundle small. Netlify serves index.html for every path
  // (see the SPA redirect in netlify.toml) and the prerender step bakes each
  // route to its own HTML file.
  const path = typeof window === 'undefined' ? '/' : window.location.pathname;
  const normalised = path.replace(/\/+$/, '') || '/';
  const isHome = normalised === '/' || normalised === '/index.html';
  const productSlug = products.find((p) => `/${p.slug}` === normalised)?.slug;
  const isNotFound = !isHome && !productSlug;

  // Smooth & deterministic direct hash navigation (e.g. https://lihashop.in/#faq)
  useEffect(() => {
    const scrollToTarget = (hash) => {
      const targetHash = hash || window.location.hash;
      if (!targetHash) return;
      const targetId = targetHash.replace(/^#/, '');
      if (!targetId) return;

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (window.location.hash) {
      // Immediate attempt
      scrollToTarget();
      // Secondary attempt after DOM & images settle
      const timer1 = setTimeout(() => scrollToTarget(), 150);
      const timer2 = setTimeout(() => scrollToTarget(), 450);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }

    const onHashChange = () => scrollToTarget();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  if (productSlug) {
    return (
      <ErrorBoundary>
        <ProductPage
          slug={productSlug}
          onOpenPolicy={(key) => setActivePolicy(key)}
        />
        <PolicyModal policyKey={activePolicy} onClose={() => setActivePolicy(null)} />
        <RouteLoader />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      {/* .app-shell must never carry transform, filter, backdrop-filter,
          perspective, contain:paint or will-change:transform. Any of those
          make it the containing block for position:fixed descendants and
          unpin the mobile dock. Height uses 100dvh (small-viewport aware on
          iOS) with a 100vh fallback for older browsers. */}
      <div className="app-shell" style={{ position: 'relative', background: 'var(--bg-surface)' }}>
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

        <RouteLoader />

      </div>
    </ErrorBoundary>
  );
}
