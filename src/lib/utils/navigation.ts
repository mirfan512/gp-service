// src/lib/utils/navigation.ts

/**
 * Checks if a navigation link is active based on current pathname
 * Utility function following DRY principle (RULE 4)
 */
export function isNavLinkActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";

  // Prevent specific overlap where parent route stays active for a specific child sibling in nav
  if (href === "/nad-injection" && pathname === "/nad-injection/medical-questionnaire") {
    return false;
  }

  return pathname.startsWith(href);
}
