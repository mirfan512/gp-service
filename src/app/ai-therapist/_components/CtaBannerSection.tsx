"use client";

import Link from "next/link";

export function CtaBannerSection() {
  return (
    <section
      style={{
        padding: "88px 40px",
        background: "#A3B094",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative background shapes */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      />

      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          color: "#fff",
          marginBottom: 16,
          letterSpacing: "-0.025em",
          position: "relative",
          zIndex: 1,
        }}
      >
        You deserve support. Start today.
      </h2>
      <p
        style={{
          fontSize: 17,
          color: "#e8ede4",
          marginBottom: 38,
          maxWidth: 420,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.65,
          position: "relative",
          zIndex: 1,
        }}
      >
        Your first session is free. No credit card. No waiting room.
      </p>

      <div
        style={{
          display: "flex",
          gap: 14,
          justifyContent: "center",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link href="/assessment">
          <button
            style={{
              background: "#fff",
              color: "#3a4535",
              border: "none",
              padding: "15px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              transition: "opacity 0.2s, transform 0.15s",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            Start your free session
          </button>
        </Link>
        <a href=" "> 
          <button
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid rgba(255,255,255,0.55)",
              padding: "15px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              transition: "border-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#fff";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.55)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            Learn more
          </button>
        </a>
      </div>
    </section>
  );
}
