const mode = process.env.WEBPACK_MODE;
module.exports = {
    entry: {
        SimpleRangeSlider: './src/Plugin/Plugin.ts',
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    output: {
        library: 'SimpleRangeSlider',
        libraryTarget: 'umd',
        libraryExport: 'default',
        filename: '[name].js',
        path: __dirname + '/dist',
    },

    mode: mode,
    devtool: mode === 'development' ? 'inline-source-map' : '',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
}