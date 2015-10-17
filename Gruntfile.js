var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function(connect, point) {
	return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		copy: {
			dist: {
				files: [{
					　src: ['**/*.css','**/*.js','**/images/**','**/Templates/**','*.html','**/*.html','**/*.php','**/*.cgi','**/*.scss','**/config.rb','!**/node_modules/**','!Gruntfile.js'],
					　dest: "build/",
								dot: false
				}]
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
					'css/style.min.css': ['css/style.css']
				}
			}
		},
		concat: {
			　options: {
				　// 結合したファイルの頭にコメント入れたいとき
				　banner: "/* concat */\n"
			　},
			　dist: {
				　// 出力元 結合対象のファイルを指定する
				　src: [
					　"build/js/base.js",
					　"build/js/fixHeight.js"
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
				contact: ['build/contact','styleguide'],
		},
		connect: {
			options: {
				port: 1234,
				livereload: 35729,
				hostname: 'localhost'
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
				files: ['**/!(_)*.jade', 'css/**/*.css']//コンパイルしたいファイルによって調整
			},
			html:{//jade無いときはコメントアウト
				files: ['**/!(_)*.jade'],
				tasks: ['jade']
			},
			styleguides:{
				files: ['css/**/*.css'],
				tasks: ['styledocco']
			}
		},
		// jade
		jade: {
			options: {
				pretty: true,
				data: grunt.file.readJSON('package.json')
			},
			source: {
				expand: true,
				cwd: 'jade_src',
				src: '**/!(_)*.jade',
				dest: 'dist',
				ext: '.html'
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
	grunt.registerTask('build', ['copy']);
	//ビルドファイルの画像を圧縮
	grunt.registerTask('imgmin', ['imagemin']);
	//jadeコンパイル
	grunt.registerTask('jade_con', ['jade']);
	//bower
	grunt.loadNpmTasks('grunt-bower-task');
};