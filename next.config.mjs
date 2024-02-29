const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/next-app': '',
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    path: isProd ? '/next-app': '',
  }
};

export default nextConfig;
