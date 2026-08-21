import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide(); // Swiped left
    } else if (diff < -45) {
      prevSlide(); // Swiped right
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
            A glimpse into the authentic artisanal craftsmanship and daily wellness of Liha's Karuppati.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="carousel-frame"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Images Track */}
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="carousel-slide">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="carousel-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="carousel-caption-overlay">
                  <h3 className="carousel-slide-title">{slide.title}</h3>
                  <p className="carousel-slide-desc">{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="carousel-arrow carousel-arrow-left"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="carousel-arrow carousel-arrow-right"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>

          {/* Indicators / Dots */}
          <div className="carousel-dots">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`carousel-dot ${currentIndex === dotIdx ? 'active' : ''}`}
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

        .carousel-frame {
          position: relative;
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--soil-shadow-hover);
          border: 3px solid var(--bg-container-lowest);
          background: #1e120d;
          aspect-ratio: 16 / 9;
        }

        .carousel-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .carousel-slide {
          min-width: 100%;
          height: 100%;
          position: relative;
          flex-shrink: 0;
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          background: linear-gradient(to top, rgba(35, 26, 23, 0.92) 0%, rgba(35, 26, 23, 0.5) 60%, transparent 100%);
          color: #ffffff;
        }

        .carousel-slide-title {
          font-family: var(--font-serif);
          font-size: clamp(1.1rem, 3vw, 1.6rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .carousel-slide-desc {
          font-size: clamp(0.8rem, 1.8vw, 0.95rem);
          color: #ffd6cc;
          line-height: 1.4;
        }

        /* Arrows */
        .carousel-arrow {
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
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
          touch-action: manipulation;
        }

        .carousel-arrow:hover {
          background: #ffffff;
          transform: translateY(-50%) scale(1.08);
        }

        .carousel-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }

        .carousel-arrow-left { left: 1rem; }
        .carousel-arrow-right { right: 1rem; }

        /* Dots */
        .carousel-dots {
          position: absolute;
          bottom: 0.85rem;
          right: 1.5rem;
          display: flex;
          gap: 0.45rem;
          z-index: 10;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.45);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          width: 24px;
          background: var(--secondary-container);
        }

        @media (max-width: 768px) {
          .carousel-arrow {
            display: none; /* Swipe on mobile */
          }
          .carousel-caption-overlay {
            padding: 1.25rem 1rem 1rem 1rem;
          }
          .carousel-dots {
            right: 50%;
            transform: translateX(50%);
            bottom: 0.5rem;
          }
          .carousel-frame {
            border-radius: var(--radius-lg);
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </section>
  );
}
