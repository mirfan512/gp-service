"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 64,
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Image
          src="/icons/online-gp-services-logo.jpg"
          alt="Online GP Services"
          width={48}
          height={48}
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Nav links */}
      <div
        style={{
          display: "flex",
          gap: 30,
          alignItems: "center",
        }}
        className="ai-nav-links"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              const targetId = link.href.replace('#', '');
              const elem = document.getElementById(targetId);
              if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', link.href);
              }
            }}
            style={{
              fontSize: 14,
              color: "#666",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#1a1a1a")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#666")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <Link href="/assessment">
        <button
          style={{
            background: "#A3B094",
            color: "#fff",
            border: "none",
            padding: "9px 22px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#6e7d63";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#A3B094";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          Start free
        </button>
      </Link>

      <style>{`
        @media (max-width: 768px) {
          .ai-nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
