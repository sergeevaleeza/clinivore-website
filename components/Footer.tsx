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
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "var(--font-sora)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}>
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
