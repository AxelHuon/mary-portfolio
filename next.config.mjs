/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY || '',
    STORYBLOK_VERSION: process.env.STORYBLOK_VERSION || 'published',
  },
};

export default nextConfig;
