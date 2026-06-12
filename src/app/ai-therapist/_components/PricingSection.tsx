"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CHECK = (
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

const plans = [
  {
    name: "Free",
    price: "£0",
    period: "",
    desc: "1 session trial.",
    badge: null,
    featured: false,
    features: [
      "Basic mood tracking",
      "Guided breathing exercises",
    ],
    cta: "Get started free",
    ctaVariant: "outline",
    minTermNote: null,
  },
  {
    name: "Pro",
    price: "£12",
    period: "/month",
    desc: "For consistent support and deeper growth.",
    badge: "Most popular",
    featured: true,
    features: [
      "Unlimited sessions",
      "Advanced mood analytics",
    ],
    cta: "Start 3-day free trial",
    ctaVariant: "primary",
    minTermNote: null,
  },
  {
    name: "Clinical",
    price: "£29",
    period: "/month",
    desc: "For those who want contact with a General Practitioner too.",
    badge: null,
    featured: false,
    features: [
      "Everything in Pro",
      "1 Virtual GP consultation / month",
      "Therapist progress reports",
    ],
    cta: "Talk to our team",
    ctaVariant: "outline",
    minTermNote: "3-month minimum term",
  },
];

export function PricingSection() {
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
      id="pricing"
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
        Pricing
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
        Start free, grow at your pace
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          textAlign: "center",
          marginBottom: 48,
          lineHeight: 1.65,
        }}
      >
        No surprises. Cancel any time.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          maxWidth: 860,
          margin: "0 auto",
        }}
      >
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            style={{
              background: "#fff",
              border: plan.featured ? "2px solid #A3B094" : "1px solid #e5e5e5",
              borderRadius: 20,
              padding: "30px 26px",
              display: "flex",
              flexDirection: "column",
              opacity: visible ? 1 : 0,
              transform: visible
                ? plan.featured ? "translateY(-6px)" : "translateY(0)"
                : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, box-shadow 0.2s`,
              boxShadow: plan.featured
                ? "0 8px 32px rgba(163,176,148,0.22)"
                : "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 8px 28px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = plan.featured
                ? "0 8px 32px rgba(163,176,148,0.22)"
                : "none";
            }}
          >
            {plan.badge && (
              <div
                style={{
                  background: "#e8ede4",
                  color: "#3a4535",
                  fontSize: 11,
                  fontWeight: 800,
                  padding: "5px 12px",
                  borderRadius: 20,
                  display: "inline-block",
                  marginBottom: 14,
                  letterSpacing: "0.04em",
                  alignSelf: "flex-start",
                }}
              >
                {plan.badge}
              </div>
            )}

            <div
              style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a", marginBottom: 6 }}
            >
              {plan.name}
            </div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#1a1a1a",
                marginBottom: 6,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {plan.price}
              <span
                style={{ fontSize: 15, fontWeight: 400, color: "#666" }}
              >
                {plan.period}
              </span>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#666",
                marginBottom: 22,
                lineHeight: 1.6,
              }}
            >
              {plan.desc}
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e5e5e5",
                marginBottom: 18,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 26,
                flex: 1,
              }}
            >
              {plan.features.map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 13,
                    color: "#555",
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
                    {CHECK}
                  </div>
                  {feat}
                </div>
              ))}
            </div>

            <Link href="/">
              <button
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background:
                    plan.ctaVariant === "primary" ? "#A3B094" : "transparent",
                  color:
                    plan.ctaVariant === "primary" ? "#fff" : "#1a1a1a",
                  border:
                    plan.ctaVariant === "primary"
                      ? "none"
                      : "1.5px solid #ddd",
                }}
                onMouseEnter={(e) => {
                  if (plan.ctaVariant === "primary") {
                    (e.currentTarget as HTMLButtonElement).style.background = "#6e7d63";
                  } else {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#A3B094";
                    (e.currentTarget as HTMLButtonElement).style.color = "#6e7d63";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.ctaVariant === "primary") {
                    (e.currentTarget as HTMLButtonElement).style.background = "#A3B094";
                  } else {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd";
                    (e.currentTarget as HTMLButtonElement).style.color = "#1a1a1a";
                  }
                }}
              >
                {plan.cta}
              </button>
            </Link>
            {plan.minTermNote && (
              <div
                style={{
                  fontSize: 11,
                  color: "#888",
                  textAlign: "center",
                  marginTop: 10,
                  fontStyle: "italic",
                }}
              >
                {plan.minTermNote}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
