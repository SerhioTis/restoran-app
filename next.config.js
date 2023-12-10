/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs-s2p.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
