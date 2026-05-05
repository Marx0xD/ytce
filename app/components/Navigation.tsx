"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/offerings", label: "Offerings" },
  { href: "/origins", label: "Origins" },
  { href: "/processing", label: "Processing" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [lastClickedHref, setLastClickedHref] = useState<string | null>(null);
  const isInnerPage = pathname !== "/";

  return (
    <nav
      id="site-nav"
      className={`site-nav${isInnerPage ? " scrolled" : ""}`}
      data-solid={isInnerPage}
      data-last-clicked={lastClickedHref ?? undefined}
      aria-label="Primary navigation"
    >
      <Link href="/" className="nav-logo">
        YTCE <span>.</span> Ethiopia
      </Link>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setLastClickedHref(item.href)}
              data-active={pathname === item.href}
              data-clicked={lastClickedHref === item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="nav-cta"
        onClick={() => setLastClickedHref("/contact")}
        data-clicked={lastClickedHref === "/contact"}
      >
        Request Samples
      </Link>
    </nav>
  );
}
