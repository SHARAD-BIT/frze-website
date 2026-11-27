import type { Metadata } from "next";
import React from "react";
import {
  CheckCircle2,
  Coins,
  Lock,
  MessageCircle,
  Mic,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Video,
} from "lucide-react";
import { Badge, Button, SectionHeading } from "@/components/ui/Primitives";
import { DownloadBanner } from "@/components/sections/DownloadBanner";

export const metadata: Metadata = {
  title: "How FRZE Works",
  description:
    "Learn how to sign up with OTP on FRZE, choose a conversation topic, and connect via 1-on-1 audio, video, or text chat.",
};

export default function HowItWorksPage() {
  const prompts = [
    {
      title: "Feeling overwhelmed after work?",
      desc: "Talk out loud with a calm, verified listener instead of carrying stress into the night.",
    },
    {
      title: "Need clarity on a tough choice?",
      desc: "Bounce ideas around on career moves, college pressure, or everyday life decisions.",
    },
    {
      title: "Practicing communication?",
      desc: "Build confidence for interviews, presentations, or important conversations in your language.",
    },
    {
      title: "Just need a real voice?",
      desc: "Take a break from silent scrolling and enjoy genuine, respectful 1-on-1 conversation.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl space-y-5">
          <Badge tone="accent">How FRZE Works</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
            Chill. Chat. <span className="frze-gradient-text">Connect.</span>
          </h1>
          <p className="text-base text-[var(--text-muted)] sm:text-lg">
            Real people, crystal-clear audio &amp; video, and a safe 18+ space built for authentic conversations.
          </p>
        </div>
      </section>

      {/* Step 1 & Step 2 */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        <div className="frze-card rounded-[32px] p-8 sm:p-12 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4">
            <Badge tone="teal">Step 1 • Quick OTP Onboarding</Badge>
            <h2 className="text-3xl font-extrabold text-[var(--text)]">
              Sign in within seconds
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Enter your mobile number for instant OTP verification—or continue with Google Sign-In. Verify you are 18+, pick your preferred topics, and you are ready to explore live hosts.
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--text)] pt-2">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--teal)]" />
                Mobile number stays 100% private from other users
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--teal)]" />
                Browse approved hosts and real topic tags immediately
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="frze-card-elevated rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[var(--text)]">Active 1-on-1 Call Preview</span>
                <Badge tone="teal">HD Connected</Badge>
              </div>
              <div className="rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-6 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full frze-gradient-bg text-xl font-extrabold text-white">
                  FR
                </div>
                <div>
                  <p className="font-bold text-[var(--text)]">Verified FRZE Host</p>
                  <p className="text-xs text-[var(--teal)]">04:18 • Encrypted Audio &amp; Video</p>
                </div>
                <div className="flex justify-center gap-3 pt-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <Mic className="h-4 w-4 text-[var(--text)]" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-elevated)] border border-[var(--border)]">
                    <Video className="h-4 w-4 text-[var(--text)]" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--danger)] text-white">
                    <PhoneCall className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frze-card rounded-[32px] p-8 sm:p-12 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:order-2 space-y-4">
            <Badge tone="purple">Step 2 • Audio, Video, or Chat</Badge>
            <h2 className="text-3xl font-extrabold text-[var(--text)]">
              Choose the mode that feels comfortable
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Start with text chat if you prefer typing, jump onto a voice-only call when you want privacy, or switch to video call when you want face-to-face warmth. Recharge coins via Razorpay or Google Play Billing only when you need them.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/download" variant="primary" size="md">
                Get FRZE App
              </Button>
              <Button href="/safety" variant="outline" size="md">
                Safety Controls
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Mic, title: "Audio Calls", desc: "Low-latency voice powered by Agora RTC" },
                { icon: Video, title: "Video Calls", desc: "Real-time 1-on-1 face-to-face connection" },
                { icon: MessageCircle, title: "Live Chat", desc: "Text first at your own comfortable pace" },
              ].map((mode) => (
                <div key={mode.title} className="frze-card-elevated rounded-2xl p-5 space-y-2.5">
                  <mode.icon className="h-6 w-6 text-[var(--accent)]" />
                  <h3 className="text-sm font-bold text-[var(--text)]">{mode.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)]">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why people use FRZE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Everyday Moments"
          title="Why People Open FRZE"
          subtitle="A judgment-free space built around respectful peer listening and everyday clarity."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {prompts.map((p) => (
            <div key={p.title} className="frze-card rounded-3xl p-6 space-y-2">
              <h3 className="text-base font-bold text-[var(--text)]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust metrics */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { icon: Smartphone, title: "Android App", desc: "Native Flutter experience with background ring alerts on Google Play" },
            { icon: Coins, title: "Pay As You Talk", desc: "Clear coin wallet rates before every call starts" },
            { icon: Lock, title: "100% Unrecorded", desc: "Live audio & video streams are never archived" },
          ].map((item) => (
            <div key={item.title} className="frze-card rounded-3xl p-6 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/15 text-[var(--accent)]">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DownloadBanner
        title="Ready to try your first conversation?"
        subtitle="Install FRZE from Google Play, verify in seconds, and talk with a verified host today."
      />
    </div>
  );
}
