module.exports = {
  entry: "./index",
  output: {
    path: __dirname,
    filename: "webpack.js",
  },
  node: {
    fs: "empty",
  },
}
