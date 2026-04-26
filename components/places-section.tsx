"use client";

import Image from "next/image";
import { Star, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const places = [
  {
    name: "Temple of the Sacred Tooth Relic",
    category: "Temple",
    district: "Kandy",
    rating: 4.9,
    reviews: 2840,
    image: "/images/kandy.jpg",
  },
  {
    name: "Sigiriya Rock Fortress",
    category: "Historical",
    district: "Sigiriya",
    rating: 4.8,
    reviews: 3250,
    image: "/images/sigiriya.jpg",
  },
  {
    name: "Galle Fort",
    category: "Heritage",
    district: "Galle",
    rating: 4.7,
    reviews: 2150,
    image: "/images/galle.jpg",
  },
  {
    name: "Negombo Beach",
    category: "Beach",
    district: "Negombo",
    rating: 4.5,
    reviews: 1890,
    image: "/images/negombo.jpg",
  },
  {
    name: "Nallur Kandaswamy Temple",
    category: "Temple",
    district: "Jaffna",
    rating: 4.6,
    reviews: 980,
    image: "/images/jaffna.jpg",
  },
  {
    name: "Gangaramaya Temple",
    category: "Temple",
    district: "Colombo",
    rating: 4.7,
    reviews: 2100,
    image: "/images/colombo.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Temple: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Historical: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  Heritage: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Beach: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

export function PlacesSection() {
  return (
    <section id="places" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Must Visit
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 text-balance">
            Popular Places
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-pretty">
            Explore the most visited and highly rated attractions across Sri Lanka.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <Card
              key={place.name}
              className="group overflow-hidden border-0 bg-zinc-900/50 hover:bg-zinc-800/50 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge
                    className={`${
                      categoryColors[place.category] || "bg-gray-500/20 text-gray-400"
                    } font-medium border`}
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {place.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 border border-amber-400/30">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-white">
                    {place.rating}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-white mb-1 line-clamp-1 group-hover:text-amber-400 transition-colors">
                  {place.name}
                </h3>
                <div className="flex items-center gap-1 text-white/50 text-sm mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{place.district}</span>
                  <span className="mx-2 text-white/20">|</span>
                  <span>{place.reviews.toLocaleString()} reviews</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold shadow-lg shadow-amber-500/20">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-amber-400/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 px-8"
          >
            View All Places
          </Button>
        </div>
      </div>
    </section>
  );
}
