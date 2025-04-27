"use client";

import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: isDarkMode
          ? 'linear-gradient(45deg, #8B0000, #2f1e5e)'
          : 'linear-gradient(45deg, #ffffff, #98FF98)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 5s ease infinite',
        transition: 'background-color 0.3s ease',
        backgroundColor: isDarkMode ? '#2f546e' : '#f0f0f5',
        overflow: 'hidden', // Prevent scrollbars from weird overflow
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Toggle Button */}
      <div
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 2,
          userSelect: 'none',
        }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 'clamp(2rem, 8vw, 5rem)', // Responsive font size
          fontFamily: 'Caudex, sans-serif',
          fontWeight: '700',
          color: isDarkMode ? '#fff' : '#000',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 1rem', // Small padding for mobile
        }}
      >
        I R O N D O M E
      </div>

      {/* Links (Top Right, Stacked) */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem',
          fontSize: 'clamp(1rem, 5vw, 2rem)', // Responsive font size
          color: isDarkMode ? '#fff' : '#000',
          zIndex: 1,
          textAlign: 'right',
        }}
      >
        <a href="https://plex.irondome.xyz" style={{ textDecoration: 'none' }}>P L E X</a>
        <a href="https://homeassist.irondome.xyz" style={{ textDecoration: 'none' }}>H A</a>
        <a href="https://overseer.irondome.xyz" style={{ textDecoration: 'none' }}>O V E R S E E R</a>
      </div>
    </main>
  );
}
