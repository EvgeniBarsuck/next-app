const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/next-app': '',
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
