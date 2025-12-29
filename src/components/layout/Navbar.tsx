"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { Button } from "@/src/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/calendar", label: "Calendar" },
  { href: "/about", label: "AboutUs" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--c-nav-bg)",
        borderColor: "var(--c-nav-border)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center">
            <span
              className="text-[18px] font-semibold"
              style={{ color: "var(--c-text)" }}
            >
              Logo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

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
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden md:flex items-center gap-3">
              <Button variant="primary" size="md">
                Login
              </Button>
              <Button variant="outline" size="md">
                Signup
              </Button>
            </div>

            <button
              className="lg:hidden rounded-md p-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--c-text)" }}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t py-6"
            style={{ borderColor: "var(--c-nav-border)" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-[15px] font-medium transition-opacity hover:opacity-70"
                    style={{
                      color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="px-4 pt-2 flex flex-col gap-3">
                <Button variant="primary" size="md" className="w-full">
                  Login
                </Button>
                <Button variant="outline" size="md" className="w-full">
                  Signup
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
