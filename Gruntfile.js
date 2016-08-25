var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function(connect, point) {
	return connect.static(path.resolve(point));
};

var RE_USE_STRICT_STATEMENT = /(^|\n)[ \t]*'use strict';?\s*/g,
	BANNER_TEMPLATE_STRING  = '/*! <%= pkg.name %> - v<%= pkg.version %> ( <%= grunt.template.today("yyyy-mm-dd") %> ) - <%= pkg.license %> */';
module.exports = function(grunt) {
	// REQUIRE THE OS MODULE
	var os          = require('os');
	var ifaces      = os.networkInterfaces();

	// THIS FUNCTION GETS YOUR LOCAL IP SO WE CAN SERVE THE BUILT SITE FROM IT
	// No more having to keep swapping the IP
	var lookupIpAddress = null;
	for (var dev in ifaces) {
		if(dev != "en1" && dev != "en0") {
			continue;
		}
		ifaces[dev].forEach(function(details){
			if (details.family=='IPv4') {
				lookupIpAddress = details.address;
			}
		});
	}
	var ipAddress   = lookupIpAddress;

	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			dist: {
				files: [{
					src: ['**/*.css','**/*.js','**/images/**','**/Templates/**','*.html','**/*.html','**/*.php','**/*.cgi','**/*.scss','**/config.rb','!bower_components/**', '!build/**','!node_modules/**','!Gruntfile.js'],
					dest: "build/",
					dot: false
				}]
			},
			bower_fix:{
				files: [{
					expand: true,
					cwd: 'lib/css/bxslider-4/',
					src: ['bx_loader.gif','controls.png'],
					dest: "lib/css/bxslider-4/images/"
				},
				{
					expand: true,
					cwd: 'lib/fonts/font-awesome/',
					src: ['*.*'],
					dest: "lib/css/fonts/"
				}
				]
			},
			bower_fix_build:{
				files: [{
					expand: true,
					cwd: 'build/lib/css/bxslider-4/images/',
					src: ['bx_loader.gif','controls.png'],
					dest: "build/css/images/"
				},
				{
					expand: true,
					cwd: 'lib/fonts/font-awesome/',
					src: ['*.*'],
					dest: "build/css/fonts/"
				}
				]
			}
		},
		bower: {
			install: {
				options: {
					targetDir: './lib',
					layout: 'byType',
					install: true,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: false
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'build/css/style.min.css':
					[
					// 環境によって変更
					'lib/css/bxslider-4/*.css',
					'lib/css/font-awesome/*.css',
					'lib/css/jQuery.mmenu/*.css',
					'css/style.css',
					'css/responsive.css'
					]
				}
			}
		},
		concat: {
			options: {
				stripBanners: false,
				banner: [BANNER_TEMPLATE_STRING,'(function(window) {','','',''].join('\n'),
				footer: ['','})(window);'].join('\n')
			},
			dist: {
				// 出力元 結合対象のファイルを指定する
				// 環境によって変更
				src: [
					'lib/js/jquery/*.js',
					'lib/js/bxslider-4/*.js',
					'lib/js/fixheight/*.js',
					'lib/js/imagesloaded/*.js',
					'lib/js/jquery.inview/*.js',
					'lib/js/lodash/*.js',
					'lib/js/iscroll/*.js',
					"js/base.js"
				],
				// 出力先
				dest: "build/js/script.js"
			}
		},
		uglify: {//上記の結合スクリプトをminify
			main: {
				src: "build/js/script.js",
				dest: "build/js/script.min.js"
			}
		},
		imagemin : {//png,jpgを最適化
				dist : {
					files : [
						{
							expand : true,
							cwd    : 'build/',
							src    : ['**/*.{png,jpg}'],
							dest   : 'build/'
						}
					]
				}
		},
		clean: {
			folder: ['build/node_modules','build/build','build/dist','build/jade_src'],
		},
		connect: {
			options: {
				port: 1234,
				livereload: 35729,
				hostname: ipAddress
			},
			livereload: {
				options: {
					open: true,
					base: [__dirname]//バージョンによってはエラー出るのでその時はstring渡し__dirname
				}
			},
		},
		// Watches files for changes and runs tasks based on the changed files
		watch: {
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: ['**/*.jade', 'css/**/*.css']//コンパイルしたいファイルによって調整
			},
			html:{//jade無いときはコメントアウト
				files: ['**/*.jade'],
				tasks: ['jade:normal']
			}
			// ,
			// styleguides:{
			// 	files: ['css/**/*.css'],
			// 	tasks: ['styledocco']
			// }
		},
		// jade
		jade: {
			options: {
				pretty: true
			},
			normal:{
				options:{
					data: function(dest, src) {
						return jade_build_options(dest, src,false);
					}
				},
				files:[{
					expand: true,
					cwd: 'jade_src',
					src: ['**/!(_)*.jade'],
					dest: 'dist',
					ext: '.html'
				}]
			},
			rebuild:{
				options:{
					data: function(dest, src) {
						return jade_build_options(dest, src,true);
					}
				},
				files:[{
					expand: true,
					cwd: 'jade_src',
					src: ['**/!(_)*.jade'],
					dest: 'build',
					ext: '.html'
				}]
			}
		},
		styledocco: {
			dist: {
				options: {
					name: 'Styleguide',
					//include:["js/styledocco/jquery_docco.js","js/styledocco/base_docco.js"],インクルードしたいファイルがあればここへ
					preprocessor: 'scss --compass'
				},
				files: {
					'styleguide': 'sass'
				}
			}
		}
	});

	//jadeのコンパイルオプション
	//is_buildを判定してassetパスの差替
	function jade_build_options(dest, src , is_build) {
		var depth = src[0].split('/').length;
		var page_prefix = '';
		var assets_prefix = '../';
		if(is_build){
			assets_prefix = '';
		}
		var filedepth = depth - 2;
		for(var i = 0;i < filedepth;i++){
			page_prefix += '../';
			assets_prefix += '../';
		}
		return {
			from: src,
			to: dest,
			page_prefix:page_prefix,
			assets_prefix:assets_prefix,
			is_build:is_build
		};
	}

	// package.jsonに設定した各種packageを読み込み
	var taskName;
	for(taskName in pkg.devDependencies) {
		if(taskName.substring(0, 6) == 'grunt-') {
			grunt.loadNpmTasks(taskName);
		}
	}
	//デフォルトタスク
	grunt.registerTask('default', ['connect:livereload','watch']);
	//ビルド時のタスク
	grunt.registerTask('build', ['copy:dist','cssmin','concat','uglify','imagemin','jade:rebuild','styledocco','copy:bower_fix_build','clean']);
	//ビルドファイルの画像を圧縮
	grunt.registerTask('imgmin', ['imagemin']);
	//jadeコンパイル
	grunt.registerTask('jade_con', ['jade']);
	//bower
	grunt.loadNpmTasks('grunt-bower-task');
};