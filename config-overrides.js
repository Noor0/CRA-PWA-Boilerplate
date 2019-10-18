/* eslint-disable import/no-extraneous-dependencies */
const {
  override,
  addBabelPlugins,
  addWebpackPlugin,
} = require('customize-cra');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = function overrideConfigurations(webpack, ...args) {
  webpack.plugins.pop();
  const overridenConf = override(
    ...addBabelPlugins(
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
    ),
    addWebpackPlugin(
      new InjectManifest({
        swSrc: './src/sw.js',
        globDirectory: webpack.output.path,
        globPatterns: ['*.{png,ico}'],
      }),
    ),
  )(webpack, ...args);

  return overridenConf;
};
