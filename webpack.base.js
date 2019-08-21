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
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [
                require('autoprefixer')({
                  broswers: ['last 5 versions']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [
                require('autoprefixer')({
                  broswers: ['last 5 versions']
                })
              ]
            }
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              modules: false,
              javascriptEnabled: true, //启动JS
              modifyVars: { '@primary-color': '#f9c700' } //修改UI库里面的less变量
            }
          }
        ]
      }
    ]
  }
}
