import React from "react";
import Link from "next/link";
import { FRZE_CONFIG } from "@/lib/frze-data";
import { Badge } from "@/components/ui/Primitives";

export function LegalLayout({
  badge,
  title,
  updatedAt = "November 14, 2026",
  children,
}: {
  badge: string;
  title: string;
  updatedAt?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="frze-card rounded-[32px] p-6 sm:p-12 space-y-8">
        <header className="border-b border-[var(--border)] pb-6 space-y-3">
          <Badge tone="neutral">{badge}</Badge>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
            {title}
          </h1>
          <div className="text-xs sm:text-sm text-[var(--text-muted)] space-y-1">
            <p>
              <strong>Last Updated:</strong> {updatedAt} • <strong>Entity:</strong>{" "}
              {FRZE_CONFIG.legalEntity}
            </p>
            <p>
              <strong>Official Support:</strong>{" "}
              <a href={`mailto:${FRZE_CONFIG.supportEmail}`} className="text-[var(--accent)] hover:underline">
                {FRZE_CONFIG.supportEmail}
              </a>
            </p>
          </div>
        </header>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:border-l-4 [&_h2]:border-[var(--accent)] [&_h2]:pl-3 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-[var(--text)] [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-[var(--text)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-[var(--text)]">
          {children}
        </div>

        <footer className="border-t border-[var(--border)] pt-6 flex flex-wrap gap-4 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/privacy" className="hover:text-[var(--accent)]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[var(--accent)]">Terms of Service</Link>
          <Link href="/refund-policy" className="hover:text-[var(--accent)]">Coins &amp; Refund Policy</Link>
          <Link href="/community-guidelines" className="hover:text-[var(--accent)]">Community Guidelines</Link>
          <Link href="/delete-account" className="hover:text-[var(--accent)]">Account Deletion</Link>
        </footer>
      </div>
    </div>
  );
}
