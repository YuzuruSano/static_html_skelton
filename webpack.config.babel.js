const path = require("path");
const current = process.cwd();
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const supported = ['IE 9','IE 10','IE 11','last 4 versions'];

module.exports = [{
	mode: 'production', // 追加,
	/* ビルドの起点となるファイルの設定 */
	entry:{
		main:['babel-polyfill','./dev/js/scripts/main.js']
		//複数連結
		//home:['./js/scripts/main.js','./js/scripts/home.js']
	},
	/* 出力されるファイルの設定 */
	output: {
		path: __dirname + '/build/js', // 出力先のパス
		filename: '[name].js' // 出力先のファイル名
	},
	cache: true,
	devtool: 'source-map',
	module: {
		/* loaderの設定 */
		rules: [
			{
				test: /\.js$/, // 対象となるファイルの拡張子（正規表現可）
				exclude: /(node_modules)/, // 除外するファイル/ディレクトリ（正規表現可）
				loader : 'babel-loader'
			}
			,{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		// new UglifyJSPlugin({
		// 	uglifyOptions:{
		// 		compress: {warnings: false},
		// 		output: {comments: false},
		// 		sourceMap: true
		// 	}
		// }),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new WebpackNotifierPlugin({
			title: 'compiled js',
			contentImage: path.join(__dirname, 'dev/js/icons/shibasaki_ko.jpg'),
			alwaysNotify: true
		})
	],
	performance: { hints: false }
},
{
	mode: 'production',
	devtool: "source-map",
	entry: {
		style: './dev/sass/style.scss',
	},
	output: {
		path: path.join(__dirname, './dev/css'),
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
								sourceMap: true,
								importLoaders: 1,
								url: false
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: [
									require('cssnano')({
										autoprefixer: {browsers: supported, add: true}
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
		new ExtractTextPlugin({filename:'[name].css', allChunks: true }),
		new WebpackNotifierPlugin({
			title: 'compiled sass',
			contentImage: path.join(__dirname, 'dev/js/icons/yoshioka_riho.png'),
			alwaysNotify: true
		}),
	],
	performance: { hints: false }
}
];
