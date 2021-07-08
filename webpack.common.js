const path = require("path");
const globule = require("globule");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const app = {
  entry: {
    bundle: [path.resolve(__dirname, "./dev/js/scripts/main.ts")],
    "style.css": [path.resolve(__dirname, "./dev/sass/style.scss")],
  },
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

documents.forEach((document) => {
  const fileName = document.replace("./dev/pug/", "").replace(".pug", ".html");
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${fileName}`,
      template: document,
      environment: process.env.NODE_ENV,
      minify: process.env.NODE_ENV === "develop" ? true : false,
    })
  );
});

module.exports = app;
