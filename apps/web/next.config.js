module.exports = {
  ...require('@medsupportkz/next').nextConfig(),
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://drive.google.com/:path*',
      },
    ];
  },
};
