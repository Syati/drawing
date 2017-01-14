const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appRoot = path.resolve(__dirname, './app');
const buildRoot = path.resolve(appRoot, 'build');
const staticRoot = path.resolve(buildRoot, 'static');

let jsFileName = 'bundle.js';
if (process.env.NODE_ENV === 'production') {
  jsFileName = '[hash].bundle.js';
}

module.exports = {
  devtool: 'inline-source-map',
  context: appRoot,
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: buildRoot,
//    publicPath: '/static/',
    filename: jsFileName,
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    contentBase: buildRoot,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
    inline: true,
    hot: true,
    progress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      inject: 'body',
      minify: {
        removeComments: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader?outputStyle=expanded&sourceMap',
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
};

