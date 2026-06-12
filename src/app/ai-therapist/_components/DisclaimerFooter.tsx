"use client";

import Link from "next/link";
import Image from "next/image";

export function DisclaimerFooter() {
  return (
    <>
      {/* Footer */}
      <footer
        style={{
          padding: "36px 40px",
          borderTop: "1px solid #e5e5e5",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
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
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: 22 }}>
          {["Privacy", "Terms", "Support", "Blog"].map((label) => (
            <Link
              key={label}
              href="#"
              style={{
                fontSize: 13,
                color: "#999",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#666")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#999")
              }
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={{ fontSize: 12, color: "#aaa", maxWidth: 320, lineHeight: 1.55 }}>
          © 2025 GP Services. Not a licensed mental health provider.
        </div>
      </footer>

      {/* Disclaimer bar */}
      <div
        style={{
          background: "#f4f6f2",
          padding: "12px 40px",
          borderTop: "1px solid #e5e5e5",
          textAlign: "center",
          fontSize: 12,
          color: "#aaa",
          lineHeight: 1.6,
        }}
      >
        GP Services is a wellness tool and does not provide medical advice,
        diagnosis, or treatment. If you are experiencing a mental health
        emergency, please call your local emergency services or a crisis hotline.
      </div>
    </>
  );
}
