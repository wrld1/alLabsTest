/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  experimental: {
    largePageDataBytes: 128 * 10,
  },
};

module.exports = {
  images: {
    domains: ["picsum.photos", "maps.googleapis.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
