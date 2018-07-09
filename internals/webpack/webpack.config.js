const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

process.traceDeprecation = true;
process.noDeprecation = true;

const { NODE_ENV } = process.env;
const isProd = () => NODE_ENV === 'production';

const hash = (type = '') => (isProd() ? `.[${type}hash]` : '');
const getEntryApp = () => {
  if (isProd()) {
    return [path.resolve(__dirname, '../../source/index')];
  }
  return [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../../source/index'),
  ];
};

const config = {
  entry: {
    app: getEntryApp(),
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: `[name]${hash('chunk')}.js`,
    chunkFilename: `chunk.[name]${hash('chunk')}.js`,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      { test: require.resolve('react'), use: ['expose-loader?React'] },
      { test: require.resolve('react-dom'), use: ['expose-loader?ReactDOM'] },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer'),
                  require('postcss-discard-duplicates'),
                  require('postcss-discard-unused')(),
                ],
              },
            },
            {
              loader: 'stylus-loader',
            },
          ],
        }),
      },
      {
        test: /\.css/,
        include: path.resolve(__dirname, '../../node_modules/b2wadvertising-theme/dist/'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },
      {
        test: /\.(jpg|png|eot|woff|ttf|svg)$/,
        loader: 'file-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      filename: `[name]${hash('chunk')}.js`,
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.EnvironmentPlugin({
      APP_BROWSER: true,
      NODE_ENV: NODE_ENV === 'production' ? 'production' : 'development',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    isProd()
      ? new UglifyJSPlugin({
          sourceMap: true,
        })
      : new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      disable: !isProd(),
      filename: `app${hash('content')}.css`,
      allChunks: true,
    }),
  ],
  stats: {
    children: false,
  },
  externals: {
    window: 'window',
    theme: 'theme',
  },
};

if (isProd()) {
  config.devtool = 'source-map';
}

module.exports = config;
