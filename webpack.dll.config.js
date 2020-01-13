const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    vendor: [
      'vue', 'vue-router', 'vuex'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]' // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist/dll')]
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist/dll', '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}
