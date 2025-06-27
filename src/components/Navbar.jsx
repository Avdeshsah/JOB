import React from 'react';

// 1. Add a logo SVG (simple briefcase icon)
const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    style={{ marginRight: '0.75rem', verticalAlign: 'middle' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" fill="#4F8EF7" />
    <rect x="7" y="3" width="10" height="4" rx="2" fill="#222" />
  </svg>
);

function Navbar({ isSignedIn, onSignInClick, onSignOutClick }) {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        background: 'linear-gradient(90deg, #000 60%, #222 100%)', // 5. Gradient
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 16px rgba(0,0,0,0.7)', // 5. Deeper shadow
        borderBottom: '2px solid #4F8EF7', // 5. Accent border
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif", // 2. Modern font
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        <h1
          style={{
            margin: 0,
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.7rem',
            letterSpacing: '1px',
            fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif", // 2. Modern font
          }}
        >
          Job Board
        </h1>
      </div>
      {isSignedIn ? (
        <button
          onClick={onSignOutClick}
          style={{
            padding: '0.6rem 1.3rem',
            backgroundColor: '#4F8EF7', // 4. Accent color
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'background 0.2s, transform 0.2s', // 3. Hover effect
            boxShadow: '0 2px 8px rgba(79,142,247,0.15)',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#4F8EF7')}
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={onSignInClick}
          style={{
            padding: '0.6rem 1.3rem',
            backgroundColor: '#222', // 4. Accent color for contrast
            color: '#4F8EF7',
            border: '2px solid #4F8EF7',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'background 0.2s, color 0.2s, transform 0.2s', // 3. Hover effect
            boxShadow: '0 2px 8px rgba(79,142,247,0.10)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = '#4F8EF7';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = '#222';
            e.currentTarget.style.color = '#4F8EF7';
          }}
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navbar;
