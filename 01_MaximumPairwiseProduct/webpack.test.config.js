var webpack = require('webpack');
var helpers = require('./helpers');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    // devServer: {
    //     contentBase: './'
    // },
    // output: {
    //     path: path.resolve(__dirname, 'js'),//__dirname + './js',
    //     //path: helpers.root('dist'),
    //     publicPath: 'http://localhost:8080/js/',
    //     filename: '[name].js'
    // },
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