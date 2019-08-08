const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminJpegTran = require("imagemin-jpegtran");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
              pretty: true
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
      // GIF
      test: /images\/([a-z_\-\s0-9]+)\.gif$/i,
      gifsicle: {
        interlaced: false,
        optimizationLevel: 3,
        colors: 256
      }
    }),

    new ImageminPlugin({
      // PNG
      test: /images\/([a-z_\-\s0-9]+)\.png$/i,
      optipng: {
        optimizationLevel: 7,
        bitDepthReduction: true,
        colorTypeReduction: true,
        paletteReduction: true
      }
    }),

    new ImageminPlugin({
      // JPG, JPEG
      test: /images\/([a-z_\-\s0-9]+)\.jpe?g$/i,
      jpegtran: {
        progressive: true,
        arithmetic: false
      },
      plugins: [
        ImageminJpegTran({
          quality: 85,
          progressive: true,
          targa: false,
          revert: false,
          dcScanOpt: 1,
          notrellis: false,
          notrellisDC: false,
          tune: "hvs-psnr",
          noovershoot: false,
          arithmetic: false,
          smooth: 0
        })
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ]
};
