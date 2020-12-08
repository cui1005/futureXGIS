const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumBuild = './node_modules/cesium/Build/Cesium'
function resolve(dir) {
  return path.join(__dirname, dir)
}

const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = [
  'js',
  'css',
  'less',
  'json',
  'txt',
  'html',
  'ico',
  'svg'
]
module.exports = {
  publicPath: '/future',
  assetsDir: 'future/static',

  // 不需要生产环境的 source map
  productionSourceMap: false,
  chainWebpack: config => {
    // 修复HMR 热更新
    config.resolve.symlinks(true)

    config.plugin('html').tap(args => {
      args[0].title = 'FutureXGIS'
      return args
    })
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  configureWebpack: config => {
    let plugins = []
    if (process.env.NODE_ENV === 'production') {
      plugins = [
        new CompressionPlugin({
          filename: '[file].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8,
          deleteOriginalAssets: false // 不删除源文件
        }),
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('static')
        }),
        new CopyWebpackPlugin([
          { from: path.join(cesiumBuild, 'Workers'), to: 'static/Workers' },
          { from: path.join(cesiumBuild, 'Assets'), to: 'static/Assets' },
          {
            from: path.join(cesiumBuild, 'ThirdParty'),
            to: 'static/ThirdParty'
          },
          { from: path.join(cesiumBuild, 'Widgets'), to: 'static/Widgets' }
        ])
      ]
    } else {
      plugins = [
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('')
        }),
        new CopyWebpackPlugin([
          { from: path.join(cesiumBuild, 'Workers'), to: 'Workers' },
          { from: path.join(cesiumBuild, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumBuild, 'ThirdParty'), to: 'ThirdParty' },
          { from: path.join(cesiumBuild, 'Widgets'), to: 'Widgets' }
        ])
      ]
    }
    // 压缩js文件配置
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'] // 移除console
          }
        }
      })
    ]
    return {
      module: {
        unknownContextCritical: false,
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            include: path.resolve(__dirname, './node_modules/cesium/Source'),
            sideEffects: false,
            use: [
              {
                loader: 'strip-pragma-loader',
                options: {
                  pragmas: {
                    debug: false
                  }
                }
              }
            ]
          }
        ]
      },
      performance: {
        hints: false
      },
      optimization: {
        usedExports: true,
        splitChunks: {
          maxInitialRequests: Infinity,
          minSize: 0,
          maxSize: 250000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: 'all',
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1]
                return `npm.${packageName.replace('@', '')}`
              }
            },
            commons: {
              name: 'Cesium',
              test: /[\\/]node_modules[\\/]cesium/,
              priority: 10,
              chunks: 'all'
            }
          }
        }
      },
      output: {
        sourcePrefix: ' '
      },
      amd: {
        toUrlUndefined: true
      },
      resolve: {
        alias: {
          vue$: 'vue/dist/vue.esm.js',
          '@': path.resolve('src')
        }
      },
      node: {
        fs: 'empty',
        Buffer: false,
        http: 'empty',
        https: 'empty',
        zlib: 'empty'
      },
      plugins: plugins
    }
  },
  // 开发环境下的服务端配置
  devServer: {
    historyApiFallback: {
      index: '/index.html'
    },
    host: '0.0.0.0',
    port: '9004',
    proxy: {
      '/api': {
        target: 'http://dwgis.dworld.net.cn',
        ws: false
      }
    }
  }
}
