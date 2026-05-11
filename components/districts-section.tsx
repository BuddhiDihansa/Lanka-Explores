"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const districts = [
  { name: "Colombo", province: "Western", placeCount: 45, image: "/images/colombo.jpg" },
  { name: "Gampaha", province: "Western", placeCount: 32, image: "/images/hero-bg.jpg" },
  { name: "Kalutara", province: "Western", placeCount: 28, image: "/images/hero-2.jpg" },
  { name: "Kandy", province: "Central", placeCount: 38, image: "/images/kandy.jpg" },
  { name: "Matale", province: "Central", placeCount: 22, image: "/images/hero-3.jpg" },
  { name: "Nuwara Eliya", province: "Central", placeCount: 35, image: "/images/hero-4.jpg" },
  { name: "Galle", province: "Southern", placeCount: 40, image: "/images/galle.jpg" },
  { name: "Matara", province: "Southern", placeCount: 25, image: "/images/hero-bg.jpg" },
  { name: "Hambantota", province: "Southern", placeCount: 30, image: "/images/hero-2.jpg" },
  { name: "Jaffna", province: "Northern", placeCount: 28, image: "/images/jaffna.jpg" },
  { name: "Kilinochchi", province: "Northern", placeCount: 15, image: "/images/hero-3.jpg" },
  { name: "Mannar", province: "Northern", placeCount: 18, image: "/images/hero-4.jpg" },
  { name: "Vavuniya", province: "Northern", placeCount: 12, image: "/images/hero-bg.jpg" },
  { name: "Mullaitivu", province: "Northern", placeCount: 14, image: "/images/hero-2.jpg" },
  { name: "Batticaloa", province: "Eastern", placeCount: 20, image: "/images/hero-3.jpg" },
  { name: "Ampara", province: "Eastern", placeCount: 22, image: "/images/hero-4.jpg" },
  { name: "Trincomalee", province: "Eastern", placeCount: 35, image: "/images/hero-bg.jpg" },
  { name: "Kurunegala", province: "North Western", placeCount: 26, image: "/images/hero-2.jpg" },
  { name: "Puttalam", province: "North Western", placeCount: 20, image: "/images/negombo.jpg" },
  { name: "Anuradhapura", province: "North Central", placeCount: 42, image: "/images/hero-3.jpg" },
  { name: "Polonnaruwa", province: "North Central", placeCount: 38, image: "/images/hero-4.jpg" },
  { name: "Badulla", province: "Uva", placeCount: 30, image: "/images/hero-bg.jpg" },
  { name: "Monaragala", province: "Uva", placeCount: 18, image: "/images/hero-2.jpg" },
  { name: "Ratnapura", province: "Sabaragamuwa", placeCount: 28, image: "/images/hero-3.jpg" },
  { name: "Kegalle", province: "Sabaragamuwa", placeCount: 22, image: "/images/hero-4.jpg" },
];

export function DistrictsSection() {
  return (
    <section id="districts" className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Destinations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 text-balance">
            Explore All Districts
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-pretty">
            Discover all 25 districts of Sri Lanka, each offering unique experiences, 
            rich culture, and breathtaking landscapes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {districts.map((district, index) => (
            <Link
              key={district.name}
              href={`/districts/${district.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Card
                className="district-card-enter group overflow-hidden border border-white/10 bg-zinc-950/60 backdrop-blur-sm transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/15 hover:-translate-y-1 hover:border-amber-400/30"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-red-500 opacity-90" />
                  <div className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-md border border-white/10">
                    {district.province}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] group-hover:text-amber-300 transition-colors">
                          {district.name}
                        </h3>
                        <p className="mt-1 text-sm text-white/70">
                          Click to explore destinations
                        </p>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
                        {district.placeCount} places
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
