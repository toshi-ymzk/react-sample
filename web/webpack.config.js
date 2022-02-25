const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, "node_modules")],
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "build"),
            publicPath: '/'
        }
    }
};
