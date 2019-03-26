const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // this entry point assumes you are rendering your app at ./client/index.js
    // if your folder and/or filenames are different you will need to change this accordingly
    entry: './client/index.js',
    output: {
        // the output path and filename in which webpack will bundle your files
        // when webpack bundles your files, it will place the file `bundle.js` 
        // inside a newly created `dist` folder in your project's root directory
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                // this configuration allows you to use css-modules in your react app
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // make sure this matches your entry point above
            template: './client/index.html'
        })
    ]
}
