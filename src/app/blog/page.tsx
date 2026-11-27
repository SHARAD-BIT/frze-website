import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getBlogPosts } from "@/lib/frze-api";
import { Badge } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Blog & Stories",
  description:
    "Stories, communication guides, and safety updates from the FRZE community.",
};

export const revalidate = 120;

export default async function BlogPage() {
  const { posts, source } = await getBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <Badge tone="purple">
          {source === "strapi" ? "Synced with FRZE CMS" : "FRZE Journal"}
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
          Conversations That <span className="frze-gradient-text">Matter</span>
        </h1>
        <p className="text-base text-[var(--text-muted)]">
          Perspectives on honest communication, relationship clarity, host stories, and digital safety.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="frze-card flex flex-col overflow-hidden rounded-3xl transition-transform hover:-translate-y-1"
          >
            <div className="h-44 w-full overflow-hidden bg-[var(--surface-elevated)]">
              {post.bannerUrl ? (
                <img
                  src={post.bannerUrl}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center frze-gradient-bg p-6 text-white">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em]">
                    {post.category}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="font-bold text-[var(--accent)]">{post.category}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold leading-snug text-[var(--text)]">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </Link>
              </h2>

              <p className="flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-[var(--border)] pt-4 text-xs text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.publishedAt}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-[var(--accent)] hover:underline"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
