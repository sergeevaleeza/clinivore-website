import Link from "next/link";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/for-practices", label: "For Practices" },
  { href: "/developer", label: "Developer" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/hipaa", label: "HIPAA" },
  { href: "/contact", label: "Contact" },
];

const treatmentTypes = [
  "Vivitrol",
  "Invega",
  "Ketamine",
  "Spravato",
  "Sublocade",
  "Abilify Maintena",
  "Aristada",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0B1D3A", color: "rgba(255,255,255,0.6)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 32px" }}>

        {/* Logo + tagline */}
        <div style={{ marginBottom: 40 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 8 }}>
            <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
              <path d="M17 3 A14 14 0 1 0 4.5 23" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M17 3 A14 14 0 0 1 29.5 22" stroke="#10B5A6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="17" cy="3" r="2.2" fill="rgba(255,255,255,0.4)" />
              <circle cx="29.5" cy="22" r="2.2" fill="#10B981" />
              <path d="M17 22 C17 22 11.5 18 11.5 14.5 C11.5 12.2 13.2 10.5 15.2 10.5 C16.1 10.5 17 11.3 17 11.3 C17 11.3 17.9 10.5 18.8 10.5 C20.8 10.5 22.5 12.2 22.5 14.5 C22.5 18 17 22 17 22Z" fill="#10B5A6" />
            </svg>
            <span style={{ fontFamily: "var(--font-sora)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em" }}>
              <span style={{ color: "#ffffff" }}>Clini</span>
              <span style={{ color: "#10B5A6" }}>vore</span>
            </span>
          </Link>
          <p style={{ fontSize: 13, marginTop: 6, color: "rgba(255,255,255,0.45)" }}>
            Close the loop. Change lives.
          </p>
        </div>

        {/* Nav links */}
        <nav style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 24px",
          marginBottom: 32,
        }}>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Treatment types bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 28px",
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: 28,
        }}>
          {treatmentTypes.map((t) => (
            <span key={t} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
              {t}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
          fontSize: 12,
          color: "rgba(255,255,255,0.3)",
        }}>
          <span>© 2026 Clinivore. All rights reserved.</span>
          <span>HIPAA-Aware Design · Phase 1 Pilot</span>
        </div>

      </div>
    </footer>
  );
}
