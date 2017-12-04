'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin');

const base = require('./webpack.base.config')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = merge(base, {
  target: 'node',
  devtool: '#source-map',
  entry: './views/entry/server.js',
  output: {
    path: resolve('../dist/projects/easy-mock_server'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: [
      /\.css$/,
      'config' // webpack.base.config.js 已设置 alias config
    ]
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'config/**/*',
      },
      {
        from: 'controllers/**/*',
      },
      {
        from: 'middlewares/**/*'
      },
      {
        from: 'models/**/*'
      },
      {
        from: 'proxy/**/*'
      },
      {
        from: 'public/**/*'
      },
      {
        from: 'util/**/*'
      },
      {
        from: 'views/**/*'
      },
      {
        from: 'app.js'
      },
      {
        from: 'package.json'
      },
      {
        from: 'router-config.js'
      },
      {
        from: 'yarn.lock'
      }
    ])
  ]
})
