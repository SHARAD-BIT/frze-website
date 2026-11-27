import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.frzeapp.in",
      },
      {
        protocol: "https",
        hostname: "media.frzeapp.in",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/returns-refund-policy", destination: "/refund-policy", permanent: true },
      { source: "/account-deletion", destination: "/delete-account", permanent: true },
    ];
  },
};

export default nextConfig;
