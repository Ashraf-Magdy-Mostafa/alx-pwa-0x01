import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: 'public'
})
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withPWA({
  ...nextConfig
})