// src/components/layout/navbar/ServicesMenu.tsx
"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useId } from "react";
import { useDropdownMenu } from "@/src/lib/hooks/useDropdownMenu";
import { isNavLinkActive } from "@/src/lib/utils/navigation";
import { SERVICE_LINKS } from "@/src/lib/constants/navigation";

type ServicesMenuProps = {
  pathname: string | null;
};


export function ServicesMenu({ pathname }: ServicesMenuProps) {
  const { open, wrapRef, handleMouseEnter, handleMouseLeave, toggle, close } =
    useDropdownMenu(pathname);
  const menuId = useId();

  const anyServiceActive = SERVICE_LINKS.some((l) =>
    isNavLinkActive(pathname, l.href)
  );

  return (
    <div
      ref={wrapRef}
      className="relative hidden lg:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-[15px] font-medium transition-opacity hover:opacity-70"
        style={{
          color: anyServiceActive
            ? "var(--c-nav-active)"
            : "var(--c-nav-muted)",
        }}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={toggle}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        className={[
          "absolute left-0 top-full mt-2 w-[220px] rounded-[12px] p-2 z-50",
          "transition duration-150",
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-1",
        ].join(" ")}
        style={{
          background: "var(--c-nav-bg)",
          border: "1px solid var(--c-nav-border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        {SERVICE_LINKS.map((l) => {
          const active = isNavLinkActive(pathname, l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              role="menuitem"
              className="block rounded-[10px] px-3 py-2 text-[14px] transition-colors"
              style={{
                color: active ? "var(--c-nav-active)" : "var(--c-text)",
                background: active
                  ? "color-mix(in srgb, var(--c-primary) 16%, transparent)"
                  : "transparent",
              }}
              onClick={close}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
