/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  experimental: {
    serverActions: true,
  },
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
};

module.exports = nextConfig;
