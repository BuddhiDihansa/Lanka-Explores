"use client";

import { useState } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { HomePage } from "@/components/home-page";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div
        className={`transition-opacity duration-500 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <HomePage />
      </div>
    </>
  );
}
