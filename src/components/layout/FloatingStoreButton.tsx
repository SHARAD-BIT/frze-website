"use client";

import React from "react";
import { Smartphone } from "lucide-react";
import { FRZE_CONFIG } from "@/lib/frze-data";

export function FloatingStoreButton() {
  return (
    <a
      href={FRZE_CONFIG.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download FRZE on Google Play"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]/95 px-4 py-2.5 text-xs font-bold text-[var(--text)] shadow-[var(--shadow-pop)] backdrop-blur-md hover:border-[var(--accent)] transition-all"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full frze-gradient-bg text-white">
        <Smartphone className="h-3.5 w-3.5" />
      </span>
      <span className="hidden sm:inline">Get FRZE on Play Store</span>
      <span className="sm:hidden">Play Store</span>
    </a>
  );
}
