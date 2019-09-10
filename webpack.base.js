var Path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, './src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env', // 打包后兼容主流浏览器的最后两个版本
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ],
          // plugins: [['import', { libraryName: 'antd', style: true }]],
          cacheDirectory: true
        }
      }
    ]
  }
}
