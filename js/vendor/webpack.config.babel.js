const path = require("path");
const webpack = require('webpack');

module.exports = {
	/* ビルドの起点となるファイルの設定 */
	entry: 'babel-polyfill',
	/* 出力されるファイルの設定 */
	output: {
		path: '../../js', // 出力先のパス
		filename: 'vendor.js' // 出力先のファイル名
	},
	cache: true,
	plugins: [
		new webpack.optimize.UglifyJsPlugin(
		{
			compress: {warnings: false},
			output: {comments: false},
			sourceMap: false
		}
		)
	]
};
