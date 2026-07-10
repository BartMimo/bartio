import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: "/voorbeeldkamphorst",
        destination: "https://kamphorst-hovenier.vercel.app/voorbeeldkamphorst",
      },
      {
        source: "/voorbeeldkamphorst/:path*",
        destination: "https://kamphorst-hovenier.vercel.app/voorbeeldkamphorst/:path*",
      },
    ];
  },
};

export default nextConfig;
