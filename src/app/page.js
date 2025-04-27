"use client";

import { useState } from 'react';
import { New_Rocker } from 'next/font/google';

const newRocker = New_Rocker({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark mode ✅

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
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
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
          zIndex: 1,
        }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </div>

      {/* Title */}
      <div
        className={newRocker.className}
        style={{
          fontSize: 'clamp(2rem, 8vw, 5rem)',
          fontWeight: '400',
          color: isDarkMode ? '#fff' : '#000',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 1rem',
        }}
      >
        I R O N D O M E
      </div>

      {/* Links */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '38px',
          color: isDarkMode ? '#fff' : '#000',
          zIndex: 1,
          textAlign: 'right',
        }}
      >
        <a href="https://plex.irondome.xyz" style={{ marginBottom: '1rem' }}>P L E X</a>
        <a href="https://homeassist.irondome.xyz" style={{ marginBottom: '1rem' }}>H A</a>
        <a href="https://overseer.irondome.xyz">O V E R S E E R</a>
      </div>
    </main>
  );
}
