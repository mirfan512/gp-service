

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { Button } from "@/src/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/calendar", label: "Calendar" },
  { href: "/about", label: "AboutUs" },
];

const serviceLinks = [
  { href: "/corporate", label: "Corporate" },
  { href: "/faq", label: "FAQ" },
  { href: "/weight-loss", label: "Weight Loss"},
  { href: "/assessment", label: "Assessment" },
];

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * Best-practice dropdown:
 * - Works on hover (desktop) + click (keyboard/touch)
 * - Closes on route change, outside click, Esc
 * - Accessible: aria-expanded, aria-controls, role=menu/menuitem
 */
function ServicesMenu({ pathname }: { pathname: string | null }) {
  const [open, setOpen] = React.useState(false);
  const menuId = React.useId();
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close on Escape
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const anyServiceActive = serviceLinks.some((l) => isActive(pathname, l.href));

  const handleMouseEnter = () => {
    // If there is a pending close timer, cancel it!
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // Instead of closing immediately, wait 200ms
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); 
  };

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
        style={{ color: anyServiceActive ? "var(--c-nav-active)" : "var(--c-nav-muted)" }}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        id={menuId}
        role="menu"
        className={[
          "absolute left-0 top-full mt-2 w-[220px] rounded-[12px] p-2 z-50",
          "transition duration-150",
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1",
        ].join(" ")}
        style={{
          background: "var(--c-nav-bg)",
          border: "1px solid var(--c-nav-border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        {serviceLinks.map((l) => {
          const active = isActive(pathname, l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              role="menuitem"
              className="block rounded-[10px] px-3 py-2 text-[14px] transition-colors"
              style={{
                color: active ? "var(--c-nav-active)" : "var(--c-text)",
                background: active ? "color-mix(in srgb, var(--c-primary) 16%, transparent)" : "transparent",
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
            <span className="text-[18px] font-semibold" style={{ color: "var(--c-text)" }}>
              Logo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium transition-opacity hover:opacity-70"
                  style={{ color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)" }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Services dropdown (desktop only) */}
            <ServicesMenu pathname={pathname} />
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md">
                Login
              </Button>
              </Link>

              <Link href="/register" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md">
                Signup
              </Button>
                </Link>
            </div>

            <button
              className="lg:hidden rounded-md p-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--c-text)" }}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-6" style={{ borderColor: "var(--c-nav-border)" }}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-[15px] font-medium transition-opacity hover:opacity-70"
                    style={{ color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Services (mobile) */}
              <div className="px-4 pt-2">
                <div className="text-[13px] font-semibold" style={{ color: "var(--c-text-muted)" }}>
                  Services
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  {serviceLinks.map((l) => {
                    const active = isActive(pathname, l.href);
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="px-2 py-2 text-[15px] font-medium rounded-[10px]"
                        style={{
                          color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)",
                          background: active ? "color-mix(in srgb, var(--c-primary) 14%, transparent)" : "transparent",
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="px-4 pt-4 flex flex-col gap-3">
                <Link href="/login" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  Login
                </Button>
                </Link>
                <Link href="/register" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="md" className="w-full">
                  Signup
                </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
