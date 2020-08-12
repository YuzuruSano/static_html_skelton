const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, "./dev/js/scripts/main.js")],
    'style.css': [path.resolve(__dirname, "./dev/sass/style.scss")],
    'shorthands.css': [path.resolve(__dirname, "./dev/sass/shorthands.scss")]
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:8080/"
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { 
              name: "[name].html" 
            }
          },
          "extract-loader",
          {
            loader: "html-loader",
            options: {
              attributes: true
            }
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
              data: {
                "env": JSON.stringify(process.env.NODE_ENV)
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        ]
      },
      { test: /\.html$/, exclude: /node_modules/,loader: "html-loader" }
    ]
  },
  externals: {
    jquery: "jQuery"
  },
  resolve: {
    modules: ["node_modules", "dev/js/scripts"],
    extensions: [".js", ".jsx", ".css"]
  },
  performance: { hints: false },
  plugins: [
    new FixStyleOnlyEntriesPlugin({
      extensions: ['scss', 'css'],
      ignore: 'webpack-hot-middleware'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./dev/images", to: "images/" }]
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
