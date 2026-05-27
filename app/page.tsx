import Link from "next/link";
import {
  AlertTriangle,
  TrendingDown,
  CheckCircle,
  LayoutDashboard,
  Sparkles,
  Plug,
} from "lucide-react";

const protocols = [
  { name: "Vivitrol", interval: "Monthly", category: "Addiction Medicine" },
  { name: "Sublocade", interval: "Monthly", category: "Addiction Medicine" },
  { name: "Invega Sustenna", interval: "Monthly", category: "Schizophrenia" },
  { name: "Invega Trinza", interval: "Every 3 months", category: "Schizophrenia" },
  { name: "Abilify Maintena", interval: "Monthly", category: "Schizophrenia" },
  { name: "Aristada", interval: "Monthly", category: "Schizophrenia" },
  { name: "Ketamine", interval: "Induction + Maintenance", category: "Treatment-Resistant Depression" },
  { name: "Spravato", interval: "Weekly", category: "REMS Program" },
];

const statusColors: Record<string, string> = {
  Overdue: "bg-red-100 text-red-700",
  "Due Soon": "bg-amber-100 text-amber-700",
  "On Track": "bg-green-100 text-green-700",
};

const mockPatients = [
  { name: "Patient A.", protocol: "Vivitrol", status: "Overdue", days: "12 days past due" },
  { name: "Patient B.", protocol: "Invega Sustenna", status: "Due Soon", days: "Due in 3 days" },
  { name: "Patient C.", protocol: "Sublocade", status: "Overdue", days: "7 days past due" },
  { name: "Patient D.", protocol: "Ketamine", status: "On Track", days: "Due in 14 days" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--offwhite)" }}>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:gap-16">
            <div className="flex-1 max-w-2xl">
              {/* Eyebrow */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#DDF7F4", color: "#0E9F93", borderRadius: 20,
                padding: "5px 14px", fontSize: 12, fontWeight: 600, marginBottom: 24,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B5A6", flexShrink: 0 }} />
                Phase 1 Pilot · Now Accepting Practices
              </div>

              <h1 style={{
                fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700,
                fontFamily: "var(--font-sora)", color: "var(--navy)",
                lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0,
              }}>
                Close the loop.<br />
                <span style={{ color: "#10B5A6" }}>Change lives.</span>
              </h1>

              <p className="mt-6 text-lg leading-8" style={{ color: "var(--text-secondary)" }}>
                Clinivore gives psychiatric practice coordinators a single morning
                dashboard for injection schedules — ketamine, LAI antipsychotics,
                and addiction medicine — with built-in outreach and AI documentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="btn-primary"
                  style={{ fontSize: 15, padding: "12px 24px" }}
                >
                  Schedule a Pilot
                </Link>
                <Link
                  href="/developer"
                  className="btn-secondary"
                  style={{ fontSize: 15, padding: "12px 24px" }}
                >
                  View Developer Docs
                </Link>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="mt-14 lg:mt-0 flex-1 w-full max-w-lg">
              <div className="rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 bg-slate-50 border-b border-slate-200 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-slate-400 font-medium">Clinivore Dashboard</span>
                </div>
                <div className="flex">
                  <aside className="w-36 bg-slate-50 border-r border-slate-100 p-3 hidden sm:block">
                    <div className="space-y-1">
                      {["Dashboard", "Patients", "Outreach", "Protocols", "Audit Log"].map((item, i) => (
                        <div
                          key={item}
                          className={`rounded px-2 py-1.5 text-xs font-medium ${
                            i === 0
                              ? "bg-brand-100 text-brand-700"
                              : "text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </aside>
                  <div className="flex-1 p-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Today — May 26, 2026
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        { label: "Due Today", value: "3", color: "text-brand-600" },
                        { label: "Overdue", value: "5", color: "text-red-600" },
                        { label: "High Priority", value: "2", color: "text-amber-600" },
                        { label: "Needs Outreach", value: "6", color: "text-slate-700" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg border border-slate-100 bg-white p-2.5 shadow-sm"
                        >
                          <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      {mockPatients.map((p) => (
                        <div
                          key={p.name}
                          className="flex items-center justify-between rounded-md border border-slate-100 bg-white px-3 py-2"
                        >
                          <div>
                            <p className="text-xs font-semibold text-slate-800">{p.name}</p>
                            <p className="text-xs text-slate-400">{p.protocol} · {p.days}</p>
                          </div>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[p.status]}`}
                          >
                            {p.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                Icon: AlertTriangle,
                iconColor: "text-red-500",
                heading: "Missed injections are invisible until it's too late.",
                body: "Monthly Vivitrol and quarterly Invega patients fall through the cracks in generic EHR systems not built for injection management.",
              },
              {
                Icon: TrendingDown,
                iconColor: "text-amber-500",
                heading: "One missed injection can cost a practice thousands.",
                body: "No-shows, delayed care, and manual follow-up consume staff hours and interrupt the treatment continuity your patients depend on.",
              },
              {
                Icon: CheckCircle,
                iconColor: "text-green-500",
                heading: "Clinivore was built for this exact problem.",
                body: "A morning dashboard, automated outreach queue, and AI-assisted documentation — designed for practices managing psychiatric injections.",
              },
            ].map(({ Icon, iconColor, heading, body }) => (
              <div key={heading} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <Icon className={`mb-4 h-8 w-8 ${iconColor}`} />
                <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">{heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Your morning starts with a clear picture.
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Every feature in Clinivore is designed around the real workflow of a psychiatric practice coordinator.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                Icon: LayoutDashboard,
                title: "Morning Dashboard",
                body: "Know exactly who needs attention before your first patient arrives. Overdue, due today, and high-risk patients surfaced automatically.",
              },
              {
                Icon: Sparkles,
                title: "AI Outreach Drafts",
                body: "Generate warm, HIPAA-aware call scripts and chart notes in one click. Drafted with psychiatric-appropriate language. Copy directly into Practice Fusion.",
              },
              {
                Icon: Plug,
                title: "Practice Fusion Ready",
                body: "Import appointment reports via CSV today. Full FHIR API integration on the roadmap. Built to fit the workflows your team already uses.",
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Protocols */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Built for the treatments your practice actually uses.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {protocols.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{p.interval}</p>
                <span className="mt-2 inline-block rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section style={{ background: "var(--navy)" }} className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Run a free 8-week pilot at your practice.
          </h2>
          <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            We&apos;re onboarding a small cohort of psychiatric practices for our pilot program. No
            setup fees. No long-term commitment. Just results.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-[10px] bg-white px-8 py-3 text-sm font-semibold shadow transition-colors hover:bg-[#F8F5F0]"
              style={{ color: "var(--teal)" }}
            >
              Apply for the Pilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
