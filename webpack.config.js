const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8000
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: './test.html',
            chunks: ['app']
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
