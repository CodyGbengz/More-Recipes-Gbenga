import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import common from './webpack.config.common.babel';

module.exports = merge(common, {
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  stats: {
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                autoprefixer
              ];
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      },
    ],
  },
});
