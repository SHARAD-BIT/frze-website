# FRZE Web Component Specs

## Button
- **variants**: `primary` (accent bg / brand gradient), `secondary` (purple `#5E17EB` bg), `outline` (bordered surface), `ghost` (transparent hover surface)
- **sizes**: `sm` (36px), `md` (44px), `lg` (52px)
- **states**: default, hover, active, focus-visible (2px ring `accent`), disabled, loading
- **a11y**: native `<button>` or `<a>`, visible focus ring, `aria-busy` on loading
- **used on**: all screens (S01–S12)

## Navbar
- **variants**: sticky desktop bar (7 nav links + theme toggle + Download CTA), mobile drawer (`390px`)
- **states**: default, scrolled backdrop blur, active route highlight, mobile drawer open/closed
- **a11y**: `<header>` + `<nav aria-label="Primary">`, `aria-expanded` on drawer toggle, Escape closes drawer
- **used on**: all screens (S01–S12)

## HostCard
- **variants**: live leaderboard card (carousel & grid)
- **states**: online (`teal` pulse dot), offline/busy, hover elevation, avatar image fallback to initials
- **a11y**: `<img>` with alt text, keyboard-focusable CTA
- **used on**: S01

## TopicPill
- **variants**: filterable/selectable topic chip with live host count badge
- **states**: default, hover, active
- **used on**: S01, S02

## AccordionItem
- **variants**: FAQ row
- **states**: collapsed, expanded, focus-visible
- **a11y**: `<button aria-expanded>` controlling answer region
- **used on**: S05

## MetricCounter
- **variants**: stat card with icon + number + label
- **states**: default, subtle entrance animation
- **used on**: S01, S02, S03

## ContactForm
- **variants**: customer & host enquiry form
- **states**: idle, validating, submitting, success banner, error banner
- **a11y**: `<label>` bound to every input, inline validation messages, `aria-live="polite"` status
- **used on**: S08
