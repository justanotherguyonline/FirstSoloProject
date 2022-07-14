const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : process.env.NODE_ENV,
  resolve: {extensions : ['.js','.jsx']},
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'client/index.js'),
    },
    compress: true,
    port: 8080,
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            // plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader',  'postcss-loader', 'sass-loader']
      }
    ]
  }
};

