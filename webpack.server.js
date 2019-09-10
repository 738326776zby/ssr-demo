const Path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const serverConfig = {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 不将node_modules 下的代码打包到文件中
  module: {
    rules: [
      {
        test: /\.css?$/,
        exclude: /static/,
        use: [
          'isomorphic-style-loader',
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
          'isomorphic-style-loader',
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
module.exports = merge(baseConfig, serverConfig)
