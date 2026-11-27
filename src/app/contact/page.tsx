import type { Metadata } from "next";
import React from "react";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { FRZE_CONFIG } from "@/lib/frze-data";
import { Badge } from "@/components/ui/Primitives";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact FRZE support, apply to become a verified host, or report a safety concern directly to our backend.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const defaultType = params.type || "Caller Support";

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <Badge tone="teal">Connected to api.frzeapp.in</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)]">
            Talk to the <span className="frze-gradient-text">FRZE Team</span>
          </h1>
          <p className="text-base leading-relaxed text-[var(--text-muted)]">
            Have a question about your wallet, want to apply as a verified FRZE Host, or need to escalate a safety concern? Submissions go straight to our Strapi admin dashboard.
          </p>

          <div className="frze-card rounded-3xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
              <div>
                <p className="text-sm font-bold text-[var(--text)]">Official Support Email</p>
                <a
                  href={`mailto:${FRZE_CONFIG.supportEmail}`}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
                >
                  {FRZE_CONFIG.supportEmail}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--teal)]" />
              <div>
                <p className="text-sm font-bold text-[var(--text)]">Entity &amp; Jurisdiction</p>
                <p className="text-sm text-[var(--text-muted)]">
                  {FRZE_CONFIG.legalEntity} • {FRZE_CONFIG.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-[var(--success)]" />
              <div>
                <p className="text-sm font-bold text-[var(--text)]">Moderation SLA</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Safety reports are reviewed within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm defaultType={defaultType} />
        </div>
      </div>
    </div>
  );
}
