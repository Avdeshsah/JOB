import React, { useState } from 'react';

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (email && password) {
      onSignIn();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h2>
      
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="form-input"
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="form-input"
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />

      <button
        type="submit"
        style={{
          padding: '10px 20px',
          width: '100%',
          backgroundColor: '#0078ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Sign In
      </button>
    </form>
  );
}

export default SignIn;
