// src/components/layout/navbar/MobileMenu.tsx
"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { isNavLinkActive } from "@/src/lib/utils/navigation";
import { NAV_LINKS, SERVICE_LINKS } from "@/src/lib/constants/navigation";

type MobileMenuProps = {
  pathname: string | null;
  onClose: () => void;
};


export function MobileMenu({ pathname, onClose }: MobileMenuProps) {
  return (
    <div
      className="lg:hidden border-t py-6"
      style={{ borderColor: "var(--c-nav-border)" }}
    >
      <div className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => {
          const active = isNavLinkActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[15px] font-medium transition-opacity hover:opacity-70"
              style={{
                color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)",
              }}
              onClick={onClose}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Services (mobile) */}
        <div className="px-4 pt-2">
          <div
            className="text-[13px] font-semibold"
            style={{ color: "var(--c-text-muted)" }}
          >
            Services
          </div>
          <div className="mt-2 flex flex-col gap-1">
            {SERVICE_LINKS.map((l) => {
              const active = isNavLinkActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-2 py-2 text-[15px] font-medium rounded-[10px]"
                  style={{
                    color: active
                      ? "var(--c-nav-active)"
                      : "var(--c-nav-muted)",
                    background: active
                      ? "color-mix(in srgb, var(--c-primary) 14%, transparent)"
                      : "transparent",
                  }}
                  onClick={onClose}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="px-4 pt-4 flex flex-col gap-3">
          <Link href="/login" className="w-full" onClick={onClose}>
            <Button variant="primary" size="md" className="w-full">
              Login
            </Button>
          </Link>
          <Link href="/register" className="w-full" onClick={onClose}>
            <Button variant="outline" size="md" className="w-full">
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
