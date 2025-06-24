const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    target:"web",
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback:true,
    },
};
