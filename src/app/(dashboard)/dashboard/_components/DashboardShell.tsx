"use client";

import * as React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardTopbar } from "./DashboardTopbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--c-bg)",
        color: "var(--c-text)",
      }}
    >
      {/* Desktop layout */}
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block py-6">
            <DashboardSidebar />
          </aside>

          {/* Main */}
          <div className="py-4 lg:py-6">
            <DashboardTopbar onMenuClick={() => setMobileOpen(true)} />

            <main className="mt-6">{children}</main>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            aria-label="Close sidebar overlay"
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.35)" }}
            onClick={() => setMobileOpen(false)}
          />

          <div
            className="absolute left-0 top-0 h-full w-[86%] max-w-[320px] p-4"
            style={{
              background: "var(--c-bg)",
              borderRight: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="flex items-center justify-between pb-3">
              <div className="text-[15px] font-semibold">Menu</div>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-[14px]"
                style={{
                  border: "1px solid var(--c-border)",
                  background: "var(--c-surface-2)",
                }}
              >
                Close
              </button>
            </div>

            <DashboardSidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
