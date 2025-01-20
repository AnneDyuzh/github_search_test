const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
    entry: './src/index.tsx',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        port: 8080,
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        issuer: /\.tsx?$/,
                        use: ['@svgr/webpack'],
                    },
                    {
                        type: 'asset/resource',
                        generator: {
                            filename: 'icons/[name][ext]'
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@entities': path.resolve(__dirname, 'src/entities'),
        },
        extensions: ['.tsx', '.ts', '.js', '.svg', '.json', '.css'],
    },
};

