const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const paths = {
    src: path.join(process.cwd(), 'src'),
    build: path.join(process.cwd(), 'dist'),
};

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    externals: {
        paths,
    },
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'cache-loader',
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    'cache-loader',
                    'thread-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                            transpileOnly: true,
                            logLevel: 'info',
                        },
                    }
                ]
            },
            {
                test: /\.css$/,
                use: isDev ? [
                    'style-loader',
                    'css-loader',
                ] : [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: isDev ? [
                    'cache-loader',
                    'thread-loader',
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                ] : [
                    'cache-loader',
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    },
                ],
            }
        ]
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.react.js'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        alias: {
            "@app": path.resolve(paths.src, ''),
        }
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};
