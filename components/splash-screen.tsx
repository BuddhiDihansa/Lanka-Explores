"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showMap, setShowMap] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show map after 500ms
    const mapTimer = setTimeout(() => {
      setShowMap(true);
    }, 500);

    // Show welcome text after map animation
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1800);

    // Show tagline after welcome text
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 2500);

    // Start fade out after 5 seconds total
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    // Complete transition after fade out animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(mapTimer);
      clearTimeout(textTimer);
      clearTimeout(taglineTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Sri Lanka Map */}
      <div
        className={`relative z-10 transition-all duration-1000 ease-out ${
          showMap
            ? "opacity-100 scale-100"
            : "opacity-0 scale-50"
        }`}
      >
        <div className="relative w-64 h-80 md:w-80 md:h-[400px] lg:w-96 lg:h-[480px]">
          <Image
            src="/images/sri-lanka-map.jpg"
            alt="Sri Lanka Map"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Golden glow effect */}
          <div 
            className={`absolute -inset-8 bg-amber-500/30 blur-3xl -z-10 transition-opacity duration-1000 ${
              showMap ? "opacity-100 animate-pulse" : "opacity-0"
            }`} 
          />
          <div 
            className={`absolute -inset-4 bg-amber-400/20 blur-xl -z-10 transition-opacity duration-1000 ${
              showMap ? "opacity-100" : "opacity-0"
            }`} 
          />
        </div>
      </div>

      {/* Welcome Text */}
      <div
        className={`relative z-10 mt-10 text-center transition-all duration-700 ease-out ${
          showText
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wider">
          <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
            Welcome To Sri Lanka
          </span>
        </h1>
      </div>

      {/* Tagline */}
      <div
        className={`relative z-10 mt-4 text-center transition-all duration-700 ease-out ${
          showTagline
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-lg md:text-xl lg:text-2xl text-white font-light tracking-wide">
          Discover the Pearl of the Indian Ocean
        </p>
      </div>
    </div>
  );
}
