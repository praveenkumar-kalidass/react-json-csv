const path = require("path");

module.exports = {
  entry: path.join(__dirname, "../src/index.jsx"),
  mode: "production",
  optimization: {
    minimize: false
  },
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
    filename: "react-json-excel.js",
    path: path.join(__dirname, "../lib"),
    library: "ReactJsonExcel",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx"
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    }
  }
};
