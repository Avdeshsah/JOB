import React from 'react';

function Navbar({ isSignedIn, onSignInClick, onSignOutClick }) {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        background: '#282c34',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0 }}>Job Board</h1>
      {isSignedIn ? (
        <button
          onClick={onSignOutClick}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={onSignInClick}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#61dafb',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navbar;
