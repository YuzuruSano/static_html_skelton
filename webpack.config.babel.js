const path = require("path");
const current = process.cwd();

const webpack = require('webpack');

module.exports = {
	/* ビルドの起点となるファイルの設定 */
	entry: ['babel-polyfill', './js/scripts/main.js'],
	/* 出力されるファイルの設定 */
	output: {
		path: __dirname + '/js', // 出力先のパス
		filename: 'bundle.js' // 出力先のファイル名
	},
	cache: true,
	devtool: 'source-map',
	module: {
		/* loaderの設定 */
		loaders: [
			{
				test: /\.js$/, // 対象となるファイルの拡張子（正規表現可）
				exclude: /node_modules/, // 除外するファイル/ディレクトリ（正規表現可）
				loader : 'babel-loader'
			}
			//,{ test: /\.html$/, loader: 'html-loader' }//lodash使うときはコメントアウト
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(
		{
			compress: {warnings: false},
			output: {comments: false},
			sourceMap: true
		}
		)
	]
};
