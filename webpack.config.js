const path = require('path')

module.exports = {
    entry: {
        entry: './lib/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'io',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        fallback: {
            fs: false,
            child_process: false,
            http: false,
            https: false
        }
    },
    mode: 'production'
}
