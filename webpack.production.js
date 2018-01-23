const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {DefinePlugin} = require('webpack');
const {UglifyJsPlugin} = require('webpack').optimize;

const common = require('./webpack.common');

module.exports = {
    entry: [
        './src/index.jsx',
        './src/components/styles/application.scss'
    ],
    output: {
        publicPath: './',
        path: common.paths.dest,
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([
            common.paths.dest
        ], {}),
        new CopyWebpackPlugin([
            './src/404.html',
            './src/robots.txt',
            './src/site.manifest',
            {
                from: common.paths.assets,
                to: path.join(common.paths.dest, 'assets')
            },
            {
                from: common.paths.static,
                to: path.join(common.paths.dest, 'static')
            }
        ]),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                PORT: common.PORT,
                PUBLIC_PORT: common.PUBLIC_PORT
            }
        }),
        new UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: true },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            }
        })
    ],
    resolve: common.resolve,
    module: {
        rules: [
            ...common.rules,
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { minimize: true }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    }
};
