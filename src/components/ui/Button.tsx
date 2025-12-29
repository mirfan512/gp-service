"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";

type Variant = "primary" | "outline" | "cta";
type Size = "sm" | "md" | "lg";

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    primary: "text-white",
    outline: "bg-transparent",
    cta: "text-white uppercase tracking-wide",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-[13px] rounded-[12px]",
    md: "px-6 py-2.5 text-[14px] rounded-[12px]",
    lg: "px-8 py-4 text-[14px] rounded-[16px]",
  };

  const styleByVariant: React.CSSProperties =
    variant === "primary"
      ? { background: "var(--c-primary)" }
      : variant === "outline"
      ? { border: "1.5px solid var(--c-border)", color: "var(--c-text)" }
      : {
          background: "var(--c-cta-btn)",
          boxShadow: "var(--shadow-elev)",
        };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      style={styleByVariant}
      {...props}
    />
  );
}
