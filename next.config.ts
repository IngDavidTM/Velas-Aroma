import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@/components", "@/data"],
  },
};

export default nextConfig;
