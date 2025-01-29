import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  output: "export",
  assetPrefix: isProd ? "/REPO_NAME/" : "",
  images: { unoptimized: true },
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bytegrad.com",
      },
    ],
  },
};

export default nextConfig;
