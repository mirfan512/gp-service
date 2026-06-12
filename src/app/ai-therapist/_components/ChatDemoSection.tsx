"use client";

import { useEffect, useRef, useState } from "react";

const messages = [
  { from: "ai", text: "Hi, I'm really glad you're here. How are you feeling today?" },
  { from: "user", text: "Honestly, really overwhelmed. Work has been a lot lately and I can't seem to switch off." },
  { from: "ai", text: "That sounds really exhausting — when your mind keeps running even when you want to rest. Can you tell me more about what \"switching off\" feels like for you?" },
  { from: "user", text: "Like I just keep replaying meetings and tasks in my head, even at night." },
  { from: "ai", text: "That's a really common stress response — your brain is trying to \"solve\" things even when you need rest. Let's try a short grounding exercise together. Would that be okay?" },
];

export function ChatDemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (shown >= messages.length) return;
    const t = setTimeout(() => setShown((p) => p + 1), 600);
    return () => clearTimeout(t);
  }, [visible, shown]);

  return (
    <section
      id="demo"
      ref={ref}
      style={{
        background: "#f4f6f2",
        padding: "80px 40px",
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
        Live experience
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
        A conversation that actually helps
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          textAlign: "center",
          marginBottom: 44,
          maxWidth: 460,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.65,
        }}
      >
        Kate listens without judgment and guides you through
        evidence-based techniques in real time.
      </p>

      {/* Chat Window */}
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#fff",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "#e8ede4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 13,
              color: "#3a4535",
              flexShrink: 0,
            }}
          >
            K
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>
              Kate
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#6e7d63",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#5dbf8a",
                  display: "inline-block",
                }}
              />
              Online now
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            background: "#fafaf9",
            minHeight: 280,
          }}
        >
          {messages.slice(0, shown).map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-end",
                flexDirection: msg.from === "user" ? "row-reverse" : "row",
                opacity: 1,
                animation: "fadeSlide 0.35s ease",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 800,
                  background: msg.from === "ai" ? "#e8ede4" : "#A3B094",
                  color: msg.from === "ai" ? "#3a4535" : "#fff",
                }}
              >
                {msg.from === "ai" ? "GP" : "U"}
              </div>
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  padding: "11px 15px",
                  borderRadius: 16,
                  maxWidth: 360,
                  background: msg.from === "ai" ? "#fff" : "#A3B094",
                  color: msg.from === "ai" ? "#1a1a1a" : "#fff",
                  border: msg.from === "ai" ? "1px solid #e5e5e5" : "none",
                  borderBottomLeftRadius: msg.from === "ai" ? 4 : 16,
                  borderBottomRightRadius: msg.from === "user" ? 4 : 16,
                  boxShadow:
                    msg.from === "ai"
                      ? "0 1px 4px rgba(0,0,0,0.04)"
                      : "0 2px 8px rgba(163,176,148,0.3)",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {shown < messages.length && shown > 0 && (
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#e8ede4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#3a4535",
                  flexShrink: 0,
                }}
              >
                GP
              </div>
              <div
                style={{
                  padding: "11px 18px",
                  borderRadius: 16,
                  borderBottomLeftRadius: 4,
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((j) => (
                  <span
                    key={j}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#A3B094",
                      display: "inline-block",
                      animation: `bounce 1s ease ${j * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Row */}
        <div
          style={{
            padding: "14px 16px",
            borderTop: "1px solid #e5e5e5",
            display: "flex",
            gap: 8,
            alignItems: "center",
            background: "#fff",
          }}
        >
          <div
            style={{
              flex: 1,
              border: "1px solid #e5e5e5",
              borderRadius: 10,
              padding: "10px 14px",
              fontSize: 14,
              color: "#999",
              background: "#f9f9f8",
            }}
          >
            Type a message...
          </div>
          <div
            style={{
              width: 38,
              height: 38,
              background: "#A3B094",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
          >
            <svg viewBox="0 0 14 14" width={15} height={15} aria-hidden="true">
              <path d="M1 1l12 6-12 6V8.5l8-1.5-8-1.5V1z" fill="#fff" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
