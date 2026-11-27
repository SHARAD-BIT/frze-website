import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/frze-api";
import { Badge, Button } from "@/components/ui/Primitives";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return {
    title: post?.title || "Article",
    description: post?.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--accent)]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <header className="space-y-4">
        <Badge tone="purple">{post.category}</Badge>
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.publishedAt}
          </span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {post.bannerUrl && (
        <img
          src={post.bannerUrl}
          alt={post.title}
          className="w-full rounded-3xl border border-[var(--border)] object-cover max-h-96"
        />
      )}

      <div className="frze-card rounded-3xl p-6 sm:p-10 space-y-5">
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-base leading-relaxed text-[var(--text-muted)]">
            {para}
          </p>
        ))}
      </div>

      <div className="frze-card rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-base font-bold text-[var(--text)]">Want to talk with a verified FRZE host?</p>
          <p className="text-xs text-[var(--text-muted)]">Download FRZE on Google Play.</p>
        </div>
        <Button href="/download" variant="primary" size="md">
          Download FRZE
        </Button>
      </div>
    </article>
  );
}
