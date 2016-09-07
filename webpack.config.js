const path = require('path');
const PATHS = {
    public: path.join(__dirname, 'public')
}

module.exports = {
    entry: {
        javascript: './app/components/main.js',
    },
    output: {
        path: PATHS.public,
        filename: 'bundle.js',
        publicPath: '/public/',
    },
    devServer: {
        contentBase: PATHS.public,
        inline: true,
        port: 3333,
        historyApiFallback: true
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
    }
}
