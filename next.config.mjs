/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/f/286489/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://a.storyblok.com/:path*', // Proxy to Storyblok
      },
    ];
  },

  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY || '',
    STORYBLOK_VERSION: process.env.STORYBLOK_VERSION || 'published',
  },
};

export default nextConfig;
