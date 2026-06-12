"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Personalised sessions",
    desc: "Every conversation adapts to you — your mood, history, and goals shape each interaction.",
    icon: (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <path
          d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3a2 2 0 110 4 2 2 0 010-4zm0 9c-2.7 0-4.8-1.3-4.8-3 0-1.7 2.1-3 4.8-3s4.8 1.3 4.8 3c0 1.7-2.1 3-4.8 3z"
          fill="#6e7d63"
        />
      </svg>
    ),
  },
  {
    title: "CBT & DBT techniques",
    desc: "Guided exercises rooted in cognitive behavioural and dialectical behaviour therapy.",
    icon: (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <path
          d="M4 10h12M4 6h12M4 14h8"
          stroke="#6e7d63"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Mood tracking",
    desc: "Log how you feel each day and watch patterns emerge over time with visual insights.",
    icon: (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="14"
          height="14"
          rx="3"
          fill="none"
          stroke="#6e7d63"
          strokeWidth="1.5"
        />
        <path
          d="M7 10h6M10 7v6"
          stroke="#6e7d63"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Crisis support",
    desc: "Automatic detection of distress signals with gentle escalation to human professionals.",
    icon: (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <path
          d="M10 2L2 7v11h5v-5h6v5h5V7L10 2z"
          fill="none"
          stroke="#6e7d63"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Available 24/7",
    desc: "Support at 2am, on weekends, during commutes — whenever you need it most.",
    icon: (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <circle
          cx="10"
          cy="10"
          r="7"
          fill="none"
          stroke="#6e7d63"
          strokeWidth="1.5"
        />
        <path
          d="M10 6v4l3 3"
          stroke="#6e7d63"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Progress milestones",
    desc: "Celebrate breakthroughs. Track your emotional growth journey with meaningful markers.",
    icon: (
      <svg viewBox="0 0 20 20" width={22} height={22} aria-hidden="true">
        <path
          d="M10 2l1.8 5.5H18l-4.9 3.5 1.8 5.5L10 13l-4.9 3.5 1.8-5.5L2 7.5h6.2L10 2z"
          fill="none"
          stroke="#6e7d63"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function FeaturesSection() {
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
      id="features"
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
        What we offer
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
        Built for real mental wellness
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
        Not just a chatbot — a thoughtfully designed support system.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
          maxWidth: 980,
          margin: "0 auto",
        }}
      >
        {features.map((f, i) => (
          <div
            key={f.title}
            style={{
              background: "#f4f6f2",
              borderRadius: 18,
              padding: "28px 26px",
              border: "1px solid #e5e5e5",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, border-color 0.2s`,
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#A3B094";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(163,176,148,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e5e5";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                background: "#e8ede4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              {f.icon}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 8,
              }}
            >
              {f.title}
            </div>
            <div style={{ fontSize: 13.5, color: "#666", lineHeight: 1.65 }}>
              {f.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
