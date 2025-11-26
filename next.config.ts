import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <--- CRITICAL for GitHub Pages
  images: {
    unoptimized: true, // <--- CRITICAL: GitHub Pages cannot optimize images on the fly
  },
};

export default nextConfig;