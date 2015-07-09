module.exports = {
    entry: "./entry.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    node: {
    fs: "empty"
    // This is just a workaround for an unpleasant error message (https://github.com/webpack/webpack/issues/451)
    },
    module: {
        loaders: [
            { test: /\.sass$/, loader: "style!css!sass?indentedSyntax"},
            { test: /\.json$/, loader: "json-loader" },

        ]
    }
};