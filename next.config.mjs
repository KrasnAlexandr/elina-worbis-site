import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // standalone для прода и undefined для дева
  output: process.env.BUILD_OUTPUT,
  // скрытие платформы в хэдере
  poweredByHeader: false,
  images: {
    domains: ['images.vexels.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
