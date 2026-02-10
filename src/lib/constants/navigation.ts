// src/lib/constants/navigation.ts

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/history", label: "History" },
  { href: "/calendar", label: "Calendar" },
  { href: "/about", label: "AboutUs" },
];

export const SERVICE_LINKS: NavLink[] = [
  { href: "/corporate", label: "Corporate" },
  { href: "/faq", label: "FAQ" },
  { href: "/weight-loss", label: "Weight Loss" },
  { href: "/assessment", label: "Assessment" },
  { href: "/wegovy", label: "Wegovy" },
  { href: "/mounjaro", label: "Mounjaro"}
];
