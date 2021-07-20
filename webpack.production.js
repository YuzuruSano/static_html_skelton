const path = require("path");
const { merge } = require("webpack-merge"); // webpack-merge
const common = require("./webpack.common.js"); // 汎用設定をインポート
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

const config = merge(common, {
  output: {
    publicPath: "/",
  },
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
  mode: "production",
  optimization: {
    chunkIds: "named",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new RemovePlugin({
      after: {
        test: [
          {
            folder: "build/css",
            method: (absoluteItemPath) => {
              return new RegExp(/bundle$/, "m").test(absoluteItemPath);
            },
            recursive: true,
          },
          {
            folder: "build",
            method: (absoluteItemPath) => {
              return new RegExp(/\/_.+\.html$/, "m").test(absoluteItemPath);
            },
            recursive: true,
          },
        ],
      },
    }),
  ],
});

config.module.rules.push({
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 1,
        url: false,
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        postcssOptions: {
          plugins: [
            require("autoprefixer")(),
            require("cssnano"),
            require("postcss-assets")({
              loadPaths: ["dev/images/"],
              relative: "./dev/css",
            }),
          ],
        },
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
        sassOptions: {
          includePaths: [path.resolve(__dirname, './dev/sass')],
        },
      },
    },
  ],
});
module.exports = config;
