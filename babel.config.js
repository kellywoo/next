module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        targets: '> 0.25%, not dead',
        corejs: { version: 3, proposals: true },
      },
    ],
    '@babel/preset-typescript',
    //npm install --save-dev @babel/preset-react
    '@babel/preset-react',
    'next/babel',
  ],
  plugins: [
    // npm install --save-dev @babel/plugin-proposal-decorators
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // npm install --save-dev @babel/plugin-proposal-class-properties
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    // npm install --save-dev @babel/plugin-proposal-private-property-in-object
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    // npm install @babel/plugin-proposal-private-methods --save-dev
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    // npm install --save-dev @babel/plugin-transform-classes
    '@babel/plugin-transform-classes',
    ['babel-plugin-styled-components', { ssr: true, displayName: true, preprocess: false }],
    // npm install --save-dev @babel/plugin-transform-runtime
    // npm install --save @babel/runtime
    '@babel/plugin-transform-runtime',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
          '@babel/preset-react',
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-transform-classes',
        [
          'babel-plugin-styled-components',
          {
            fileName: false,
            ssr: true,
          },
        ],
      ],
    },
  },
};
