import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Shield, Database, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Hub — Clinivore",
  description:
    "Integration documentation, API references, and compliance resources for healthcare technology partners. Practice Fusion FHIR R4 integration.",
};

const storedData = [
  "Patient display name (not full legal name in demo mode)",
  "Internal practice ID (e.g. PF-10294)",
  "Treatment protocol and schedule",
  "Treatment event history (completed, missed, rescheduled)",
  "Outreach task records",
  "Audit log entries",
];

const neverStored = [
  "Social Security Numbers",
  "Full insurance details",
  "Psychotherapy notes (42 CFR Part 2 protected)",
  "Payment information",
];

const sampleCode = `// Example: Fetch patient from Practice Fusion FHIR R4 endpoint
const response = await fetch(
  \`\${PF_FHIR_BASE_URL}/Patient?identifier=\${patientId}\`,
  {
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Accept': 'application/fhir+json'
    }
  }
)
const patient = await response.json()`;

export default function DeveloperPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 mb-5">
            <Code2 className="h-3.5 w-3.5" />
            Developer Hub
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Clinivore Developer Hub
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Integration documentation, API references, and compliance resources
            for healthcare technology partners.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">

        {/* Practice Fusion Integration */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Database className="h-5 w-5 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Practice Fusion EHR Integration
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mb-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3">
                <span className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                  Phase 1 — Available Now
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-3">Current Integration</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  Appointment report CSV import with automatic patient matching
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  Missed-visit detection from PF appointment export
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                  Chart note drafts formatted for Practice Fusion copy-paste
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3">
                <span className="inline-block rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                  Phase 2 — FHIR API Roadmap
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-3">Planned FHIR Integration</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  OAuth 2.0 / SMART on FHIR authorization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  Patient demographics pull (Patient resource)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  Appointment history (Appointment resource)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  Encounter documentation write-back (DocumentReference)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  Medication-related fields where available
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="text-slate-500">FHIR Version:</span>{" "}
              <span className="font-semibold text-slate-900">R4 (FHIR 4.0.1)</span>
            </div>
            <div>
              <span className="text-slate-500">Authorization:</span>{" "}
              <span className="font-semibold text-slate-900">SMART App Launch Framework</span>
            </div>
          </div>

          {/* Code Block */}
          <div className="mt-6 rounded-xl overflow-hidden border border-slate-200">
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="ml-2 text-xs text-slate-400 font-mono">
                fhir-patient-fetch.ts
              </span>
            </div>
            <pre className="bg-slate-900 text-slate-100 p-5 overflow-x-auto text-sm leading-relaxed font-mono">
              <code>{sampleCode}</code>
            </pre>
          </div>
        </section>

        {/* Data Handling */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Shield className="h-5 w-5 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Data Handling</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">
                What Clinivore Stores
              </h3>
              <ul className="space-y-2">
                {storedData.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50 p-6">
              <h3 className="font-semibold text-red-900 mb-4 text-sm uppercase tracking-wider">
                What Clinivore Never Stores
              </h3>
              <ul className="space-y-2">
                {neverStored.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-red-800">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-slate-500">Data Residency:</span>{" "}
              <span className="font-semibold text-slate-900">United States (AWS / Railway)</span>
            </div>
            <div>
              <span className="text-slate-500">Encryption in Transit:</span>{" "}
              <span className="font-semibold text-slate-900">TLS 1.2+</span>
            </div>
            <div>
              <span className="text-slate-500">Encryption at Rest:</span>{" "}
              <span className="font-semibold text-slate-900">AES-256</span>
            </div>
          </div>
        </section>

        {/* HIPAA & Compliance */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">HIPAA & Compliance Summary</h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3">
              {[
                "Designed for HIPAA Security Rule compliance",
                "Business Associate Agreement (BAA) available",
                "Append-only audit logging on all PHI access",
                "Role-based access control (Admin / Provider / Staff)",
                "AI features: PHI never sent to AI without explicit BAA-covered configuration",
                "42 CFR Part 2 (SUD records): staff-guided workflows, no automated disclosure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Open Source */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Open Source Core</h2>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Clinivore is developed openly on GitHub. Our core platform is available for review,
              audit, and contribution.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-sm mb-5">
              <div>
                <span className="text-slate-500">GitHub:</span>{" "}
                <span className="font-mono text-brand-700 text-xs">
                  github.com/sergeevaleeza/clinivore
                </span>
              </div>
              <div>
                <span className="text-slate-500">License:</span>{" "}
                <span className="font-semibold text-slate-900">MIT</span>
              </div>
              <div>
                <span className="text-slate-500">Stack:</span>{" "}
                <span className="font-semibold text-slate-900">
                  Next.js 15, TypeScript, Prisma, PostgreSQL, Tailwind
                </span>
              </div>
            </div>
            <a
              href="https://github.com/sergeevaleeza/clinivore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              View on GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        {/* Contact for API Access */}
        <section className="rounded-xl border-2 border-brand-200 bg-brand-50 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Requesting API / Integration Access
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            If you are a Practice Fusion developer relations contact reviewing this application:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-sm">
            {[
              { label: "Company", value: "Clinivore" },
              { label: "Product", value: "Psychiatric Treatment Continuity Platform" },
              {
                label: "Use Case",
                value:
                  "Read patient demographics and appointment history; write encounter documentation and outreach notes",
              },
              { label: "FHIR Version", value: "R4" },
              { label: "Auth", value: "SMART on FHIR / OAuth 2.0" },
              {
                label: "PHI Handling",
                value: "BAA required; PHI isolated from AI by default",
              },
              { label: "Contact", value: "hello@clinivore.app" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {label}
                </span>
                <span className="text-slate-900 mt-0.5">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
