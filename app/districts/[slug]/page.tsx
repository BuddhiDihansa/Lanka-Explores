"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, MapPin, Users, Star, Calendar, UtensilsCrossed, Landmark, Globe } from "lucide-react";
import { getDistrictInfo } from "@/lib/district-data";

const districts = [
  { name: "Colombo", slug: "colombo", province: "Western" },
  { name: "Gampaha", slug: "gampaha", province: "Western" },
  { name: "Kalutara", slug: "kalutara", province: "Western" },
  { name: "Kandy", slug: "kandy", province: "Central" },
  { name: "Matale", slug: "matale", province: "Central" },
  { name: "Nuwara Eliya", slug: "nuwara-eliya", province: "Central" },
  { name: "Galle", slug: "galle", province: "Southern" },
  { name: "Matara", slug: "matara", province: "Southern" },
  { name: "Hambantota", slug: "hambantota", province: "Southern" },
  { name: "Jaffna", slug: "jaffna", province: "Northern" },
  { name: "Kilinochchi", slug: "kilinochchi", province: "Northern" },
  { name: "Mannar", slug: "mannar", province: "Northern" },
  { name: "Vavuniya", slug: "vavuniya", province: "Northern" },
  { name: "Mullaitivu", slug: "mullaitivu", province: "Northern" },
  { name: "Batticaloa", slug: "batticaloa", province: "Eastern" },
  { name: "Ampara", slug: "ampara", province: "Eastern" },
  { name: "Trincomalee", slug: "trincomalee", province: "Eastern" },
  { name: "Kurunegala", slug: "kurunegala", province: "North Western" },
  { name: "Puttalam", slug: "puttalam", province: "North Western" },
  { name: "Anuradhapura", slug: "anuradhapura", province: "North Central" },
  { name: "Polonnaruwa", slug: "polonnaruwa", province: "North Central" },
  { name: "Badulla", slug: "badulla", province: "Uva" },
  { name: "Monaragala", slug: "monaragala", province: "Uva" },
  { name: "Ratnapura", slug: "ratnapura", province: "Sabaragamuwa" },
  { name: "Kegalle", slug: "kegalle", province: "Sabaragamuwa" },
];

function getDistrictFromSlug(slug: string) {
  return districts.find((district) => district.slug === slug);
}

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const district = getDistrictFromSlug(slug);
  const info = district ? getDistrictInfo(slug) : null;

  if (!district || !info) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <div aria-hidden className="fixed inset-0 -z-20 bg-black" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-amber-400">District not found</h1>
          <p className="mt-4 text-white/60">Please go back and choose a district from the list.</p>
          <Link
            href="/districts"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-zinc-950 px-5 py-3 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500/10"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to districts
          </Link>
        </div>
      </main>
    );
  }

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

      {/* Hero Image Section */}
      <div className="relative h-96 w-full overflow-hidden sm:h-[28rem] lg:h-[32rem]">
        <Image
          src={info.image}
          alt={district.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <Link
            href="/districts"
            className="w-fit inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white/60 hover:bg-white/20 backdrop-blur-md"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to districts
          </Link>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 rounded-full bg-amber-400/30 flex items-center justify-center backdrop-blur-md">
                <MapPin className="h-6 w-6 text-amber-300" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 block">Explore</span>
                <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{district.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Description Section */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-10">
          <p className="text-base text-white/70 leading-relaxed md:text-lg">
            {info.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur">
              <Globe className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-white/80">{district.province}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur">
              <Users className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-white/80">{info.population}</span>
            </div>
          </div>
        </div>

        {/* Quick Facts Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-zinc-950">
            <Star className="h-5 w-5 text-amber-400 mb-3" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Top Attraction</p>
            <p className="text-base font-semibold text-white">{info.topAttraction}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-zinc-950">
            <Calendar className="h-5 w-5 text-amber-400 mb-3" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Best Time</p>
            <p className="text-base font-semibold text-white">{info.bestTimeToVisit}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-zinc-950">
            <UtensilsCrossed className="h-5 w-5 text-amber-400 mb-3" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Local Specialty</p>
            <p className="text-sm font-semibold text-white">{info.localSpecialty}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-zinc-950">
            <Landmark className="h-5 w-5 text-amber-400 mb-3" />
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">Places & Hotels</p>
            <p className="text-base font-semibold text-white">{info.places} • {info.hotels}</p>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-500" />
            <h2 className="text-2xl font-bold text-white md:text-3xl">Top Highlights</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {info.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-zinc-950 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400 group-hover:bg-amber-400/30">
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="text-base text-white/85 group-hover:text-white leading-relaxed">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-3xl border border-amber-400/30 bg-gradient-to-r from-amber-400/10 to-amber-500/5 p-8 sm:p-10 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white md:text-3xl">Ready to explore {district.name}?</h3>
          <p className="mt-3 text-white/70">Discover more places and accommodations in this beautiful district.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/districts"
              className="rounded-full border border-amber-400/40 bg-zinc-950 px-6 py-3 text-sm font-semibold text-amber-400 transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-500/5"
            >
              View all districts
            </Link>
            <button className="rounded-full border border-amber-400 bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/50 hover:scale-105">
              Plan your visit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
