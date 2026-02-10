// src/lib/utils/navigation.ts

/**
 * Checks if a navigation link is active based on current pathname
 * Utility function following DRY principle (RULE 4)
 */
export function isNavLinkActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
