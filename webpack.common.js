const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;
const PUBLIC_PORT = process.env.PUBLIC_PORT || 3001;

const paths = {
    src: path.join(__dirname, 'src'),
    dest: path.join(__dirname, 'public'),
    assets: path.join(__dirname, 'src/assets'),
    modernizr: path.join(__dirname, 'modernizr-config.json'),
    static: path.join(__dirname, 'static')
};

exports.paths = paths;
exports.PORT = PORT;
exports.PUBLIC_PORT = PUBLIC_PORT;

exports.plugins = [
    new HtmlWebpackPlugin({
        template: './src/template.html',
        files: {
            css: ['style.css'],
            js: ['bundle.js'],
        }
    })
];

exports.resolve = {
    extensions: ['.js', '.jsx'],
    alias: {
        modernizr$: paths.modernizr,
        assets: paths.assets
    }
};

exports.rules = [
    {
        test: /\.(js|jsx)$/,
        include: [paths.src],
        use: ['babel-loader']
    },
    {
        test: /modernizr-config\.json/,
        use: ['modernizr-loader', 'json-loader']
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
    },
    {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader']
    }
];
