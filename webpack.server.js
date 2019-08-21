const Path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')
module.exports = {
  target: 'node',
  entry: './src/server/index.js',
  mode:'development',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build')
  },
  externals:[nodeExternals()], // 不将node_modules 下的代码打包到文件中
  ...baseConfig
}
