/* global __dirname */
const path = require('path');

module.exports = function(config) {
  const browsers = config.browsers;
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // vendor libs need to be in specific order
      { pattern: 'src/jslibs/jquery.slim.min.js', watched: false, },
      { pattern: 'src/jslibs/popper.min.js', watched: false, },
      { pattern: 'src/jslibs/bootstrap.min.js', watched: false, },
      'src/scripts/**/*.ts',
      'src/scripts/**/*.spec.ts',
      { pattern: '../assets/css/*.css', served: true, included: false, watched: false },
      { pattern: '../assets/img/**/*.*', served: true, included: false, watched: false },
    ],
    preprocessors: {
      // need to use webpack to preprocess all the typescript files
      // Otherwise, we get this error: 
      // WARN [middleware:karma]: Invalid file type (ts), defaulting to js
      // SyntaxError: Cannot use import statement outside a module
      // SyntaxError: Unexpected token 'export'
      'src/scripts/**/*.ts': ['webpack'],
      'src/scripts/components/**/*.spec.ts': ['webpack']
    },

    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['src', 'node_modules'],
        alias: {
          test: path.resolve(__dirname, 'src/test')
        }
      },
      devtool: browsers.indexOf('ChromeDebugging') > -1 ? 'eval-source-map' : 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              compilerOptions: {
                sourceMap: true
              }
            }
          }
        ]
      }
    },
    mime: {
      'text/x-typescript': ['ts']
    },
    reporters: ['mocha'],
    webpackServer: { noInfo: config.noInfo },
    browsers: browsers && browsers.length > 0 ? browsers : ['ChromeHeadless'],
    proxies: {
      '/dist': '/base/dist'
    },
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333'],
        debug: true
      }
    },
    singleRun: false,
    mochaReporter: {
      ignoreSkipped: true
    },
    webpackMiddleware: {
      logLevel: 'silent'
    },
  });
};
