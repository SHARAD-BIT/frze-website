import type { Metadata } from "next";
import React from "react";
import { CheckCircle2, Download, ShieldCheck, Star } from "lucide-react";
import { getHostTopics } from "@/lib/frze-api";
import { CALLER_TESTIMONIALS, FRZE_CONFIG } from "@/lib/frze-data";
import { Badge, Button } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Download FRZE App",
  description:
    "Download FRZE for Android (com.frze.app) on Google Play Store. Start private 1-on-1 audio and video calls with verified hosts.",
};

export default async function DownloadPage({
  searchParams,
}: {
  searchParams: Promise<{ host?: string }>;
}) {
  const params = await searchParams;
  const hostSlug = params.host;
  const topics = await getHostTopics();

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-6">
            <Badge tone="teal">Available on Google Play</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
              Download <span className="frze-gradient-text">FRZE</span>
              <span className="block text-2xl font-bold text-[var(--text-muted)] mt-2 sm:text-3xl">
                Not just a call. Real connection.
              </span>
            </h1>

            {hostSlug && (
              <div className="frze-card rounded-2xl border-[var(--teal)]/40 p-4 text-sm">
                <p className="font-semibold text-[var(--text)]">
                  Opening profile <span className="text-[var(--teal)]">@{hostSlug}</span>
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Install or open FRZE below to connect directly via{" "}
                  <a href={`${FRZE_CONFIG.shareScheme}${hostSlug}`} className="underline text-[var(--accent)]">
                    {FRZE_CONFIG.shareScheme}{hostSlug}
                  </a>
                </p>
              </div>
            )}

            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              Get instant access to verified FRZE hosts across audio calls, video calls, and private chat. Safe 18+ community, transparent coin wallet, and zero hidden subscriptions.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button href={FRZE_CONFIG.playStoreUrl} external variant="primary" size="lg">
                <Download className="h-4 w-4" />
                Get it on Google Play ({FRZE_CONFIG.packageId})
              </Button>
            </div>

            <div className="flex flex-wrap gap-5 pt-3 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--teal)]" />
                Unrecorded Agora Audio &amp; Video
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
                Razorpay &amp; Google Play Billing
              </span>
            </div>
          </div>

          {/* Interactive Phone Store Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[40px] border-2 border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--bg)] p-5 space-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl frze-gradient-bg shadow-lg">
                    <img
                      src="/brand/app_icon.png"
                      alt="FRZE App"
                      className="h-9 w-9 rounded-lg object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-[var(--text)]">FRZE — Audio &amp; Video</h2>
                    <p className="text-xs text-[var(--teal)]">{FRZE_CONFIG.legalEntity}</p>
                    <p className="text-[11px] text-[var(--text-muted)]">{FRZE_CONFIG.packageId}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-3 text-center">
                  <div>
                    <p className="text-sm font-extrabold text-[var(--text)] flex items-center justify-center gap-1">
                      4.6 <Star className="h-3.5 w-3.5 fill-[var(--amber)] text-[var(--amber)]" />
                    </p>
                    <p className="text-[10px] text-[var(--text-muted)]">Rated</p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[var(--text)]">18+</p>
                    <p className="text-[10px] text-[var(--text-muted)]">Verified Only</p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[var(--text)]">HD</p>
                    <p className="text-[10px] text-[var(--text-muted)]">Audio &amp; Video</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Live Topics Inside FRZE
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {topics.slice(0, 6).map((t) => (
                      <span
                        key={t.label}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] text-[var(--text)]"
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                <Button href={FRZE_CONFIG.playStoreUrl} external variant="primary" size="md" className="w-full">
                  Install FRZE Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Snippets */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-[var(--text)] mb-10">
            Loved by Callers Across India
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CALLER_TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="frze-card rounded-3xl p-6 space-y-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--amber)] text-[var(--amber)]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-[var(--text)]">
                  {item.name} • {item.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
