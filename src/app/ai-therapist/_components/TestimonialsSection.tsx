"use client";

import { useEffect, useRef, useState } from "react";

const STAR = (
  <svg viewBox="0 0 12 12" width={14} height={14} aria-hidden="true">
    <path
      d="M6 1l1.4 4H12l-3.7 2.7 1.4 4L6 9 2.3 11.7l1.4-4L0 5h4.6L6 1z"
      fill="#f59e0b"
    />
  </svg>
);

const testimonials = [
  {
    text: "I was skeptical about AI therapy but Kate genuinely helped me understand my anxiety triggers. It's the first time I've felt heard without judgment.",
    name: "Aisha K.",
    desc: "Marketing manager, 29",
    initials: "AK",
  },
  {
    text: "I can't afford weekly therapy. Kate fills that gap perfectly. The breathing exercises have genuinely changed how I handle stress at work.",
    name: "James R.",
    desc: "Software engineer, 34",
    initials: "JR",
  },
  {
    text: "As someone with social anxiety, the idea of calling a therapist was overwhelming. Kate let me take the first step in a way that felt safe and low-pressure.",
    name: "Maya L.",
    desc: "Graduate student, 23",
    initials: "ML",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 40px",
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          color: "#6e7d63",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Real stories
      </div>
      <h2
        style={{
          fontSize: "clamp(26px, 3vw, 36px)",
          fontWeight: 800,
          color: "#1a1a1a",
          textAlign: "center",
          marginBottom: 10,
          letterSpacing: "-0.02em",
        }}
      >
        People who found their calm
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          textAlign: "center",
          marginBottom: 48,
          maxWidth: 440,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.65,
        }}
      >
        Over 50,000 people have used Kate to work through difficult
        moments.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: 20,
          maxWidth: 980,
          margin: "0 auto",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            style={{
              background: "#f4f6f2",
              borderRadius: 18,
              padding: "26px",
              border: "1px solid #e5e5e5",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
            }}
          >
            {/* Stars */}
            <div
              style={{ display: "flex", gap: 3, marginBottom: 16 }}
              aria-label="5 stars"
            >
              {[...Array(5)].map((_, j) => (
                <span key={j}>{STAR}</span>
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: 14,
                color: "#1a1a1a",
                lineHeight: 1.7,
                marginBottom: 18,
                fontStyle: "italic",
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#e8ede4",
                  color: "#3a4535",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>{t.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
