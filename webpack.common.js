const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
module.exports = {
  entry: {
    main: [path.resolve(__dirname, "./dev/js/scripts/main.js")]
  },
  output: {
    filename: "js/bundle.js",
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
            options: { name: "[name].html" }
          },
          "extract-loader",
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", ":data-src"]
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
    new CopyWebpackPlugin([{ from: "./dev/images", to: "images/" }]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100',
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ]
};
