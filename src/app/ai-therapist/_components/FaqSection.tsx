"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Kate a replacement for real therapy?",
    a: "No. Kate is a mental wellness support tool, not a licensed therapist. She can complement therapy, help you between sessions, or serve as a first step — but for serious mental health conditions, please consult a licensed professional.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Conversations are encrypted end-to-end and never sold to third parties. You can delete your data at any time from your account settings.",
  },
  {
    q: "What happens if I'm in crisis?",
    a: "Kate monitors for signs of severe distress and will always provide access to crisis hotlines and escalation to human support. You will never be left without a way to reach help.",
  },
  {
    q: "How is this different from other mental health apps?",
    a: "Kate uses a conversational AI model rather than just content libraries or quizzes. Conversations are dynamic, adaptive, and feel like talking to someone — not filling in a form.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — no contracts, no cancellation fees. You can downgrade or cancel at any time from your account page and your data is preserved.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
        FAQ
      </div>
      <h2
        style={{
          fontSize: "clamp(26px, 3vw, 36px)",
          fontWeight: 800,
          color: "#1a1a1a",
          textAlign: "center",
          marginBottom: 44,
          letterSpacing: "-0.02em",
        }}
      >
        Common questions
      </h2>

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {faqs.map((item, i) => (
          <div
            key={i}
            style={{
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
              aria-expanded={open === i}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  paddingRight: 16,
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: open === i ? "#A3B094" : "#f4f6f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s, transform 0.2s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <svg
                  viewBox="0 0 10 10"
                  width={10}
                  height={10}
                  aria-hidden="true"
                >
                  <path
                    d="M5 2v6M2 5h6"
                    stroke={open === i ? "#fff" : "#6e7d63"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            <div
              style={{
                overflow: "hidden",
                maxHeight: open === i ? 200 : 0,
                transition: "max-height 0.35s ease",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  lineHeight: 1.7,
                  paddingBottom: 20,
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
