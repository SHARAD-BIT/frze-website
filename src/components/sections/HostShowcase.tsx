"use client";

import React, { useState } from "react";
import { Phone, Star, Video, CheckCircle2, Sparkles } from "lucide-react";
import type { HostTopic, LeaderboardHost } from "@/lib/frze-api";
import { FRZE_CONFIG } from "@/lib/frze-data";
import { Badge, Button } from "@/components/ui/Primitives";

function HostAvatar({ name, src }: { name: string; src: string | null }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");

  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center frze-gradient-bg text-2xl font-extrabold text-white">
        {initials || "FZ"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
    />
  );
}

export function HostShowcase({
  hosts,
  topics,
}: {
  hosts: LeaderboardHost[];
  topics: HostTopic[];
}) {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  return (
    <div className="space-y-8">
      {/* Live Topic Chips from /api/host-topics */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedTopic("All")}
          className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-colors cursor-pointer ${
            selectedTopic === "All"
              ? "bg-[var(--accent)] text-[var(--on-accent)] border-transparent"
              : "bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text)]"
          }`}
        >
          All Topics
        </button>
        {topics.slice(0, 8).map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setSelectedTopic(t.label)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold border transition-colors cursor-pointer ${
              selectedTopic === t.label
                ? "bg-[var(--accent)] text-[var(--on-accent)] border-transparent"
                : "bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)] hover:text-[var(--text)]"
            }`}
          >
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Live Verified Hosts Grid / Horizontal Scroll */}
      {hosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hosts.map((host) => {
            const isOnline = host.user_status?.toLowerCase() === "online";
            return (
              <div
                key={host.userDocumentId}
                className="group frze-card overflow-hidden rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/60"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--surface-elevated)]">
                  <HostAvatar
                    key={host.profilePic || host.userDocumentId}
                    name={host.name}
                    src={host.profilePic}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Status pill */}
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isOnline ? "bg-[var(--teal)] animate-pulse-dot" : "bg-[var(--amber)]"
                        }`}
                      />
                      {isOnline ? "Online Now" : "Active Host"}
                    </span>
                  </div>

                  {/* Rank badge */}
                  <div className="absolute right-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-bold text-[var(--amber)] backdrop-blur-md">
                      #{host.rank}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold leading-tight">{host.name}</h3>
                        <CheckCircle2 className="h-4 w-4 text-[var(--teal)] shrink-0" />
                      </div>
                      <p className="text-xs text-white/75">@{host.handler}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold">
                      <Star className="h-3.5 w-3.5 fill-[var(--amber)] text-[var(--amber)]" />
                      <span>{host.averageRating > 0 ? host.averageRating.toFixed(1) : "New"}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5 text-[var(--accent)]" />
                      {host.totalCalls} calls
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Video className="h-3.5 w-3.5 text-[var(--accent-secondary)]" />
                      {host.totalVideoCalls} video
                    </span>
                  </div>

                  {selectedTopic !== "All" && (
                    <Badge tone="neutral" className="w-full justify-center truncate">
                      <Sparkles className="h-3 w-3 text-[var(--accent)]" />
                      {selectedTopic}
                    </Badge>
                  )}

                  <Button
                    href={`/download?host=${encodeURIComponent(host.handler)}`}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Call on FRZE App
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="frze-card rounded-3xl p-8 text-center">
          <p className="text-base font-semibold text-[var(--text)]">
            Verified FRZE hosts are active inside the app right now
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Pick any topic above and connect in seconds on Android via Google Play.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button href={FRZE_CONFIG.playStoreUrl} external variant="primary" size="md">
              Download for Android
            </Button>
            <Button href="/download" variant="outline" size="md">
              View App Preview
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
