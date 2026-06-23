import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-build",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
