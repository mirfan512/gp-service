// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";
import { Button } from "@/src/components/ui/Button";
import { useMobileMenu } from "@/src/lib/hooks/useMobileMenu";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileMenu } from "./navbar/MobileMenu";


export function Navbar() {
  const pathname = usePathname();
  const { isOpen, toggle, close } = useMobileMenu(pathname);

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
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-[18px] font-semibold"
              style={{ color: "var(--c-text)" }}
            >
              Logo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav pathname={pathname} />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" onClick={close}>
                <Button variant="primary" size="md">
                  Login
                </Button>
              </Link>

              <Link href="/register" onClick={close}>
                <Button variant="outline" size="md">
                  Signup
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden rounded-md p-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--c-text)" }}
              onClick={toggle}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu pathname={pathname} onClose={close} />}
      </div>
    </header>
  );
}
