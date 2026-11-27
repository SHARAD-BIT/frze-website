import React from "react";
import { Download, ShieldCheck, Sparkles } from "lucide-react";
import { FRZE_CONFIG } from "@/lib/frze-data";
import { Button } from "@/components/ui/Primitives";

export function DownloadBanner({
  title = "Ready to talk to someone real?",
  subtitle = "Download FRZE, choose a topic that fits your mood, and connect via private audio call, video call, or chat in seconds.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const marqueeItems = Array.from({ length: 10 }, (_, i) => (
    <span key={i} className="mx-6 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-white/90">
      <Sparkles className="h-3.5 w-3.5" />
      FRZE • TALK • CONNECT • VIBE
    </span>
  ));

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] frze-gradient-bg p-8 text-white shadow-2xl sm:p-12 lg:p-16">
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/25 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              18+ Verified Community • Android
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-2xl text-base text-white/90 sm:text-lg">{subtitle}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                href={FRZE_CONFIG.playStoreUrl}
                external
                variant="outline"
                size="lg"
                className="!bg-[#09090D] !text-white !border-white/20 hover:!bg-black"
              >
                <Download className="h-4 w-4" />
                Get it on Google Play
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="rounded-3xl border border-white/25 bg-black/25 p-6 backdrop-blur-md text-center space-y-3 max-w-xs w-full">
              <img
                src="/brand/app_icon.png"
                alt="FRZE app icon"
                className="mx-auto h-16 w-16 rounded-2xl shadow-lg"
              />
              <p className="text-lg font-extrabold">FRZE Live</p>
              <p className="text-xs text-white/80">
                1-on-1 Audio, Video &amp; Chat • Transparent Coin Wallet • Instant Block &amp; Report
              </p>
            </div>
          </div>
        </div>

        {/* Marquee ribbon */}
        <div className="mt-10 overflow-hidden border-t border-white/20 pt-4">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {marqueeItems}
            {marqueeItems}
          </div>
        </div>
      </div>
    </section>
  );
}
