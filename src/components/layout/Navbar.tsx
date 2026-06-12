// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { useMobileMenu } from "@/src/lib/hooks/useMobileMenu";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileMenu } from "./navbar/MobileMenu";
import Image from "next/image";
import { useGetMeQuery, useLogoutMutation } from "@/src/store/services/authApi";
import { useAppDispatch } from "@/src/store/hooks";
import { clearCredentials } from "@/src/store/slices/authSlice";
import Cookies from "js-cookie";
import { Patient } from "@/src/store/services/patientsApi";


export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isOpen, toggle, close } = useMobileMenu(pathname);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const token = typeof window !== "undefined" ? Cookies.get("token") : null;
  const { data: userData } = useGetMeQuery(undefined, {
    skip: !token,
  });
  const [logout] = useLogoutMutation();
  const user = userData?.data?.user as Patient | undefined;

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch {
      // Ignore logout request errors
    } finally {
      dispatch(clearCredentials());
      close();
      router.push("/login");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md bg-white/80 transition-colors duration-300"
      style={{
        borderColor: "var(--c-nav-border)",
      }}
    >
      <div className="mx-auto max-w-[1950px] px-6 lg:px-12">
        <div className="flex min-h-[72px] py-2 items-center justify-between gap-4">
          <div className="flex items-center gap-6 xl:gap-10 2xl:gap-16 flex-1">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/icons/online-gp-services-logo.jpg"
                alt="Online GP Services"
                width={60}
                height={60}
                className="h-[56px] w-[56px] object-contain"
              />
            </Link>
            <DesktopNav pathname={pathname} />
          </div>
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="relative">
                  {/* Backdrop overlay for closing dropdown */}
                  {dropdownOpen && (
                    <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                  )}

                  {/* User Avatar Button */}
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{ backgroundColor: "#E2F2E4", color: "#6B8469" }}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm select-none border border-gray-100 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all relative z-50 focus:outline-none"
                  >
                    {user.firstName ? user.firstName[0].toUpperCase() : "P"}
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-[14px] font-semibold text-gray-800 truncate">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-[12px] text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        href="/patient-portal"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Patient Portal
                      </Link>

                      <div className="border-t border-gray-100 my-1" />

                      <button
                        onClick={() => {
                          setDropdownOpen(false);
                          handleLogout();
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-[14px] text-red-600 hover:bg-red-50 transition-colors text-left"
                      >
                        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="/login" onClick={close}>
                    <Button
                      variant="outline"
                      className="h-10 px-6 rounded-[10px] text-[14px] font-semibold border-[1.5px] border-[var(--c-border)] hover:border-[var(--c-primary)] hover:text-[var(--c-primary)] hover:bg-[rgba(163,176,148,0.04)] transition-all duration-200"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/register" onClick={close}>
                    <Button
                      variant="primary"
                      className="h-10 px-6 rounded-[10px] text-[14px] font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    >
                      Signup
                    </Button>
                  </Link>
                </>
              )}

              {/* The larger right-side logo */}
              <Link href="/" className="hidden md:block ml-4 lg:ml-6 xl:ml-8">
                <Image
                  src="/icons/online-gp-services-logo.jpg"
                  alt="Online GP Services Badge"
                  width={120}
                  height={120}
                  className="h-[64px] w-[64px] lg:h-[80px] lg:w-[80px] xl:h-[96px] xl:w-[96px] object-contain drop-shadow-sm hover:scale-105 transition-all duration-200"
                  priority
                />
              </Link>
            </div>

            <button
              className="lg:hidden rounded-md p-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--c-text)" }}
              onClick={toggle}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <MobileMenu
            pathname={pathname}
            onClose={close}
            user={user}
            onLogout={handleLogout}
          />
        )}
      </div>
    </header>
  );
}
