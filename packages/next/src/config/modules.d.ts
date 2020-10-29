declare module 'next-pwa' {
  type WithPWAOptions = import('@azimutlabs/next-config').NextConfig & {
    readonly pwa: {
      readonly dest?: string;
      readonly disable?: boolean;
      readonly register?: boolean;
      readonly scope?: string;
      readonly sw?: string;
      readonly subdomainPrefix?: string;
      readonly publicExcludes?: readonly string[];
      readonly runtimeCaching?: ReadonlyArray<{
        readonly urlPattern: RegExp;
        readonly handler: string;
        readonly options: {
          readonly cacheName: string;
          readonly expiration: {
            readonly maxEntries: number;
            readonly maxAgeSeconds: number;
          };
        };
      }>;
    };
  };

  export default function withPWA(nextConfig: WithPWAOptions): WithPWAOptions;
}

declare module '@next/bundle-analyzer' {
  type NextConfig = import('@azimutlabs/next-config').NextConfig;

  export default function withBundleAnalyzer({
    enabled: boolean,
  }): (nextConfig: NextConfig) => NextConfig;
}
