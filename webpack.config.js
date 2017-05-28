module.exports = {
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  node: {
    fs: "empty",
  },
}
