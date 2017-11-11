var webpack = require('webpack');
var helpers = require('./helpers');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};