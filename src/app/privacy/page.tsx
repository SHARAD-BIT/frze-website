import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { FRZE_CONFIG } from "@/lib/frze-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for FRZE mobile applications and web services.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout badge="Legal & Privacy" title="Privacy Policy for FRZE">
      <p>
        FRZE is committed to protecting your privacy and providing transparent, industry-standard data safeguards across our Android application and web services.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account &amp; Authentication Data:</strong> Mobile phone number (required for secure OTP verification), user-defined display name, optional profile picture, age/date of birth (to verify strict 18+ eligibility), and bio.
        </li>
        <li>
          <strong>Real-Time Communications &amp; Telemetry:</strong> Real-time voice and video call streams are relayed via secured media relay nodes. <strong>We do NOT record, monitor, or store the contents of your live voice or video calls.</strong> We collect ephemeral session metadata including call duration, timestamps, connection quality diagnostics, and completion status.
        </li>
        <li>
          <strong>Device &amp; Diagnostics Data:</strong> Device model, OS version, unique device identifier, IP address, network carrier, and anonymized crash logs.
        </li>
        <li>
          <strong>Financial &amp; Transaction Logs:</strong> In-app coin purchase records, wallet balance history, and host payout withdrawal records. Sensitive card and banking data are processed through certified PCI-DSS payment gateways.
        </li>
      </ul>

      <h2>2. Device Permissions &amp; Foreground Services</h2>
      <ul>
        <li>
          <strong>Microphone:</strong> Engaged strictly during user-initiated voice and video calls; deactivated immediately upon call termination.
        </li>
        <li>
          <strong>Camera:</strong> Used strictly during user-initiated 1-on-1 video calls or profile avatar uploads. Video frames are never archived.
        </li>
        <li>
          <strong>Foreground Services (Android 14+):</strong> Runs a persistent notification strictly while a live call is active so call audio stays connected cleanly.
        </li>
        <li>
          <strong>Notifications &amp; Bluetooth:</strong> Used for incoming call alerts and wireless headset audio routing.
        </li>
      </ul>

      <h2>3. Third-Party Sub-Processors &amp; SDKs</h2>
      <ul>
        <li><strong>Agora.io:</strong> Real-time encrypted SRTP/DTLS audio &amp; video relay.</li>
        <li><strong>Google Firebase:</strong> Phone Auth OTP, Firebase Cloud Messaging (FCM), and Crashlytics.</li>
        <li><strong>Razorpay &amp; Google Play Billing:</strong> Certified payment processing for wallet coin top-ups.</li>
      </ul>
      <p>
        <strong>Non-Sale Commitment:</strong> FRZE does not sell, rent, lease, or trade personal data to data brokers or third-party advertisers.
      </p>

      <h2>4. Data Security, Encryption &amp; Retention</h2>
      <ul>
        <li><strong>Encryption in Transit &amp; at Rest:</strong> All API traffic uses HTTPS / TLS 1.3 encryption in transit, live Agora streams use SRTP/DTLS encryption, and stored account databases use AES-256 encryption at rest.</li>
        <li><strong>Retention Schedule:</strong> Account data is retained only while your account remains active. Upon deletion, personal profile records, mobile numbers, avatars, and active tokens are permanently purged within 30 days, except statutory GST/tax invoices retained as required by Indian law.</li>
      </ul>

      <h2>5. Strict 18+ Age Policy</h2>
      <p>
        FRZE is exclusively restricted to adults aged 18 and older. We do not knowingly collect personal data from minors under 18. If we identify an account registered by a minor, it is purged immediately. Report concerns to{" "}
        <a href={`mailto:${FRZE_CONFIG.supportEmail}`} className="text-[var(--accent)] underline">
          {FRZE_CONFIG.supportEmail}
        </a>.
      </p>

      <h2>6. Account &amp; Data Deletion</h2>
      <p>
        Users may delete their account inside the app via <strong>Profile &gt; Settings &gt; Account &gt; Delete Account</strong>, or online at{" "}
        <Link href="/delete-account" className="text-[var(--accent)] underline">
          /delete-account
        </Link>.
      </p>

      <h2>7. Your Rights &amp; Grievance Redressal</h2>
      <p>
        You may request access to, correction of, or erasure of your personal data at any time by contacting our Grievance &amp; Data Protection Team at{" "}
        <a href={`mailto:${FRZE_CONFIG.supportEmail}`} className="text-[var(--accent)] underline">
          {FRZE_CONFIG.supportEmail}
        </a>.
      </p>
    </LegalLayout>
  );
}
