"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useNavigation } from "@/app/hooks/useNavigation";
import { NavItem } from "@/app/components/navigation/NavItem";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navItems, isLoaded } = useNavigation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/winnerLogo.png"
              alt="Winner Logo"
              width={400}
              height={132}
              className="h-14 w-auto md:h-16"
            />
          </div>

          {/* Desktop Navigation - Using Loop Pattern */}
          <nav className="hidden md:flex items-center space-x-8">
            {isLoaded &&
              navItems.map((item, index) => (
                <NavItem key={index} item={item} isMobile={false} />
              ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-yellow-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Using Loop Pattern */}
        {isMobileMenuOpen && isLoaded && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  onItemClick={closeMobileMenu}
                  isMobile={true}
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
