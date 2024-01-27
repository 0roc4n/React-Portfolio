/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // Changed from "export" to "standalone"
};

module.exports = nextConfig;