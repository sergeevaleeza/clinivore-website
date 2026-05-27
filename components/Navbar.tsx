"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/for-practices", label: "For Practices" },
  { href: "/developer", label: "Developer" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white transition-shadow duration-200"
      style={{
        borderBottom: scrolled ? "1px solid #EBE8E3" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 3px rgba(11,29,58,0.06)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="16" fill="#F0FAF9" />
              <path d="M17 3 A14 14 0 1 0 4.5 23" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M17 3 A14 14 0 0 1 29.5 22" stroke="#10B5A6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="17" cy="3" r="2.2" fill="#2563EB" />
              <circle cx="29.5" cy="22" r="2.2" fill="#10B981" />
              <path d="M17 22 C17 22 11.5 18 11.5 14.5 C11.5 12.2 13.2 10.5 15.2 10.5 C16.1 10.5 17 11.3 17 11.3 C17 11.3 17.9 10.5 18.8 10.5 C20.8 10.5 22.5 12.2 22.5 14.5 C22.5 18 17 22 17 22Z" fill="#10B5A6" />
            </svg>
            <span style={{ fontFamily: "var(--font-sora)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
              <span style={{ color: "#0B1D3A" }}>Clini</span>
              <span style={{ color: "#10B5A6" }}>vore</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-white shadow-sm transition-colors"
              style={{
                backgroundColor: "#10B5A6",
                borderRadius: 10,
                padding: "9px 18px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0E9F93")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10B5A6")}
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden rounded-md p-2 transition-colors"
            style={{ color: "#0B1D3A" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2" style={{ borderTop: "1px solid #EBE8E3" }}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="nav-link-mobile"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: "#10B5A6", borderRadius: 10, padding: "9px 12px" }}
            >
              Request a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
