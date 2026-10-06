import type { NextConfig } from "next";

// Opsional: set NEXT_PUBLIC_BASE_PATH saat deploy ke GitHub Pages,
// contoh: NEXT_PUBLIC_BASE_PATH=/nama-repo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static export: hasil build (folder `out/`) bisa dideploy
  // ke Vercel maupun GitHub Pages tanpa konfigurasi tambahan.
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    // Wajib untuk static export
    unoptimized: true,
  },
  // Sembunyikan indikator dev Next.js (logo N di pojok kiri bawah)
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
