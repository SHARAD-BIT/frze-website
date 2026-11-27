import React from "react";
import Link from "next/link";
import { Mail, MapPin, ShieldCheck, Smartphone } from "lucide-react";
import { FRZE_CONFIG, NAV_LINKS } from "@/lib/frze-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Store */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/brand/app_icon.png"
                alt="FRZE logo"
                className="h-10 w-10 rounded-xl object-contain shadow-sm"
              />
              <div>
                <span className="text-xl font-extrabold tracking-tight">FRZE</span>
                <p className="text-xs text-[var(--text-muted)]">Real Talk. Safe Space.</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Private 1-on-1 audio calls, video calls, and chat with verified real hosts. Built for meaningful conversations across India.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={FRZE_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3.5 py-2 text-xs font-semibold hover:border-[var(--accent)] transition-colors"
              >
                <Smartphone className="h-4 w-4 text-[var(--teal)]" />
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)]">
              Policies &amp; Trust
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
                  Coins &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-[var(--text-muted)] hover:text-[var(--accent)]">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text)]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <a
                  href={`mailto:${FRZE_CONFIG.supportEmail}`}
                  className="hover:text-[var(--text)]"
                >
                  {FRZE_CONFIG.supportEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
                <span>{FRZE_CONFIG.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                <span>18+ Only • Zero-Tolerance Moderation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} {FRZE_CONFIG.legalEntity}. All rights reserved.</p>
          <p>
            App ID: <code className="text-[var(--text)]">{FRZE_CONFIG.packageId}</code> • API Connected:{" "}
            <span className="text-[var(--teal)]">api.frzeapp.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
