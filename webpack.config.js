const path = require('path');
const PATHS = {
    public: path.join(__dirname, 'public')
}
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('./package.json');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const common = {
    entry: {
        javascript: './app/components/main.js',
    },
    output: {
        path: PATHS.public,
        filename: 'bundle.js',
        publicPath: '/public/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
};

// Default config
if (TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.public,
            inline: true,
            port: 3333,
            historyApiFallback: true
        },
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
		]
	});
}

if (TARGET === 'build' || TARGET === 'stats') {
	module.exports = merge(common, {
        devtool: 'cheap-module-source-map',
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': '"production"'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
                    screw_ie8: true
				},
                comments: false,
                sourceMap: false
			}),
		]
	});
}
