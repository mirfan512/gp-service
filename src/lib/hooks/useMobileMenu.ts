// src/lib/hooks/useMobileMenu.ts
"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook for mobile menu behavior
 * Closes menu on route change
 * Follows RULE 2: Business logic in custom hooks
 */
export function useMobileMenu(pathname: string | null) {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    close,
  };
}
