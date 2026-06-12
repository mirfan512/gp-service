"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CHECK_SVG = (
  <svg viewBox="0 0 9 9" width={9} height={9} aria-hidden="true">
    <path
      d="M1.5 4.5l2 2 4-4"
      stroke="#6e7d63"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const trustItems = [
  "No credit card required",
  "Fully private & anonymous",
  "Clinically informed",
];

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        padding: "96px 40px 80px",
        textAlign: "center",
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          background: "#e8ede4",
          color: "#3a4535",
          fontSize: 12,
          fontWeight: 700,
          padding: "6px 16px",
          borderRadius: 20,
          marginBottom: 28,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#A3B094",
            display: "inline-block",
          }}
        />
        AI-powered mental wellness
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 800,
          color: "#1a1a1a",
          lineHeight: 1.08,
          maxWidth: 660,
          margin: "0 auto 22px",
          letterSpacing: "-0.025em",
        }}
      >
        Meet <span style={{ color: "#6e7d63" }}>Kate</span>.
        <br />
        Your therapist is{" "}
        <span style={{ color: "#6e7d63" }}>only</span>
        <br />
        one message away.
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: 18,
          color: "#666",
          lineHeight: 1.7,
          maxWidth: 520,
          margin: "0 auto 44px",
        }}
      >
        Thoughtful, private conversations that help you manage anxiety, stress,
        and difficult emotions — available 24/7, no waitlist.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 52,
        }}
      >
        <Link href="/assessment">
          <button
            style={{
              background: "#A3B094",
              color: "#fff",
              border: "none",
              padding: "15px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(163,176,148,0.4)",
              transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
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
            Start your free session
          </button>
        </Link>
        <a href="/">
          <button
            style={{
              background: "transparent",
              color: "#1a1a1a",
              border: "1.5px solid #ddd",
              padding: "15px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#A3B094";
              (e.currentTarget as HTMLButtonElement).style.color = "#6e7d63";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd";
              (e.currentTarget as HTMLButtonElement).style.color = "#1a1a1a";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            See how it works
          </button>
        </a>
      </div>

      {/* Trust items */}
      <div
        style={{
          display: "flex",
          gap: 28,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {trustItems.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "#666",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#e8ede4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {CHECK_SVG}
            </div>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
