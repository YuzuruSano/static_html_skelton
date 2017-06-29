const path = require("path");
const current = process.cwd();
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const supported = [
   'IE 9',
   'IE 10',
   'IE 11',
   'last 4 versions'
];

module.exports = [{
	/* ビルドの起点となるファイルの設定 */
	entry:{
		main:['./js/scripts/main.js']
		//複数連結
		//home:['./js/scripts/main.js','./js/scripts/home.js']
	},
	/* 出力されるファイルの設定 */
	output: {
		path: __dirname + '/js', // 出力先のパス
		filename: '[name].js' // 出力先のファイル名
	},
	cache: true,
	devtool: 'source-map',
	module: {
		/* loaderの設定 */
		loaders: [
			{
				test: /\.js$/, // 対象となるファイルの拡張子（正規表現可）
				exclude: /(node_modules|bower_components)/, // 除外するファイル/ディレクトリ（正規表現可）
				loader : 'babel-loader'
			}
			//,{ test: /\.html$/, loader: 'html-loader' }//lodash使うときはコメントアウト
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {warnings: false},
			output: {comments: false},
			sourceMap: true
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new WebpackNotifierPlugin({
			title: 'JSのコンパイルっすわ',
			contentImage: path.join(__dirname, 'js/icons/shibasaki_ko.jpg'),
			alwaysNotify: true
		})
	]
},
{
	/* ビルドの起点となるファイルの設定 */
	entry: 'babel-polyfill',
	/* 出力されるファイルの設定 */
	output: {
		path: __dirname + '/js', // 出力先のパス
		filename: 'vendor.js', // 出力先のファイル名
		jsonpFunction: 'vendor'
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
},
{
	devtool: "source-map",
	entry: {
		style: './sass/style.scss',
	},
	output: {
		path: path.join(__dirname, './css'),
		filename: '[name].css'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: [
									require('cssnano')({
										autoprefixer: {browsers: supported, add: true}
									}),
									require('postcss-assets')({
										loadPaths: ['images/']
									})
								]
							}
						},
						{
							loader: "sass-loader", options: {
								sourceMap: true
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename:'[name].css', disable: false, allChunks: true }),
		new WebpackNotifierPlugin({
			title: 'SASSのコンパイルっすわ',
			contentImage: path.join(__dirname, 'js/icons/yoshioka_riho.png'),
			alwaysNotify: true
		}),
	]
}
];
