import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Visual Effects */}
      <div className="ambient-glow" />
      <div className="ambient-grid" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
