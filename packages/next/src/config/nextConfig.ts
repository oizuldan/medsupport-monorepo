import { compose, withLodash } from '@azimutlabs/next-config';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withPWA from 'next-pwa';

import { NextConfig } from './types/NextConfig';
import { withEslint } from './withEslint';

const publicURL = process.env.PUBLIC_URL;
const enableAnalyzer = process.env.ANALYZE === 'true';
const isProd = process.env.NODE_ENV === 'production';

export const nextConfig = ({ redirects, ...rest }: NextConfig = {}): NextConfig =>
  compose(withEslint, withLodash, withBundleAnalyzer({ enabled: enableAnalyzer }), (config) =>
    isProd ? withPWA(config) : config,
  )({
    ...rest,
    poweredByHeader: false,
    assetPrefix: publicURL,
    disableLintForProd: true,
    pwa: {
      dest: 'public',
      scope: publicURL,
    },
    redirects: async () => redirects || [],
  });
