<<<<<<< HEAD
const { merge } = require('webpack-merge');
=======
const {merge} = require('webpack-merge');
>>>>>>> d64f5751e8d29782f729e66ddbbbaf3b66174ca3
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
<<<<<<< HEAD
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
=======
    mode:'production',
    output:{
        filename:'[name].[contenthash].js'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)
>>>>>>> d64f5751e8d29782f729e66ddbbbaf3b66174ca3
