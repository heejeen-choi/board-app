/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  basePath: `/${process.env.BASE_PATH}`
};

module.exports = nextConfig;
