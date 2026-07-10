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
      {
        source: "/voorbeeldtomshoveniersprojecten",
        destination:
          "https://toms-hoveniersprojecten.vercel.app/voorbeeldtomshoveniersprojecten",
      },
      {
        source: "/voorbeeldtomshoveniersprojecten/:path*",
        destination:
          "https://toms-hoveniersprojecten.vercel.app/voorbeeldtomshoveniersprojecten/:path*",
      },
    ];
  },
};

export default nextConfig;
