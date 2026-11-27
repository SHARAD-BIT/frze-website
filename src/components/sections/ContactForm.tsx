"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Primitives";

export function ContactForm({ defaultType = "Caller Support" }: { defaultType?: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    user_type: defaultType,
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/frze/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unable to submit your enquiry right now.");
      }
      setStatus("success");
      setFeedback("Your message has been sent to the FRZE team. We usually respond within 24 hours.");
      setForm({
        name: "",
        email: "",
        phone: "",
        user_type: defaultType,
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Something went wrong. Please email support@frzeapp.in."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="frze-card rounded-3xl p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="block text-sm font-semibold text-[var(--text)] mb-1.5">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full rounded-xl border border-[var(--border-input)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
          />
        </div>

        <div>
          <label htmlFor="enquiry-email" className="block text-sm font-semibold text-[var(--text)] mb-1.5">
            Email Address *
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[var(--border-input)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-phone" className="block text-sm font-semibold text-[var(--text)] mb-1.5">
            Mobile Number
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-[var(--border-input)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
          />
        </div>

        <div>
          <label htmlFor="enquiry-type" className="block text-sm font-semibold text-[var(--text)] mb-1.5">
            Enquiry Type
          </label>
          <select
            id="enquiry-type"
            value={form.user_type}
            onChange={(e) => setForm({ ...form, user_type: e.target.value })}
            className="w-full rounded-xl border border-[var(--border-input)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)]"
          >
            <option value="Caller Support">Caller Support</option>
            <option value="Become a Host">Become a FRZE Host</option>
            <option value="Safety & Moderation">Safety &amp; Moderation</option>
            <option value="Wallet & Billing">Wallet &amp; Billing</option>
            <option value="Account Deletion">Account Deletion</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-subject" className="block text-sm font-semibold text-[var(--text)] mb-1.5">
          Subject *
        </label>
        <input
          id="enquiry-subject"
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="How can we help?"
          className="w-full rounded-xl border border-[var(--border-input)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
        />
      </div>

      <div>
        <label htmlFor="enquiry-message" className="block text-sm font-semibold text-[var(--text)] mb-1.5">
          Message *
        </label>
        <textarea
          id="enquiry-message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Share details about your question, host application, or support request..."
          className="w-full rounded-xl border border-[var(--border-input)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
        />
      </div>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-2.5 rounded-xl border border-[var(--success)]/40 bg-[var(--success)]/10 p-3.5 text-sm text-[var(--success)]"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          aria-live="polite"
          className="flex items-start gap-2.5 rounded-xl border border-[var(--danger)]/40 bg-[var(--danger)]/10 p-3.5 text-sm text-[var(--danger)]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="w-full sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {status === "submitting" ? "Sending..." : "Submit to FRZE Support"}
      </Button>
    </form>
  );
}
