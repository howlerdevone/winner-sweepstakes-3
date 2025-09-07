"use client";

import { useState, useEffect } from 'react';
import { NavItem } from '@/app/types/navigation';
import { PrizeService } from '@/app/services/prizeService';

export const useNavigation = () => {
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

    const navigationItems: NavItem[] = [
      {
        type: 'link',
        label: 'HOME',
        href: '/',
      },
      {
        type: 'dropdown',
        label: 'PRIZES',
        items: prizeNavItems,
      },
      {
        type: 'link',
        label: 'RULES & REGULATIONS',
        href: '/rules-regulations',
      },
      {
        type: 'link',
        label: 'CONTACT US',
        href: '/contact-us',
      },
    ];

    setNavItems(navigationItems);
    setIsLoaded(true);
  }, []);

  return { navItems, isLoaded };
};