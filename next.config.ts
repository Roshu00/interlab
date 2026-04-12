import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./", // 🔥 OVO JE KLJUČNO
};

export default nextConfig;