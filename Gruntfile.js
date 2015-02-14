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
        contact: ['build/contact'],
　　　},
    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')];
          }
        }
      }
    },
    regarde: {
      fred: {
        files: ['**/*.html','**/*.css','js/*.js','**/images/**'],
        tasks: ['livereload']
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
  grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
  //ビルド時のタスク
  grunt.registerTask('build', ['copy']);
  //ビルドファイルの画像を圧縮
  grunt.registerTask('imgmin', ['imagemin']);
  //bower
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.registerTask('default', ['bower:install']);
};