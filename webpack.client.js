const Path = require('path')
const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: Path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        exclude: /static/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[path]-[local]-[hash:5]',
              },
            }
          }
        ]
      },
      {
        test: /\.css?$/,
        include: /static/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[local]',
              },
            }
          }
        ]
      }
    ]
  }
}
module.exports = merge(baseConfig, clientConfig)
