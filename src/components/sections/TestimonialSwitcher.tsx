"use client";

import React, { useState } from "react";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/Primitives";

interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  tag: string;
  quote: string;
}

export function TestimonialSwitcher({
  items,
  label = "Community Stories",
}: {
  items: TestimonialItem[];
  label?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex] || items[0];

  return (
    <div className="frze-card mx-auto max-w-3xl rounded-3xl p-6 sm:p-10">
      <div className="flex flex-col items-center text-center">
        <Badge tone="amber" className="mb-4">
          {label}
        </Badge>
        <Quote className="mb-4 h-8 w-8 text-[var(--accent)] opacity-80" />
        <blockquote className="text-lg font-medium leading-relaxed text-[var(--text)] sm:text-xl">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <div className="mt-5">
          <p className="text-base font-bold text-[var(--text)]">~ {current.name}</p>
          <p className="text-xs text-[var(--text-muted)]">
            {current.city} • {current.tag}
          </p>
        </div>

        {/* Avatar selector */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {items.map((item, idx) => {
            const active = idx === activeIndex;
            const initials = item.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Read story from ${item.name}`}
                aria-pressed={active}
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all cursor-pointer ${
                  active
                    ? "frze-gradient-bg text-white ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--surface)] scale-110"
                    : "bg-[var(--surface-elevated)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)]"
                }`}
              >
                {initials}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
