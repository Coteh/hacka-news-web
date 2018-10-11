var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        'js/header.bundle': ['./assets/js/header.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'lib',
                to: 'lib'
            },
            {
                from: 'assets/css/style.css',
                to: 'css/style.css'
            }
        ])
    ]
};
