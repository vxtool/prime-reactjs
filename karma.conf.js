var webpackConfig = require('./config/webpack.config.dev');

webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/, exclude: /(node_modules)/,
    loader: 'babel-loader'
  }
];

webpackConfig.module.postLoaders = [{
  test: /\.(js|jsx)$/, exclude: /(node_modules|source\/assets\/js\/tests)/,
  loader: 'istanbul-instrumenter'
}];


module.exports = function(config, options){

  config.set({
    basePath:  '',
    frameworks: ['mocha', 'chai'],
    files: [
      'tests/**/*.js'
    ],
    preprocessors: {
      'tests/**/*.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    exclude: [
    ],
    reporters: ['mocha'],

    plugins: [
      "karma-chai",
      "karma-mocha",
      "karma-phantomjs-launcher",
      'karma-mocha-reporter',
      'karma-webpack'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
