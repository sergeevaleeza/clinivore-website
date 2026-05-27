import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Users, FileWarning, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "HIPAA Compliance — Adherix",
  description:
    "Adherix HIPAA compliance statement. Business Associate Agreements, technical safeguards, and PHI handling practices.",
};

export default function HIPAAPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 mb-5">
            <ShieldCheck className="h-3.5 w-3.5" />
            HIPAA-Aware Design
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            HIPAA Compliance
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Adherix is designed for use in HIPAA-covered healthcare environments.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8 space-y-10">

        {/* BAA */}
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              1. Business Associate Agreement
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Adherix enters into Business Associate Agreements with covered entities prior to
            handling any Protected Health Information. The BAA outlines our obligations as a
            Business Associate under HIPAA, including safeguards, breach notification, and
            permissible uses of PHI.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            BAAs are available upon request before any PHI is entered into the platform.
            Use of Adherix with PHI prior to BAA execution is not permitted under our{" "}
            <Link href="/terms" className="text-brand-600 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>

        {/* Technical Safeguards */}
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Lock className="h-5 w-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">2. Technical Safeguards</h2>
          </div>
          <ul className="space-y-3">
            {[
              {
                label: "Encryption in Transit",
                value: "TLS 1.2+ for all data transmitted between clients and servers",
              },
              {
                label: "Encryption at Rest",
                value: "AES-256 encryption for all stored data",
              },
              {
                label: "Role-Based Access Control",
                value: "Admin, Provider, and Staff roles with differentiated access levels",
              },
              {
                label: "Session Management",
                value: "Automatic session timeout after inactivity",
              },
              {
                label: "Audit Logging",
                value:
                  "Append-only audit trail for all PHI access, modification, and AI usage events",
              },
            ].map(({ label, value }) => (
              <li key={label} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                </span>
                <div>
                  <span className="font-semibold text-slate-800">{label}:</span>{" "}
                  <span className="text-slate-600">{value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Administrative Safeguards */}
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Users className="h-5 w-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">3. Administrative Safeguards</h2>
          </div>
          <ul className="space-y-3">
            {[
              "Staff access limited by role (Admin / Provider / Staff)",
              "Audit trail retention per HIPAA requirements (minimum 6 years)",
              "Data breach notification procedures per HIPAA Breach Notification Rule",
              "Practice administrators control staff provisioning and access",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                </span>
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 42 CFR Part 2 */}
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <FileWarning className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">4. 42 CFR Part 2</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Adherix supports practices that treat substance use disorders. Our workflows are
            designed with 42 CFR Part 2 protections in mind. Substance use disorder treatment
            records — including records related to Vivitrol and Sublocade administration — require
            patient consent before disclosure and carry stricter protections than standard HIPAA
            PHI.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Adherix does not automate any disclosure of SUD treatment records. All outreach
            tasks and documentation are staff-reviewed and staff-initiated. Practices with SUD
            patients are responsible for ensuring that disclosures comply with applicable 42 CFR
            Part 2 requirements.
          </p>
        </div>

        {/* AI Features */}
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Brain className="h-5 w-5 text-brand-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">5. AI Features</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            PHI is never transmitted to AI services without explicit BAA-covered configuration.
            Default AI mode uses only non-identifying patient identifiers (e.g., internal
            patient IDs and protocol names) when generating documentation drafts. The full name,
            date of birth, and other PHI fields are excluded from AI requests unless the practice
            has explicitly opted into PHI-enabled AI under a BAA with Adherix.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            All AI draft generation events are logged in the audit trail, including the PHI
            context level used.
          </p>
        </div>

        {/* Request BAA CTA */}
        <div className="rounded-xl border-2 border-brand-200 bg-brand-50 p-7 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Request a BAA</h2>
          <p className="text-slate-600 mb-5">
            Contact us to request a Business Associate Agreement before entering PHI into
            the platform.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
          >
            Contact us to request a Business Associate Agreement
          </Link>
        </div>
      </div>
    </>
  );
}
