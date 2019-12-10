const mode = process.env.WEBPACK_MODE;
module.exports = {
    entry: {
        SimpleRangeSlider: './src/Plugin.ts',
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    output: {
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