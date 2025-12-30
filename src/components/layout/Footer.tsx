"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/calendar", label: "Calendar" },
  { href: "/about", label: "About Us" },
];

export function Footer() {
  return (
      <footer
      className="footer-gradient footer-diagonal w-full text-white"
      style={{
        background:
          "linear-gradient(90deg, var(--c-hero-start) 0%, var(--c-hero-end) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="relative py-10 lg:py-12">


          {/* Top right: Legal + social icons */}
          <div className="mt-6 flex items-center justify-end gap-8">
            <Link href="/legal" className="text-[20px] font-medium opacity-95 hover:opacity-80">
              Legal
            </Link>

            <div className="flex items-center gap-8">
              <a href="#" aria-label="Twitter" className="opacity-95 hover:opacity-80">
                <Image src="/icons/t.svg" alt="" width={24} height={18} />
              </a>
              <a href="#" aria-label="Facebook" className="opacity-95 hover:opacity-80">
                <Image src="/icons/f.svg" alt="" width={18} height={18} />
              </a>
              <a href="#" aria-label="Google Plus" className="opacity-95 hover:opacity-80">
                <Image src="/icons/google.svg" alt="" width={30} height={30} />
              </a>
            </div>
          </div>
          {/* Divider line */}
          <div className=" relative top-10 mx-auto h-[2px] w-[90%] opacity-30"
            style={{ background: "rgba(255,255,255,0.55)" }}
          />

          {/* Bottom row: left nav + right copyright */}
          <div className="relative py-5 top-5 mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap items-center gap-5 lg:gap-12">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[22px] font-medium opacity-95 hover:opacity-80"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <p className="text-[20px] font-medium opacity-95">
              © 2024 Online GPs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
