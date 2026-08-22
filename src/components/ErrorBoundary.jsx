import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '200px',
          padding: '2rem',
          textAlign: 'center',
          background: 'var(--bg-container-low)',
          borderRadius: 'var(--radius-lg)',
          margin: '1rem'
        }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
            Something went wrong
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Please refresh the page to try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline"
            style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', minHeight: '40px' }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
