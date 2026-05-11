"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { DistrictsSection } from "@/components/districts-section";
import { PlacesSection } from "@/components/places-section";
import { HotelsSection } from "@/components/hotels-section";
import { Footer } from "@/components/footer";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-foreground">
      <div aria-hidden className="fixed inset-0 -z-20 bg-black" />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.2),transparent_0_18%,transparent_34%),radial-gradient(circle_at_top_right,rgba(202,138,4,0.14),transparent_0_16%,transparent_32%),radial-gradient(circle_at_bottom_center,rgba(251,191,36,0.08),transparent_0_16%,transparent_36%),linear-gradient(180deg,#090909_0%,#050505_55%,#090909_100%)]"
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.14),transparent_0_14%,transparent_32%),radial-gradient(circle_at_82%_14%,rgba(202,138,4,0.12),transparent_0_12%,transparent_30%),radial-gradient(circle_at_50%_88%,rgba(251,191,36,0.06),transparent_0_12%,transparent_32%)] blur-3xl opacity-80"
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)),linear-gradient(90deg,rgba(251,191,36,0.035)_1px,transparent_1px)] bg-[size:100%_100%,140px_140px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_100%)] opacity-10"
      />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <DistrictsSection />
        <PlacesSection />
        <HotelsSection />
      </main>
      <Footer />
    </div>
  );
}
