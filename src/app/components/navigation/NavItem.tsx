"use client";

import React from "react";
import { NavItem as NavItemType } from "@/app/types/navigation";
import { NavLink } from "@/app/components/navigation/NavLink";
import { NavDropdown } from "./NavDropdown";

interface NavItemProps {
  item: NavItemType;
  onItemClick?: () => void;
  isMobile?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  onItemClick,
  isMobile = false,
}) => {
  if (item.type === "link") {
    const className = isMobile
      ? "block text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200"
      : "text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200 hover:scale-105 transform";

    return <NavLink item={item} onClick={onItemClick} className={className} />;
  }

  if (item.type === "dropdown") {
    return (
      <NavDropdown item={item} onItemClick={onItemClick} isMobile={isMobile} />
    );
  }

  return null;
};
