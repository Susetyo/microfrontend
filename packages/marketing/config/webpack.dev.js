const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
<<<<<<< HEAD
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
=======
const packageJson = require('../package.json')

const devConfig = {
  mode: 'development',
  output:{
    publicPath:'http://localhost:8081/'
  },
>>>>>>> d64f5751e8d29782f729e66ddbbbaf3b66174ca3
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
<<<<<<< HEAD
      shared: packageJson.dependencies,
=======
      shared:packageJson.dependencies
>>>>>>> d64f5751e8d29782f729e66ddbbbaf3b66174ca3
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
