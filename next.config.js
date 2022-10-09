/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rainbow.mypinata.cloud"],
  },
};

module.exports = nextConfig;
