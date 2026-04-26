"use client";

import Image from "next/image";
import { Star, MapPin, Map, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const hotels = [
  {
    name: "Cinnamon Grand Colombo",
    district: "Colombo",
    rating: 5,
    price: 180,
    image: "/images/colombo.jpg",
    amenities: ["wifi", "parking", "breakfast"],
  },
  {
    name: "Earl's Regency Hotel",
    district: "Kandy",
    rating: 5,
    price: 150,
    image: "/images/kandy.jpg",
    amenities: ["wifi", "parking", "breakfast"],
  },
  {
    name: "Jetwing Lighthouse",
    district: "Galle",
    rating: 5,
    price: 220,
    image: "/images/galle.jpg",
    amenities: ["wifi", "parking"],
  },
  {
    name: "Heritance Negombo",
    district: "Negombo",
    rating: 4,
    price: 120,
    image: "/images/negombo.jpg",
    amenities: ["wifi", "breakfast"],
  },
  {
    name: "Jaffna Heritage Hotel",
    district: "Jaffna",
    rating: 4,
    price: 85,
    image: "/images/jaffna.jpg",
    amenities: ["wifi", "parking", "breakfast"],
  },
  {
    name: "Sigiriya Village Hotel",
    district: "Sigiriya",
    rating: 4,
    price: 110,
    image: "/images/sigiriya.jpg",
    amenities: ["wifi", "parking"],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  breakfast: <Coffee className="w-4 h-4" />,
};

export function HotelsSection() {
  return (
    <section id="hotels" className="py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Stay
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 text-balance">
            Featured Hotels
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-pretty">
            Find the perfect accommodation for your Sri Lankan adventure, from
            luxury resorts to cozy boutique hotels.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Card
              key={hotel.name}
              className="group overflow-hidden border-0 bg-zinc-900/50 hover:bg-zinc-800/50 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-0.5 mb-1">
                      {Array.from({ length: hotel.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-amber-400/30">
                    <span className="text-lg font-bold text-amber-400">
                      ${hotel.price}
                    </span>
                    <span className="text-white/70 text-sm">/night</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-1 text-white/50 text-sm mb-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{hotel.district}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {hotel.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 text-amber-400/70"
                      title={amenity}
                    >
                      {amenityIcons[amenity]}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-amber-400/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400"
                >
                  <Map className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 shadow-lg shadow-amber-500/30"
          >
            Browse All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
}
