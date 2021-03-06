/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      'angular2-highcharts': 'npm:angular2-highcharts',

      // This mapping is for loading Highcharts static API and Highcharts modules
      'highcharts': 'npm:highcharts',

      'angular2-moment': 'npm:angular2-moment',
      'moment': 'npm:moment',

      'ng2-datetime-picker': 'npm:ng2-datetime-picker/dist',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
            'angular2-highcharts': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'highcharts': {
        // NOTE: You should set './highcharts.src.js' here
        // if you are not going to use <chart type="StockChart"
        main: './highstock.src.js',
        defaultExtension: 'js'
      },
      'angular2-moment': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'moment': {
        main: './moment.js',
        defaultExtension: 'js'
      },
      'ng2-datetime-picker': {
        main: './ng2-datetime-picker.umd.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);


(function (global) {

  // Load "./app/main.ts" (gets full path from package configuration above).
  // --
  // NOTE: We are attaching the resultant promise to the global scope so that other
  // scripts may listen for the successful loading of the application.
  global.bootstrapping = System
    .import("app")
    .then(
    function handleResolve() {

      // console.info( "System.js successfully bootstrapped app." );

    },
    function handleReject(error) {
      console.warn("System.js could not bootstrap the app.");
      console.error(error);
      return (Promise.reject(error));
    });

})(window);