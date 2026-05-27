import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Adherix",
  description: "Adherix terms of service for licensed healthcare practices.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last Updated: May 26, 2026</p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern your use of the Adherix
          platform and services (&quot;Service&quot;) provided by Adherix (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By accessing or using the Service, you agree
          to be bound by these Terms.
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Adherix Service, you represent that you are authorized
            to enter into this agreement on behalf of a licensed healthcare practice and that
            your practice agrees to be bound by these Terms. If you do not agree to these
            Terms, do not use the Service.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>
            Adherix is a software-as-a-service (SaaS) platform designed for licensed
            healthcare practices that administer injectable psychiatric treatments. The Service
            provides tools for tracking treatment schedules, managing patient outreach, generating
            documentation drafts, and maintaining compliance records.
          </p>
          <p>
            Adherix is a staff-facing administrative tool. It is not a clinical decision support
            system, not a medical device, and not a substitute for clinical judgment.
          </p>
        </Section>

        <Section title="3. Covered Entity / Business Associate Relationship">
          <p>
            If your practice is a HIPAA Covered Entity and the Service involves the handling of
            Protected Health Information (PHI), you agree to execute a Business Associate
            Agreement (BAA) with Adherix prior to entering PHI into the platform. Use of the
            Service with PHI without an executed BAA is a violation of these Terms.
          </p>
        </Section>

        <Section title="4. Authorized Use">
          <p>
            The Service is licensed exclusively to licensed healthcare practices for internal
            administrative use related to patient care coordination. Authorized users include
            practice administrators, physicians, and clinical and administrative staff employed
            by the licensed practice.
          </p>
        </Section>

        <Section title="5. Prohibited Uses">
          <p>You may not use the Service to:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Provide services to patients directly or as a patient-facing application</li>
            <li>
              Handle PHI for any covered entity other than your own licensed practice without
              an executed BAA
            </li>
            <li>Resell, sublicense, or redistribute access to the Service</li>
            <li>Attempt to reverse engineer or extract the underlying software</li>
            <li>Use the Service in violation of applicable federal or state law</li>
            <li>Use patient data for any purpose other than direct patient care coordination</li>
          </ul>
        </Section>

        <Section title="6. Data and Privacy">
          <p>
            Your use of the Service is also governed by our{" "}
            <Link href="/privacy" className="text-brand-600 hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated by reference into these Terms. We handle PHI solely as a
            Business Associate in accordance with HIPAA and the executed BAA.
          </p>
        </Section>

        <Section title="7. HIPAA Obligations">
          <p>
            As a HIPAA Covered Entity, your practice is responsible for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Training workforce members on HIPAA Privacy and Security Rule requirements</li>
            <li>
              Ensuring that only authorized staff members are granted access to the Service
            </li>
            <li>Maintaining appropriate access control procedures</li>
            <li>
              Complying with any applicable state privacy laws that are more restrictive than
              HIPAA
            </li>
          </ul>
          <p>
            Adherix provides technical safeguards and audit logging, but cannot be responsible
            for workforce training, physical security, or policy compliance within your practice.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ADHERIX SHALL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING BUT NOT LIMITED TO LOSS OF REVENUE, LOSS OF DATA, OR HARM TO PATIENTS,
            ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
          </p>
          <p>
            Adherix is an administrative coordination tool. Clinical decisions remain the
            responsibility of licensed healthcare providers. Adherix does not provide medical
            advice and is not liable for clinical outcomes.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            Either party may terminate the Service subscription at any time. Upon termination,
            your access to the Service will be disabled. We will make your data available for
            export for 30 days following termination, after which data will be deleted in
            accordance with our retention policy.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These Terms are governed by the laws of the State of California, without regard to
            conflict of law principles. Any disputes arising under these Terms shall be resolved
            in the state or federal courts located in California.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about these Terms should be directed to:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@adherixhealth.app" className="text-brand-600 hover:underline">
              hello@adherixhealth.app
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
