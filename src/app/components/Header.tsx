"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import winnerLogo from "/public/winner-logo.png";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WIN $1,125 MILLION", href: "/prize/grand-prize" },
    { label: "TRIP TO PARADISE", href: "/win-a-trip-to-paradise" },
    { label: "ULTIMATE HOME THEATER", href: "/ultimate-home-theater" },
    { label: "EUROPE EXTRAVAGANZA", href: "/european-extravaganza" },
    { label: "RULES & REGULATIONS", href: "/rules-regulations" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/winnerLogo.png"
              alt="Winner Logo"
              width={300}
              height={99}
              className="h-10 w-auto"
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
