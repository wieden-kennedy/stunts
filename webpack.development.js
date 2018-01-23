const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const {DefinePlugin, NamedModulesPlugin, HotModuleReplacementPlugin} = require('webpack');
const common = require('./webpack.common');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(common.paths.src, 'index.jsx')
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname,
        hot: true,
        port: common.PORT
    },
    resolve: common.resolve,
    module: {
        rules: [
            ...common.rules,
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                PORT: common.PORT,
                PUBLIC_PORT: common.PUBLIC_PORT
            }
        }),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        ...common.plugins
    ]
};
