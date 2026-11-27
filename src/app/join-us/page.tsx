import type { Metadata } from "next";
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  IndianRupee,
  Mic,
  ShieldCheck,
  UserPlus,
  Wallet,
} from "lucide-react";
import { HOST_TESTIMONIALS } from "@/lib/frze-data";
import { Badge, Button, SectionHeading } from "@/components/ui/Primitives";
import { TestimonialSwitcher } from "@/components/sections/TestimonialSwitcher";

export const metadata: Metadata = {
  title: "Become a Host on FRZE",
  description:
    "Apply to become a verified FRZE Host. Set your own schedule, talk on topics you know best, and earn transparent per-minute payouts.",
};

export default function JoinUsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <Badge tone="amber">FRZE Host Hub</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
              Become a Verified{" "}
              <span className="frze-gradient-text">FRZE Host</span>
            </h1>
            <p className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Turn your empathy, communication skills, and free hours into meaningful income. Host audio calls, video calls, and chats from anywhere—completely privately and on your own schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button href="/contact?type=Become%20a%20Host" variant="primary" size="lg">
                Apply to Host
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/download" variant="outline" size="lg">
                Apply Inside FRZE App
              </Button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { icon: Clock, title: "Flexible Hours", desc: "Toggle Online or Offline anytime inside the FRZE Host Hub." },
              { icon: IndianRupee, title: "Per-Minute Earnings", desc: "Earn transparently on audio calls, video calls, and live chats." },
              { icon: ShieldCheck, title: "Zero Personal Info Shared", desc: "Your phone number and bank details stay completely private." },
            ].map((perk) => (
              <div key={perk.title} className="frze-card rounded-3xl p-6 text-left space-y-2.5">
                <perk.icon className="h-6 w-6 text-[var(--accent)]" />
                <h2 className="text-lg font-bold text-[var(--text)]">{perk.title}</h2>
                <p className="text-sm text-[var(--text-muted)]">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Host Onboarding */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Host Onboarding"
          title="How to Start Hosting on FRZE"
          subtitle="Complete verification in three straightforward steps—either inside the FRZE app or by submitting your host enquiry below."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              icon: UserPlus,
              step: "Step 1",
              title: "Register & Verify OTP",
              desc: "Sign in with your +91 mobile number via OTP, confirm 18+ eligibility, and open Host Hub inside the FRZE app.",
            },
            {
              icon: Mic,
              step: "Step 2",
              title: "Build Your Profile & Voice Intro",
              desc: "Choose your languages, pick up to 5 conversation topics (from Love & Romance to Move On Advice), write a short bio, and record a voice intro.",
            },
            {
              icon: BadgeCheck,
              step: "Step 3",
              title: "Approval & Payout Setup",
              desc: "Once our moderation team approves your host profile and KYC/bank details, go online and start receiving calls.",
            },
          ].map((item) => (
            <div key={item.step} className="frze-card rounded-3xl p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-secondary)]/15 text-[var(--accent-secondary)]">
                  <item.icon className="h-6 w-6" />
                </span>
                <Badge tone="neutral">{item.step}</Badge>
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Host Earnings & Safety */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="frze-card-elevated rounded-3xl p-8 space-y-3">
              <Wallet className="h-7 w-7 text-[var(--teal)]" />
              <h3 className="text-2xl font-extrabold text-[var(--text)]">
                Clear Wallet &amp; Bank Withdrawals
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Track every minute spoken, video session completed, and monthly payout statement inside FRZE Host Hub. Payouts are transferred directly to your verified bank account.
              </p>
            </div>

            <div className="frze-card-elevated rounded-3xl p-8 space-y-3">
              <ShieldCheck className="h-7 w-7 text-[var(--accent)]" />
              <h3 className="text-2xl font-extrabold text-[var(--text)]">
                Strict Host Protection Rules
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                Hosts can end any call and block/report abusive callers with a single tap. Off-platform payments and personal contact sharing are prohibited to protect every host.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Host Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <TestimonialSwitcher items={HOST_TESTIMONIALS} label="Host Stories" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8 text-center">
        <div className="frze-card rounded-[32px] p-8 sm:p-12 space-y-5">
          <h2 className="text-3xl font-extrabold text-[var(--text)]">
            Ready to Join FRZE Host Hub?
          </h2>
          <p className="mx-auto max-w-xl text-sm sm:text-base text-[var(--text-muted)]">
            Download the FRZE app to apply directly from Host Hub, or submit your host interest form and our onboarding team will guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact?type=Become%20a%20Host" variant="primary" size="lg">
              Submit Host Application
            </Button>
            <Button href="/help" variant="outline" size="lg">
              Read Host FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
