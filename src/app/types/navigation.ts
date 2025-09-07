export interface BaseNavItem {
  label: string;
  type: 'link' | 'dropdown';
}

export interface NavLinkItem extends BaseNavItem {
  type: 'link';
  href: string;
}

export interface NavDropdownItem extends BaseNavItem {
  type: 'dropdown';
  items: Array<{
    id?: string;
    label: string;
    href: string;
  }>;
}

export type NavItem = NavLinkItem | NavDropdownItem;
