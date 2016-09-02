module.exports = {
    entry: './app/components/main.js',
    output: {
        path: './',
        filename: 'public/bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333,
        historyApiFallback: {
            index: 'public/index.html'
        }
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
