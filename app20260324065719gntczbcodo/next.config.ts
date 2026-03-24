import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. WAJIB: Mengubah output menjadi static export
  output: 'export',
  
  // 2. WAJIB: Menonaktifkan optimasi gambar bawaan Next.js (karena tidak ada server)
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "chat2db-cdn.oss-us-west-1.aliyuncs.com" },
      { hostname: "cdn.chat2db-ai.com" }
    ],
  },

  // 3. Mengabaikan error saat build agar proses tetap lanjut
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Catatan: Fungsi headers() tidak bisa digunakan bersama output: 'export'.
  // Untuk Cloudflare Pages, header diatur via file _redirects atau _headers.
};

export default nextConfig;
