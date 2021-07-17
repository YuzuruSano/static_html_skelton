const fs = require('fs');
const path = require("path");

/**
 * pugでコンパイルするページを指定する。
 * １ページにつき1オブジェクト
 * 
 * jsはdev/js/scripts直下の.tsファイルをコンパイルする。
 * chunksには拡張子を覗いたファイル名を指定することで読み込むことができる
 * 
 * cssはdev/sass配下の非パーシャルファイルをコンパイルする。
 * basisは全ページ共通の基礎設定（ヘッダー、フッター、メインコンテンツ部の幅定義など）なので全ページに読み込む
 * pages配下ではそのページに対応するスタイルを読み込む。
 * chunksではscss配下から冒頭スラッシュ無しでパス指定することで対応するcssを読み込むことができる
 * 
 * ＜＜CMS組み込みも想定して各ページに必要なコンポーネントだけを読み込むことを意識したい＞＞
 */
const pages = [
  {
    filename: "index.html",//出力するファイル名
    template: "./dev/pug/index.pug",//対象のpugファイル
    chunks: [
      'main', //使用するjs,
      'basis.css', 'pages/home.css'// 使用するcss 
    ]
  },
  // {//下層ページの追加例
  //   filename: "news.html",
  //   template: "./dev/pug/news.pug",
  //   chunks: [
  //         'main','news', 
  //         'basis.css', 'pages/news.css'
  //       ]
  // }
];

/**
 * 下記は読み込み対象のファイルリストの生成
 * 
 */
const listFiles = dir => {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(dirent =>
    dirent.isFile() ? [`${dir}/${dirent.name}`] : listFiles(`${dir}/${dirent.name}`)
  )
}

const js_dir = './dev/js/scripts',
  js_entries = {},
  scss_dir = './dev/sass/',
  scss_dir_regexp = new RegExp(scss_dir),
  scss_entries = {};

listFiles(scss_dir).forEach(file => {
  const filename = path.basename(file, '.scss');

  if (!filename.match(/^(_|\.)/)) {
    const dist_dir = file.replace(scss_dir_regexp, ''),
      dist_file = dist_dir.replace(/\.scss/, '.css');

    scss_entries[dist_file.slice(1)] = [path.resolve(__dirname, file)];
  }
});

const js_files = fs.readdirSync(js_dir);
js_files.forEach(file => {
  if (file.match(/(js|ts)$/)) {
    const dist_file = file.replace(/\.ts$/, '');

    js_entries[dist_file] = [path.resolve(__dirname, `${js_dir}/${file}`)];
  }
});

const entries = {
  ...js_entries, ...scss_entries
}

module.exports = {
  pages:pages,
  entries: entries
};