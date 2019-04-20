const browserSync = require("browser-sync");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const webpackConfig = require("./webpack.dev");
const bundler = webpack(webpackConfig);

const webpackDevMiddlewareInstance = webpackDevMiddleware(bundler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
});

const server = browserSync({
  port: 8080,
  ghostMode: false,
  server: {
    baseDir: "build",
    middleware: [webpackDevMiddlewareInstance, webpackHotMiddleware(bundler)]
  },
  files: [
    {
      // pugファイルを更新してもなぜかリロードしてくれないので手動で更新する
      match: ["./dev/pug/**/*.pug"],
      fn: (event, file) => {
        webpackDevMiddlewareInstance.waitUntilValid(() => {
          console.log("finish");
          server.reload();
        });
      }
    }
  ]
});
