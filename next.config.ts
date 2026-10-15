/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xuanvex.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;