"use client";

import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PrizeService } from "@/app/services/prizeService";
import Image from "next/image";

interface NavItem {
  id?: string;
  label: string;
  href: string;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const prizeNavItems = Object.entries(PrizeService.getAllPrizes()).map(
      ([id, prize]) => ({
        id,
        label: prize.title.toUpperCase(),
        href: `/prize/${id}`,
      })
    );

    // Rename this variable to avoid conflict
    const combinedNavItems = [
      { label: "HOME", href: "/" },
      ...prizeNavItems,
      { label: "RULES & REGULATIONS", href: "/rules-regulations" },
      { label: "Contact Us", href: "/contact-us" },
    ];

    setNavItems(combinedNavItems); // Now using the renamed variable
    setIsLoaded(true);
  }, []);

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
            {isLoaded &&
              navItems.map((item, index) => (
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
              {isLoaded &&
                navItems.map((item, index) => (
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
