/**
 * @type {import('next').NextConfig}
 */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const path = require('path');
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const rootPath = __dirname;
  const nextConfig = {
    env: {
      customKey: 'my-value',
    },
    async rewrites() {
      return [
        // client-side routing, a <Link href="/about">
        {
          source: '/about',
          destination: '/',
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/login',
          destination: '/login/login',
          permanent: true,
        },
      ];
    },
    webpack(config, options) {
      config.resolve = {
        alias: {
          '@components': path.join(rootPath, 'src', 'components'),
          '@layouts': path.join(rootPath, 'src', 'layouts'),
        },
        ...config.resolve,
      };

      // config.resolve.alias['@src'] = path.join(__dirname, 'src')
      // config.resolve.alias['@components'] = path.join(__dirname, 'src', 'components')
      // config.resolve.alias['@interface'] = path.join(__dirname, 'src', '@types/interface.ts')
      // config.resolve.extensions = ['js', 'ts', 'tsx']
      return config;
    },
  };
  return nextConfig;
};
// module.exports = nextConfig
