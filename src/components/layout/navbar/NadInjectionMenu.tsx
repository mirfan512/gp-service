"use client";

import { NadInjectionLinks } from "@/src/lib/constants/navigation";
import { NavDropdown } from "./NavDropdown";

type NadInjectionMenuProps = {
  pathname: string | null;
};

export function NadInjectionMenu({ pathname }: NadInjectionMenuProps) {
  return (
    <NavDropdown
      title={
        <>
          NAD<sup>+</sup> Injections
        </>
      }
      links={NadInjectionLinks}
      pathname={pathname}
      menuId="nad-injection-dropdown-menu"
    />
  );
}
