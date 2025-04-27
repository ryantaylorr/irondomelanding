"use client";

import { useState } from "react";
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

  return (
    <main
      className={`
        min-h-screen flex flex-col justify-center items-center
        ${isDarkMode ? "bg-gradient-to-br from-red-900 to-indigo-900" : "bg-gradient-to-br from-white to-green-300"}
        relative overflow-hidden transition-colors duration-300
        animate-gradientBackground
      `}
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
          text-center
          md:mb-0
          md:mt-0 md:text-center md:mb-0
          md:absolute md:top-8 md:left-1/2 md:transform md:-translate-x-1/2
        `}
      >
        I R O N D O M E
      </h1>

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
      </div>
    </main>
  );
}
