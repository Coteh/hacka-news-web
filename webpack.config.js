var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        'js/header.bundle': ['./src/header.js'],
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
                from: 'style.css',
                to: 'css/style.css'
            }
        ])
    ]
};
