const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        jquery: './node_modules/html5-boilerplate/dist/js/vendor/jquery-3.3.1.min.js',
        modernizr: './node_modules/html5-boilerplate/dist/js/vendor/modernizr-3.6.0.min.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js')
    },
    mode: 'production'
};
