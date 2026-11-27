import type { Metadata } from "next";
import React from "react";
import { Download, Mail, ShieldCheck } from "lucide-react";
import { FAQ_CATEGORIES, FRZE_CONFIG } from "@/lib/frze-data";
import { Badge, Button } from "@/components/ui/Primitives";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Help & FAQ",
  description:
    "Frequently asked questions about FRZE privacy, host verification, safety controls, coin billing, and account deletion.",
};

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-4">
        <Badge tone="accent">Help Center</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
          Safety, Privacy &amp; <span className="frze-gradient-text">Support FAQ</span>
        </h1>
        <p className="mx-auto max-w-2xl text-base text-[var(--text-muted)]">
          Quick answers on how FRZE works, how calls stay private, and how wallet coins and host payouts operate.
        </p>
      </div>

      <FaqAccordion categories={FAQ_CATEGORIES} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="frze-card rounded-3xl p-6 space-y-3 text-center">
          <Download className="mx-auto h-6 w-6 text-[var(--accent)]" />
          <h3 className="text-base font-bold text-[var(--text)]">Download FRZE</h3>
          <p className="text-xs text-[var(--text-muted)]">Get the latest Android build on Google Play.</p>
          <Button href="/download" variant="outline" size="sm" className="w-full">
            Get the App
          </Button>
        </div>

        <div className="frze-card rounded-3xl p-6 space-y-3 text-center">
          <ShieldCheck className="mx-auto h-6 w-6 text-[var(--teal)]" />
          <h3 className="text-base font-bold text-[var(--text)]">Safety Center</h3>
          <p className="text-xs text-[var(--text-muted)]">Review moderation rules &amp; privacy.</p>
          <Button href="/safety" variant="outline" size="sm" className="w-full">
            View Safety Policy
          </Button>
        </div>

        <div className="frze-card rounded-3xl p-6 space-y-3 text-center">
          <Mail className="mx-auto h-6 w-6 text-[var(--amber)]" />
          <h3 className="text-base font-bold text-[var(--text)]">Still Need Help?</h3>
          <p className="text-xs text-[var(--text-muted)]">{FRZE_CONFIG.supportEmail}</p>
          <Button href="/contact" variant="primary" size="sm" className="w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
