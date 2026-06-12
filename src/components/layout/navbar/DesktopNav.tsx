// src/components/layout/navbar/DesktopNav.tsx
"use client";

import Link from "next/link";
import { isNavLinkActive } from "@/src/lib/utils/navigation";
import { NadInjectionMenu } from "./NadInjectionMenu";
import { WeightLossMenu } from "./WeightLossMenu";

type DesktopNavProps = {
  pathname: string | null;
};

export function DesktopNav({ pathname }: DesktopNavProps) {
  const baseLinkClass = [
    // Font — scales up properly across breakpoints
    "text-[13px] 2xl:text-[14px]",
    "font-semibold tracking-wide whitespace-nowrap",
    "transition-all duration-300",
    // Underline active indicator
    "relative py-2",
    "after:content-[''] after:absolute after:bottom-0 after:left-0",
    "after:w-full after:h-[2px] after:bg-[var(--c-nav-active)]",
    "after:transform after:scale-x-0 hover:after:scale-x-100",
    "after:transition-transform after:duration-300 after:origin-left",
    "hover:text-[var(--c-nav-active)]",
  ].join(" ");

  const getLinkClass = (href: string) => {
    const active = isNavLinkActive(pathname, href);
    return `${baseLinkClass} ${
      active
        ? "after:scale-x-100 text-[var(--c-nav-active)]"
        : "text-[var(--c-nav-muted)] opacity-80 hover:opacity-100"
    }`;
  };

  return (
    <nav className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-7 whitespace-nowrap">
      <Link href="/" className={getLinkClass("/")}>
        GP Consultations
      </Link>

      <Link href="/ai-therapist" className={getLinkClass("/ai-therapist")}>
        AI Therapist
      </Link>

      <Link href="/blood-tests" className={getLinkClass("/blood-tests")}>
        Blood Tests
      </Link>

      {/* Dropdown items — pass same font/gap context */}
      <WeightLossMenu pathname={pathname} />
      <NadInjectionMenu pathname={pathname} />

      <Link href="/corporate" className={getLinkClass("/corporate")}>
        Corporate
      </Link>

      <Link href="/contact" className={getLinkClass("/contact")}>
        Contact
      </Link>

      <Link href="/faq" className={getLinkClass("/faq")}>
        FAQ
      </Link>
    </nav>
  );
}