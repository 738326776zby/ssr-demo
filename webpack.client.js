const Path = require('path')
const baseConfig = require('./webpack.base.js')
module.exports = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: Path.resolve(__dirname, 'public')
  },
  ...baseConfig
}
