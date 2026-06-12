"use client";

import { WeightLossLinks } from "@/src/lib/constants/navigation";
import { NavDropdown } from "./NavDropdown";

type WeightLossMenuProps = {
  pathname: string | null;
};

export function WeightLossMenu({ pathname }: WeightLossMenuProps) {
  return (
    <NavDropdown
      title="Weight Loss Injections"
      links={WeightLossLinks}
      pathname={pathname}
      menuId="weight-loss-dropdown-menu"
    />
  );
}