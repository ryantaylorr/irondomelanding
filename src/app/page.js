"use client";

import { useState, useEffect } from "react";
import { New_Rocker } from "next/font/google";

const newRocker = New_Rocker({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Ensure the body class changes based on the theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main
      className={`
        min-h-screen flex flex-col justify-center items-center
        relative overflow-hidden transition-colors duration-300
        animate-gradientBackground
      `}
      style={{
        backgroundImage: `url('your-image-url.jpg')`, // Add the background image URL here
        backgroundSize: 'contain',  // Make the background image smaller while maintaining aspect ratio
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',  // Prevents repeating the image
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Theme Toggle */}
      <div
        onClick={toggleTheme}
        className="absolute top-4 left-4 text-3xl cursor-pointer z-10"
      >
        {isDarkMode ? "🌙" : "☀️"}
      </div>

      {/* Title */}
      <h1
        className={`
          ${newRocker.className}
          text-5xl md:text-7xl
          font-normal
          ${isDarkMode ? "text-white" : "text-black"}
          z-10
          mb-4
          text-center md:text-center
          md:mb-0
        `}
      >
        I R O N D O M E
      </h1>

      {/* Subtitle - Now using h3 */}
      <h3
  className={`
    ${newRocker.className}
    text-2xl md:text-4xl
    font-normal
    ${isDarkMode ? "text-white" : "text-black"}
    z-10
    mb-4
    text-center md:text-center
    md:mb-0
    tracking-wide  // Adds some spacing between the characters
  `}
>
  E L Y S I U M&nbsp;&nbsp;&nbsp;&nbsp;S E R V I C E S.
</h3>



      {/* Links */}
      <div
        className={`
          flex flex-col 
          ${isDarkMode ? "text-white" : "text-black"}
          text-2xl md:text-4xl 
          z-10
          mt-4 sm:mt-12 md:mt-0 md:text-right
          space-y-4
          items-center md:items-end md:right-4
          md:absolute md:top-8 md:right-8
        `}
      >
        <a
          href="https://plex.irondome.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          P L E X
        </a>
        <a
          href="https://homeassist.irondome.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          H A
        </a>
        <a
          href="https://overseer.irondome.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          O V E R S E E R
        </a>
        <a
          href="https://vault.irondome.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
         V A U L T
        </a>
        <a
          href="https://gitea.irondome.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
         G I T E A
        </a>
      </div>
    </main>
  );
}
