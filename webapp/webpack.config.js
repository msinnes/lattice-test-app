const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: `${__dirname}/public/index.html`,
            inject: 'body',
        }),
    ],
    devServer: {
        contentBase: './public',
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://api:8000',
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
};