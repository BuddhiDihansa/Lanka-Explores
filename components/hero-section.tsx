"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const allDistricts = [
  "Colombo", "Gampaha", "Kalutara", "Kandy", "Matale", "Nuwara Eliya",
  "Galle", "Matara", "Hambantota", "Jaffna", "Kilinochchi", "Mannar",
  "Vavuniya", "Mullaitivu", "Batticaloa", "Ampara", "Trincomalee",
  "Kurunegala", "Puttalam", "Anuradhapura", "Polonnaruwa", "Badulla",
  "Monaragala", "Ratnapura", "Kegalle"
];

const slides = [
  {
    image: "/images/hero-bg.jpg",
    title: "Discover Paradise",
    subtitle: "Experience the magic of pristine beaches and crystal-clear waters",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Explore Ancient Wonders",
    subtitle: "Journey through ancient ruins and majestic rock fortresses",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Find Your Adventure",
    subtitle: "Wander through emerald tea plantations in the misty hills",
  },
  {
    image: "/images/hero-4.jpg",
    title: "Experience True Beauty",
    subtitle: "Discover sacred temples and rich spiritual heritage",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(false);
    // Small delay to reset animation before changing slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(true);
    }, 50);
  }, []);

  const prevSlide = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(true);
    }, 50);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(true);
    }, 50);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const filteredDistricts = allDistricts.filter((district) =>
    district.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Carousel Slides with Ken Burns Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "1500ms" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-transform ease-out ${
                index === currentSlide && isAnimating
                  ? "scale-115 duration-[5000ms]"
                  : "scale-100 duration-0"
              }`}
              style={{
                transform: index === currentSlide && isAnimating ? "scale(1.15)" : "scale(1)",
                transitionDuration: index === currentSlide && isAnimating ? "5000ms" : "0ms",
                transitionTimingFunction: "linear",
              }}
              priority={index === 0}
            />
          </div>
          {/* Dark gradient overlay - bottom to top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-amber-400/30 text-white hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-amber-400/30 text-white hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Content Container - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Dynamic Title with Fade Animation */}
        <div className="relative h-[200px] md:h-[240px] w-full flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute text-center px-4 transition-all duration-700 ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance tracking-tight">
                {slide.title.split(" ").slice(0, 1).map((word, wordIndex) => (
                  <span key={wordIndex}>{word} </span>
                ))}
                <span className="text-amber-400">
                  {slide.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto text-pretty">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl w-full mx-auto mt-8 px-4">
          <div className="flex items-center bg-black/40 backdrop-blur-md rounded-full border border-amber-400/30 overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 pl-5 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search by district..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="flex-1 px-4 py-4 bg-transparent text-white placeholder-white/50 focus:outline-none"
            />
            <Button className="m-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 shadow-lg shadow-amber-500/30">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && searchQuery && filteredDistricts.length > 0 && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-black/90 backdrop-blur-md rounded-2xl border border-amber-400/20 shadow-xl overflow-hidden z-30">
              {filteredDistricts.slice(0, 5).map((district) => (
                <button
                  key={district}
                  className="w-full px-5 py-3 text-left text-white hover:bg-amber-500/20 flex items-center gap-3 transition-colors"
                  onClick={() => {
                    setSearchQuery(district);
                    setShowSuggestions(false);
                  }}
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {district}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 px-4">
          {[
            { number: "25", label: "Districts" },
            { number: "500+", label: "Places" },
            { number: "200+", label: "Hotels" },
            { number: "1M+", label: "Visitors" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 h-3 bg-amber-400 shadow-lg shadow-amber-400/50"
                : "w-3 h-3 bg-white/40 hover:bg-amber-400/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
