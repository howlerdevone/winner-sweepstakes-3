"use client";

import React from "react";
import { NavLinkItem } from "@/app/types/navigation";

interface NavLinkProps {
  item: NavLinkItem;
  onClick?: () => void;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  item,
  onClick,
  className = "text-gray-700 hover:text-yellow-600 font-medium text-sm tracking-wide transition-colors duration-200 hover:scale-105 transform",
}) => {
  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
};
