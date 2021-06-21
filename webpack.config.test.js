var webpack = require("webpack");
var path = require("path");

// Detect environment
var isProduction = process.env.NODE_ENV === "production";

// Create config
var config = {
  entry: {
    "dist/compiledTest.js": "./src/test.js",
  },
  output: {
    library: "SentenTree",
    libraryTarget: "umd",
    path: __dirname,
    filename: "[name]",
  },
  module: {},
  plugins: [],
  devtool: isProduction ? undefined : "eval",
};

module.exports = config;
