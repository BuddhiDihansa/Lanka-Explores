"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { DistrictsSection } from "@/components/districts-section";
import { PlacesSection } from "@/components/places-section";
import { HotelsSection } from "@/components/hotels-section";
import { Footer } from "@/components/footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DistrictsSection />
        <PlacesSection />
        <HotelsSection />
      </main>
      <Footer />
    </div>
  );
}
