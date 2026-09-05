import React, { useLayoutEffect, useRef, useState } from 'react';
import { brand, contact, phoneHref, waLink } from '../config/site';
import { gsap } from 'gsap';
import { Phone, ArrowUpRight } from 'lucide-react';
import './CardNav.css';
import WhatsAppIcon from './WhatsAppIcon';


const NAV_CARDS = [
  {
    label: "Pure Products",
    bgColor: "#32170d",
    textColor: "#ffffff",
    links: [
      { label: "Karuppati (கருப்பட்டி)", href: "/karuppati", ariaLabel: "Pure Dark Palm Jaggery" },
      { label: "Panam Karkandu (பனங்கற்கண்டு)", href: "/panam-karkandu", ariaLabel: "Palm Candy Crystals" },
      { label: "Chukku Karuppati (சுக்கு)", href: "/chukku-karuppati", ariaLabel: "Dry Ginger Palm Jaggery" },
      { label: "Vattu Karuppati (வட்டு)", href: "/vattu-karuppati", ariaLabel: "Rare Male Palm Nectar" }
    ]
  },
  {
    label: "Heritage & Health",
    bgColor: "#4b2c20",
    textColor: "#ffffff",
    links: [
      { label: "Nutritional Benefits", href: "#benefits", ariaLabel: "Health & Nutrition" },
      { label: "Artisanal Heritage", href: "#heritage", ariaLabel: "Traditional Process" },
      { label: "Frequently Asked Questions", href: "#faq", ariaLabel: "FAQs" }
    ]
  },
  {
    label: "Order & Direct Help",
    bgColor: "#2d5a27",
    textColor: "#ffffff",
    links: [
      { label: "Order via WhatsApp", href: waLink(`Hi ${brand.name} team, I would like to order`), ariaLabel: "WhatsApp Order" },
      { label: `Call ${contact.phoneDisplay}`, href: phoneHref, ariaLabel: "Direct Call" },
      { label: "Quick Order Configurator", href: "#contact", ariaLabel: "Order Form" }
    ]
  }
];

export default function Navbar() {
  // On a product page a bare "#products" points at a section that does not
  // exist there, so the link does nothing. Off the home page every anchor has
  // to be prefixed with "/" to go back to the home page first. The brand mark
  // is always a plain link home.
  const onHome =
    typeof window === 'undefined' ||
    ['/', '', '/index.html'].includes(window.location.pathname.replace(/\/+$/, '') || '/');
  const homeHref = onHome ? '#' : '/';
  const sec = (hash) => (onHome ? hash : `/${hash}`);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateMobileHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const contentEl = navEl.querySelector('.card-nav-content');
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      contentEl.offsetHeight;

      const topBar = 60;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    const isMobile = window.matchMedia('(max-width: 899px)').matches;
    if (!isMobile) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 40, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateMobileHeight,
      duration: 0.4,
      ease: 'power3.out'
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out', stagger: 0.07 }, '-=0.15');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 899px)').matches;
      if (!isMobile) {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        if (navRef.current) {
          gsap.set(navRef.current, { clearProps: 'all' });
        }
        setIsExpanded(false);
        setIsHamburgerOpen(false);
        return;
      }

      if (isExpanded) {
        const newHeight = calculateMobileHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current?.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current?.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMobileMenu = () => {
    const tl = tlRef.current || createTimeline();
    if (!tl) return;
    tlRef.current = tl;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const closeMobileMenu = () => {
    const tl = tlRef.current;
    if (!tl || !isExpanded) return;
    setIsHamburgerOpen(false);
    tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
    tl.reverse();
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <header className="navbar-wrapper">
      {/* Desktop Floating Pill Island Header (>= 900px) */}
      <nav className="desktop-navbar">
        <a href={homeHref} className="desktop-brand">
          <img src="/images/logo.webp" alt="Liha's Karuppati" className="desktop-logo" width="38" height="38" />
          <div className="desktop-brand-text">
            <span className="desktop-brand-title">Liha's Karuppati</span>
            <span className="desktop-brand-tagline">PURE PALM JAGGERY</span>
          </div>
        </a>

        <div className="desktop-nav-links">
          <a href={sec('#products')}>Our Products</a>
          <a href={sec('#benefits')}>Health Benefits</a>
          <a href={sec('#heritage')}>Our Heritage</a>
          <a href={sec('#faq')}>FAQs</a>
          <a href={sec('#contact')}>Order</a>
        </div>

        <div className="desktop-actions">
          <a href={phoneHref} className="desktop-btn desktop-btn-outline" title="Call Liha">
            <Phone size={14} aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </a>
          <a
            href={waLink("Hi, I would like to order pure Karuppati from Liha")}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-btn desktop-btn-whatsapp"
          >
            <WhatsAppIcon size={15} color="#ffffff" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Mobile CardNav Island (< 900px) */}
      <div className="mobile-cardnav-container">
        <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`}>
          <div className="card-nav-top">
            <a href={homeHref} className="logo-container" onClick={closeMobileMenu}>
              <img src="/images/logo.webp" alt="Liha's Karuppati" className="logo-image" width="38" height="38" />
              <div className="logo-text-col">
                <span className="logo-title">Liha's Karuppati</span>
                <span className="logo-tagline">PURE PALM JAGGERY</span>
              </div>
            </a>

            <div
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleMobileMenu();
                }
              }}
              role="button"
              aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              aria-expanded={isExpanded}
              tabIndex={0}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </div>
          </div>

          <div className="card-nav-content" aria-hidden={!isExpanded}>
            {NAV_CARDS.map((card, idx) => (
              <div
                key={`${card.label}-${idx}`}
                className="nav-card"
                ref={setCardRef(idx)}
                style={{ backgroundColor: card.bgColor, color: card.textColor }}
              >
                <div className="nav-card-label">{card.label}</div>
                <div className="nav-card-links">
                  {card.links?.map((lnk, i) => (
                    <a
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link"
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      onClick={closeMobileMenu}
                      target={lnk.href?.startsWith('http') ? '_blank' : undefined}
                      rel={lnk.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <ArrowUpRight size={15} className="nav-card-link-icon" aria-hidden="true" />
                      {lnk.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
