import React, { useLayoutEffect, useRef, useState } from 'react';
import { brand, contact, phoneHref, waLink } from '../config/site';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './CardNav.css';
import WhatsAppIcon from './WhatsAppIcon';


const DEFAULT_ITEMS = [
  {
    label: "Pure Products",
    bgColor: "#32170d",
    textColor: "#ffffff",
    links: [
      { label: "Karuppati (கருப்பட்டி)", href: "/karuppati/", ariaLabel: "Pure Dark Palm Jaggery" },
      { label: "Panam Karkandu (பனங்கற்கண்டு)", href: "/panam-karkandu/", ariaLabel: "Palm Candy Crystals" },
      { label: "Chukku Karuppati (சுக்கு)", href: "/chukku-karuppati/", ariaLabel: "Dry Ginger Palm Jaggery" },
      { label: "Vattu Karuppati (வட்டு)", href: "/vattu-karuppati/", ariaLabel: "Rare Male Palm Nectar" }
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

const CardNav = ({
  logo = "/images/logo.webp",
  logoAlt = "Liha's Karuppati",
  items = DEFAULT_ITEMS,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(255, 248, 246, 0.96)',
  menuColor = '#32170d',
  buttonBgColor = '#2d5a27',
  buttonTextColor = '#ffffff'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
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
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 40, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.35, ease, stagger: 0.07 }, '-=0.15');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
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

  const closeMenu = () => {
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
    <div className={`card-nav-container ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <a href="#" className="logo-container" onClick={closeMenu}>
            <img src={logo} alt={logoAlt} className="logo-image" width="38" height="38" />
            <div className="logo-text-col">
              <span className="logo-title">Liha's Karuppati</span>
              <span className="logo-tagline">PURE PALM JAGGERY</span>
            </div>
          </a>

          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor || 'var(--primary)' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <a
            href={waLink("Hi, I would like to order pure Karuppati from Liha")}
            target="_blank"
            rel="noopener noreferrer"
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            <WhatsAppIcon size={16} color="#ffffff" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={closeMenu}
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
  );
};

export default CardNav;
