"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useDropdownMenu } from "@/src/lib/hooks/useDropdownMenu";
import { isNavLinkActive } from "@/src/lib/utils/navigation";

type NavDropdownProps = {
  title: React.ReactNode;
  links: { label: string; href: string }[];
  pathname: string | null;
  menuId: string;
};

export function NavDropdown({ title, links, pathname, menuId }: NavDropdownProps) {
  const { open, wrapRef, handleMouseEnter, handleMouseLeave, toggle, close } =
    useDropdownMenu(pathname);

  const anyActive = links.some((l) => isNavLinkActive(pathname, l.href));

  return (
    <div
      ref={wrapRef}
      className="relative hidden xl:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className={[
          "inline-flex items-center gap-1",
          "text-[13px] 2xl:text-[14px] font-semibold tracking-wide whitespace-nowrap transition-all duration-300",
          "relative py-2",
          "after:content-[''] after:absolute after:bottom-0 after:left-0",
          "after:w-full after:h-[2px] after:bg-[var(--c-nav-active)]",
          "after:transition-transform after:duration-300 after:origin-left",
          anyActive || open
            ? "after:scale-x-100 text-[var(--c-nav-active)]"
            : "after:scale-x-0 hover:after:scale-x-100 text-[var(--c-nav-muted)] opacity-80 hover:opacity-100 hover:text-[var(--c-nav-active)]",
        ].join(" ")}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={(e) => toggle(e)}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        id={menuId}
        role="menu"
        className={[
          "absolute left-0 top-full mt-2 w-max max-w-[340px] rounded-[14px] p-2 z-50",
          "transition-all duration-200",
          open
            ? "visible opacity-100 translate-y-0 scale-100"
            : "invisible opacity-0 -translate-y-1 scale-95",
        ].join(" ")}
        style={{
          background: "var(--c-nav-bg)",
          border: "1px solid var(--c-nav-border)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transformOrigin: "top left",
        }}
      >
        {links.map((l) => {
          const active = isNavLinkActive(pathname, l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              role="menuitem"
              className={`flex items-center rounded-[10px] px-3 py-2 text-[14px] transition-all duration-150 ease-in-out whitespace-normal break-words ${active ? "translate-x-1" : ""
                }`}
              style={{
                color: active ? "#A3B094" : "var(--c-text)",
                background: active
                  ? "rgba(163, 176, 148, 0.15)"
                  : "transparent",
                borderLeft: active ? "3px solid #A3B094" : "3px solid transparent",
                paddingLeft: "12px",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(163, 176, 148, 0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateX(2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateX(0)";
                }
              }}
              onClick={close}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
