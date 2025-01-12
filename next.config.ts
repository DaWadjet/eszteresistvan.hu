import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

function throwError(envVar: any) {
  throw `Abort: You need to define ${envVar} in the .env file.`;
}

if (!process.env.RESEND_API_KEY) throwError("RESEND_API_KEY");
