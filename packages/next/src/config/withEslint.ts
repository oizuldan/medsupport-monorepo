import ESLintPlugin from 'eslint-webpack-plugin';

import { withWebpack } from './services/withWebpack';
import { NextConfig } from './types/NextConfig';

export type WithEslintConfig = NextConfig & {
  readonly disableLintForProd?: boolean;
  readonly eslintOptions?: Record<string, unknown>;
};

export function withEslint(nextConfig: WithEslintConfig): WithEslintConfig {
  return {
    ...nextConfig,
    webpack: (webpackOptions, nextOptions) => {
      if (!nextConfig.disableLintForProd || nextOptions.dev) {
        const { eslintOptions = {} } = nextConfig;
        webpackOptions?.plugins?.push(new ESLintPlugin(eslintOptions));
      } else {
        // eslint-disable-next-line no-console
        console.log(`> Disabling linting process for production build phase`);
      }
      return withWebpack(nextConfig, webpackOptions, nextOptions);
    },
  };
}
