import type { NextConfig } from "next";

const repoName = "interlab";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    loader: "akamai",
    path: `/${repoName}/`,
    unoptimized: true,
  },
};

export default nextConfig;
