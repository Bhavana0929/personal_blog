import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      background: '#171a2b',
      padding: '20px 0',
      textAlign: 'center',
      marginBottom: '32px'
    }}>
      <h1 style={{color: '#3f51b5', fontWeight: 'bold', letterSpacing: '2px'}}>
        Bhavana Marreddy
      </h1>
      <p style={{color: '#b0b0b0'}}>Generative AI Engineer</p>
      <div style={{marginTop: '8px'}}>
        <a href="mailto:bhavana0929@gmail.com">bhavana0929@gmail.com</a> | 
        <a href="https://linkedin.com/in/bhavana0929" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
        <a href="https://github.com/bhavana0929" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </div>
    </nav>
  );
}
