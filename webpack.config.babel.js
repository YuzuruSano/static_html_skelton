const path = require("path");
const globule = require("globule");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const globImporter = require("node-sass-glob-importer");

const supported = ["IE 11", "last 2 versions"];

const MODE = process.env.NODE_ENV;
const enabledSourceMap = MODE === "development";

const opts = {
  srcDir: path.join(__dirname, "dev"),
  destDir: path.join(__dirname, "build")
};

const convertExtensions = {
  pug: "html",
  scss: "css",
  js: "js"
};

const files = {};
Object.keys(convertExtensions).forEach(from => {
  const to = convertExtensions[from];
  if (from == "scss") {
    files["css/style.css"] = "./dev/sass/style.scss";
  } else if (from == "pug") {
    globule
      .find([`**/*.${from}`, `!**/_*.${from}`], { cwd: opts.srcDir })
      .forEach(filename => {
        let replaced = filename.replace(new RegExp(`.${from}$`, "i"), `.${to}`);
        replaced = replaced.replace("pug/", "");
        files[replaced] = path.join(opts.srcDir, filename);
      });
  } else {
    files["js/scripts/main.js"] = "./dev/js/scripts/main.js";
  }
});

module.exports = [
  {
    mode: MODE,
    /* ビルドの起点となるファイルの設定 */
    entry: files,
    /* 出力されるファイルの設定 */
    output: {
      filename: "[name]",
      path: opts.destDir
    },
    cache: true,
    devtool: MODE !== "production" ? "inline-source-map" : "",
    module: {
      /* loaderの設定 */
      rules: [
        {
          test: /\.pug$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "html-loader"
              },
              {
                loader: "pug-html-loader",
                options: {
                  pretty: true
                }
              }
            ]
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
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
                      loadPaths: ["./images/"]
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
          })
        },
        {
          test: /\.js$/, // 対象となるファイルの拡張子（正規表現可）
          exclude: /(node_modules)/, // 除外するファイル/ディレクトリ（正規表現可）
          loader: "babel-loader"
        },
        { test: /\.html$/, loader: "html-loader" }
      ]
    },
    externals: {
      jquery: "jQuery"
    },
    plugins: [
      new ExtractTextPlugin("[name]"),
      new CopyWebpackPlugin([{ from: "./", to: "images/" }], {
        context: "dev/images"
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new WebpackNotifierPlugin({
        title: "Success compiled!",
        contentImage: path.join(__dirname, "dev/js/icons/shibasaki_ko.jpg"),
        alwaysNotify: true
      })
    ],
    performance: { hints: false },
    devServer: {
      contentBase: __dirname + "/",
      watchContentBase: true,
      open: true,
      compress: true,
      inline: true,
      hot: true,
      host: "0.0.0.0",
      disableHostCheck: true,
      useLocalIp: true
    }
  }
];
