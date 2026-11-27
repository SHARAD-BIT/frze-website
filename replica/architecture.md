# Architecture: FRZE Web (rebuilt from Baatein's structure for FRZE)

## Stack

| layer | choice | why |
| --- | --- | --- |
| web | Next.js 15 (App Router) + TypeScript | SSR/SSG SEO pages + interactive client components; supports static export or Node server |
| styling | Tailwind CSS v4 + CSS custom properties (`tokens.css`) | Zero runtime overhead, strict token compliance, dark & light mode support |
| icons | `lucide-react` | Open MIT icon library (clean-room replacement, zero borrowed SVGs) |
| backend API | Existing Strapi 5 REST API at `https://api.frzeapp.in` | User's live production backend (`x-ce-app: vibe_os`) managing hosts, topics, blogs, and enquiries |
| media host | `https://api.frzeapp.in/uploads/*` & `https://media.frzeapp.in/*` | Live Strapi & R2 media origins already configured in backend CSP |
| database | Existing PostgreSQL (`callin` DB managed by Strapi 5) | No duplicate DB needed; all REST & CMS data comes from `api.frzeapp.in` |
| hosting | `https://frzeapp.in` (Vercel / Netlify / Node / Caddy) | CORS already whitelists `https://frzeapp.in` in `VibeCallingBackend/config/middlewares.js` |

## Schema

No new database tables required. The web app reads/writes existing Strapi 5 collections on `https://api.frzeapp.in`:
- `expert-profiles` / `expert-leaderboard` (public read via `/api/expert-leaderboard`)
- `host-topics` (public read via `/api/host-topics`)
- `interests/form` (public read via `/api/interests/form`)
- `activity-feed` (public read via `/api/activity-feed`)
- `customer-enquiries` (public create via `POST /api/customer-enquiries`)
- `blogs` (server-side fetch via `STRAPI_API_TOKEN` when configured, with curated FRZE fallback articles)

## API

| method path | does | who | input | output | flow |
| --- | --- | --- | --- | --- | --- |
| `GET /api/health` | Backend liveness probe | public | — | `{ status, database }` | health |
| `GET /api/host-topics` | Live topic labels & host counts | public | `x-ce-app: vibe_os` | `{ data: [{ label, hosts }] }` | F01 |
| `GET /api/expert-leaderboard` | Top verified FRZE hosts & online status | public | `x-ce-app: vibe_os` | `{ app, leaderboard: [...] }` | F01 |
| `GET /api/interests/form` | Onboarding topic options | public | `x-ce-app: vibe_os` | `{ app, questions: [...] }` | F01, F03 |
| `GET /api/activity-feed` | Social-proof call activity config & feed | public | `x-ce-app: vibe_os` | `{ config, fakeCalls }` | F01 |
| `GET /api/blogs` | CMS blog posts (optional token) | API token / fallback | `?populate=BannerImg&sort=blog_published_date:desc` | `{ data: [...] }` | S06 |
| `POST /api/customer-enquiries` | Submit contact / host enquiry | public | `{ data: { name, email, phone, subject, user_type, message } }` | `{ data: { id, ... } }` | F04 |

## The parts that bite

- **CORS & Headers**: Every request to `https://api.frzeapp.in` must send `x-ce-app: vibe_os` (handled automatically by a typed API client + Next.js route proxy `/api/frze/*` for client-side submissions so browser CORS never blocks local dev or previews).
- **Pre-auth Privacy & App Store Compliance**: Use real topics from `/api/host-topics` and public leaderboard hosts from `/api/expert-leaderboard` without exposing private phone numbers or prohibited dating/adult tags.
- **Image Origins**: Host `profilePic` paths returned by `/api/expert-leaderboard` are relative (`/uploads/...`); normalize them with `https://api.frzeapp.in` prefix and graceful initials avatar fallback if an upload fails to load.
- **CMS Token Safety**: Keep `STRAPI_API_TOKEN` strictly server-side (`process.env.STRAPI_API_TOKEN`, never `NEXT_PUBLIC_`).

## Build order

1. **Shell + Design System**: App Router layout, responsive Navbar + mobile drawer, Footer, floating store CTA, `tokens.css`, primitive UI components (`Button`, `Badge`, `Card`, `Accordion`, `Modal`).
2. **Vertical Slice (Home + Live Backend Data)**: `/` Home page pulling live hosts (`/api/expert-leaderboard`) and live topics (`/api/host-topics`) + Contact form wired to `POST /api/customer-enquiries`.
3. **Must-Have Marketing & Legal Pages**:
   - S02 `/how-it-works`
   - S03 `/join-us` (Become a FRZE Host)
   - S04 `/safety`
   - S05 `/help` (Interactive FAQ Accordions)
   - S08 `/contact` (Enquiry Form)
   - S12 `/privacy`, `/terms`, `/refund-policy`, `/community-guidelines`, `/delete-account`
4. **Should-Have Pages**:
   - S07 `/download` (Phone store preview + Play/App Store links + `frze://` deep link)
   - S06 `/blog` & `/blog/[slug]`
5. **Verification**: Typecheck, production build, `contrast.py` AA check, `sweep.py` brand check, browser walkthrough at 1440px and 390px.
