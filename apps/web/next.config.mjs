/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // SWC-based Emotion transform (replaces the old @emotion/babel-preset-css-prop).
  compiler: {
    emotion: true,
  },

  // Re-export runtime config that the client bundle reads via `process.env.*`.
  // Next only auto-exposes NEXT_PUBLIC_* to the browser, so these are inlined
  // here to preserve the previous custom-server/webpack behaviour.
  env: {
    BASE_URL: process.env.BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    CMS_GRAPHQL_API_URL: process.env.CMS_GRAPHQL_API_URL,
    GOOGLE_COUNTER_ID: process.env.GOOGLE_COUNTER_ID,
    YM_COUNTER_ID: process.env.YM_COUNTER_ID,
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'medsupport.kz' },
      { protocol: 'https', hostname: 'drive.google.com' },
    ],
  },

  // TODO(codegen): GraphQL response types are not generated in CI yet, so keep
  // type/lint errors non-blocking for the production build. `yarn typecheck`
  // and `yarn lint` still run them explicitly.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // The old Express server proxied these hosts; preserve them as Next rewrites.
  async rewrites() {
    return [
      { source: '/proxy/:path*', destination: 'https://medsupport.kz/api/:path*' },
      { source: '/proxy2/:path*', destination: 'https://drive.google.com/:path*' },
      { source: '/proxy3/:path*', destination: 'https://medsupport.kz/cms/:path*' },
      { source: '/docs/:path*', destination: 'https://drive.google.com/:path*' },
    ];
  },
};

export default nextConfig;
