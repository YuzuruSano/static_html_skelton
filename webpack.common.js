const path = require("path");
const globule = require("globule");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const ProjectConfig = require('./project_config.js');

const app = {
  entry: ProjectConfig.entries,
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: "http://localhost:8080/",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "pug-loader",
            options: {
              pretty: true,
              root: path.resolve(__dirname, "dev/"),
              self: true,
            }
          },
        ],
      },
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false
            },
          },
        ],
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
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./dev/images", to: "images/" }]
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ]
};

const documents = globule.find("./dev/**/*.pug", {
  ignore: ["./dev/**/_*/*.pug", "./dev/**/_*.pug"],
});

ProjectConfig.pages.forEach((page) => {
  
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: page.filename,
      template: page.template,
      chunks: page.chunks,
      chunksSortMode: function (chunk1, chunk2) {
        const orders = page.chunks,
          order1 = orders.indexOf(chunk1),
          order2 = orders.indexOf(chunk2);
        if (order1 > order2) {
          return 1;
        } else if (order1 < order2) {
          return -1;
        } else {
          return 0;
        }
      },
      environment: process.env.NODE_ENV,
      minify: process.env.NODE_ENV === "develop" ? true : false,
    })
  );
});

module.exports = app;
