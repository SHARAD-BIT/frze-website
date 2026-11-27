import React from "react";
import { Button } from "@/components/ui/Primitives";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-28 text-center space-y-5">
      <p className="text-sm font-extrabold uppercase tracking-widest text-[var(--accent)]">
        404 • Page Not Found
      </p>
      <h1 className="text-4xl font-extrabold text-[var(--text)]">
        This page doesn&apos;t exist on FRZE
      </h1>
      <p className="text-base text-[var(--text-muted)]">
        Head back to the FRZE home page or download the app to connect with verified hosts.
      </p>
      <div className="flex gap-3 pt-2">
        <Button href="/" variant="primary" size="md">
          Go Home
        </Button>
        <Button href="/download" variant="outline" size="md">
          Download App
        </Button>
      </div>
    </div>
  );
}
