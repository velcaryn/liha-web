import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="glass-card" style={{ padding: '3rem', border: '1px solid var(--border-highlight)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="pill-badge" style={{ marginBottom: '1rem' }}>Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '0.75rem' }}>
              Connect with the Liha Team
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Have questions about our solutions or custom domain integration? Send us a note.
            </p>
          </div>

          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              <CheckCircle size={48} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} aria-hidden="true" />
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem' }}>Message Received</h3>
              <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'center', width: '100%', maxWidth: '280px', marginTop: '0.5rem' }}>
                Send Message
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1.1rem',
  background: 'rgba(10, 12, 20, 0.6)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--radius-sm)',
  color: '#ffffff',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-main)',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};
