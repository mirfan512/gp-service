"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";

type Variant = "primary" | "outline" | "cta" | "secondary" | "tertiary" | "submit";
type Size = "sm" | "md" | "lg" | "xl";

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
    secondary: "text-white font-semibold",
    tertiary: "text-[var(--c-text)] font-semibold",
    submit: "text-white font-bold uppercase tracking-wider text-sm shadow-lg transition-transform hover:scale-105 rounded-xl",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-[13px] rounded-[12px]",
    md: "px-6 py-2.5 text-[14px] rounded-[12px]",
    lg: "px-8 py-4 text-[14px] rounded-[16px]",
    xl: "px-10 py-6 text-[16px] rounded-[18px] ",
  };

  const styleByVariant: React.CSSProperties =
    variant === "primary"
      ? { background: "var(--c-primary)" }
      : variant === "outline"
        ? { border: "1.5px solid var(--c-border)", color: "var(--c-text)" }
        : variant === "secondary"
          ? { background: "var(--c-btn-secondary)", boxShadow: "var(--shadow-elev)" }
          : variant === "tertiary"
            ? { background: "var(--c-btn-tertiary)", border: "1px solid var(--c-border)" }
            : variant === "submit"
              ? { background: "var(--c-button-submit)" }
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
