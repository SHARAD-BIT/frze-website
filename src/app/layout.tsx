import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingStoreButton } from "@/components/layout/FloatingStoreButton";
import { FRZE_CONFIG } from "@/lib/frze-data";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "FRZE — Talk. Connect. Vibe. | 1-on-1 Audio & Video Calls",
    template: "%s | FRZE",
  },
  description:
    "Connect 1-on-1 with verified FRZE hosts via private audio calls, video calls, and chat. Transparent wallet coins, 18+ verified community, and 24-hour moderation safety.",
  metadataBase: new URL(FRZE_CONFIG.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={plusJakarta.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingStoreButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
