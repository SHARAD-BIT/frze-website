import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--on-accent)] hover:opacity-90 shadow-[var(--shadow-glow)]",
  secondary:
    "bg-[var(--accent-secondary)] text-[var(--on-accent-secondary)] hover:opacity-90",
  outline:
    "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)]",
  ghost:
    "bg-transparent text-[var(--text)] hover:bg-[var(--surface-elevated)]",
};

const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "accent",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "accent" | "teal" | "amber" | "neutral" | "purple";
  className?: string;
}) {
  const toneClasses = {
    accent: "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/30",
    teal: "bg-[var(--teal)]/15 text-[var(--teal)] border-[var(--teal)]/30",
    amber: "bg-[var(--amber)]/15 text-[var(--amber)] border-[var(--amber)]/30",
    purple:
      "bg-[var(--accent-secondary)]/15 text-[var(--accent-secondary)] border-[var(--accent-secondary)]/30",
    neutral: "bg-[var(--surface-elevated)] text-[var(--text-muted)] border-[var(--border)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`mb-3 flex ${align === "center" ? "justify-center" : ""}`}>
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[var(--text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
