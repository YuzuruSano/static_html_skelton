const path = require("path");
const globule = require("globule");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const fs = require('fs');

const listFiles = dir => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(dirent =>
    dirent.isFile() ? [`${dir}/${dirent.name}`] : listFiles(`${dir}/${dirent.name}`)
  )
}

const js_dir = './dev/js/scripts',
      js_entries = {},
      scss_dir = './dev/sass\/',
      scss_dir_regexp = new RegExp(scss_dir),
      scss_entries = {};

listFiles(scss_dir).forEach(file => {
  const filename = path.basename(file, '.scss');

  if(!filename.match(/^(_|\.)/)){
    const dist_dir = file.replace(scss_dir_regexp, ''),
          dist_file = dist_dir.replace(/scss/, 'css');

    scss_entries[dist_file] = [path.resolve(__dirname, file)];
  }
});

const js_files = fs.readdirSync(js_dir);
js_files.forEach(file => {
  if (file.match(/(js|ts)$/)) {
    const dist_file = file.replace(/\.ts$/, '');

    js_entries[dist_file] = [path.resolve(__dirname, `${js_dir}/${file}`)];
  }
});

const app = {
  entry: {
    ...js_entries,
    ...scss_entries
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

const pages = [
  {
    filename:"index.html",
    template:"./dev/pug/index.pug",
    chunks: ['main','/basis.css', '/pages/home.css']
  }
]

pages.forEach((page) => {
  
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: page.filename,
      template: page.template,
      chunks: page.chunks,
      environment: process.env.NODE_ENV,
      minify: process.env.NODE_ENV === "develop" ? true : false,
    })
  );
});

module.exports = app;
