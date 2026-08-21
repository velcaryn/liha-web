import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    src: '/images/carousel/carousel-1-hero-wooden-spread.webp',
    title: 'Authentic Palmyra Harvest',
    caption: 'Tradition meets elegance in every handcrafted block'
  },
  {
    src: '/images/carousel/carousel-2-palm-candy-jar.webp',
    title: 'Pure Artisanal Packaging',
    caption: 'Hygienically stored to preserve natural aroma and mineral richness'
  },
  {
    src: '/images/carousel/carousel-3-product-range-flatlay.webp',
    title: 'Complete Pure Palm Collection',
    caption: 'From dark Karuppati blocks to crystalline Panam Karkandu'
  },
  {
    src: '/images/carousel/carousel-4-lifestyle-pour.webp',
    title: 'The Perfect Morning Ritual',
    caption: 'Wholesome natural sweetness for traditional filter coffee and herbal tea'
  },
  {
    src: '/images/carousel/carousel-5-palm-candy-closeup.webp',
    title: 'Golden Crystalline Clarity',
    caption: 'Naturally evaporated panam karkandu for soothing throat comfort'
  },
  {
    src: '/images/carousel/carousel-6-clear-pouch-showcase.webp',
    title: 'Farm-Fresh Sealed Pouch',
    caption: 'Direct from Tamil Nadu palm artisans to your doorstep'
  },
  {
    src: '/images/carousel/carousel-7-panam-karkandu-lifestyle.webp',
    title: 'Nature’s Restorative Superfood',
    caption: 'Zero chemicals, zero refining, 100% natural goodness'
  }
];

export default function CarouselGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const isInteractingRef = useRef(false);

  // Sync active dot with native scroll position
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    if (slideWidth === 0) return;
    const newIndex = Math.round(container.scrollLeft / slideWidth);
    if (newIndex >= 0 && newIndex < slides.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);

  // Smooth scroll to a specific index
  const scrollToIndex = useCallback((index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, []);

  const prevSlide = () => {
    const nextIdx = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    scrollToIndex(nextIdx);
  };

  const nextSlide = () => {
    const nextIdx = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIdx);
  };

  // Optional Gentle Auto-Advance (only when user is not touching/hovering)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInteractingRef.current) {
        const container = scrollContainerRef.current;
        if (!container) return;
        const slideWidth = container.clientWidth;
        const nextIdx = (activeIndex + 1) % slides.length;
        container.scrollTo({
          left: nextIdx * slideWidth,
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="carousel-section">
      <div className="container">
        <div className="carousel-header">
          <span className="badge-pill badge-cream">
            <Sparkles size={14} aria-hidden="true" />
            Visual Journey
          </span>
          <h2 className="carousel-headline">Crafted with Purity & Care</h2>
          <p className="carousel-subtitle">
            Swipe through the artisanal craftsmanship and daily wellness of Liha's Karuppati.
          </p>
        </div>

        {/* Outer Frame */}
        <div
          className="carousel-outer"
          onMouseEnter={() => { isInteractingRef.current = true; }}
          onMouseLeave={() => { isInteractingRef.current = false; }}
          onTouchStart={() => { isInteractingRef.current = true; }}
          onTouchEnd={() => {
            // Resume gentle auto-scroll after a short delay
            setTimeout(() => { isInteractingRef.current = false; }, 3000);
          }}
        >
          {/* Native Hardware-Accelerated Scroll Snap Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="carousel-scroll-track"
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="carousel-snap-item">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="carousel-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable="false"
                />
                <div className="carousel-caption-overlay">
                  <h3 className="carousel-slide-title">{slide.title}</h3>
                  <p className="carousel-slide-desc">{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="carousel-nav-btn carousel-nav-prev"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="carousel-nav-btn carousel-nav-next"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          {/* Dot Indicators */}
          <div className="carousel-pagination">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`carousel-dot-btn ${activeIndex === dotIdx ? 'is-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .carousel-section {
          padding: 3.5rem 0;
          background: var(--bg-surface);
          position: relative;
        }
        .carousel-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2rem;
        }
        .carousel-headline {
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .carousel-subtitle {
          color: var(--text-variant);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .carousel-outer {
          position: relative;
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--soil-shadow-hover);
          border: 3px solid var(--bg-container-lowest);
          background: #1e120d;
        }

        /* 120Hz Hardware Accelerated Scroll Snap Container */
        .carousel-scroll-track {
          display: flex;
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-x;
        }
        .carousel-scroll-track::-webkit-scrollbar {
          display: none;
        }

        .carousel-snap-item {
          flex: 0 0 100%;
          width: 100%;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          position: relative;
          aspect-ratio: 16 / 9;
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }

        .carousel-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2.5rem 1.75rem 1.5rem 1.75rem;
          background: linear-gradient(to top, rgba(35, 26, 23, 0.92) 0%, rgba(35, 26, 23, 0.5) 60%, transparent 100%);
          color: #ffffff;
          pointer-events: none;
        }

        .carousel-slide-title {
          font-family: var(--font-serif);
          font-size: clamp(1.15rem, 3vw, 1.6rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .carousel-slide-desc {
          font-size: clamp(0.82rem, 1.8vw, 0.95rem);
          color: #ffd6cc;
          line-height: 1.4;
        }

        /* Navigation Arrows */
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 248, 246, 0.9);
          border: 1px solid var(--outline-variant);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          z-index: 10;
          touch-action: manipulation;
        }

        .carousel-nav-btn:hover {
          background: #ffffff;
          transform: translateY(-50%) scale(1.08);
        }

        .carousel-nav-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .carousel-nav-prev { left: 1rem; }
        .carousel-nav-next { right: 1rem; }

        /* Pagination Dots */
        .carousel-pagination {
          position: absolute;
          bottom: 1rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          z-index: 10;
        }

        .carousel-dot-btn {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        .carousel-dot-btn.is-active {
          width: 24px;
          background: var(--secondary-container);
        }

        @media (max-width: 768px) {
          .carousel-nav-btn {
            display: none; /* Fluid native swipe on mobile */
          }
          .carousel-snap-item {
            aspect-ratio: 4 / 3;
          }
          .carousel-caption-overlay {
            padding: 1.5rem 1rem 1rem 1rem;
          }
          .carousel-pagination {
            right: 50%;
            transform: translateX(50%);
            bottom: 0.6rem;
          }
          .carousel-outer {
            border-radius: var(--radius-lg);
          }
        }
      `}</style>
    </section>
  );
}
