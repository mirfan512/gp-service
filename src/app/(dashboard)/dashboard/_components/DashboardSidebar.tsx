"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/dashboard", label: "Overview" },
  { href: "/consultation", label: "Consultations" },
  { href: "/patient/book", label: "Book Appointment" },
  { href: "/patient/history", label: "History" },
  { href: "/patient/profile", label: "Profile" },
  { href: "/aboutus", label: "About Us" },
  { href: "/calendar", label: "Calendar" },
];

export function DashboardSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div
      className="rounded-[20px] p-4"
      style={{
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="px-2 pb-4">
        <div className="text-[16px] font-semibold">Online GP Services</div>
        <div className="text-[12px]" style={{ color: "var(--c-text-muted)" }}>
          Patient dashboard (UI only)
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {items.map((it) => {
          const active =
            it.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname?.startsWith(it.href);

          return (
            <Link
              key={it.href}
              href={it.href}
              onClick={onNavigate}
              className="rounded-[12px] px-3 py-2 text-[14px] font-medium transition-opacity hover:opacity-80"
              style={{
                background: active ? "color-mix(in srgb, var(--c-primary) 22%, white)" : "transparent",
                border: active ? "1px solid var(--c-border)" : "1px solid transparent",
                color: "var(--c-text)",
              }}
            >
              {it.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--c-border)" }}>
        <button
          className="w-full rounded-[12px] px-3 py-2 text-[14px] font-semibold"
          style={{
            background: "var(--c-cta-btn)",
            color: "white",
            boxShadow: "var(--shadow-elev)",
          }}
          type="button"
          onClick={() => alert("Logout later (backend pending)")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
