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

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-brand-500">adh</span>
              <span className="text-slate-900">erix</span>
            </Link>
            <p className="text-sm text-slate-500">
              Treatment continuity for psychiatric practices.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 border-t border-slate-100 pt-8 text-center md:flex-row md:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 Adherix. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            HIPAA-Aware Design · Phase 1 Pilot
          </p>
        </div>
      </div>
    </footer>
  );
}
