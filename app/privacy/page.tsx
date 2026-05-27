import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Clinivore",
  description:
    "Clinivore privacy policy. How we collect, use, and protect information in our psychiatric treatment tracking platform.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: May 26, 2026</p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          This Privacy Policy describes how Clinivore (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) collects, uses, and protects information in connection with the
          Clinivore treatment tracking platform (&quot;Service&quot;). Clinivore is a
          software-as-a-service product used by licensed healthcare practices — not
          directly by patients.
        </p>

        <Section title="1. Information We Collect">
          <p>
            <strong>Patient treatment records:</strong> Practice staff enter or import patient
            treatment records into Clinivore, including patient identifiers, treatment protocols,
            appointment history, and outreach notes. This information constitutes Protected
            Health Information (PHI) under HIPAA when entered by a covered entity.
          </p>
          <p>
            <strong>Staff account information:</strong> We collect name, email address, and
            role designation for each practice staff member with an Clinivore account.
          </p>
          <p>
            <strong>Usage and audit logs:</strong> We log all actions taken within the platform,
            including patient record access, outreach task completion, AI draft generation, and
            administrative changes. These logs are used for HIPAA compliance, security
            monitoring, and service improvement.
          </p>
          <p>
            <strong>No direct patient collection:</strong> Clinivore is a staff-facing tool.
            Patients do not create accounts, submit forms, or interact with Clinivore directly.
            All patient data is entered by authorized practice staff.
          </p>
        </Section>

        <Section title="2. How We Use Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Operate and deliver the treatment tracking service</li>
            <li>
              Generate AI-assisted documentation drafts when authorized by the practice
            </li>
            <li>
              Maintain an append-only audit log for HIPAA compliance
            </li>
            <li>
              Improve the service through aggregate, de-identified usage analytics
            </li>
            <li>Respond to support requests and practice inquiries</li>
          </ul>
          <p>
            We do not sell, rent, or share PHI with third parties for marketing purposes. We
            do not use patient treatment records for advertising.
          </p>
        </Section>

        <Section title="3. HIPAA and Protected Health Information">
          <p>
            Clinivore operates as a{" "}
            <strong>Business Associate</strong> under the Health Insurance Portability and
            Accountability Act (HIPAA) when handling PHI on behalf of a covered entity. Prior to
            accessing or processing PHI, Clinivore enters into a Business Associate Agreement
            (BAA) with the covered entity.
          </p>
          <p>
            PHI within Clinivore is handled in accordance with the HIPAA Security Rule, including
            administrative, physical, and technical safeguards. Practices remain responsible for
            workforce training and access control under the HIPAA Privacy Rule.
          </p>
          <p>
            <strong>42 CFR Part 2:</strong> For practices treating substance use disorders,
            Clinivore is designed with 42 CFR Part 2 protections in mind. Substance use disorder
            treatment records require patient consent prior to disclosure and are handled through
            staff-guided workflows, not automated processes.
          </p>
        </Section>

        <Section title="4. AI and Third-Party Services">
          <p>
            Clinivore&apos;s AI documentation assistant uses the Anthropic Claude API to generate
            call scripts, chart notes, and outreach drafts.
          </p>
          <p>
            <strong>PHI and AI:</strong> By default (<code>ALLOW_PHI_TO_AI=false</code>), PHI
            is not transmitted to AI services. In this default mode, AI drafts are generated
            using non-identifying patient context only. PHI may be included in AI requests only
            when the practice has explicitly enabled this feature under a BAA-covered
            configuration.
          </p>
          <p>
            All AI draft generation events are logged in the audit trail, including whether
            PHI was present in the AI request context.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            Treatment records, outreach logs, and patient data are retained for the duration of
            the practice&apos;s subscription plus any wind-down period specified in the service
            contract.
          </p>
          <p>
            Audit logs are retained for a minimum of six (6) years in accordance with HIPAA
            record retention requirements.
          </p>
          <p>
            Practices may request deletion of their data by contacting us at{" "}
            <a href="mailto:privacy@clinivore.app" className="text-brand-600 hover:underline">
              privacy@clinivore.app
            </a>
            . Deletion requests will be honored within 30 days, subject to applicable legal
            retention obligations.
          </p>
        </Section>

        <Section title="6. Security">
          <p>
            Clinivore employs industry-standard technical safeguards to protect the information
            we process:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>TLS 1.2+ encryption for all data in transit</li>
            <li>AES-256 encryption for data at rest</li>
            <li>Role-based access control (Admin / Provider / Staff)</li>
            <li>Append-only audit trail for all PHI access events</li>
            <li>Automatic session timeout</li>
            <li>Infrastructure hosted in the United States (AWS / Railway)</li>
          </ul>
          <p>
            No security system is perfect. In the event of a data breach involving PHI, we
            will notify affected covered entities in accordance with the HIPAA Breach
            Notification Rule.
          </p>
        </Section>

        <Section title="7. Contact">
          <p>
            For privacy-related inquiries, data deletion requests, or Business Associate
            Agreement requests, contact:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@clinivore.app" className="text-brand-600 hover:underline">
              privacy@clinivore.app
            </a>
          </p>
          <p>
            <strong>General inquiries:</strong>{" "}
            <a href="mailto:hello@clinivore.app" className="text-brand-600 hover:underline">
              hello@clinivore.app
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
