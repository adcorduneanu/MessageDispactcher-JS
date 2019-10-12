import path from 'path';

export default {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },    
    stats: {
        colors: true
    },
    devtool: 'source-map'
};