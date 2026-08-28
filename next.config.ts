import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "export",
  images: {
    unoptimized: true,
  },
  env:{
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000"
  }
};

export default nextConfig;