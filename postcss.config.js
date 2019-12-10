let mode = process.env.NODE_ENV;
let config = {
    plugins: {
        'postcss-import': {},
        'postcss-simple-vars': {},
        'postcss-nested': {},
        'autoprefixer': {},
    }
};
if(mode === 'production') {
    config.plugins['cssnano'] = {};
}
module.exports = config; 