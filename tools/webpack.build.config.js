const path = require("path");

module.exports = (...args) => ({
  entry: path.join(__dirname, "../src/index.jsx"),
  mode: args[1].mode,
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
    filename: args[1].mode === "production"
      ? "react-json-excel.min.js": "react-json-excel.js",
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
      amd: "react"
    }
  }
});
