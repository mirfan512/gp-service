"use client";

import Link from "next/link";
import { ThemeToggle } from "@/src/components/ui/ThemeToggle";

export function DashboardTopbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div
      className="flex items-center justify-between rounded-[16px] px-4 py-3"
      style={{
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="flex items-center gap-3">
        {/* Mobile menu */}
        <button
          className="lg:hidden rounded-md px-3 py-2 text-[14px]"
          style={{
            border: "1px solid var(--c-border)",
            background: "var(--c-surface)",
          }}
          onClick={onMenuClick}
          type="button"
        >
          ☰
        </button>

        <div>
          <div className="text-[15px] font-semibold">Dashboard</div>
          <div className="text-[12px]" style={{ color: "var(--c-text-muted)" }}>
            Welcome back
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        {/* Placeholder until backend */}
        <Link
          href="/"
          className="rounded-[10px] px-4 py-2 text-[14px] font-semibold"
          style={{
            background: "var(--c-surface)",
            border: "1px solid var(--c-border)",
          }}
        >
          Back to site
        </Link>
      </div>
    </div>
  );
}
