import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Lock,
  Mic,
  PhoneCall,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Video,
  Coins,
} from "lucide-react";
import { getHostTopics, getLeaderboardHosts } from "@/lib/frze-api";
import { CALLER_TESTIMONIALS, FRZE_CONFIG } from "@/lib/frze-data";
import { Badge, Button, SectionHeading } from "@/components/ui/Primitives";
import { HostShowcase } from "@/components/sections/HostShowcase";
import { TestimonialSwitcher } from "@/components/sections/TestimonialSwitcher";
import { DownloadBanner } from "@/components/sections/DownloadBanner";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [hosts, topics] = await Promise.all([
    getLeaderboardHosts(),
    getHostTopics(),
  ]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-6xl leading-[1.08]">
              Talk. Connect.{" "}
              <span className="frze-gradient-text">Feel Heard.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-xl">
              Verified real hosts online right now on <strong className="text-[var(--text)]">FRZE</strong>. Pick a conversation topic and start a private 1-on-1 audio call, video call, or chat in seconds.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button href="/download" variant="primary" size="lg">
                Download FRZE App
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/join-us" variant="outline" size="lg">
                Become a FRZE Host
              </Button>
            </div>
          </div>

          {/* Live Hosts & Topic Chips */}
          <div className="mt-14">
            <HostShowcase hosts={hosts} topics={topics} />
          </div>
        </div>
      </section>

      {/* How FRZE Works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="How FRZE Works"
          subtitle="Built for instant, private conversations without endless swiping or awkward profiles."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            {
              step: "01",
              icon: Sparkles,
              title: "Pick Your Topic & Mood",
              desc: "Browse live conversation topics—from communication and confidence to daily stress relief and career clarity—and see who is online.",
            },
            {
              step: "02",
              icon: PhoneCall,
              title: "Connect in Seconds",
              desc: "Start a crisp 1-on-1 audio call, video call, or chat using transparent FRZE Wallet coins with zero hidden subscriptions.",
            },
            {
              step: "03",
              icon: ShieldCheck,
              title: "Stay Private & In Control",
              desc: "Your mobile number is never shared. Streams are unrecorded, and 1-tap Block & Report controls stay visible on every call.",
            },
          ].map((item) => (
            <div key={item.step} className="frze-card rounded-3xl p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-extrabold tracking-widest text-[var(--text-muted)]">
                  STEP {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/how-it-works" variant="outline" size="md">
            Explore Detailed Walkthrough
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Platform Highlights / Metrics */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: UserCheck,
                value: `${Math.max(hosts.length, 4)}+ Verified`,
                label: "Active Leaderboard Hosts Live Now",
                color: "text-[var(--teal)]",
              },
              {
                icon: Mic,
                value: `${topics.length || 10}+ Topics`,
                label: "Real Host-Selected Conversation Areas",
                color: "text-[var(--accent)]",
              },
              {
                icon: Coins,
                value: "100% Transparent",
                label: "Pay-Per-Minute Coin Wallet (No Auto-Renew Traps)",
                color: "text-[var(--amber)]",
              },
            ].map((stat) => (
              <div key={stat.label} className="frze-card-elevated rounded-3xl p-6 text-center space-y-2">
                <stat.icon className={`mx-auto h-7 w-7 ${stat.color}`} />
                <p className="text-3xl font-extrabold text-[var(--text)]">{stat.value}</p>
                <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Positioning Split */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-5">
            <Badge tone="purple">Why FRZE</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
              Real People. Honest Conversations. Zero Bots.
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Whether you are sorting out a tough career decision, shaking off daily stress, or simply looking for a thoughtful sounding board after work, FRZE connects you with verified listeners ready to talk.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
              <div className="frze-card rounded-2xl p-4 flex items-center gap-3">
                <Mic className="h-5 w-5 text-[var(--accent)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--text)]">HD Audio Calling (Agora)</span>
              </div>
              <div className="frze-card rounded-2xl p-4 flex items-center gap-3">
                <Video className="h-5 w-5 text-[var(--accent-secondary)] shrink-0" />
                <span className="text-sm font-semibold text-[var(--text)]">1-on-1 Video &amp; Chat</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="frze-card rounded-[32px] p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl frze-gradient-bg flex items-center justify-center text-white font-bold">
                    FZ
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--text)]">FRZE Live Call Experience</p>
                    <p className="text-xs text-[var(--teal)]">● Encrypted SRTP/DTLS Audio</p>
                  </div>
                </div>
                <Badge tone="neutral">18+ Safe</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {topics.slice(0, 4).map((topic) => (
                  <div
                    key={topic.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-3.5"
                  >
                    <p className="text-xs font-bold text-[var(--text)]">{topic.label}</p>
                    <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                      {topic.hosts} verified {topic.hosts === 1 ? "host" : "hosts"}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] pt-1">
                Live topic availability synced directly from <code className="text-[var(--text)]">api.frzeapp.in/api/host-topics</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Voices"
          title="What Our Community Says"
          subtitle="Real stories from callers across India using FRZE for everyday clarity and connection."
        />
        <div className="mt-10">
          <TestimonialSwitcher items={CALLER_TESTIMONIALS} label="Caller Stories" />
        </div>
      </section>

      {/* Safety Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust & Protection"
          title="Real People. Real Talk. Real Safe."
          subtitle="Built from day one to comply with strict 18+ safety and moderation standards."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: UserCheck,
              title: "Verified Hosts Only",
              desc: "Every FRZE host goes through profile approval, topic review, and identity checks before appearing in discovery.",
            },
            {
              icon: ShieldAlert,
              title: "1-Tap Block & Report",
              desc: "Block or report directly from any active call or host profile. Our safety team reviews reports within 24 hours.",
            },
            {
              icon: Lock,
              title: "Private & Unrecorded",
              desc: "Live voice and video streams are never recorded or stored, and your mobile number stays completely hidden.",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="frze-card rounded-3xl p-7 space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--teal)]/15 text-[var(--teal)]">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)]">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/safety" variant="outline" size="md">
            Read Our Full Safety Policy
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <DownloadBanner />
    </div>
  );
}
