import "../../sass/style.scss";

const req = require.context("../../pug/", false, /\.pug/);
req.keys().forEach(fileName => {
  const m = fileName.match(/^\.\/_/);
  req(fileName);
});

if (module.hot) {
  module.hot.accept();
}
