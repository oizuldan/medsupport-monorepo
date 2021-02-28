module.exports = {
  ...require('@medsupportkz/next').nextConfig(),
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://drive.google.com/:path*',
      },
    ];
  },
};
