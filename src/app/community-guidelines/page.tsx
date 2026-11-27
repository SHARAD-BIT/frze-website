import type { Metadata } from "next";
import React from "react";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { FRZE_CONFIG } from "@/lib/frze-data";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "FRZE Community Guidelines and Zero-Tolerance Safety Policy.",
};

export default function CommunityGuidelinesPage() {
  return (
    <LegalLayout badge="Trust & Safety" title="FRZE Community Guidelines">
      <p>
        At FRZE, our priority is to maintain a respectful, authentic, and safe 18+ environment across every voice call, video call, and chat.
      </p>

      <h2>Zero-Tolerance Policy</h2>
      <p>
        Any user or host who participates in harassment, sexually explicit conduct, nudity, hate speech, extortion, or illegal behavior faces immediate account termination and permanent device-level bans.
      </p>

      <h2>Core Platform Rules</h2>
      <ol>
        <li><strong>Strict 18+ Restriction:</strong> Adults aged 18+ only. Minor accounts are purged immediately.</li>
        <li><strong>No Compensated Dating or Offline Meetups:</strong> FRZE is not a dating or matchmaking app. Paid romantic companionship, sugar arrangements, escorting, and soliciting in-person meetups are strictly prohibited.</li>
        <li><strong>No Sexually Explicit or Lewd Content:</strong> Nudity, sexual solicitation, and explicit content are prohibited.</li>
        <li><strong>Zero Harassment or Bullying:</strong> Treat every caller and host with dignity; unwanted persistent calling after being stopped is banned.</li>
        <li><strong>Privacy &amp; Anti-Recording:</strong> Do not screenshot, screen-record, or capture private calls without explicit legal consent.</li>
        <li><strong>Financial Integrity:</strong> Never share UPI IDs, phone numbers, or solicit off-platform payments.</li>
      </ol>

      <h2>Blocking, Reporting &amp; 24-Hour SLA</h2>
      <p>
        Tap <strong>Block</strong> or <strong>Report</strong> on any active call screen or host profile. Our moderation team reviews all flagged reports within 24 hours. Urgent escalations can be emailed to{" "}
        <a href={`mailto:${FRZE_CONFIG.supportEmail}`} className="text-[var(--accent)] underline">
          {FRZE_CONFIG.supportEmail}
        </a>.
      </p>
    </LegalLayout>
  );
}
