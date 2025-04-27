"use client"; // Add this line to indicate this is a client component

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
        position: 'relative', // Ensures the video stays in the background
        backgroundImage: isDarkMode
          ? 'linear-gradient(45deg, #8B0000, #2f1e5e)' // Dark red to dark purple/blue gradient for dark mode
          : 'linear-gradient(45deg, #ffffff, #98FF98)', // White to seafoam green for light mode
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 5s ease infinite', // Animation for the gradient
        transition: 'background-color 0.3s ease', // Smooth transition for background color
        backgroundColor: isDarkMode ? '#2f546e' : '#f0f0f5', // Solid background color
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
          objectFit: 'cover', // Ensures the video covers the entire screen
          zIndex: -1, // Makes sure the video stays behind other elements
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
          zIndex: 1, // Make sure toggle is above the video
        }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: '5rem',
          fontFamily: 'Caudex, sans-serif',
          fontWeight: '700',
          color: isDarkMode ? '#fff' : '#000',
          zIndex: 1, // Make sure title is above the video
        }}
      >
        I R O N D O M E
      </div>

      {/* Links (Top Right, Stacked) */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem', // Align links to the right edge
          display: 'flex',
          flexDirection: 'column', // Stack links vertically
          fontSize: '38px', // Set font size to 38px
          color: isDarkMode ? '#fff' : '#000', // White in dark mode, black in light mode
          zIndex: 1, // Make sure links are above the video
          textAlign: 'right', // Align text to the right
        }}
      >
        <a href="https://plex.irondome.xyz" style={{ marginBottom: '1rem' }}>P L E X</a>
        <a href="https://homeassist.irondome.xyz" style={{ marginBottom: '1rem' }}>H A</a>
        <a href="https://overseer.irondome.xyz">O V E R S E E R</a>
      </div>
    </main>
  );
}
