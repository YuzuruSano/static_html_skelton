require('babel-register');
import gulp from 'gulp';
import browserSync from 'browser-sync';
/* ===============================================
move bower components
=============================================== */
const components = 'bower_components';
const lib = 'lib';
const override =  new Map([
	[ 'font-awesome', [
			['css','css/*.css'],
			['fonts','fonts/*'],
		]
	],
	[ "lodash",[
			["js", "dist/lodash.min.js"]
		]
	],
	[ "jquery",[
			["js", "dist/jquery.min.js"]
		]
	],
	[ "bxslider-4",[
			['js', "dist/jquery.bxSlider.min.js"],
			["css","dist/jquery.bxslider.css"],
			["css","dist/images/bx_loader.gif"],
			["css","dist/images/controls.png"]
		]
	],
	[ "imagesloaded",[
			[ "js","imagesloaded.pkgd.min.js"]
		]
	],
	[ "jquery.inview",[
			[ "js","jquery.inview.min.js"]
		]
	],
	[ "iscroll",[
			[ "js","build/iscroll.js"]
		]
	],
	[ "slidebars",[
			["css", "dist/slidebars.min.css"],
			["js", "dist/slidebars.min.js"]
		]
	]
]);

gulp.task('bower_copy', function() {
	override.forEach(function (assets, plugin) {
		var plugin = plugin;
		assets.forEach(function(target){
			gulp.src(components + `/${plugin}/${target[1]}`)
			.pipe(gulp.dest(lib + `/${target[0]}/${plugin}/`));
		});
	});
});
/* ===============================================
borwser-sync
=============================================== */
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./",
			index: "index.html"
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

// src 配下の *.html, *.css ファイルが変更されたリロード。
gulp.task('default', ['browser-sync'], function () {
	gulp.watch("*.html", ['bs-reload']);
	gulp.watch("dist/**/*.html", ['bs-reload']);
	gulp.watch("js/*.js", ['bs-reload']);
	gulp.watch("css/**/*.css", ['bs-reload']);
});