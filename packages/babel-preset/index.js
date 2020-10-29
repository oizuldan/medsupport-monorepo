const path = require('path');
const fs = require('fs');

/**
 * @param api
 * @param [options={}]
 * @param {boolean} [options.react] - enables `@babel/preset-react`.
 * @param {boolean} [options.emotion] - enables `@emotion/babel-preset-css-prop`.
 * @param {Object|boolean} [options.moduleResolver] - enables `babel-plugin-module-resolver`.
 * @param {string} [options.moduleResolver.root=process.env.NODE_PATH] - base url.
 */
module.exports = (api, options = {}) => {
  const env = api.env();

  const isDev = env === 'development';
  const isProd = env === 'production';
  const isTest = env === 'test';

  const { react, emotion, moduleResolver } = options;
  const { root } = api.loadOptionsSync();
  const relativeRoot = (moduleResolver && moduleResolver.root) || process.env.NODE_PATH;
  const enableModuleResolver = moduleResolver && relativeRoot;

  if (!relativeRoot) {
    // eslint-disable-next-line no-console
    console.error(
      `@medsupportkz/babel-preset: 'moduleResolver.root' or 'process.env.NODE_PATH' is empty, but required if 'moduleResolver' feature is enabled`,
    );
  }

  const moduleResolverAlias =
    enableModuleResolver &&
    fs.readdirSync(path.resolve(root, relativeRoot)).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: path.isAbsolute(relativeRoot) ? '' : './' + path.join(relativeRoot, cur),
      }),
      {},
    );

  return {
    presets: [
      isTest && [
        require('@babel/preset-env').default,
        {
          targets: {
            node: 'current',
          },
        },
      ],
      (isDev || isProd) && [
        require('@babel/preset-env').default,
        {
          // Don't transform modules to `commonjs`.
          // Required by webpack tree shaking feature.
          modules: false,
        },
      ],
      require('@babel/preset-typescript').default,
      react && [
        require('@babel/preset-react').default,
        {
          development: isDev || isTest,
        },
      ],
      emotion && require('@emotion/babel-preset-css-prop'),
    ].filter(Boolean),
    plugins: [
      enableModuleResolver && [
        require('babel-plugin-module-resolver').default,
        {
          root: [relativeRoot],
          alias: moduleResolverAlias,
        },
      ],
      require('@babel/plugin-proposal-export-namespace-from').default,
    ].filter(Boolean),
    // `ignore` doesn't work for presets, so we compile everything and tree shake the rest.
    // ignore: [
    //   // Ignore all test files ((*.)?test.ts(x)?) for production and development
    //   (isDev || isProd) && /^(.+?(?=\.))?(\.)?test\.tsx?$/,
    //   // Ignore all mock (*.mock.ts) and story (stories.ts(x)?) files for production.
    //   isProd && [/^.+?(?=\.)(\.)?mock\.ts$/, /^stories\.tsx?$/],
    // ]
    //   .flat()
    //   .filter(Boolean),
  };
};
