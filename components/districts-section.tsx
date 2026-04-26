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
                className="group overflow-hidden border-0 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-amber-500/90 backdrop-blur-sm rounded text-xs font-semibold text-black">
                    {district.province}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {district.name}
                  </h3>
                  <div className="flex items-center gap-1 text-white/50 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{district.placeCount} places</span>
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
