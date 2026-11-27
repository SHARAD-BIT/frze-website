"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqCategory } from "@/lib/frze-data";

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [openKey, setOpenKey] = useState<string | null>("privacy-0");

  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <section key={cat.id} className="frze-card rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-[var(--text)] mb-4">
            {cat.title}
          </h2>
          <div className="divide-y divide-[var(--border)]">
            {cat.items.map((item, idx) => {
              const key = `${cat.id}-${idx}`;
              const isOpen = openKey === key;
              return (
                <div key={key} className="py-3 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left text-base font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-2 pt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
