import React, { useState } from 'react';

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add real authentication logic here
    onSignIn();
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #222 60%, #4F8EF7 100%)',
      fontFamily: "'Inter', 'Montserrat', Arial, sans-serif"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#181818',
          padding: '2.5rem 2rem',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          minWidth: 340,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}
      >
        <h2 style={{
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: 700,
          fontSize: '2rem',
          marginBottom: '0.5rem',
          color: '#4F8EF7',
          textAlign: 'center'
        }}>
          Sign In
        </h2>
        <label style={{ fontWeight: 500 }}>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              marginTop: 6,
              padding: '0.7rem',
              borderRadius: '7px',
              border: '1px solid #333',
              background: '#222',
              color: '#fff',
              fontSize: '1rem',
              marginBottom: '0.5rem'
            }}
            placeholder="you@email.com"
          />
        </label>
        <label style={{ fontWeight: 500 }}>
          Password
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              marginTop: 6,
              padding: '0.7rem',
              borderRadius: '7px',
              border: '1px solid #333',
              background: '#222',
              color: '#fff',
              fontSize: '1rem',
              marginBottom: '0.5rem'
            }}
            placeholder="Your password"
          />
        </label>
        <button
          type="submit"
          style={{
            background: '#4F8EF7',
            color: '#fff',
            border: 'none',
            borderRadius: '7px',
            padding: '0.8rem',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.background = '#4F8EF7')}
        >
          Sign In
        </button>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.97rem',
          marginTop: '0.5rem'
        }}>
          <a href="#" style={{ color: '#4F8EF7', textDecoration: 'none' }}>Forgot password?</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Create account</a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
