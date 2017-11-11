// Karma configuration
// Generated on Sat Nov 11 2017 09:49:37 GMT+1100 (AUS Eastern Daylight Time)
var webpackConfig = require('./webpack.test.config.js');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {
        pattern: './config/karma-test.shim.js',
        watched: false
      }
    ],
    exclude: [
    ],
    preprocessors: {
      './config/karma-test.shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ]
  })
}
