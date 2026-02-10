// src/components/layout/navbar/DesktopNav.tsx
"use client";

import Link from "next/link";
import { isNavLinkActive } from "@/src/lib/utils/navigation";
import { NAV_LINKS } from "@/src/lib/constants/navigation";
import { ServicesMenu } from "./ServicesMenu";

type DesktopNavProps = {
  pathname: string | null;
};

export function DesktopNav({ pathname }: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAV_LINKS.map((link) => {
        const active = isNavLinkActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-[15px] font-medium transition-opacity hover:opacity-70"
            style={{
              color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)",
            }}
          >
            {link.label}
          </Link>
        );
      })}

      <ServicesMenu pathname={pathname} />
    </nav>
  );
}
