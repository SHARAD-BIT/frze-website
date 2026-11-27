import type { Metadata } from "next";
import React from "react";
import {
  AlertTriangle,
  Ban,
  CheckCircle2,
  Lock,
  Mail,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { FRZE_CONFIG } from "@/lib/frze-data";
import { Badge, Button, SectionHeading } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Safety & Trust",
  description:
    "Learn how FRZE protects callers and hosts with identity checks, unrecorded SRTP/DTLS calls, 24-hour moderation, and strict anti-off-platform payment rules.",
};

const PROHIBITED_ITEMS = [
  "Personal phone numbers or WhatsApp / Telegram contacts",
  "Email addresses or personal social media handles",
  "Home, college, or workplace addresses",
  "UPI IDs, QR codes, or bank account details",
  "Passwords, OTPs, or payment verification codes",
  "Government ID photos or Aadhaar / PAN documents in chat",
  "Any off-platform money transfers or external payment links",
  "Unauthorized screen recording or call screenshots",
];

export default function SafetyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl space-y-5">
          <Badge tone="teal">Zero-Tolerance Safety</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
            Your Safety, <span className="frze-gradient-text">Our Priority</span>
          </h1>
          <p className="text-base text-[var(--text-muted)] sm:text-lg">
            FRZE is strictly an 18+ community designed for respectful, private conversations. Every call and profile is backed by real-time moderation and one-tap user controls.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${FRZE_CONFIG.supportEmail}?subject=Safety%20Escalation`} external variant="primary" size="md">
              <Mail className="h-4 w-4" />
              Contact Safety Team
            </Button>
            <Button href="/community-guidelines" variant="outline" size="md">
              Community Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="frze-card rounded-3xl p-7 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--teal)]/15 text-[var(--teal)]">
              <UserCheck className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text)]">1. Verified Community</h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Host profiles undergo manual review and verification before appearing in discovery. Automated and human checks keep bots and impersonators off FRZE.
            </p>
            <div className="rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] p-3.5 flex items-center gap-2.5 text-xs font-semibold text-[var(--teal)]">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Host approval &amp; 18+ age verification enforced
            </div>
          </div>

          <div className="frze-card rounded-3xl p-7 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-secondary)]/15 text-[var(--accent-secondary)]">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text)]">2. Encrypted &amp; Unrecorded</h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Live audio and video streams are relayed over encrypted SRTP/DTLS connections via Agora.io. FRZE does not record or archive your live calls.
            </p>
            <div className="rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] p-3.5 flex items-center gap-2.5 text-xs font-semibold text-[var(--text)]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              Phone numbers never exposed to callers or hosts
            </div>
          </div>

          <div className="frze-card rounded-3xl p-7 space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-[var(--text)]">3. Instant Block &amp; 24h SLA</h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Tap Block on any active call or profile to disconnect immediately and prevent future contact. All safety reports are reviewed within 24 hours.
            </p>
            <div className="rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] p-3.5 flex items-center gap-2.5 text-xs font-semibold text-[var(--danger)]">
              <Ban className="h-4 w-4 shrink-0" />
              Zero tolerance for harassment or explicit abuse
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited PII & Off-Platform Payments */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="frze-card rounded-[32px] border-[var(--danger)]/40 p-8 sm:p-10 space-y-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-[var(--warning)]" />
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--text)]">
                Never Share Personal Info or Pay Outside FRZE
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                To keep every caller and host safe from fraud or harassment, never share private contact details or send money outside the official FRZE Wallet (Razorpay / Google Play).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROHIBITED_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--text)]"
              >
                <Ban className="h-4 w-4 shrink-0 text-[var(--danger)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="Need Urgent Moderation Help?"
          subtitle="Email our Trust & Safety team anytime or review our full Privacy Policy."
        />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/contact?type=Safety%20%26%20Moderation" variant="primary" size="md">
            Report an Issue
          </Button>
          <Button href="/privacy" variant="outline" size="md">
            Read Privacy Policy
          </Button>
        </div>
      </section>
    </div>
  );
}
