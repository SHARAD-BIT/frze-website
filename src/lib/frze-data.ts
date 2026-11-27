export const FRZE_CONFIG = {
  brandName: "FRZE",
  legalEntity: "FRZE Technologies",
  domain: "frzeapp.in",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://frzeapp.in",
  apiUrl: "https://api.frzeapp.in",
  packageId: "com.frze.app",
  shareScheme: "frze://",
  supportEmail: "support@frzeapp.in",
  grievanceEmail: "singhsharad095@gmail.com",
  playStoreUrl:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    "https://play.google.com/store/apps/details?id=com.frze.app",
  location: "New Delhi, India",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/join-us", label: "Become a Host" },
  { href: "/safety", label: "Safety" },
  { href: "/help", label: "Help / FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Download" },
];

export const CALLER_TESTIMONIALS = [
  {
    id: "aarav",
    name: "Aarav M.",
    city: "Bengaluru",
    tag: "Audio Call",
    quote:
      "I used to overthink late at night with nobody to talk things through. On FRZE I connected with a verified host in 30 seconds and felt genuinely heard—zero awkwardness.",
  },
  {
    id: "ria",
    name: "Ria S.",
    city: "Mumbai",
    tag: "Relationship Advice",
    quote:
      "What I love most is how transparent the coins and ratings are. You choose the topic, preview who is online, and talk privately without sharing your number.",
  },
  {
    id: "kabir",
    name: "Kabir T.",
    city: "Delhi NCR",
    tag: "Video & Chat",
    quote:
      "Much better than random chat apps full of bots. Real verified hosts, clean audio quality, and instant block controls if you ever want to switch.",
  },
  {
    id: "meera",
    name: "Meera K.",
    city: "Pune",
    tag: "Daily Check-in",
    quote:
      "Sometimes you just want an honest conversation in Hindi or English with someone who actually listens. FRZE became my go-to space after work.",
  },
];

export const HOST_TESTIMONIALS = [
  {
    id: "ananya",
    name: "Ananya V.",
    city: "Jaipur",
    tag: "Verified Audio & Video Host",
    quote:
      "FRZE Host Hub lets me toggle online whenever I am free. Per-minute coin tracking is crystal clear, and safety moderation actually has our back.",
  },
  {
    id: "rohan",
    name: "Rohan D.",
    city: "Hyderabad",
    tag: "Top Rated Listener",
    quote:
      "I started hosting in the evenings for two hours a day. Having an audio intro and topic tags brings callers who genuinely want thoughtful conversations.",
  },
  {
    id: "simran",
    name: "Simran P.",
    city: "Chandigarh",
    tag: "FRZE Host",
    quote:
      "Because payments and calls stay completely inside FRZE with one-tap blocking, I never have to share personal contact details to earn safely.",
  },
];

export interface FaqCategory {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "privacy",
    title: "Privacy & Confidentiality",
    items: [
      {
        q: "Are my audio or video calls recorded or stored on FRZE?",
        a: "No. Real-time audio and video streams are relayed securely through encrypted SRTP/DTLS channels via Agora.io and are never recorded or archived by FRZE.",
      },
      {
        q: "Can hosts or other users see my mobile phone number?",
        a: "Never. Your phone number is used only for secure OTP login and account protection. Inside FRZE, callers and hosts connect via display names and verified handles.",
      },
      {
        q: "Who can register and use FRZE?",
        a: "FRZE is strictly restricted to adults aged 18 and older. Date-of-birth verification and community moderation enforce this policy across Android and web.",
      },
      {
        q: "How can I permanently delete my FRZE account and data?",
        a: "You can delete your account instantly inside the app under Profile > Settings > Account Settings > Delete Account, or request web deletion at /delete-account.",
      },
    ],
  },
  {
    id: "verification",
    title: "Account & Host Verification",
    items: [
      {
        q: "How does FRZE verify hosts before they go live?",
        a: "Prospective hosts complete OTP verification, submit profile details, select their conversation topics and languages, and pass identity and profile review before appearing in discovery.",
      },
      {
        q: "What login methods does FRZE support?",
        a: "FRZE supports mobile number OTP login and Google Sign-In, backed by session token rotation across devices.",
      },
      {
        q: "Why do I see topic tags like Breakup & Patch-up or First Date?",
        a: "FRZE dynamically lists the real conversation topics approved hosts actively offer on the platform so callers immediately find someone suited to what is on their mind.",
      },
    ],
  },
  {
    id: "safety",
    title: "Blocking, Reporting & User Safety",
    items: [
      {
        q: "How do I block or report someone during or after a call?",
        a: "Tap the Block or Report icon directly on the active call screen or profile page. Blocking immediately ends the call and prevents any future contact.",
      },
      {
        q: "How quickly does FRZE review safety reports?",
        a: "Our moderation team reviews flagged reports within a strict 24-hour SLA. Accounts violating our zero-tolerance guidelines face immediate suspension and device-level bans.",
      },
      {
        q: "Can I share my UPI ID, WhatsApp, or Instagram with a host?",
        a: "No. Sharing personal phone numbers, external messaging handles, bank/UPI details, or sending money outside FRZE is strictly prohibited for your own safety.",
      },
    ],
  },
  {
    id: "billing",
    title: "Coins, Payments & Host Payouts",
    items: [
      {
        q: "How does billing work for calls and chats on FRZE?",
        a: "Callers recharge virtual Coins in their FRZE Wallet and are billed transparently per minute based on the host's rate and call mode (audio, video, or chat).",
      },
      {
        q: "Which payment methods are supported?",
        a: "Android and web wallet recharges are processed securely through Razorpay (UPI, cards, netbanking) or Google Play Billing.",
      },
      {
        q: "How do FRZE Hosts track earnings and withdraw payouts?",
        a: "Approved hosts view live per-minute call earnings inside the FRZE Host Hub and receive verified bank payouts subject to identity/KYC verification and applicable tax rules.",
      },
      {
        q: "What is the refund policy for unused Coin packs?",
        a: "Coin purchases are generally final and non-refundable once credited, except where required by law or handled through Google Play Store refund policies.",
      },
    ],
  },
];
