const path = require("path");
const globule = require("globule");
const webpack = require("webpack");
const PugPlugin = require("pug-plugin");
const ProjectConfig = require("./project_config.js");

const isDev = process.env.NODE_ENV === "development";

const app = {
  // Using pug-plugin, define only the Pug files in entry.
  // The pug-plugin extracts JS and CSS from their sources defined in Pug.
  entry: ProjectConfig.entries,
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(__dirname, "./build"),

    // Note: defaults publicPath is `auto`, generates relative public paths and works fine
    //publicPath: "http://localhost:8080/",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: PugPlugin.loader, // PugPlugin already contain the pug-loader
        options: {
          basedir: path.resolve(__dirname, "dev/"),
          data: {
            isDev, // pass global data into Pug templates
          },
        },
      },
      {
        test: /\.(j|t)s(|x)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          // output filename of images
          filename: "img/[name].[hash:8][ext]",
        },
      },
    ],
  },
  externals: {
    jquery: "jQuery",
  },
  resolve: {
    modules: ["node_modules", "dev/js/scripts"],
    extensions: [".js", ".jsx", ".ts", ".css"],
  },
  performance: { hints: false },
  plugins: [
    // enable processing of Pug files in Webpack entry
    new PugPlugin({
      pretty: true,
      extractCss: {
        // hashed output filename of CSS
        filename: "css/[name].[contenthash:8].css",
      },
    }),
    // Note: use require('source/images/image.jpg') in Pug
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./dev/images", to: "images/" }],
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};

module.exports = app;
