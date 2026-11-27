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
};

export default nextConfig;
