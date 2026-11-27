import type { Metadata } from "next";
import React from "react";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { FRZE_CONFIG } from "@/lib/frze-data";
import { Button } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description: "Request permanent deletion of your FRZE account and personal data.",
};

export default function DeleteAccountPage() {
  return (
    <LegalLayout badge="Data Control" title="Account &amp; Data Deletion Request">
      <p>
        At FRZE, you have complete control over your account and personal data in compliance with Google Play user data policies.
      </p>

      <h2>Method 1: In-App Instant Deletion (Recommended)</h2>
      <ol>
        <li>Open the <strong>FRZE App</strong>.</li>
        <li>Tap your <strong>Profile Avatar</strong> in bottom navigation.</li>
        <li>Go to <strong>Settings &gt; Account Settings &gt; Delete Account</strong> and confirm.</li>
      </ol>
      <p>
        Your active sessions across all devices are revoked immediately, and your account is scheduled for permanent purge.
      </p>

      <h2>Method 2: Web / Email Deletion Request</h2>
      <p>
        If you have uninstalled FRZE or cannot log in, email{" "}
        <a href={`mailto:${FRZE_CONFIG.supportEmail}?subject=FRZE%20Account%20Deletion%20Request`} className="text-[var(--accent)] underline">
          {FRZE_CONFIG.supportEmail}
        </a>{" "}
        with your registered mobile number (with country code, e.g. +91...) and display name, or submit an enquiry directly on our{" "}
        <a href="/contact?type=Account%20Deletion" className="text-[var(--accent)] underline">
          Contact page
        </a>.
      </p>

      <div className="pt-2">
        <Button href="/contact?type=Account%20Deletion" variant="primary" size="md">
          Submit Deletion Request Online
        </Button>
      </div>

      <h2>What Data Is Deleted vs. Retained</h2>
      <ul>
        <li>
          <strong>Deleted within 30 days:</strong> Profile name, mobile number, email, avatar, bio, call history metadata, and all Firebase/session tokens.
        </li>
        <li>
          <strong>Retained strictly for legal compliance:</strong> Statutory GST/tax invoices and payment receipts as required by Indian tax law.
        </li>
      </ul>
    </LegalLayout>
  );
}
