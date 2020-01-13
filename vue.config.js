'use strict'
const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const InlineSourcePlugin = require('html-webpack-inline-source-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    host: '0.0.0.0',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    disableHostCheck: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  configureWebpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
  },
  chainWebpack(chainWebpack) {
    chainWebpack.plugins.delete('preload') // TODO: need test
    chainWebpack.plugins.delete('prefetch') // TODO: need test
    chainWebpack
      .plugin('ManifestPlugin')
      .use(ManifestPlugin)
      .end()
      .plugin('html')
      .tap(args => {
        args[0].inlineSource = 'runtime.+\\.js'
        return args
      })
      .end()
      .plugin('InlineSourcePlugin')
      .use(InlineSourcePlugin)
      .after('html')
      .end()
    chainWebpack
      .when(process.env.NODE_ENV === 'development',
        (config) => config
          .plugin('dll')
          .after('asset-html')
          .use(webpack.DllReferencePlugin, [{
            context: process.cwd(),
            manifest: require('./dist/dll/vendor-manifest.json')
          }])
          .end()
          .plugin('asset-html')
          .use(AddAssetHtmlPlugin, [{
            filepath: path.resolve(__dirname, './dist/dll/*.dll.js')
          }])
          .end()
      )
    chainWebpack.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    chainWebpack
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
    chainWebpack
      .optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: path.resolve(__dirname, 'src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
    chainWebpack.optimization.runtimeChunk('single')
  }
}
