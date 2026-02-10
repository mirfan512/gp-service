// src/lib/hooks/useDropdownMenu.ts
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for dropdown menu behavior
 * Handles: hover, click, outside click, ESC key, route changes
 * Follows RULE 2: Business logic in custom hooks
 */
export function useDropdownMenu(pathname: string | null) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return {
    open,
    wrapRef,
    handleMouseEnter,
    handleMouseLeave,
    toggle,
    close,
  };
}
