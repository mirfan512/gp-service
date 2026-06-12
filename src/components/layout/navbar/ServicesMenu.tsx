// src/components/layout/navbar/ServicesMenu.tsx
"use client";

import { SERVICE_LINKS } from "@/src/lib/constants/navigation";
import { NavDropdown } from "./NavDropdown";

type ServicesMenuProps = {
  pathname: string | null;
};

export function ServicesMenu({ pathname }: ServicesMenuProps) {
  return (
    <NavDropdown
      title="Services"
      links={SERVICE_LINKS}
      pathname={pathname}
      menuId="services-dropdown-menu"
    />
  );
}
