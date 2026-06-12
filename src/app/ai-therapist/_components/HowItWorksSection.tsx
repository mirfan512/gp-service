"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "1",
    title: "Create a free account",
    desc: "Sign up anonymously in under 30 seconds. No personal info required to begin.",
  },
  {
    num: "2",
    title: "Tell Kate how you feel",
    desc: "Your first conversation guides Kate on what matters to you right now.",
  },
  {
    num: "3",
    title: "Build your wellbeing",
    desc: "Return daily, track your mood, and grow through structured exercises.",
  },
  {
    num: "4",
    title: "Upgrade when ready",
    desc: "Access deeper sessions, therapist referrals, and advanced tools on a paid plan.",
  },
];

export function HowItWorksSection() {
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
      id="how"
      ref={ref}
      style={{
        padding: "80px 40px",
        background: "#f4f6f2",
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
        Getting started
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
        Four steps to feeling better
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          textAlign: "center",
          marginBottom: 56,
          maxWidth: 400,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.65,
        }}
      >
        No forms, no intake appointments. Just start talking.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          maxWidth: 880,
          margin: "0 auto",
          gap: 0,
          position: "relative",
        }}
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{
              textAlign: "center",
              padding: "0 28px",
              position: "relative",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
            }}
          >
            {/* Step number circle */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#A3B094",
                color: "#fff",
                fontSize: 20,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
                boxShadow: "0 4px 14px rgba(163,176,148,0.35)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {step.num}
            </div>

            {/* Connector line (not on last) */}
            {i < steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  left: "calc(50% + 28px)",
                  right: "calc(-50% + 28px)",
                  height: 1,
                  background:
                    "linear-gradient(90deg, #A3B094, rgba(163,176,148,0.3))",
                  zIndex: 0,
                }}
              />
            )}

            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 8,
              }}
            >
              {step.title}
            </div>
            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
