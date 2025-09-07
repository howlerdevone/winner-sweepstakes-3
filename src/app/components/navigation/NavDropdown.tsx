"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavDropdownItem } from "@/app/types/navigation";

interface NavDropdownProps {
  item: NavDropdownItem;
  onItemClick?: () => void;
  isMobile?: boolean;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  item,
  onItemClick,
  isMobile = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleItemClick = useCallback(() => {
    closeDropdown();
    onItemClick?.();
  }, [closeDropdown, onItemClick]);

  if (isMobile) {
    return (
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200"
          aria-expanded={isOpen}
        >
          {item.label}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="mt-2 pl-4 space-y-2">
            {item.items.map((subItem) => (
              <a
                key={subItem.id || subItem.href}
                href={subItem.href}
                className="block text-gray-600 hover:text-yellow-600 font-medium text-sm transition-colors duration-200"
                onClick={handleItemClick}
              >
                {subItem.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200 hover:scale-105 transform"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {item.items.map((subItem) => (
            <a
              key={subItem.id || subItem.href}
              href={subItem.href}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-150"
              onClick={handleItemClick}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
