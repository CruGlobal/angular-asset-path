module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      "bower_components/angular/angular.js",
      "bower_components/angular-mocks/angular-mocks.js",
      "src/index.js",
      "test/*.js"
    ],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    singleRun: true
  });
};
