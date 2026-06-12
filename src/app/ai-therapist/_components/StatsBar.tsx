"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: "50k+", label: "Active users" },
  { num: "94%", label: "Felt less anxious after 1 week" },
  { num: "4.8★", label: "Average user rating" },
  { num: "24/7", label: "Always available" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#f4f6f2",
        borderBottom: "1px solid #e5e5e5",
        flexWrap: "wrap",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            flex: "1 1 160px",
            maxWidth: 240,
            textAlign: "center",
            padding: "32px 20px",
            borderRight: i < stats.length - 1 ? "1px solid #e5e5e5" : "none",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#6e7d63",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {s.num}
          </div>
          <div style={{ fontSize: 13, color: "#666", marginTop: 5 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
