import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_req: NextRequest) {
  // Keep it empty for now (structure only)
  return NextResponse.next();
}

// Optional matcher example (leave commented until you protect routes)
// export const config = {
//   matcher: ["/history/:path*", "/calendar/:path*"],
// };
