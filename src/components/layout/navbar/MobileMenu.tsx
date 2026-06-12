"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { isNavLinkActive } from "@/src/lib/utils/navigation";
import { NAV_LINKS } from "@/src/lib/constants/navigation";
import { Patient } from "@/src/store/services/patientsApi";

type MobileMenuProps = {
  pathname: string | null;
  onClose: () => void;
  user?: Patient | null;
  onLogout?: () => void;
};


export function MobileMenu({ pathname, onClose, user, onLogout }: MobileMenuProps) {
  return (
    <div
      className="xl:hidden border-t py-6"
      style={{ borderColor: "var(--c-nav-border)" }}
    >
      <div className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => {
          const active = isNavLinkActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[15px] font-medium transition-opacity hover:opacity-70"
              style={{
                color: active ? "var(--c-nav-active)" : "var(--c-nav-muted)",
              }}
              onClick={onClose}
            >
              {link.label}
            </Link>
          );
        })}

        {user ? (
          <div className="px-4 pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div
                style={{ backgroundColor: "#E2F2E4", color: "#6B8469" }}
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border border-gray-100"
              >
                {user.firstName ? user.firstName[0].toUpperCase() : "P"}
              </div>
              <div className="truncate">
                <p className="text-[14px] font-bold text-gray-800 truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-[12px] text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
            <Link href="/patient-portal" className="w-full" onClick={onClose}>
              <Button variant="primary" size="md" className="w-full">
                Patient Portal
              </Button>
            </Link>
            <Button
              variant="outline"
              size="md"
              className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
              onClick={() => {
                if (onLogout) onLogout();
                onClose();
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="px-4 pt-4 flex flex-col gap-3">
            <Link href="/login" className="w-full" onClick={onClose}>
              <Button variant="primary" size="md" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/register" className="w-full" onClick={onClose}>
              <Button variant="outline" size="md" className="w-full">
                Signup
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
