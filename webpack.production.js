const merge = require("webpack-merge"); // webpack-merge
const common = require("./webpack.common.js"); // 汎用設定をインポート
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const supported = ["IE 11", "last 2 versions"];

const config = merge(common, {
  output: {
    publicPath: "/"
  },
  mode: "production"
});

config.module.rules.push({
  test: /\.scss$/,
  exclude: /(node_modules)/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 1,
        url: false
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        plugins: [
          require("autoprefixer")({
            browsers: supported
          }),
          require("cssnano"),
          require("postcss-assets")({
            loadPaths: ["dev/images/"],
            relative: "./dev/css"
          })
        ]
      }
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
        importer: globImporter()
      }
    }
  ]
});
module.exports = config;
