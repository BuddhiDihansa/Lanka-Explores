"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Districts", href: "#districts" },
  { name: "Places", href: "#places" },
  { name: "Hotels", href: "#hotels" },
];

const popularDistricts = [
  { name: "Colombo", href: "#" },
  { name: "Kandy", href: "#" },
  { name: "Galle", href: "#" },
  { name: "Negombo", href: "#" },
  { name: "Jaffna", href: "#" },
  { name: "Sigiriya", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-amber-400/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                Lanka <span className="text-amber-400">Explorer</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your ultimate guide to exploring the beauty, culture, and
              hospitality of Sri Lanka - the Pearl of the Indian Ocean.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-amber-500 border border-amber-400/20 hover:border-amber-400 flex items-center justify-center transition-all duration-300 text-white hover:text-black"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/50 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Districts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">
              Popular Districts
            </h3>
            <ul className="space-y-3">
              {popularDistricts.map((district) => (
                <li key={district.name}>
                  <Link
                    href={district.href}
                    className="text-white/50 hover:text-amber-400 transition-colors duration-200"
                  >
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">
                  123 Galle Road, Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-white/50 text-sm">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-white/50 text-sm">
                  info@lankaexplorer.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              {new Date().getFullYear()} Lanka Explorer. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-white/40 hover:text-amber-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-amber-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
