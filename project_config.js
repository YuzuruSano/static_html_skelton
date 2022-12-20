/**
 * The Pug plugin replace functionality of:
 * - html-webpack-plugin
 * - mini-css-extract-plugin
 * - webpack-remove-empty-scripts
 * - pug-loader
 *
 * Using the pug-plugin:
 * - the Entrypoint is the Pug file, not JS-file.
 * - all source scripts (JS/TS) must be loaded via require() directly in Pug file
 * - all source styles (CSS/SASS/SCSS) must be loaded via require() directly in Pug file, not in JS file.
 * - all source images must be used via require() in Pug.
 *
 * Don't need to read CSS/SCSS and JS files to add it to entry. All source files must be loaded in Pug file.
 */
const pages = {
  index: "./dev/pug/index.pug", // output build/index.html
  // news: "./dev/pug/news.pug", // output build/news.html
};

module.exports = {
  entries: pages,
};
