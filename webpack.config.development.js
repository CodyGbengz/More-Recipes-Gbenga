const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      './client/src/index.jsx',
    ]
  },
  output: {
    path: `${__dirname}/client/build`,
    filename: 'js/bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    // you can now require("file") instead of require("file.coffee")
    extensions: ['.js', '.json', '.jsx']
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000&name=[path][name].[ext]' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=[path][name].[ext]' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]' },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000&name=[path][name].[ext]',
      },

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      title: 'more-recipes',
      template: './client/public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
    // new CopyWebpackPlugin([
    //   { from: 'client/public/js/custom.js', to: 'client/build' }
    // ]),
    // new DashboardPlugin()
  ]
};
