"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Search, Zap, Filter } from "lucide-react";
import { getDistrictInfo } from "@/lib/district-data";

const districts = [
  { name: "Colombo", slug: "colombo", province: "Western", places: 35 },
  { name: "Gampaha", slug: "gampaha", province: "Western", places: 28 },
  { name: "Kalutara", slug: "kalutara", province: "Western", places: 22 },
  { name: "Kandy", slug: "kandy", province: "Central", places: 28 },
  { name: "Matale", slug: "matale", province: "Central", places: 18 },
  { name: "Nuwara Eliya", slug: "nuwara-eliya", province: "Central", places: 16 },
  { name: "Galle", slug: "galle", province: "Southern", places: 22 },
  { name: "Matara", slug: "matara", province: "Southern", places: 16 },
  { name: "Hambantota", slug: "hambantota", province: "Southern", places: 14 },
  { name: "Jaffna", slug: "jaffna", province: "Northern", places: 20 },
  { name: "Kilinochchi", slug: "kilinochchi", province: "Northern", places: 8 },
  { name: "Mannar", slug: "mannar", province: "Northern", places: 10 },
  { name: "Vavuniya", slug: "vavuniya", province: "Northern", places: 9 },
  { name: "Mullaitivu", slug: "mullaitivu", province: "Northern", places: 12 },
  { name: "Batticaloa", slug: "batticaloa", province: "Eastern", places: 14 },
  { name: "Ampara", slug: "ampara", province: "Eastern", places: 12 },
  { name: "Trincomalee", slug: "trincomalee", province: "Eastern", places: 15 },
  { name: "Kurunegala", slug: "kurunegala", province: "North Western", places: 16 },
  { name: "Puttalam", slug: "puttalam", province: "North Western", places: 11 },
  { name: "Anuradhapura", slug: "anuradhapura", province: "North Central", places: 18 },
  { name: "Polonnaruwa", slug: "polonnaruwa", province: "North Central", places: 14 },
  { name: "Badulla", slug: "badulla", province: "Uva", places: 12 },
  { name: "Monaragala", slug: "monaragala", province: "Uva", places: 10 },
  { name: "Ratnapura", slug: "ratnapura", province: "Sabaragamuwa", places: 11 },
  { name: "Kegalle", slug: "kegalle", province: "Sabaragamuwa", places: 13 },
];

const provinces = ["All", "Western", "Central", "Southern", "Northern", "Eastern", "North Western", "North Central", "Uva", "Sabaragamuwa"];

const provinceColors: { [key: string]: { bg: string; text: string; border: string } } = {
  "Western": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-400/30" },
  "Central": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-400/30" },
  "Southern": { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-400/30" },
  "Northern": { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-400/30" },
  "Eastern": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-400/30" },
  "North Western": { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-400/30" },
  "North Central": { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-400/30" },
  "Uva": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-400/30" },
  "Sabaragamuwa": { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-400/30" },
};

function getDistrictImage(slug: string) {
  const info = getDistrictInfo(slug);
  return info?.image || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=700&fit=crop";
}

export default function DistrictsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredAndSorted = useMemo(() => {
    let filtered = districts.filter((district) => {
      const matchesSearch = district.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProvince = selectedProvince === "All" || district.province === selectedProvince;
      return matchesSearch && matchesProvince;
    });

    return filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "places") return b.places - a.places;
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, selectedProvince, sortBy]);

  const groupedByProvince = useMemo(() => {
    const grouped: { [key: string]: typeof districts } = {};
    filteredAndSorted.forEach((district) => {
      if (!grouped[district.province]) {
        grouped[district.province] = [];
      }
      grouped[district.province].push(district);
    });
    return grouped;
  }, [filteredAndSorted]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div aria-hidden className="fixed inset-0 -z-20 bg-black" />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.2),transparent_0_18%,transparent_34%),radial-gradient(circle_at_top_right,rgba(202,138,4,0.14),transparent_0_16%,transparent_32%),radial-gradient(circle_at_bottom_center,rgba(251,191,36,0.08),transparent_0_16%,transparent_36%),linear-gradient(180deg,#090909_0%,#050505_55%,#090909_100%)]"
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_18%,rgba(251,191,36,0.12),transparent_0_14%,transparent_32%),radial-gradient(circle_at_80%_14%,rgba(202,138,4,0.1),transparent_0_12%,transparent_30%),radial-gradient(circle_at_50%_88%,rgba(251,191,36,0.05),transparent_0_12%,transparent_32%)] blur-3xl opacity-80"
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:100%_100%,140px_140px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_100%)] opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-amber-400/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400 mb-4">
            <Zap className="inline-block h-4 w-4 mr-2" />
            Explore Districts
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Discover Sri Lanka's <span className="text-amber-400">25 Districts</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/60 md:text-lg">
            Choose a district to explore its unique attractions, culture, and attractions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 rounded-2xl border border-amber-400/20 bg-zinc-950/70 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-amber-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search districts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/40 outline-none"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <Filter className="h-5 w-5 text-amber-400 self-center mr-2" />
            {provinces.map((province) => (
              <button
                key={province}
                onClick={() => setSelectedProvince(province)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                  selectedProvince === province
                    ? "border border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-400/50"
                    : "border border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:bg-white/10"
                }`}
              >
                {province}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-white/20 bg-zinc-950/70 px-4 py-1.5 text-sm font-medium text-white outline-none transition-colors hover:border-white/40"
            >
              <option value="name">Sort by name</option>
              <option value="places">Sort by popularity</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-white/50">
          Showing <span className="font-semibold text-white">{filteredAndSorted.length}</span> of <span className="font-semibold text-white">25</span> districts
        </div>

        {/* Districts Grouped by Province */}
        {filteredAndSorted.length > 0 ? (
          <div className="space-y-10">
            {Object.entries(groupedByProvince).map(([province, provinceDistricts]) => {
              const colors = provinceColors[province] || { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-400/30" };
              return (
                <div key={province}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`h-1 w-8 rounded-full ${colors.text}`} />
                    <h2 className={`text-lg font-semibold ${colors.text}`}>{province}</h2>
                    <span className={`rounded-full ${colors.bg} border ${colors.border} px-3 py-1 text-xs font-medium ${colors.text}`}>
                      {provinceDistricts.length}
                    </span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {provinceDistricts.map((district) => (
                      <Link
                        key={district.slug}
                        href={`/districts/${district.slug}`}
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-400/20"
                      >
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={getDistrictImage(district.slug)}
                            alt={district.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </div>
                        
                        <div className="relative p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0" />
                                <h3 className="font-semibold text-white group-hover:text-amber-300 text-base">
                                  {district.name}
                                </h3>
                              </div>
                              <p className="text-xs text-white/45">{district.places} attractions</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-amber-400 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-1" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-12 text-center">
            <MapPin className="mx-auto h-12 w-12 text-white/30 mb-4" />
            <p className="text-white/60 text-lg">No districts found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedProvince("All");
              }}
              className="mt-4 rounded-full border border-amber-400/40 bg-zinc-950 px-4 py-2 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
