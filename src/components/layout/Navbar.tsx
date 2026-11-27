"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/frze-data";
import { useTheme } from "@/components/ui/ThemeProvider";
import { Button } from "@/components/ui/Primitives";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" aria-label="FRZE Home" className="flex items-center">
              <img
                src="/brand/app_icon.png"
                alt="FRZE"
                className="h-10 w-10 rounded-xl object-contain shadow-sm"
              />
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-[var(--amber)]" />
              ) : (
                <Moon className="h-4 w-4 text-[var(--accent-secondary)]" />
              )}
            </button>

            <Button href="/contact" variant="outline" size="sm" className="hidden sm:inline-flex">
              Contact
            </Button>

            <Button href="/download" variant="primary" size="sm">
              <span>Get App</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile slide-over drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 flex w-[82%] max-w-xs flex-col border-r border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <Link href="/" aria-label="FRZE Home" className="flex items-center">
                <img
                  src="/brand/app_icon.png"
                  alt="FRZE"
                  className="h-9 w-9 rounded-xl object-contain shadow-sm"
                />
              </Link>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-5 flex flex-1 flex-col gap-1.5">
              {NAV_LINKS.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-[var(--accent)] text-[var(--on-accent)]"
                        : "text-[var(--text)] hover:bg-[var(--surface-elevated)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  pathname.startsWith("/contact")
                    ? "bg-[var(--accent)] text-[var(--on-accent)]"
                    : "text-[var(--text)] hover:bg-[var(--surface-elevated)]"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            <div className="border-t border-[var(--border)] pt-4 space-y-2">
              <Button href="/download" variant="primary" size="md" className="w-full">
                Download FRZE App
              </Button>
              <p className="text-center text-xs text-[var(--text-muted)]">
                Strictly 18+ • Real Verified Hosts
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
