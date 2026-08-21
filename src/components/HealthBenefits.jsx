import React from 'react';
import { Activity, ShieldCheck, Heart, Sparkles, Check, X } from 'lucide-react';

const benefits = [
  {
    icon: Activity,
    title: 'Rich in Natural Iron',
    desc: 'Helps prevent anemia and boosts hemoglobin levels naturally, making it especially beneficial for women and growing children.'
  },
  {
    icon: Heart,
    title: 'Low Glycemic Index',
    desc: 'With a GI of approximately 35 to 42, it releases sustained energy without the rapid blood sugar spikes caused by white sugar.'
  },
  {
    icon: ShieldCheck,
    title: 'Digestive & Respiratory Health',
    desc: 'Used in traditional Siddha and Ayurveda to stimulate digestive enzymes and clear toxins from the respiratory tract.'
  },
  {
    icon: Sparkles,
    title: 'Essential Mineral Blend',
    desc: 'Naturally contains calcium for bone strength, potassium for fluid balance, and magnesium to soothe the nervous system.'
  }
];

export default function HealthBenefits() {
  return (
    <section id="benefits" style={{
      padding: '5.5rem 0',
      background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container-low) 100%)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-green" style={{ marginBottom: '1rem' }}>
            Nutritional Wisdom
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 2.9rem)', marginBottom: '1rem' }}>
            Why Palm Jaggery Outshines Refined Sugar
          </h2>
          <p style={{ color: 'var(--text-variant)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            For centuries, South Indian heritage recognized Karuppati not just as a sweetener, but as a restorative superfood.
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4rem'
        }}>
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="soil-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: 'var(--bg-container-lowest)'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--secondary-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--on-secondary-container)'
                }}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-variant)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Card */}
        <div className="soil-card" style={{
          padding: '2.5rem',
          background: 'var(--bg-container-lowest)',
          overflowX: 'auto'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--primary)' }}>
            Pure Karuppati vs Refined White Sugar
          </h3>

          <table style={{
            width: '100%',
            minWidth: '600px',
            borderCollapse: 'collapse',
            textAlign: 'left'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--outline-variant)' }}>
                <th style={{ padding: '1rem', fontSize: '1rem', color: 'var(--primary)', width: '30%' }}>Attribute</th>
                <th style={{ padding: '1rem', fontSize: '1rem', color: 'var(--secondary)', width: '35%', background: 'rgba(185, 238, 171, 0.2)' }}>
                  Liha Pure Palm Jaggery
                </th>
                <th style={{ padding: '1rem', fontSize: '1rem', color: 'var(--text-muted)', width: '35%' }}>
                  Refined White Sugar
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--primary)' }}>Crafting Process</td>
                <td style={{ padding: '1rem', color: 'var(--secondary)', fontWeight: 600, background: 'rgba(185, 238, 171, 0.1)' }}>
                  <Check size={16} style={{ display: 'inline', marginRight: '6px' }} /> 100% Wood-Fired Evaporation
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-variant)' }}>
                  <X size={16} style={{ display: 'inline', marginRight: '6px', color: '#ba1a1a' }} /> Chemical Bleaching & Sulphur
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--primary)' }}>Nutrient Profile</td>
                <td style={{ padding: '1rem', color: 'var(--secondary)', fontWeight: 600, background: 'rgba(185, 238, 171, 0.1)' }}>
                  <Check size={16} style={{ display: 'inline', marginRight: '6px' }} /> High in Iron, Potassium, Calcium
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-variant)' }}>
                  <X size={16} style={{ display: 'inline', marginRight: '6px', color: '#ba1a1a' }} /> 0% Nutrients (Empty Calories)
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--outline-variant)' }}>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--primary)' }}>Glycemic Index (GI)</td>
                <td style={{ padding: '1rem', color: 'var(--secondary)', fontWeight: 600, background: 'rgba(185, 238, 171, 0.1)' }}>
                  <Check size={16} style={{ display: 'inline', marginRight: '6px' }} /> Low (~35 to 42)
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-variant)' }}>
                  <X size={16} style={{ display: 'inline', marginRight: '6px', color: '#ba1a1a' }} /> High (65 to 75)
                </td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--primary)' }}>Preservatives & Additives</td>
                <td style={{ padding: '1rem', color: 'var(--secondary)', fontWeight: 600, background: 'rgba(185, 238, 171, 0.1)' }}>
                  <Check size={16} style={{ display: 'inline', marginRight: '6px' }} /> Zero Chemicals, 100% Pure
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-variant)' }}>
                  <X size={16} style={{ display: 'inline', marginRight: '6px', color: '#ba1a1a' }} /> Anti-caking agents & refining additives
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
