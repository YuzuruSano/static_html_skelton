import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import data from 'gulp-data';
import path from 'path';
import changed from 'gulp-changed';
import concat from 'gulp-concat';
import rename from 'gulp-rename';

const DEST = './';

/* ===============================================
move bower components
=============================================== */
const components = 'bower_components';
const lib = 'lib';
/* bower_componentsから移動させたいファイルを記述
----------------------- */
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

gulp.task('bower_copy', () => {
	override.forEach((assets, plugin) => {
		var plugin = plugin;
		assets.forEach((target) => {
			gulp.src(components + `/${plugin}/${target[1]}`)
			.pipe(gulp.dest(lib + `/${target[0]}/${plugin}/`));
		});
	});
});
/* ===============================================
pug
=============================================== */
const pug_build_options = (dest, src , is_build) => {
	let depth = src[0].split('/').length;
	let page_prefix = './';
	let assets_prefix = './';
	if(is_build){
		assets_prefix = '';
	}
	let filedepth = depth - 2;
	for(let i = 0;i < filedepth;i++){
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
};

gulp.task('jade_to_pug', () => {
	gulp.src(['./pug/**/*.jade', './pug/**/_*.jade'])
	.pipe(changed(DEST))
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(rename({extname: '.pug'}))
	.pipe(gulp.dest('tmp'));
});

gulp.task('pug', () => {
	let locals = {};
	gulp.src(['./tmp/**/*.pug', '!./tmp/**/_*.pug'])
	.pipe(changed(DEST))
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(data(function(file) {
		locals = pug_build_options(file.path.replace(/.pug$/, '.html'),file.path);
		return locals;
	}))
	.pipe(pug({
		locals: locals,
		pretty: true
	}))
	.pipe(gulp.dest("./"));
});
/* ===============================================
borwser-sync
=============================================== */
gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: "./",
			index: "index.html"
		}
	});
	//ファイルの監視
	//以下のファイルが変わったらリロードする
	gulp.watch("*.html", ['bs-reload']);
	gulp.watch("dist/**/*.html", ['bs-reload']);
	gulp.watch("js/*.js", ['bs-reload']);
	gulp.watch("css/**/*.css", ['bs-reload']);
});

gulp.task('bs-reload', () => {
	browserSync.reload();
});
/* ===============================================
watch
=============================================== */
gulp.task('watch', () => {
	gulp.watch(['./pug/**/*.jade', '!./pug/**/_*.jade'], () => {
		gulp.start(['jade_to_pug']);
	});
	gulp.watch(['./tmp/**/*.pug', '!./pug/**/_*.pug'], () => {
		gulp.start(['pug']);
	});
});
gulp.task('default', ['browser-sync', 'pug', 'watch']);
