import React from 'react';
import { Sparkles } from 'lucide-react';
import DepthCarousel from './DepthCarousel';

const CAROUSEL_SLIDES = [
  {
    image: '/images/carousel/carousel-1-hero-wooden-spread.webp',
    title: 'Farm-Fresh Palmyra Nectar',
    desc: 'Pure Padaneer collected in natural clay pots and reduced over wood fires.',
    alt: 'Fresh Palmyra palm nectar and wooden spread'
  },
  {
    image: '/images/carousel/carousel-2-palm-candy-jar.webp',
    title: 'Panam Karkandu Crystals',
    desc: 'Golden translucent crystals with a delicate caramel sweetness.',
    alt: 'Panam Karkandu in glass jar'
  },
  {
    image: '/images/carousel/carousel-3-product-range-flatlay.webp',
    title: 'Artisanal Pure Collection',
    desc: '100% unrefined Karuppati, Panam Karkandu, Chukku & Vattu varieties.',
    alt: 'Complete Liha product range'
  },
  {
    image: '/images/carousel/carousel-4-lifestyle-pour.webp',
    title: 'Daily Healthy Sweetener',
    desc: 'The perfect nutrient-dense alternative for tea, coffee, and milk.',
    alt: 'Beverage sweetened with palm jaggery'
  },
  {
    image: '/images/carousel/carousel-5-palm-candy-closeup.webp',
    title: 'Traditional Crystal Purity',
    desc: 'Zero chemicals, zero bleach, crafted through slow natural crystallisation.',
    alt: 'Close up of natural palm candy crystals'
  },
  {
    image: '/images/carousel/carousel-6-clear-pouch-showcase.webp',
    title: 'Hygienically Packed',
    desc: 'Sealed airtight to preserve fresh farm aroma and medicinal properties.',
    alt: 'Airtight packaging of Liha products'
  },
  {
    image: '/images/carousel/carousel-7-panam-karkandu-lifestyle.webp',
    title: 'Generations of Craftsmanship',
    desc: 'Preserving Tamil Nadu native Palmyra palm heritage since 2019.',
    alt: 'Traditional palm heritage lifestyle'
  }
];

export default function CarouselGallery() {
  return (
    <section id="gallery" className="carousel-section">
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

        {/* 3D Depth Carousel Container with compact, zero-waste spacing */}
        <div className="depth-carousel-wrapper">
          <DepthCarousel
            items={CAROUSEL_SLIDES}
            tiltDirection="right"
            tint="#32170d"
            radius={18}
            autoplay={true}
            autoplayDelay={3600}
            loop={true}
          />
        </div>
      </div>

      <style>{`
        .carousel-section {
          padding: 2.25rem 0 2.25rem 0;
          background: var(--bg-surface);
          position: relative;
          overflow: hidden;
        }
        .carousel-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 1.25rem;
        }
        .carousel-headline {
          font-size: clamp(1.8rem, 3.8vw, 2.5rem);
          margin-top: 0.6rem;
          margin-bottom: 0.35rem;
        }
        .carousel-subtitle {
          color: var(--text-variant);
          font-size: 0.94rem;
          line-height: 1.5;
        }

        .depth-carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1160px;
          height: 510px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .carousel-section {
            padding: 2rem 0 2rem 0;
          }
          .depth-carousel-wrapper {
            height: 450px;
          }
        }

        @media (max-width: 768px) {
          .carousel-section {
            padding: 1.25rem 0 1.25rem 0;
          }
          .carousel-header {
            margin: 0 auto 0.75rem;
          }
          .depth-carousel-wrapper {
            height: 375px;
          }
        }
      `}</style>
    </section>
  );
}
