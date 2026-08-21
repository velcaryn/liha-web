import React from 'react';

export default function NotFound() {
  const goHome = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <div className="not-found-wrapper">
      <div className="not-found-card soil-card">
        <img
          src="/images/logo.webp"
          alt="Liha's Karuppati"
          className="not-found-logo"
          width="64"
          height="64"
        />
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The page you are looking for has moved or does not exist. Explore our pure, authentic Palmyra palm offerings on our homepage.
        </p>
        <a href="/" onClick={goHome} className="btn btn-primary not-found-btn">
          Return to Homepage
        </a>
      </div>

      <style>{`
        .not-found-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container-low) 100%);
          text-align: center;
        }

        .not-found-card {
          max-width: 480px;
          width: 100%;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--bg-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-xl);
          box-shadow: var(--soil-shadow-hover);
        }

        .not-found-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-bottom: 1rem;
          border: 2px solid var(--primary-container);
        }

        .not-found-code {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 8vw, 4.5rem);
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .not-found-title {
          font-family: var(--font-serif);
          font-size: clamp(1.3rem, 3.5vw, 1.6rem);
          color: var(--primary);
          margin-bottom: 0.75rem;
        }

        .not-found-desc {
          color: var(--text-variant);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 380px;
        }

        .not-found-btn {
          width: 100%;
          max-width: 240px;
        }
      `}</style>
    </div>
  );
}
