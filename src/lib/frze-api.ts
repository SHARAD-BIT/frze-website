export interface HostTopic {
  label: string;
  hosts: number;
}

export interface LeaderboardHost {
  rank: number;
  userDocumentId: string;
  name: string;
  handler: string;
  profilePic: string | null;
  user_status: string;
  totalCalls: number;
  totalMinutes: number;
  totalVideoCalls: number;
  averageRating: number;
  ratingCount: number;
}

export interface FrzeBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  readTime: string;
  bannerUrl: string | null;
  author: string;
}

const API_BASE = (process.env.FRZE_API_URL || "https://api.frzeapp.in").replace(/\/+$/, "");
const APP_KEY = process.env.FRZE_APP_KEY || "vibe_os";

export function resolveMediaUrl(pathOrUrl: string | null | undefined): string | null {
  if (!pathOrUrl) return null;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${API_BASE}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

async function fetchFrzeJson<T>(path: string, revalidateSeconds = 120): Promise<T | null> {
  try {
    const fetchOpts: RequestInit & { next?: { revalidate: number } } = {
      headers: {
        "x-ce-app": APP_KEY,
        Accept: "application/json",
      },
    };
    if (revalidateSeconds <= 0) {
      fetchOpts.cache = "no-store";
    } else {
      fetchOpts.next = { revalidate: revalidateSeconds };
    }
    const res = await fetch(`${API_BASE}${path}`, fetchOpts);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

const SAFE_FALLBACK_TOPICS: HostTopic[] = [
  { label: "Communication & Confidence", hosts: 3 },
  { label: "Stress & Overthinking", hosts: 3 },
  { label: "Career & Clarity", hosts: 3 },
  { label: "Friendship & Social", hosts: 3 },
  { label: "Mindset & Motivation", hosts: 2 },
  { label: "Daily Check-in", hosts: 2 },
  { label: "Life Decisions", hosts: 1 },
  { label: "Creative & Hobbies", hosts: 1 },
];

// Exclude dating, romance, flirting, or compensated-companionship tags from public web discovery
// to stay compliant with Google Play Inappropriate Content & Store Guideline 1.1.14.
const UNSAFE_WEB_TOPIC =
  /dating|romance|flirt|crush|first\s*date|attract|late\s*night|secret|breakup|patch-up|marriage|ghosting|boyfriend|girlfriend|horny|love/i;

export async function getHostTopics(): Promise<HostTopic[]> {
  const res = await fetchFrzeJson<{ data?: HostTopic[] }>("/api/host-topics", 300);
  if (res?.data && res.data.length > 0) {
    const safe = res.data.filter((t) => !UNSAFE_WEB_TOPIC.test(t.label));
    if (safe.length >= 4) {
      return safe;
    }
  }
  return SAFE_FALLBACK_TOPICS;
}

interface StrapiExpertImageEntry {
  priority?: number | null;
  isprimary?: boolean | null;
  status_enum?: string | null;
  image?: {
    url?: string;
    formats?: {
      medium?: { url?: string };
      large?: { url?: string };
      small?: { url?: string };
    };
  } | null;
}

interface StrapiExpertRow {
  handler?: string;
  user?: {
    profilePic?: { url?: string } | null;
  } | null;
  host_profile_images?: StrapiExpertImageEntry[] | null;
}

function pickBestExpertImage(expert: StrapiExpertRow): string | null {
  const userPic = expert.user?.profilePic?.url;
  if (userPic) return resolveMediaUrl(userPic);

  const imgs = (expert.host_profile_images || []).filter(
    (entry) => entry.image?.url && entry.status_enum !== "rejected"
  );
  if (imgs.length === 0) return null;

  imgs.sort((a, b) => {
    const aApproved = a.status_enum === "approved" ? 1 : 0;
    const bApproved = b.status_enum === "approved" ? 1 : 0;
    if (aApproved !== bApproved) return bApproved - aApproved;

    const aPrimary = a.isprimary ? 1 : 0;
    const bPrimary = b.isprimary ? 1 : 0;
    if (aPrimary !== bPrimary) return bPrimary - aPrimary;

    return (a.priority ?? 999) - (b.priority ?? 999);
  });

  const best = imgs[0].image;
  const chosenUrl =
    best?.formats?.medium?.url || best?.formats?.large?.url || best?.url;
  return resolveMediaUrl(chosenUrl);
}

export async function getLeaderboardHosts(): Promise<LeaderboardHost[]> {
  const [res, expertsRes] = await Promise.all([
    fetchFrzeJson<{ leaderboard?: LeaderboardHost[] }>("/api/expert-leaderboard", 0),
    fetchFrzeJson<{ data?: StrapiExpertRow[] }>(
      "/api/expert-profiles?populate[user][populate][profilePic][fields][0]=url&populate[host_profile_images][populate][image]=true&pagination[pageSize]=50",
      0
    ),
  ]);

  const fallbackByHandler = new Map<string, string>();
  for (const exp of expertsRes?.data || []) {
    if (!exp.handler) continue;
    const imgUrl = pickBestExpertImage(exp);
    if (imgUrl) {
      fallbackByHandler.set(exp.handler.toLowerCase(), imgUrl);
    }
  }

  if (res?.leaderboard && res.leaderboard.length > 0) {
    return res.leaderboard.map((h) => ({
      ...h,
      profilePic:
        resolveMediaUrl(h.profilePic) ||
        (h.handler ? fallbackByHandler.get(h.handler.toLowerCase()) || null : null),
    }));
  }
  return [];
}

export async function getBackendHealth(): Promise<{ status: string; database: string } | null> {
  return fetchFrzeJson<{ status: string; database: string }>("/api/health", 30);
}

const FALLBACK_BLOGS: FrzeBlogPost[] = [
  {
    id: "frze-1",
    slug: "why-real-voice-conversations-beat-endless-texting",
    title: "Why a 5-Minute Voice Call Beats 50 Text Messages",
    excerpt:
      "Text threads get misread and leave you waiting on typing indicators. Hearing a real human voice creates instant clarity and emotional relief.",
    content: `Text messaging is fast for logistics, yet surprisingly exhausting when you actually want to feel heard. Without tone, pauses, and warmth, simple misunderstandings spiral into hours of overthinking.\n\nOn FRZE, every conversation happens with verified real hosts—either through crisp 1-on-1 audio calls, face-to-face video calls, or real-time chat when you prefer typing first.\n\nWhether you are sorting out a tough career decision, preparing for an important conversation, or simply needing a calm, judgment-free sounding board at the end of a long day, talking out loud helps you find clarity in minutes.\n\nBefore every call, you stay in full control: check a host's verified profile, browse the topics they help with, and enjoy per-minute coin transparency with zero hidden subscriptions.`,
    publishedAt: "2026-11-18",
    category: "VOICE MATTERS",
    readTime: "3 min read",
    bannerUrl: null,
    author: "FRZE Editorial",
  },
  {
    id: "frze-2",
    slug: "how-frze-keeps-every-1-on-1-call-private-and-safe",
    title: "How FRZE Protects Your Privacy on Every Audio & Video Call",
    excerpt:
      "From unrecorded real-time Agora streams to one-tap blocking and 24-hour moderation SLAs, here is how safety is built into every session.",
    content: `Privacy is not an add-on on FRZE—it is the foundation of our platform. Real-time audio and video streams are relayed securely using SRTP/DTLS encryption and are never recorded or archived by FRZE.\n\nEvery host undergoes identity verification before going live, and every user can access one-tap Block and Report controls directly from an active call screen or host profile.\n\nTo keep both callers and hosts safe, we strictly prohibit sharing personal phone numbers, external social handles, or off-platform payments. All coin recharges run through certified Razorpay or Google Play Billing channels.`,
    publishedAt: "2026-11-14",
    category: "TRUST & SAFETY",
    readTime: "4 min read",
    bannerUrl: null,
    author: "FRZE Safety Team",
  },
  {
    id: "frze-3",
    slug: "getting-started-as-a-verified-host-on-frze",
    title: "Becoming a Verified Host on FRZE: What Makes Great Conversations",
    excerpt:
      "Interested in earning on your own schedule by listening and sharing thoughtful conversation? Learn how FRZE Host Hub onboarding works.",
    content: `FRZE Hosts come from across India and bring empathy, active listening, and real-world perspective across topics like communication, confidence, career clarity, and everyday stress.\n\nInside the FRZE Host Hub, approved hosts set their own availability, manage audio and video call preferences, record a short voice intro, and track per-minute coin earnings and bank payouts transparently.\n\nGreat hosts focus on making callers feel respected, never pressured, and always safe within FRZE's 18+ Community Guidelines—with strict bans on dating solicitation or off-platform contact.`,
    publishedAt: "2026-11-10",
    category: "FRZE HOST HUB",
    readTime: "3 min read",
    bannerUrl: null,
    author: "FRZE Community",
  },
];

interface StrapiBlogRaw {
  id: number | string;
  documentId?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  blog_published_date?: string;
  createdAt?: string;
  BannerImg?: { url?: string } | null;
}

export async function getBlogPosts(): Promise<{ posts: FrzeBlogPost[]; source: "strapi" | "editorial" }> {
  const token = process.env.STRAPI_API_TOKEN;
  if (token) {
    try {
      const res = await fetch(
        `${API_BASE}/api/blogs?populate=BannerImg&sort=blog_published_date:desc&pagination[pageSize]=12`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-ce-app": APP_KEY,
            Accept: "application/json",
          },
          next: { revalidate: 120 },
        }
      );
      if (res.ok) {
        const json = (await res.json()) as { data?: StrapiBlogRaw[] };
        if (json.data && json.data.length > 0) {
          return {
            source: "strapi",
            posts: json.data.map((item) => ({
              id: String(item.documentId || item.id),
              slug: item.slug || String(item.id),
              title: item.title || "FRZE Update",
              excerpt: item.excerpt || "Read the latest story from the FRZE community.",
              content: item.content || item.excerpt || "",
              publishedAt: item.blog_published_date || item.createdAt?.slice(0, 10) || "2026-11-14",
              category: "FRZE JOURNAL",
              readTime: "4 min read",
              bannerUrl: resolveMediaUrl(item.BannerImg?.url),
              author: "FRZE Team",
            })),
          };
        }
      }
    } catch {
      // Fall back to curated FRZE editorial posts
    }
  }
  return { posts: FALLBACK_BLOGS, source: "editorial" };
}

export async function getBlogPostBySlug(slug: string): Promise<FrzeBlogPost | null> {
  const { posts } = await getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
