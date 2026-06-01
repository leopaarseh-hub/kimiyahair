/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static export — works on Vercel & any CDN
  trailingSlash: true,
  images: { unoptimized: true },
};
module.exports = nextConfig;
