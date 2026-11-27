import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for FRZE.",
};

export default function TermsPage() {
  return (
    <LegalLayout badge="Legal & Terms" title="Terms of Service for FRZE">
      <p>
        These Terms of Service constitute a legally binding agreement between you and FRZE Technologies. By accessing or using the FRZE mobile app or website, you agree to be bound by these Terms.
      </p>

      <h2>1. Strict Age Requirement (18+ Only)</h2>
      <p>
        You must be at least <strong>18 years of age</strong> to create an account or use FRZE. Minors under 18 are strictly prohibited.
      </p>

      <h2>2. Account Registration &amp; Security</h2>
      <ul>
        <li>You agree to provide accurate, verifiable information including your valid mobile phone number.</li>
        <li>You are responsible for safeguarding your account credentials and all actions under your account.</li>
        <li>Accounts are strictly non-transferable and may not be sold or shared.</li>
      </ul>

      <h2>3. Zero-Tolerance Live Calling Code of Conduct</h2>
      <p>
        FRZE is a moderated peer-conversation and guidance platform—<strong>not</strong> a dating, matchmaking, escort, or compensated companionship service. FRZE enforces a strict zero-tolerance policy against abusive behavior, compensated dating, and objectionable UGC:
      </p>
      <ul>
        <li>
          <strong>No Compensated Dating or Paid Companionship:</strong> Offering, soliciting, or facilitating compensated dating, sugar-dating arrangements, gifts or financial support in exchange for romantic or sexual companionship, or in-person meetups is strictly prohibited.
        </li>
        <li>No sexually explicit, lewd, pornographic, or obscene audio, video, or imagery.</li>
        <li>No harassment, threatening, stalking, bullying, hate speech, or illegal activities.</li>
        <li>No unauthorized call recording, broadcasting, or screenshotting without explicit consent.</li>
        <li>No spam, wallet manipulation, impersonation, or off-platform payment or contact solicitation.</li>
      </ul>
      <p>
        Users can immediately <strong>Block</strong> or <strong>Report</strong> any participant during an active call or from a profile. Reported accounts are reviewed by our moderation team within <strong>24 hours</strong>, and violators face immediate account termination and device-level bans.
      </p>

      <h2>4. Virtual Coins, In-App Purchases &amp; Billing</h2>
      <ul>
        <li>
          <strong>Virtual Currency License:</strong> FRZE Coins represent a limited, non-transferable digital license used for live calls and chats. Coins hold no cash value and cannot be redeemed by callers for currency.
        </li>
        <li>
          <strong>Platform Billing Compliance:</strong> Coin recharges on Android and web run through Google Play Billing or Razorpay.
        </li>
        <li>
          <strong>Host Payouts:</strong> Earnings accrued by approved FRZE hosts are subject to KYC verification and applicable tax laws.
        </li>
      </ul>

      <h2>5. Disclaimer &amp; Governing Law</h2>
      <p>
        FRZE connects independent users and hosts and does not provide licensed medical, psychiatric, legal, or financial advice. These Terms are governed by the laws of the Republic of India, with exclusive jurisdiction in New Delhi, India. See{" "}
        <Link href="/delete-account" className="text-[var(--accent)] underline">Account Deletion</Link> for account termination options.
      </p>
    </LegalLayout>
  );
}
