import type { Metadata } from "next";
import React from "react";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { FRZE_CONFIG } from "@/lib/frze-data";

export const metadata: Metadata = {
  title: "Coins & Refund Policy",
  description: "Returns, virtual coins, and refund policy for FRZE.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout badge="Billing & Refunds" title="Coins &amp; Refund Policy">
      <p>
        This policy governs digital Coin recharges, wallet usage, and payment disputes on FRZE across Android and Web.
      </p>

      <h2>1. Digital Goods (FRZE Coins)</h2>
      <p>
        When you purchase FRZE Coins, they are credited immediately to your FRZE Wallet for use on 1-on-1 audio calls, video calls, and chat sessions. Because Coins are digital goods delivered instantaneously, purchases are generally final and non-refundable once credited.
      </p>

      <h2>2. Store &amp; Gateway Refund Handling</h2>
      <ul>
        <li>
          <strong>Google Play &amp; Razorpay (Android / Web):</strong> If a Razorpay or Google Play transaction was debited from your bank/UPI account due to a network error without crediting Coins, please contact{" "}
          <a href={`mailto:${FRZE_CONFIG.supportEmail}`} className="text-[var(--accent)] underline">
            {FRZE_CONFIG.supportEmail}
          </a>{" "}
          with your transaction reference ID within 7 days for reconciliation or reversal. For Google Play-billed orders, you may also request review under Google Play&apos;s refund rules.
        </li>
      </ul>

      <h2>3. No Off-Platform Payments</h2>
      <p>
        FRZE is not responsible for and cannot refund any money sent to any user or host outside official FRZE payment channels (such as direct UPI, bank transfers, or external wallets). Always keep all transactions inside FRZE.
      </p>
    </LegalLayout>
  );
}
