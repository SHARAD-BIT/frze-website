# Recon map: Baatein (Web) -> Customized for FRZE

Scope: Public marketing website, live host discovery/calling preview, host/partner onboarding funnel, safety/FAQ/blog pages, and legal/compliance pages customized for FRZE (`frzeapp.in` / `https://api.frzeapp.in`).
For: FRZE (`com.frze.app`) — 1-on-1 audio & video social calling platform with verified hosts, wallet coins, and Strapi 5 backend (`https://api.frzeapp.in`).
Date: 2026-11-27

## Sources

| # | source | URL / Path | notes |
| --- | --- | --- | --- |
| 1 | Baatein Marketing Site | https://baatein.in/ | Home, How It Works, Join Us, Safety, Help/FAQ, Blog, Download |
| 2 | Baatein Web Calling App | https://web.baatein.in/ | Public partner grid, voice samples, language & video filters, OTP login modal |
| 3 | Baatein Partner Portal | https://partner.baatein.in/ | Host registration (+91 OTP + Turnstile + profile/voice bio + PAN KYC) |
| 4 | Baatein Legal Pages | https://baatein.in/privacy-policy, /terms-of-service, /returns-refund-policy, /account-deletion | Compliance & refund rules |
| 5 | Baatein Store Listings | Play Store (`com.software.baatein`), App Store (`id6779209286`) | Pitch, feature highlights, screenshots |
| 6 | FRZE Flutter App | `C:\Users\akshi\Desktop\callin\Vibelive-flutter-main` | Brand assets, colors, auth credentials, Agora/Razorpay/Firebase config |
| 7 | FRZE Strapi 5 Backend | `C:\Users\akshi\Desktop\callin\VibeCallingBackend` | Public & auth REST endpoints, CORS origins, existing legal HTML pages |

## Core loop

Discover verified real hosts online right now, preview their voice intros or topics, sign in quickly via mobile OTP / social auth, and start a private 1-on-1 audio call, video call, or chat using FRZE wallet coins.

## Screens

| ID | screen | route / how to reach | purpose | key components | states seen |
| --- | --- | --- | --- | --- | --- |
| S01 | Home / Landing | `/` | Hero pitch, live online hosts strip, 3-step explainer, metrics, testimonials, safety pillars, app download banner | Sticky top nav, animated brand label, horizontal host cards (status, voice sample play, rating, rate, CTA), 3-step preview collage, metric counters, testimonial selector, safety 3-col cards, download CTA banner, floating store button, footer | desktop 4-col strip, mobile 2-row scroll grid, audio playing, loading/empty |
| S02 | How It Works | `/how-it-works` | Explain caller onboarding and audio/video/chat modes | Hero illustration, Step 1 OTP & call UI mockup, Step 2 chat & call mockup, 4 mood/use-case prompt cards, impact metrics, download CTA banner | desktop, mobile, empty/default |
| S03 | Become a Host (Join Us) | `/join-us` | Recruit hosts/partners into FRZE Host Hub / onboarding | Hero with CTA, partner impact metrics, 3-step onboarding walkthrough (Sign Up, Profile + Voice Intro, KYC), earnings stats, partner testimonial selector, floating "Join as Host" widget | desktop, mobile, widget dismissed/visible |
| S04 | Safety & Trust | `/safety` | Explain ID/selfie verification, encryption, moderation, and anti-off-platform PII/payment rules | Hero + safety contact CTA, 3 safety pillar sections with UI mockups, 8-item prohibited PII/off-platform payment callout box, bottom safety banner | desktop, mobile |
| S05 | Help / FAQ | `/help` | Self-serve support center with categorized expandable FAQs | Hero, 5 accordion categories (Privacy, Verification, Safety/Blocking, Abuse Policy, Payments/Earnings), 3-card "Still Have Questions?" row | collapsed (default), expanded (1-click toggle) |
| S06 | Blog | `/blog` | Emotional wellness, community stories, and product updates | Category-tagged 3-col article grid, author/date/excerpt cards, pagination, article detail view (`/blog/[slug]`) | list filled, empty, loading skeleton, article detail |
| S07 | Download App | `/download` | Mobile app download landing page for Android & iOS | Hero + store download CTAs, interactive phone preview mockup (FRZE store stats & highlights), user review snippets | desktop, mobile |
| S08 | Contact / Enquiry | `/contact` | Direct user & host enquiry submission + newsletter signup | Contact form (`name`, `email`, `phone`, `subject`, `user_type`, `message`) wired to `POST /api/customer-enquiries`, support contact card (`support@frzeapp.in`) | default, submitting, success, validation error |
| S09 | Web Host Directory (Optional / Phase 2) | `/discover` (or `/partners`) | Browseable public directory of FRZE hosts with filters & voice preview | Top bar with Login CTA, Language filter modal, Video/Audio toggle, Search input, Host card grid with voice sample player | filled, filtered, empty search, audio playing |
| S10 | OTP Login / Call Gate Modal | `/login` & modal trigger on host CTA | Mobile `+91` OTP (or Google/Apple) login before starting a call or browsing protected routes | Split-screen carousel + theme toggle on `/login`; compact OTP modal on card click, terms/privacy links | phone entry, OTP verification, loading, error |
| S11 | Host Onboarding Portal (Optional / Phase 2) | `/host-apply` | Multi-step host registration & KYC application | Mobile + OTP verification, Profile (Name, Gender, Referral Code, Bio, Interests, Audio Intro), KYC verification | step 1-3, validation error, submitted |
| S12 | Legal & Compliance Pages | `/privacy`, `/terms`, `/refund-policy`, `/community-guidelines`, `/delete-account` | Statutory policies & Play Store / App Store account deletion portal | Anchor index (`ON THIS PAGE`), policy sections, 18+ notice, grievance contact (`support@frzeapp.in`), account deletion instructions/portal | desktop, mobile |

## Flows

```
F01 Visitor previews host and downloads FRZE app
    S01 (/) -> click voice sample on host card -> click CTA / S07 (/download) -> Google Play / App Store
    happy path clicks: 2-3
    edge: audio already playing on another card (stop previous), no hosts online (show topic tags + app download fallback)

F02 Visitor explores how FRZE works and safety guarantees
    S01 (/) -> S02 (/how-it-works) -> S04 (/safety) -> S05 (/help)
    happy path clicks: 3
    edge: mobile drawer menu open/close, accordion expand/collapse

F03 Prospective host applies to join FRZE
    S01 (/) -> S03 (/join-us) -> click "Become a Host" -> S11 (/host-apply) or App Host Hub deep link
    happy path clicks: 2-3
    edge: user dismisses floating host widget, mobile vs desktop CTA

F04 Visitor submits support/contact enquiry
    Footer / S05 (/help) -> S08 (/contact) -> fill form -> submit to POST /api/customer-enquiries
    happy path clicks: 3
    edge: invalid email/phone, API rate limit or network error, duplicate submit prevention

F05 Web caller discovers and initiates login-gated call (Web App slice)
    S09 (/discover) -> filter by language/video -> play voice sample -> click Call -> S10 (OTP Modal via /api/session-auth/otp/request & verify)
    happy path clicks: 4
    edge: OTP expired/wrong code, account pending deletion/blocked (`ACCOUNT_PENDING_DELETION` / `ACCOUNT_BLOCKED`), zero hosts match filter
```

## Components

| component | variants | states | used on |
| --- | --- | --- | --- |
| Navbar | desktop 7-link bar, mobile drawer | default, active route, drawer open | all (S01–S12) |
| Footer | 4-col desktop, stacked mobile | default | all except full-bleed iframe |
| Button | primary (accent gradient/solid), secondary, outline, ghost | default, hover, active, focus-visible, disabled, loading | all |
| HostCard | compact carousel card, full grid card | online, on-call, audio-playing, hover | S01, S09 |
| VoicePreviewPlayer | compact button, progress bar player | idle, loading, playing, paused, error | S01, S09 |
| MetricCounter | stat card | initial, animated count-up | S01, S02, S03 |
| AccordionItem | FAQ row | collapsed, expanded, focus-visible | S05 |
| FilterModal | language pill selector | closed, open, selections active | S09 |
| OtpLoginModal | compact modal, split-page `/login` | phone-input, otp-input, loading, error | S09, S10, S11 |
| FloatingWidget | store download FAB, "Become a Host" prompt | visible, dismissed | S01–S07 |
| FormInput | text, tel (`+91`), email, textarea, select | default, focus, error, disabled | S08, S10, S11 |

## Inferred data model (mapped to existing FRZE Strapi 5 backend at `https://api.frzeapp.in`)

```
PublicUser (api::public-user.public-user)
  id, documentId, username, name, phone, email, accountStatus (active|pending_deletion|deleted|blocked), role/type
  evidence: VibeCallingBackend src/api/public-user, global-auth.js
  confidence: high (verified in local codebase)

ExpertProfile / Host (api::expert-profile.expert-profile)
  id, documentId, handler, tagline, descriptions, gender (Male|Female|Others), audio_intro (media),
  rates, call_level (1-5), averageRating, reviewCount, language, isApproved, showInList, host_status
  evidence: VibeCallingBackend src/api/expert-profile/content-types/expert-profile/schema.json
  confidence: high (verified in local codebase)

HostTopic (GET /api/host-topics)
  label, hosts (count of approved listed hosts)
  evidence: VibeCallingBackend src/api/expert-profile/controllers/host-topics.js
  confidence: high (verified in local codebase)

Blog (api::blog.blog)
  id, title, slug, content (richtext), excerpt, BannerImg (media), public_profile, blog_published_date
  evidence: VibeCallingBackend src/api/blog/content-types/blog/schema.json
  confidence: high (verified in local codebase)

CustomerEnquiry (api::customer-enquiry.customer-enquiry -> POST /api/customer-enquiries)
  name, email, phone, message, user_type, subject, organisation_name
  evidence: VibeCallingBackend src/api/customer-enquiry/content-types/customer-enquiry/schema.json & global-auth.js
  confidence: high (verified in local codebase)

NewsletterEmail (api::new-letter-email.new-letter-email)
  email
  evidence: VibeCallingBackend src/api/new-letter-email/
  confidence: high (verified in local codebase)

Platform / AppConfig (api::platform.platform, api::app-config.app-config)
  key, name, displayName, web_url, deeplink_scheme (frze://), support_email, logo
  evidence: VibeCallingBackend src/api/platform/ & app-config/
  confidence: high (verified in local codebase)
```

## Feature matrix

See `features.csv`. Must: 18, should: 8, could: 5, skip: 2.

## Out of scope (cannot or should not be cloned)

- Baatein's brand name, logos, 3D character illustrations, copy, testimonials, and user/partner counts (all replaced with FRZE's own brand assets, fresh copy, and honest/real FRZE metrics).
- Baatein's actual partner profiles, voice samples, and Play Store / App Store listings (`com.software.baatein` / `id6779209286`).
- Direct browser-based Agora WebRTC call room unless explicitly requested for Phase 2 (FRZE's live RTC calling currently lives in `Vibelive-flutter-main` with Agora SDK + CallKit; the web replica links callers into FRZE app / deep links `frze://` or web discovery).
- Ungated public exposure of private host identities if FRZE's `global-auth` policy intentionally restricts `/api/expert-profiles` behind auth (unless a dedicated sanitized public showcase endpoint is approved).

## Size

Screens 12 (8 core marketing/contact + 4 legal, plus optional web directory/onboarding), flows 5, entities 7 (already built in Strapi 5).
Hard parts:
1. Deciding public vs authenticated visibility for live host cards (`global-auth.js` currently protects `/api/expert-profiles` and only opens `/api/host-topics`, `/api/activity-feed`, `/api/expert-leaderboard` pre-auth).
2. Hosting/routing setup (`https://frzeapp.in` static/Next.js site calling `https://api.frzeapp.in/api/*` vs serving directly from `https://api.frzeapp.in` Caddy/Strapi `public/`).
3. Matching FRZE's app-store-safe positioning (no "Dating / Late Night" prohibited tags — use real `/api/host-topics` and FRZE's 18+ verified community copy).

Size: M (marketing + API-connected pages in a few days; +1–2 weeks if full Agora WebRTC calling on web is added).
