var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('./');

builder.config({
  paths: {
    'react': './node_modules/react/dist/react.js',
    'react-dom': './node_modules/react-dom/dist/react-dom.js',
    'react-redux': './node_modules/react-redux/dist/react-redux.js',
    'redux': './node_modules/redux/dist/redux.js'
  }
});

builder
.bundle('./app/**', 'bundle.js', { minify: true, runtime: false, sourceMaps: true,
  fetch: function (load, fetch) {
    if (load.name.indexOf('.ts') !== -1) {
      return '';
    } else {
      // fall back to the normal fetch method
      return fetch(load);
    }
  }
})
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});
