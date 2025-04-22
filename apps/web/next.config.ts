import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["upload.wikimedia.org"],
    loader: "imgix",
    path: "",
    unoptimized: true,
  },
};

export default nextConfig;
