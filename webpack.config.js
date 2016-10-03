var webpack = require("webpack");

var config = {
  devtool: 'source-map',
  entry: {
    main: './dev/app.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts']
      }
    ]
  },
  devServer: {
    host: '0.0.0.0'
  }
};

module.exports = config;
