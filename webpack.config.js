var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },    
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ],
    },
    plugins: [
      // Re-generate index.html with injected script tag.
      // The injected script tag contains a src value of the
      // filename output defined above.
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, './index.html'),
      }),
    ]
};