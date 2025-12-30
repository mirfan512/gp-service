"use client";

import * as React from "react";

type Item = {
  q: string;
  a: React.ReactNode;
  defaultOpen?: boolean;
};

export function FaqAccordion({
  items,
  className = "",
}: {
  items: Item[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(() => {
    const idx = items.findIndex((i) => i.defaultOpen);
    return idx >= 0 ? idx : null;
  });

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, i) => {
        const open = openIndex === i;

        return (
          <div
            key={item.q}
            className="rounded-[10px] px-6 py-5"
            style={{
              background: "var(--c-surface)",
              border: "1px solid var(--c-border)",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-start justify-between gap-4 text-left"
            >
              <div>
                <h4 className="text-[18px] font-semibold leading-[1.25]" style={{ color: "var(--c-text)" }}>
                  {item.q}
                </h4>
              </div>

              {/* Caret */}
              <span
                className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full"
                style={{ color: "var(--c-text-muted)" }}
                aria-hidden
              >
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 14l6-6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {open && (
              <div className="mt-3 text-[13px] leading-[1.6]" style={{ color: "var(--c-text-muted)" }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
