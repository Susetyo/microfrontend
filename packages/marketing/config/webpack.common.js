module.exports = {
<<<<<<< HEAD
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
=======
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}
>>>>>>> d64f5751e8d29782f729e66ddbbbaf3b66174ca3
