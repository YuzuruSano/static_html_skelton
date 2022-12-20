const { merge } = require("webpack-merge"); // webpack-merge
const common = require("./webpack.common.js"); // 汎用設定をインポート
const path = require("path");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssAssets = require("postcss-assets");

const config = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    // Note: HMR plugin is already activated in Webpack 5, don't need extra definition in plugins
    //new webpack.HotModuleReplacementPlugin(),
    // Note: does not work on Apple M1
    // new WebpackNotifierPlugin({
    //   title: "Success compiled!",
    //   contentImage: path.join(__dirname, "dev/js/icons/shibasaki_ko.jpg"),
    //   alwaysNotify: true,
    // }),
  ],
  optimization: {
    // Are you shure use minification of CSS for dev mode? It has sense for production mode.
    //minimize: true,
    //minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: "single",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    open: true,
    compress: true,
    // enable HMR for files defined in paths
    // Note: no needed to use the webpack-dev-middleware and webpack-hot-middleware
    watchFiles: {
      paths: ["dev/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
});

// Complex outdated definition, don't use it.
// The watching and HMR for source files is already enabled using devServer.watchFiles.paths[].
// for (const key in config.entry) {
//   if (config.entry.hasOwnProperty(key)) {
//     config.entry[key].unshift(
//       "webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr"
//     );
//     config.entry[key].unshift("webpack/hot/only-dev-server");
//   }
// }

config.module.rules.push({
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 1,
        url: false,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        postcssOptions: {
          plugins: [
            autoprefixer(),
            cssnano({
              preset: [
                "default",
                {
                  discardComments: {
                    removeAll: true,
                  },
                },
              ],
            }),
            postcssAssets({
              loadPaths: ["dev/images/"],
              relative: true,
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
          includePaths: [path.resolve(__dirname, "./dev/sass")],
        },
      },
    },
  ],
});

module.exports = config;
