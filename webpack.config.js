module.exports = {
    entry: [
        './src/index.js',
        './src/index.css'
    ],
    output: { //where webpack stores its final build
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "script-loader" //how to load js files
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" //how to load css files
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    }
};