const HtmlWebpackPlugin = require("html-webpack-plugin"),
  path = require("path"),
  webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    open: true,
    port: 5000
  },
  devtool: "source-map",
  entry: path.join(__dirname, "app.jsx"),
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.(jsx)$/u,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            plugins: [
              "@babel/plugin-proposal-export-default-from",
              "@babel/plugin-proposal-class-properties"
            ],
            presets: [
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: "app.bundle.js",
    path: path.join(__dirname, "../public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "../public/index.html"),
      template: path.join(__dirname, "index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [
      ".js",
      ".jsx"
    ]
  }
};
