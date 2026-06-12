import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Paths requiring authentication
  const isDashboardRoute =
    pathname.startsWith("/consultant-portal") ||
    pathname.startsWith("/consultation-diary") ||
    pathname.startsWith("/patient-portal");

  // Authentication paths
  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/forgot-password");

  if (isDashboardRoute && !token) {
    // Redirect to login page and preserve redirect path
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && token) {
    // Logged in users shouldn't see auth pages, redirect to dashboard/portal
    return NextResponse.redirect(new URL("/patient-portal", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/forgot-password",
    "/consultant-portal/:path*",
    "/consultation-diary/:path*",
    "/patient-portal/:path*",
  ],
};
